import {
    createSmartAccountClient,
    ENTRYPOINT_ADDRESS_V06,
    SmartAccountClient,
    walletClientToSmartAccountSigner,
} from "permissionless";
import {
    signerToBiconomySmartAccount,
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
              entryPoint: ENTRYPOINT_ADDRESS_V06,
          })
        : undefined;

    // create bundler client
    const pimlicoBundlerClient = createPimlicoBundlerClient({
        transport: http(bundlerUrl),
        entryPoint: ENTRYPOINT_ADDRESS_V06,
    });

    type SA = SmartAccount<"0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789">;
    type SAC = SmartAccountClient<
        "0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789",
        TTransport,
        TChain,
        SA
    >;

    const [smartAccountClient, setSmartAccountClient] = useState<SAC>();

    const createClient = async () => {
        if (walletClient !== undefined) {
            const signer = walletClientToSmartAccountSigner(walletClient);
            const account = await signerToBiconomySmartAccount(publicClient, {
                entryPoint: ENTRYPOINT_ADDRESS_V06,
                signer: signer,
            });
            const smartAccountClient: SAC = createSmartAccountClient({
                account,
                entryPoint: ENTRYPOINT_ADDRESS_V06,
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
