import { Address, encodeFunctionData, Hash, Hex } from "viem";
import { useSmartAccountClient } from "./alchemy";
import { useEffect, useState } from "react";
import { inputBoxAbi, inputBoxAddress } from "./rollups";

export type InputBoxAddInputOptions = {
    bundlerUrl: string;
    paymasterUrl?: string;
    args: readonly [Address, Hex];
};

export const useInputBoxAddInput = (options: InputBoxAddInputOptions) => {
    const { smartAccountClient } = useSmartAccountClient(options);
    const [hash, setHash] = useState<Hash>();
    const [write, setWrite] = useState<() => void>();

    useEffect(() => {
        if (smartAccountClient && smartAccountClient.account) {
            setWrite(() => async () => {
                const uo = await smartAccountClient.sendUserOperation({
                    account: smartAccountClient.account!,
                    uo: {
                        target: inputBoxAddress,
                        data: encodeFunctionData({
                            abi: inputBoxAbi,
                            functionName: "addInput",
                            args: options.args,
                        }),
                    },
                });
                const hash =
                    await smartAccountClient.waitForUserOperationTransaction(
                        uo,
                    );
                setHash(hash);
                return hash;
            });
        }
    }, [smartAccountClient]);
    return { hash, smartAccountClient, write };
};
