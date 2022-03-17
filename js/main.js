const NETWORKS = {
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
  }
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
