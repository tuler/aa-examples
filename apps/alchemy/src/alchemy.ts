import { createLightAccount } from "@alchemy/aa-accounts";
import {
    createSmartAccountClient,
    SmartAccountClient,
    split,
    WalletClientSigner,
} from "@alchemy/aa-core";
import { ENTRYPOINT_ADDRESS_V06, ENTRYPOINT_ADDRESS_V07 } from "permissionless";
import { createPimlicoPaymasterClient } from "permissionless/clients/pimlico";
import { useEffect, useState } from "react";
import { Chain, concat, Transport, zeroHash } from "viem";
import { foundry } from "viem/chains";
import { http, usePublicClient, useWalletClient } from "wagmi";

export type SmartAccountClientOptions = {
    bundlerUrl: string;
    paymasterUrl?: string;
};

export const useSmartAccountClient = <
    TTransport extends Transport = Transport,
    TChain extends Chain | undefined = undefined,
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

    const bundlerMethods = [
        "eth_sendUserOperation",
        "eth_estimateUserOperationGas",
        "eth_getUserOperationReceipt",
        "eth_getUserOperationByHash",
        "eth_supportedEntryPoints",
    ];

    const splitTransport = split({
        overrides: [
            {
                methods: bundlerMethods,
                transport: http(bundlerUrl),
            },
        ],
        fallback: http(publicClient.transport.url),
    });

    const [smartAccountClient, setSmartAccountClient] =
        useState<SmartAccountClient>();

    const createClient = async () => {
        if (walletClient !== undefined) {
            const signer = new WalletClientSigner(walletClient, "json-rpc");

            const account = await createLightAccount({
                chain: foundry,
                signer,
                factoryAddress: "0x00004EC70002a32400f8ae005A26081065620D20", // CLI only supports LightAccount 1.1.0 for now
                transport: http(publicClient.transport.url),
            });

            const paymaster = "0x28ec0633192d0cBd9E1156CE05D5FdACAcB93947";
            const paymasterData =
                "0x00000000000000000000000000000000000000000000000000000101010101010000000000000000000000000000000000000000000000000000000000000000cd91f19f0f19ce862d7bec7b7d9b95457145afc6f639c28fd0360f488937bfa41e6eedcd3a46054fd95fcd0e3ef6b0bc0a615c4d975eef55c8a3517257904d5b1c";
            const smartAccountClient = createSmartAccountClient({
                account,
                chain: foundry,
                transport: splitTransport,
                paymasterAndData: paymasterClient
                    ? {
                          dummyPaymasterAndData: () =>
                              concat([paymaster, paymasterData]),
                          paymasterAndData: async (userOperation, options) => {
                              const callData = await userOperation.callData;
                              const nonce = await userOperation.nonce;
                              // @ts-ignore
                              const initCode = await userOperation.initCode;
                              const { paymasterAndData } =
                                  await paymasterClient.sponsorUserOperation({
                                      userOperation: {
                                          ...userOperation,
                                          callData,
                                          nonce,
                                          initCode,
                                      },
                                  });
                              return {
                                  ...userOperation,
                                  paymasterAndData,
                              };
                          },
                      }
                    : undefined,
            });
            return smartAccountClient;
        }
    };

    useEffect(() => {
        if (walletClient !== undefined) {
            createClient().then(setSmartAccountClient);
        }
    }, [walletClient, options.bundlerUrl, options.paymasterUrl]);

    return {
        smartAccountClient,
    };
};
