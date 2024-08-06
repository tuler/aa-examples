import { Address, Hash, Hex } from "viem";
import { useSmartAccountClient } from "./biconomy";
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
        if (smartAccountClient) {
            setWrite(() => async () => {
                const hash = await smartAccountClient.writeContract({
                    abi: inputBoxAbi,
                    address: inputBoxAddress,
                    chain: smartAccountClient.chain,
                    functionName: "addInput",
                    args: options.args,
                });
                setHash(hash);
                return hash;
            });
        }
    }, [smartAccountClient]);
    return { hash, smartAccountClient, write };
};
