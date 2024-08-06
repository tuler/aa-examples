import { http, cookieStorage, createConfig, createStorage } from "wagmi";
import { foundry } from "wagmi/chains";
import { coinbaseWallet, injected } from "wagmi/connectors";

export function getConfig() {
    return createConfig({
        chains: [foundry],
        connectors: [injected(), coinbaseWallet()],
        storage: createStorage({
            storage: cookieStorage,
        }),
        ssr: true,
        transports: {
            [foundry.id]: http(),
        },
    });
}

declare module "wagmi" {
    interface Register {
        config: ReturnType<typeof getConfig>;
    }
}
