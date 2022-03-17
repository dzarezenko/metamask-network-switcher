const NETWORKS = {
  ARBITRUM_MAINNET: {
    chainId: `0x${(42161).toString(16)}`,
    chainName: "Arbitrum One",
    nativeCurrency: {
      name: 'Arbitrum ETH',
      symbol: 'AETH',
      decimals: 18
    },
    rpcUrls: ["https://arb1.arbitrum.io/rpc"],
    blockExplorerUrls: ['https://arbiscan.io']
  },
  AURORA_MAINNET: {
    chainId: `0x${(1313161554).toString(16)}`,
    chainName: "Aurora Mainnet",
    nativeCurrency: {
      name: 'Aurora ETH',
      symbol: 'ETH',
      decimals: 18
    },
    rpcUrls: ["https://mainnet.aurora.dev"],
    blockExplorerUrls: ['https://explorer.mainnet.aurora.dev/']
  },
  AVALANCHE_MAINNET: {
    chainId: `0x${(43114).toString(16)}`,
    chainName: "Avalanche Mainnet C-Chain",
    nativeCurrency: {
      name: 'Avalanche',
      symbol: 'AVAX',
      decimals: 18
    },
    rpcUrls: ["https://api.avax.network/ext/bc/C/rpc"],
    blockExplorerUrls: ['https://snowtrace.io/']
  },
  BSC_MAINNET: {
    chainId: `0x${(56).toString(16)}`,
    chainName: "Binance Smart Chain",
    nativeCurrency: {
      name: 'BNB',
      symbol: 'BNB',
      decimals: 18
    },
    rpcUrls: [
      "https://bsc-dataseed.binance.org/",
      "https://bsc-dataseed1.defibit.io/",
      "https://bsc-dataseed1.ninicoin.io/"
    ],
    blockExplorerUrls: ['https://bscscan.com/']
  },
  BSC_TESTNET: {
    chainId: `0x${(97).toString(16)}`,
    chainName: "Binance Smart Chain (testnet)",
    nativeCurrency: {
      name: 'BNB',
      symbol: 'BNB',
      decimals: 18
    },
    rpcUrls: [
      "https://data-seed-prebsc-1-s1.binance.org:8545/",
      "https://data-seed-prebsc-2-s1.binance.org:8545/",
      "https://data-seed-prebsc-1-s2.binance.org:8545/",
      "https://data-seed-prebsc-2-s2.binance.org:8545/",
      "https://data-seed-prebsc-1-s3.binance.org:8545/",
      "https://data-seed-prebsc-2-s3.binance.org:8545/"
    ],
    blockExplorerUrls: ['https://testnet.bscscan.com/']
  },
}

async function addNetwork(e, config) {
  e.preventDefault();
  try {
    await window.ethereum.request({
      method: 'wallet_addEthereumChain',
      params: [
        config
      ],
    });
  } catch (addError) {
    console.log(addError);
  }
}
