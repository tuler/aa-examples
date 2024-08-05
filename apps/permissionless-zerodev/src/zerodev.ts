import {
    createSmartAccountClient,
    ENTRYPOINT_ADDRESS_V07,
    SmartAccountClient,
    walletClientToSmartAccountSigner,
} from "permissionless";
import {
    signerToEcdsaKernelSmartAccount,
    SmartAccount,
} from "permissionless/accounts";
import {
    createPimlicoBundlerClient,
    createPimlicoPaymasterClient,
} from "permissionless/clients/pimlico";
import { EntryPoint } from "permissionless/types";
import { useEffect, useState } from "react";
import { Chain, Transport } from "viem";
import { http, usePublicClient, useWalletClient } from "wagmi";

export type SmartAccountClientOptions = {
    bundlerUrl: string;
    paymasterUrl?: string;
};

export const useSmartAccountClient = <
    TSmartAccount extends SmartAccount<TEntryPoint> | undefined,
    TTransport extends Transport = Transport,
    TChain extends Chain | undefined = undefined,
    TEntryPoint extends EntryPoint = TSmartAccount extends SmartAccount<infer U>
        ? U
        : never,
>(
    options: SmartAccountClientOptions,
) => {
    const { bundlerUrl, paymasterUrl } = options;
    const publicClient = usePublicClient();
    const { data: walletClient } = useWalletClient();

    // create paymaster client
    const paymasterClient = paymasterUrl
        ? createPimlicoPaymasterClient({
              transport: http(paymasterUrl),
              entryPoint: ENTRYPOINT_ADDRESS_V07,
          })
        : undefined;

    // create bundler client
    const pimlicoBundlerClient = createPimlicoBundlerClient({
        transport: http(bundlerUrl),
        entryPoint: ENTRYPOINT_ADDRESS_V07,
    });

    type SA = SmartAccount<"0x0000000071727De22E5E9d8BAf0edAc6f37da032">;
    type SAC = SmartAccountClient<
        "0x0000000071727De22E5E9d8BAf0edAc6f37da032",
        TTransport,
        TChain,
        SA
    >;

    const [smartAccountClient, setSmartAccountClient] = useState<SAC>();

    const createClient = async () => {
        if (walletClient !== undefined) {
            const signer = walletClientToSmartAccountSigner(walletClient);
            const kernelAccount = await signerToEcdsaKernelSmartAccount(
                publicClient,
                {
                    entryPoint: ENTRYPOINT_ADDRESS_V07,
                    signer,
                },
            );
            const smartAccountClient: SAC = createSmartAccountClient({
                account: kernelAccount,
                entryPoint: ENTRYPOINT_ADDRESS_V07,
                bundlerTransport: http(bundlerUrl),
                middleware: {
                    sponsorUserOperation: paymasterClient?.sponsorUserOperation, // optional
                    gasPrice: async () =>
                        (await pimlicoBundlerClient.getUserOperationGasPrice())
                            .fast, // use pimlico bundler to get gas prices
                },
            });
            return smartAccountClient;
        }
    };

    useEffect(() => {
        if (walletClient !== undefined) {
            createClient().then(setSmartAccountClient);
        }
    }, [paymasterClient, pimlicoBundlerClient, walletClient]);

    return {
        paymasterClient,
        pimlicoBundlerClient,
        smartAccountClient,
    };
};
