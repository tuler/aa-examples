//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// AuthorityFactory
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const authorityFactoryAbi = [
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: 'authorityOwner',
                internalType: 'address',
                type: 'address',
                indexed: false,
            },
            {
                name: 'authority',
                internalType: 'contract Authority',
                type: 'address',
                indexed: false,
            },
        ],
        name: 'AuthorityCreated',
    },
    {
        type: 'function',
        inputs: [
            {
                name: '_authorityOwner',
                internalType: 'address',
                type: 'address',
            },
            { name: '_salt', internalType: 'bytes32', type: 'bytes32' },
        ],
        name: 'calculateAuthorityAddress',
        outputs: [{ name: '', internalType: 'address', type: 'address' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            {
                name: '_authorityOwner',
                internalType: 'address',
                type: 'address',
            },
            { name: '_salt', internalType: 'bytes32', type: 'bytes32' },
        ],
        name: 'newAuthority',
        outputs: [
            { name: '', internalType: 'contract Authority', type: 'address' },
        ],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            {
                name: '_authorityOwner',
                internalType: 'address',
                type: 'address',
            },
        ],
        name: 'newAuthority',
        outputs: [
            { name: '', internalType: 'contract Authority', type: 'address' },
        ],
        stateMutability: 'nonpayable',
    },
] as const

export const authorityFactoryAddress =
    '0xf26a5b278C25D8D41A136d22Ad719EACEd9c3e63' as const

export const authorityFactoryConfig = {
    address: authorityFactoryAddress,
    abi: authorityFactoryAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// AuthorityHistoryPairFactory
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const authorityHistoryPairFactoryAbi = [
    {
        type: 'constructor',
        inputs: [
            {
                name: '_authorityFactory',
                internalType: 'contract IAuthorityFactory',
                type: 'address',
            },
            {
                name: '_historyFactory',
                internalType: 'contract IHistoryFactory',
                type: 'address',
            },
        ],
        stateMutability: 'nonpayable',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: 'authorityFactory',
                internalType: 'contract IAuthorityFactory',
                type: 'address',
                indexed: false,
            },
            {
                name: 'historyFactory',
                internalType: 'contract IHistoryFactory',
                type: 'address',
                indexed: false,
            },
        ],
        name: 'AuthorityHistoryPairFactoryCreated',
    },
    {
        type: 'function',
        inputs: [
            {
                name: '_authorityOwner',
                internalType: 'address',
                type: 'address',
            },
            { name: '_salt', internalType: 'bytes32', type: 'bytes32' },
        ],
        name: 'calculateAuthorityHistoryAddressPair',
        outputs: [
            {
                name: 'authorityAddress_',
                internalType: 'address',
                type: 'address',
            },
            {
                name: 'historyAddress_',
                internalType: 'address',
                type: 'address',
            },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'getAuthorityFactory',
        outputs: [
            {
                name: '',
                internalType: 'contract IAuthorityFactory',
                type: 'address',
            },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'getHistoryFactory',
        outputs: [
            {
                name: '',
                internalType: 'contract IHistoryFactory',
                type: 'address',
            },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            {
                name: '_authorityOwner',
                internalType: 'address',
                type: 'address',
            },
        ],
        name: 'newAuthorityHistoryPair',
        outputs: [
            {
                name: 'authority_',
                internalType: 'contract Authority',
                type: 'address',
            },
            {
                name: 'history_',
                internalType: 'contract History',
                type: 'address',
            },
        ],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            {
                name: '_authorityOwner',
                internalType: 'address',
                type: 'address',
            },
            { name: '_salt', internalType: 'bytes32', type: 'bytes32' },
        ],
        name: 'newAuthorityHistoryPair',
        outputs: [
            {
                name: 'authority_',
                internalType: 'contract Authority',
                type: 'address',
            },
            {
                name: 'history_',
                internalType: 'contract History',
                type: 'address',
            },
        ],
        stateMutability: 'nonpayable',
    },
] as const

export const authorityHistoryPairFactoryAddress =
    '0x3890A047Cf9Af60731E80B2105362BbDCD70142D' as const

export const authorityHistoryPairFactoryConfig = {
    address: authorityHistoryPairFactoryAddress,
    abi: authorityHistoryPairFactoryAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Bitmask
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const bitmaskAbi = [] as const

export const bitmaskAddress =
    '0xF5B2d8c81cDE4D6238bBf20D3D77DB37df13f735' as const

export const bitmaskConfig = {
    address: bitmaskAddress,
    abi: bitmaskAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// CartesiDAppFactory
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const cartesiDAppFactoryAbi = [
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: 'consensus',
                internalType: 'contract IConsensus',
                type: 'address',
                indexed: true,
            },
            {
                name: 'dappOwner',
                internalType: 'address',
                type: 'address',
                indexed: false,
            },
            {
                name: 'templateHash',
                internalType: 'bytes32',
                type: 'bytes32',
                indexed: false,
            },
            {
                name: 'application',
                internalType: 'contract CartesiDApp',
                type: 'address',
                indexed: false,
            },
        ],
        name: 'ApplicationCreated',
    },
    {
        type: 'function',
        inputs: [
            {
                name: '_consensus',
                internalType: 'contract IConsensus',
                type: 'address',
            },
            { name: '_dappOwner', internalType: 'address', type: 'address' },
            { name: '_templateHash', internalType: 'bytes32', type: 'bytes32' },
            { name: '_salt', internalType: 'bytes32', type: 'bytes32' },
        ],
        name: 'calculateApplicationAddress',
        outputs: [{ name: '', internalType: 'address', type: 'address' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            {
                name: '_consensus',
                internalType: 'contract IConsensus',
                type: 'address',
            },
            { name: '_dappOwner', internalType: 'address', type: 'address' },
            { name: '_templateHash', internalType: 'bytes32', type: 'bytes32' },
            { name: '_salt', internalType: 'bytes32', type: 'bytes32' },
        ],
        name: 'newApplication',
        outputs: [
            { name: '', internalType: 'contract CartesiDApp', type: 'address' },
        ],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            {
                name: '_consensus',
                internalType: 'contract IConsensus',
                type: 'address',
            },
            { name: '_dappOwner', internalType: 'address', type: 'address' },
            { name: '_templateHash', internalType: 'bytes32', type: 'bytes32' },
        ],
        name: 'newApplication',
        outputs: [
            { name: '', internalType: 'contract CartesiDApp', type: 'address' },
        ],
        stateMutability: 'nonpayable',
    },
] as const

export const cartesiDAppFactoryAddress =
    '0x7122cd1221C20892234186facfE8615e6743Ab02' as const

export const cartesiDAppFactoryConfig = {
    address: cartesiDAppFactoryAddress,
    abi: cartesiDAppFactoryAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// CartesiMathV2
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const cartesiMathV2Abi = [
    {
        type: 'function',
        inputs: [{ name: '_num', internalType: 'uint256', type: 'uint256' }],
        name: 'clz',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'pure',
    },
    {
        type: 'function',
        inputs: [{ name: '_num', internalType: 'uint256', type: 'uint256' }],
        name: 'ctz',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'pure',
    },
    {
        type: 'function',
        inputs: [{ name: '_num', internalType: 'uint256', type: 'uint256' }],
        name: 'getLog2Floor',
        outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
        stateMutability: 'pure',
    },
    {
        type: 'function',
        inputs: [{ name: '_num', internalType: 'uint256', type: 'uint256' }],
        name: 'getLog2TableTimes1M',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'pure',
    },
    {
        type: 'function',
        inputs: [{ name: '_num', internalType: 'uint256', type: 'uint256' }],
        name: 'isPowerOf2',
        outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
        stateMutability: 'pure',
    },
    {
        type: 'function',
        inputs: [{ name: '_num', internalType: 'uint256', type: 'uint256' }],
        name: 'log2ApproxTimes1M',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'pure',
    },
] as const

export const cartesiMathV2Address =
    '0xB634F716BEd5Dd5A2b9a91C92474C499e50Cb27D' as const

export const cartesiMathV2Config = {
    address: cartesiMathV2Address,
    abi: cartesiMathV2Abi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// DAppAddressRelay
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const dAppAddressRelayAbi = [
    {
        type: 'constructor',
        inputs: [
            {
                name: '_inputBox',
                internalType: 'contract IInputBox',
                type: 'address',
            },
        ],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [],
        name: 'getInputBox',
        outputs: [
            { name: '', internalType: 'contract IInputBox', type: 'address' },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [{ name: '_dapp', internalType: 'address', type: 'address' }],
        name: 'relayDAppAddress',
        outputs: [],
        stateMutability: 'nonpayable',
    },
] as const

export const dAppAddressRelayAddress =
    '0xF5DE34d6BbC0446E2a45719E718efEbaaE179daE' as const

export const dAppAddressRelayConfig = {
    address: dAppAddressRelayAddress,
    abi: dAppAddressRelayAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC1155BatchPortal
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc1155BatchPortalAbi = [
    {
        type: 'constructor',
        inputs: [
            {
                name: '_inputBox',
                internalType: 'contract IInputBox',
                type: 'address',
            },
        ],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            {
                name: '_token',
                internalType: 'contract IERC1155',
                type: 'address',
            },
            { name: '_dapp', internalType: 'address', type: 'address' },
            { name: '_tokenIds', internalType: 'uint256[]', type: 'uint256[]' },
            { name: '_values', internalType: 'uint256[]', type: 'uint256[]' },
            { name: '_baseLayerData', internalType: 'bytes', type: 'bytes' },
            { name: '_execLayerData', internalType: 'bytes', type: 'bytes' },
        ],
        name: 'depositBatchERC1155Token',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [],
        name: 'getInputBox',
        outputs: [
            { name: '', internalType: 'contract IInputBox', type: 'address' },
        ],
        stateMutability: 'view',
    },
] as const

export const erc1155BatchPortalAddress =
    '0xedB53860A6B52bbb7561Ad596416ee9965B055Aa' as const

export const erc1155BatchPortalConfig = {
    address: erc1155BatchPortalAddress,
    abi: erc1155BatchPortalAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC1155SinglePortal
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc1155SinglePortalAbi = [
    {
        type: 'constructor',
        inputs: [
            {
                name: '_inputBox',
                internalType: 'contract IInputBox',
                type: 'address',
            },
        ],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            {
                name: '_token',
                internalType: 'contract IERC1155',
                type: 'address',
            },
            { name: '_dapp', internalType: 'address', type: 'address' },
            { name: '_tokenId', internalType: 'uint256', type: 'uint256' },
            { name: '_value', internalType: 'uint256', type: 'uint256' },
            { name: '_baseLayerData', internalType: 'bytes', type: 'bytes' },
            { name: '_execLayerData', internalType: 'bytes', type: 'bytes' },
        ],
        name: 'depositSingleERC1155Token',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [],
        name: 'getInputBox',
        outputs: [
            { name: '', internalType: 'contract IInputBox', type: 'address' },
        ],
        stateMutability: 'view',
    },
] as const

export const erc1155SinglePortalAddress =
    '0x7CFB0193Ca87eB6e48056885E026552c3A941FC4' as const

export const erc1155SinglePortalConfig = {
    address: erc1155SinglePortalAddress,
    abi: erc1155SinglePortalAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC20Portal
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc20PortalAbi = [
    {
        type: 'constructor',
        inputs: [
            {
                name: '_inputBox',
                internalType: 'contract IInputBox',
                type: 'address',
            },
        ],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            {
                name: '_token',
                internalType: 'contract IERC20',
                type: 'address',
            },
            { name: '_dapp', internalType: 'address', type: 'address' },
            { name: '_amount', internalType: 'uint256', type: 'uint256' },
            { name: '_execLayerData', internalType: 'bytes', type: 'bytes' },
        ],
        name: 'depositERC20Tokens',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [],
        name: 'getInputBox',
        outputs: [
            { name: '', internalType: 'contract IInputBox', type: 'address' },
        ],
        stateMutability: 'view',
    },
] as const

export const erc20PortalAddress =
    '0x9C21AEb2093C32DDbC53eEF24B873BDCd1aDa1DB' as const

export const erc20PortalConfig = {
    address: erc20PortalAddress,
    abi: erc20PortalAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC721Portal
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc721PortalAbi = [
    {
        type: 'constructor',
        inputs: [
            {
                name: '_inputBox',
                internalType: 'contract IInputBox',
                type: 'address',
            },
        ],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            {
                name: '_token',
                internalType: 'contract IERC721',
                type: 'address',
            },
            { name: '_dapp', internalType: 'address', type: 'address' },
            { name: '_tokenId', internalType: 'uint256', type: 'uint256' },
            { name: '_baseLayerData', internalType: 'bytes', type: 'bytes' },
            { name: '_execLayerData', internalType: 'bytes', type: 'bytes' },
        ],
        name: 'depositERC721Token',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [],
        name: 'getInputBox',
        outputs: [
            { name: '', internalType: 'contract IInputBox', type: 'address' },
        ],
        stateMutability: 'view',
    },
] as const

export const erc721PortalAddress =
    '0x237F8DD094C0e47f4236f12b4Fa01d6Dae89fb87' as const

export const erc721PortalConfig = {
    address: erc721PortalAddress,
    abi: erc721PortalAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// EtherPortal
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const etherPortalAbi = [
    {
        type: 'constructor',
        inputs: [
            {
                name: '_inputBox',
                internalType: 'contract IInputBox',
                type: 'address',
            },
        ],
        stateMutability: 'nonpayable',
    },
    { type: 'error', inputs: [], name: 'EtherTransferFailed' },
    {
        type: 'function',
        inputs: [
            { name: '_dapp', internalType: 'address', type: 'address' },
            { name: '_execLayerData', internalType: 'bytes', type: 'bytes' },
        ],
        name: 'depositEther',
        outputs: [],
        stateMutability: 'payable',
    },
    {
        type: 'function',
        inputs: [],
        name: 'getInputBox',
        outputs: [
            { name: '', internalType: 'contract IInputBox', type: 'address' },
        ],
        stateMutability: 'view',
    },
] as const

export const etherPortalAddress =
    '0xFfdbe43d4c855BF7e0f105c400A50857f53AB044' as const

export const etherPortalConfig = {
    address: etherPortalAddress,
    abi: etherPortalAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// HistoryFactory
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const historyFactoryAbi = [
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: 'historyOwner',
                internalType: 'address',
                type: 'address',
                indexed: false,
            },
            {
                name: 'history',
                internalType: 'contract History',
                type: 'address',
                indexed: false,
            },
        ],
        name: 'HistoryCreated',
    },
    {
        type: 'function',
        inputs: [
            { name: '_historyOwner', internalType: 'address', type: 'address' },
            { name: '_salt', internalType: 'bytes32', type: 'bytes32' },
        ],
        name: 'calculateHistoryAddress',
        outputs: [{ name: '', internalType: 'address', type: 'address' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '_historyOwner', internalType: 'address', type: 'address' },
            { name: '_salt', internalType: 'bytes32', type: 'bytes32' },
        ],
        name: 'newHistory',
        outputs: [
            { name: '', internalType: 'contract History', type: 'address' },
        ],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_historyOwner', internalType: 'address', type: 'address' },
        ],
        name: 'newHistory',
        outputs: [
            { name: '', internalType: 'contract History', type: 'address' },
        ],
        stateMutability: 'nonpayable',
    },
] as const

export const historyFactoryAddress =
    '0x1f158b5320BBf677FdA89F9a438df99BbE560A26' as const

export const historyFactoryConfig = {
    address: historyFactoryAddress,
    abi: historyFactoryAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// InputBox
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const inputBoxAbi = [
    { type: 'error', inputs: [], name: 'InputSizeExceedsLimit' },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: 'dapp',
                internalType: 'address',
                type: 'address',
                indexed: true,
            },
            {
                name: 'inputIndex',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: 'sender',
                internalType: 'address',
                type: 'address',
                indexed: false,
            },
            {
                name: 'input',
                internalType: 'bytes',
                type: 'bytes',
                indexed: false,
            },
        ],
        name: 'InputAdded',
    },
    {
        type: 'function',
        inputs: [
            { name: '_dapp', internalType: 'address', type: 'address' },
            { name: '_input', internalType: 'bytes', type: 'bytes' },
        ],
        name: 'addInput',
        outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '_dapp', internalType: 'address', type: 'address' },
            { name: '_index', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'getInputHash',
        outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [{ name: '_dapp', internalType: 'address', type: 'address' }],
        name: 'getNumberOfInputs',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
] as const

export const inputBoxAddress =
    '0x59b22D57D4f067708AB0c00552767405926dc768' as const

export const inputBoxConfig = {
    address: inputBoxAddress,
    abi: inputBoxAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// MerkleV2
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const merkleV2Abi = [
    {
        type: 'function',
        inputs: [
            { name: 'hashes', internalType: 'bytes32[]', type: 'bytes32[]' },
        ],
        name: 'calculateRootFromPowerOfTwo',
        outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
        stateMutability: 'pure',
    },
    {
        type: 'function',
        inputs: [{ name: '_index', internalType: 'uint256', type: 'uint256' }],
        name: 'getEmptyTreeHashAtIndex',
        outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
        stateMutability: 'pure',
    },
    {
        type: 'function',
        inputs: [
            { name: '_data', internalType: 'bytes', type: 'bytes' },
            { name: '_wordIndex', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'getHashOfWordAtIndex',
        outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
        stateMutability: 'pure',
    },
    {
        type: 'function',
        inputs: [
            { name: '_data', internalType: 'bytes', type: 'bytes' },
            { name: '_log2Size', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'getMerkleRootFromBytes',
        outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
        stateMutability: 'pure',
    },
    {
        type: 'function',
        inputs: [
            { name: '_position', internalType: 'uint256', type: 'uint256' },
            {
                name: '_logSizeOfReplacement',
                internalType: 'uint256',
                type: 'uint256',
            },
            {
                name: '_logSizeOfFullDrive',
                internalType: 'uint256',
                type: 'uint256',
            },
            { name: '_replacement', internalType: 'bytes32', type: 'bytes32' },
            { name: 'siblings', internalType: 'bytes32[]', type: 'bytes32[]' },
        ],
        name: 'getRootAfterReplacementInDrive',
        outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
        stateMutability: 'pure',
    },
] as const

export const merkleV2Address =
    '0x33436035441927Df1a73FE3AAC5906854632e53d' as const

export const merkleV2Config = {
    address: merkleV2Address,
    abi: merkleV2Abi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// SelfHostedApplicationFactory
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const selfHostedApplicationFactoryAbi = [
    {
        type: 'constructor',
        inputs: [
            {
                name: '_authorityHistoryPairFactory',
                internalType: 'contract IAuthorityHistoryPairFactory',
                type: 'address',
            },
            {
                name: '_applicationFactory',
                internalType: 'contract ICartesiDAppFactory',
                type: 'address',
            },
        ],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            {
                name: '_authorityOwner',
                internalType: 'address',
                type: 'address',
            },
            { name: '_dappOwner', internalType: 'address', type: 'address' },
            { name: '_templateHash', internalType: 'bytes32', type: 'bytes32' },
            { name: '_salt', internalType: 'bytes32', type: 'bytes32' },
        ],
        name: 'calculateAddresses',
        outputs: [
            { name: 'application_', internalType: 'address', type: 'address' },
            { name: 'authority_', internalType: 'address', type: 'address' },
            { name: 'history_', internalType: 'address', type: 'address' },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            {
                name: '_authorityOwner',
                internalType: 'address',
                type: 'address',
            },
            { name: '_dappOwner', internalType: 'address', type: 'address' },
            { name: '_templateHash', internalType: 'bytes32', type: 'bytes32' },
            { name: '_salt', internalType: 'bytes32', type: 'bytes32' },
        ],
        name: 'deployContracts',
        outputs: [
            {
                name: 'application_',
                internalType: 'contract CartesiDApp',
                type: 'address',
            },
            {
                name: 'authority_',
                internalType: 'contract Authority',
                type: 'address',
            },
            {
                name: 'history_',
                internalType: 'contract History',
                type: 'address',
            },
        ],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [],
        name: 'getApplicationFactory',
        outputs: [
            {
                name: '',
                internalType: 'contract ICartesiDAppFactory',
                type: 'address',
            },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'getAuthorityHistoryPairFactory',
        outputs: [
            {
                name: '',
                internalType: 'contract IAuthorityHistoryPairFactory',
                type: 'address',
            },
        ],
        stateMutability: 'view',
    },
] as const

export const selfHostedApplicationFactoryAddress =
    '0x9E32e06Fd23675b2DF8eA8e6b0A25c3DF6a60AbC' as const

export const selfHostedApplicationFactoryConfig = {
    address: selfHostedApplicationFactoryAddress,
    abi: selfHostedApplicationFactoryAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// UnrolledCordic
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const unrolledCordicAbi = [
    {
        type: 'function',
        inputs: [{ name: 'val', internalType: 'uint256', type: 'uint256' }],
        name: 'log2Times1e18',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'pure',
    },
] as const

export const unrolledCordicAddress =
    '0x3F8FdcD1B0F421D817BF58C96b7C91B98100B450' as const

export const unrolledCordicConfig = {
    address: unrolledCordicAddress,
    abi: unrolledCordicAbi,
} as const
