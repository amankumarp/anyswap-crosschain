export const srcChainName =srcChainID == 97
  ? 'Binance TestNet'
  : srcChainID == 1807
  ? 'Tarality Testnet'
  : srcChainID == 4369
  ? 'Rabbit Testnet'
  : srcChainID == 80001
  ? 'Matic Testnet'
  : '';

  export const destChainName =
  destChainID == 97
    ? 'Binance TestNet'
    : destChainID == 1807
    ? 'Tarality Testnet'
    : destChainID == 4369
    ? 'Rabbit Testnet'
    : destChainID == 80001
    ? 'Matic Testnet'
    : ''