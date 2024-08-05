"use client";

import { useEffect, useState } from "react";
import { formatUnits, isHex, stringToHex } from "viem";
import {
    useAccount,
    useBalance,
    useBlockNumber,
    useConnect,
    useDisconnect,
} from "wagmi";
import { useInputBoxAddInput } from "@/cartesi";
import { useQueryClient } from "@tanstack/react-query";

function App() {
    const account = useAccount();
    const { connectors, connect, status, error } = useConnect();
    const queryClient = useQueryClient();
    const { disconnect } = useDisconnect();
    const { data: blockNumber } = useBlockNumber({ watch: true });

    const [bundlerUrl, setBundlerUrl] = useState<string>(
        "http://localhost:8080/bundler/rpc",
    );
    const [paymasterUrl, setPaymasterUrl] = useState<string>(
        "http://localhost:8080/paymaster/",
    );
    const [usePaymaster, setUsePaymaster] = useState<boolean>(true);

    const [payload, setPayload] = useState<string>("hello");

    // transaction through hook
    const { hash, smartAccountClient, write } = useInputBoxAddInput({
        bundlerUrl,
        paymasterUrl: usePaymaster ? paymasterUrl : undefined,
        args: [
            "0xab7528bb862fb57e8a2bcd567a2e929a0be56a5e",
            isHex(payload) ? payload : stringToHex(payload),
        ],
    });

    const { data: balance, queryKey } = useBalance({
        address: smartAccountClient?.account.address,
        query: { enabled: !!smartAccountClient },
    });

    useEffect(() => {
        queryClient.invalidateQueries({ queryKey });
    }, [blockNumber, queryClient]);

    return (
        <>
            <div>
                <h2>Account (Signer)</h2>

                <div>
                    status: {account.status}
                    <br />
                    addresses: {JSON.stringify(account.addresses)}
                    <br />
                    chainId: {account.chainId}
                    <br />
                    blockNumber: {blockNumber?.toString()}
                </div>

                {account.status === "connected" && (
                    <button type="button" onClick={() => disconnect()}>
                        Disconnect
                    </button>
                )}
            </div>

            <div>
                <h2>Connect</h2>
                {connectors.map((connector) => (
                    <button
                        key={connector.uid}
                        onClick={() => connect({ connector })}
                        type="button"
                    >
                        {connector.name}
                    </button>
                ))}
                <div>{status}</div>
                <div>{error?.message}</div>
            </div>

            <div>
                <h2>Account Abstraction</h2>
                <div>
                    Bundler URL:
                    <input
                        value={bundlerUrl}
                        size={50}
                        onChange={(e) => setBundlerUrl(e.target.value)}
                    />
                </div>
                <div>
                    Paymaster URL:
                    <input
                        value={paymasterUrl}
                        size={50}
                        onChange={(e) => setPaymasterUrl(e.target.value)}
                    />
                </div>
                <div>
                    Smart Account Address:
                    <text>{smartAccountClient?.account.address}</text>
                </div>
                <div>
                    Smart Account Balance:
                    {balance && (
                        <text>
                            {formatUnits(balance.value, balance.decimals)}{" "}
                            {balance.symbol}
                        </text>
                    )}
                </div>
            </div>

            <div>
                <h2>Transaction</h2>
                <div>
                    payload:
                    <input
                        value={payload}
                        onChange={(e) => setPayload(e.target.value)}
                    />
                </div>
                <input
                    type="checkbox"
                    id="usePaymaster"
                    checked={usePaymaster}
                    onChange={() => setUsePaymaster(!usePaymaster)}
                />
                <label htmlFor="usePaymaster">Use Paymaster</label>
                <br />
                <button onClick={() => write?.()} disabled={!write}>
                    Send Input
                </button>
                <text>{hash}</text>
            </div>
        </>
    );
}

export default App;
