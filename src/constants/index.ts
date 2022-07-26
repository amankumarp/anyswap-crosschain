import { ChainId, JSBI, Percent, Token, WETH } from 'anyswap-sdk'
import { AbstractConnector } from '@web3-react/abstract-connector'

// import { injected, terra } from '../connectors'
import {
  injected,
  walletconnect,
  walletlink,
  // bsc,
  // clover
} from '../connectors'
// import { injected, walletconnect } from '../connectors'

export const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000'

// a list of tokens by chain
type ChainTokenList = {
  readonly [chainId in ChainId]: Token[]
}

export interface WalletInfo {
  connector?: AbstractConnector
  name: string
  iconName: string
  description: string
  href: string | null
  color: string
  primary?: true
  mobile?: true
  mobileOnly?: true
}

export const SUPPORTED_WALLETS: { [key: string]: WalletInfo } = {
  INJECTED: {
    connector: injected,
    name: 'Injected',
    iconName: 'arrow-right.svg',
    description: 'Injected web3 provider.',
    href: null,
    color: '#010101',
    primary: true
  },
  METAMASK: {
    connector: injected,
    name: 'MetaMask',
    iconName: 'metamask.png',
    description: 'Easy-to-use browser extension.',
    href: null,
    color: '#E8831D'
  },
  OKEXCHAIN: {
    connector: injected,
    name: 'MetaX',
    iconName: 'OKT.png',
    description: 'Easy-to-use browser extension.',
    href: null,
    color: '#E8831D'
  },
  COIN98: {
    connector: injected,
    name: 'Coin98',
    iconName: 'Coin98.png',
    description: 'Easy-to-use browser extension.',
    href: null,
    color: '#E8831D'
  },
  WALLET_CONNECT: {
    connector: walletconnect,
    name: 'WalletConnect',
    iconName: 'walletConnectIcon.svg',
    description: 'Connect to Trust Wallet, Rainbow Wallet and more...',
    href: null,
    color: '#4196FC',
    mobile: true
  },
  WALLET_LINK: {
    connector: walletlink,
    name: 'Coinbase Wallet',
    iconName: 'coinbaseWalletIcon.svg',
    description: 'Use Coinbase Wallet app on mobile device',
    href: null,
    color: '#315CF5'
  },
  BITKEEP: {
    connector: injected,
    name: 'BitKeep',
    iconName: 'BitKeep.png',
    description: 'Easy-to-use browser extension.',
    href: null,
    color: '#E8831D'
  },
  // Binance: {
  //   connector: bsc,
  //   name: 'Binance',
  //   iconName: 'BNB.svg',
  //   description: 'Login using Binance hosted wallet',
  //   href: null,
  //   color: '#F0B90B',
  //   mobile: true,
  // },
  // Clover: {
  //   connector: clover,
  //   name: 'Clover',
  //   iconName: 'clover.png',
  //   description: 'Login using Clover hosted wallet',
  //   href: null,
  //   color: '#269964',
  // },
  // Xdefi: {
  //   connector: injected,
  //   name: 'Xdefi',
  //   iconName: 'XDEFI.jpg',
  //   description: 'Easy-to-use browser extension.',
  //   href: null,
  //   color: '#269964',
  // },
  // huobi: {
  //   connector: walletconnect,
  //   name: 'Huobi',
  //   iconName: 'HT.png',
  //   description: 'Connect to Huobi Wallet.',
  //   href: null,
  //   color: '#4196FC',
  //   mobile: true
  // },
}

export const NetworkContextName = 'NETWORK'

// default allowed slippage, in bips
export const INITIAL_ALLOWED_SLIPPAGE = 50
// 20 minutes, denominated in seconds
export const DEFAULT_DEADLINE_FROM_NOW = 60 * 20

// used for rewards deadlines
export const BIG_INT_SECONDS_IN_WEEK = JSBI.BigInt(60 * 60 * 24 * 7)

export const BIG_INT_ZERO = JSBI.BigInt(0)

// one basis point
export const ONE_BIPS = new Percent(JSBI.BigInt(1), JSBI.BigInt(10000))
export const BIPS_BASE = JSBI.BigInt(10000)
// used for warning states
export const ALLOWED_PRICE_IMPACT_LOW: Percent = new Percent(JSBI.BigInt(100), BIPS_BASE) // 1%
export const ALLOWED_PRICE_IMPACT_MEDIUM: Percent = new Percent(JSBI.BigInt(300), BIPS_BASE) // 3%
export const ALLOWED_PRICE_IMPACT_HIGH: Percent = new Percent(JSBI.BigInt(500), BIPS_BASE) // 5%
// if the price slippage exceeds this number, force the user to type 'confirm' to execute
export const PRICE_IMPACT_WITHOUT_FEE_CONFIRM_MIN: Percent = new Percent(JSBI.BigInt(1000), BIPS_BASE) // 10%
// for non expert mode disable swaps above this
export const BLOCKED_PRICE_IMPACT_NON_EXPERT: Percent = new Percent(JSBI.BigInt(1500), BIPS_BASE) // 15%

// used to ensure the user doesn't send so much ETH so they end up with <.01
export const MIN_ETH: JSBI = JSBI.exponentiate(JSBI.BigInt(10), JSBI.BigInt(16)) // .01 ETH
// export const BETTER_TRADE_LESS_HOPS_THRESHOLD = new Percent(JSBI.BigInt(50), JSBI.BigInt(10000))
export const BETTER_TRADE_LINK_THRESHOLD = new Percent(JSBI.BigInt(75), JSBI.BigInt(10000))

export const ZERO_PERCENT = new Percent('0')
export const ONE_HUNDRED_PERCENT = new Percent('1')

// TODO: SDK should have two maps, WETH map and WNATIVE map.
const WRAPPED_NATIVE_ONLY: ChainTokenList = {
  [ChainId.ROPSTEN]: [WETH[ChainId.ROPSTEN]],
  [ChainId.RINKEBY]: [WETH[ChainId.RINKEBY]],
  [ChainId.KOVAN]: [WETH[ChainId.KOVAN]],
  [ChainId.MATICTEST]:[WETH[ChainId.MATICTEST]],
  [ChainId.BNBTEST]: [WETH[ChainId.BNBTEST]],
  [ChainId.TARALTEST]:[WETH[ChainId.TARALTEST]],
  [ChainId.RABBITTEST]:[WETH[ChainId.RABBITTEST]]
}

// Default Ethereum chain tokens
export const DAI = new Token(ChainId.KOVAN, '0x4F96Fe3b7A6Cf9725f59d353F723c1bDb64CA6Aa', 18, 'DAI', 'Dai Stablecoin')
export const USDC = new Token(ChainId.KOVAN, '0xe22da380ee6B445bb8273C81944ADEB6E8450422', 6, 'USDC', 'USD Coin')
export const USDT = new Token(ChainId.KOVAN, '0xf3e0d7bF58c5d455D31ef1c2d5375904dF525105', 6, 'USDT', 'Tether USD')
export const COMP = new Token(ChainId.KOVAN, '0x61460874a7196d6a22D1eE4922473664b3E95270', 18, 'COMP', 'Compound')
export const MKR = new Token(ChainId.KOVAN, '0xaC94Ea989f6955C67200DD67F0101e1865A560Ea', 18, 'MKR', 'Maker')
export const AMPL = new Token(ChainId.KOVAN, '0xd2eC3a70EF3275459f5c7a1d5930E9024bA3c4f3', 9, 'AMPL', 'Ampleforth')
export const WBTC = new Token(ChainId.KOVAN, '0xA0A5aD2296b38Bd3e3Eb59AAEAF1589E8d9a29A9', 8, 'WBTC', 'Wrapped BTC')
export const RUNE = new Token(ChainId.KOVAN, '0x3155BA85D5F96b2d030a4966AF206230e46849cb', 18, 'RUNE', 'RUNE.ETH')

export const BSC: { [key: string]: Token } = {
  DAI: new Token(ChainId.BNBTEST, '0xEC5dCb5Dbf4B114C9d0F65BcCAb49EC54F6A0867', 18, 'DAI', 'Dai Stablecoin'),
  USD: new Token(ChainId.BNBTEST, '0x78867BbEeF44f2326bF8DDd1941a4439382EF2A7', 18, 'BUSD', 'Binance USD'),
  USDC: new Token(ChainId.BNBTEST, '0x64544969ed7EBf5f083679233325356EbE738930', 18, 'USDC', 'USD Coin'),
  USDT: new Token(ChainId.BNBTEST, '0x337610d27c682E347C9cD60BD4b3b107C9d34dDd', 18, 'USDT', 'Tether USD'),
  BTCB: new Token(ChainId.BNBTEST, '0x952066E2e117Feebb5E82BCC0157C21968b67c41', 18, 'BTCB', 'Bitcoin')
}


export const MATIC: { [key: string]: Token } = {
  USDC: new Token(ChainId.MATICTEST, '0xe11A86849d99F524cAC3E7A0Ec1241828e332C62', 18, 'USDC', 'USD Coin'),
  WBTC: new Token(ChainId.MATICTEST, '0x0d787a4a1548f673ed375445535a6c7A1EE56180', 8, 'WBTC', 'Wrapped Bitcoin'),
  DAI: new Token(ChainId.MATICTEST, '0xd393b1E02dA9831Ff419e22eA105aAe4c47E1253', 18, 'DAI', 'Dai Stablecoin'),
  WETH: new Token(ChainId.MATICTEST, '0xA6FA4fB5f76172d178d61B04b0ecd319C5d1C0aa', 18, 'WETH', 'Wrapped Ether'),
  USDT: new Token(ChainId.MATICTEST, '0xA02f6adc7926efeBBd59Fd43A84f4E0c0c91e832', 6, 'USDT', 'Tether USD')
  // TEL: new Token(ChainId.MATICTEST, '0xdF7837DE1F2Fa4631D716CF2502f8b230F1dcc32', 2, 'TEL', 'Telcoin'),
  // SUSHI: new Token(ChainId.MATICTEST, '0x0b3F868E0BE5597D5DB7fEB59E1CADBb0fdDa50a', 18, 'SUSHI', 'SushiToken'),
  // AAVE: new Token(ChainId.MATICTEST, '0xD6DF932A45C0f255f85145f286eA0b292B21C90B', 18, 'AAVE', 'Aave'),
  // FRAX: new Token(ChainId.MATICTEST, '0x104592a158490a9228070E0A8e5343B499e125D0', 18, 'FRAX', 'Frax'),
  // FXS: new Token(ChainId.MATICTEST, '0x3e121107F6F22DA4911079845a470757aF4e1A1b', 18, 'FXS', 'Frax Share'),
  // DMAGIC: new Token(ChainId.MATICTEST, '0x61dAECaB65EE2A1D5b6032df030f3fAA3d116Aa7', 18, 'DMAGIC', 'Dark Magic'),
  // DRAX: new Token(ChainId.MATICTEST, '0x1Ba3510A9ceEb72E5CdBa8bcdDe9647E1f20fB4b', 18, 'DRAX', 'Drax'),
}



// used to construct intermediary pairs for trading
export const BASES_TO_CHECK_TRADES_AGAINST: ChainTokenList = {
  ...WRAPPED_NATIVE_ONLY,
  [ChainId.KOVAN]: [...WRAPPED_NATIVE_ONLY[ChainId.KOVAN], DAI, USDC, USDT, COMP, MKR, WBTC, RUNE],

  [ChainId.BNBTEST]: [...WRAPPED_NATIVE_ONLY[ChainId.BNBTEST], BSC.DAI, BSC.USD, BSC.USDC, BSC.USDT, BSC.BTCB],
  [ChainId.MATICTEST]: [...WRAPPED_NATIVE_ONLY[ChainId.MATICTEST], MATIC.USDC, MATIC.WBTC, MATIC.DAI, MATIC.WETH, MATIC.USDT],
}


/**
 * Some tokens can only be swapped via certain pairs, so we override the list of bases that are considered for these
 * tokens.
 */
 export const CUSTOM_BASES: { [chainId in ChainId]?: { [tokenAddress: string]: Token[] } } = {
  [ChainId.KOVAN]: {
    [AMPL.address]: [DAI, WETH[ChainId.KOVAN]],
    // [DUCK.address]: [USDP, WETH[ChainId.MAINNET]],
    // [BAB.address]: [BAC, WETH[ChainId.MAINNET]],
    // [HBTC.address]: [CREAM, WETH[ChainId.MAINNET]],
    // [FRAX.address]: [FXS, WETH[ChainId.MAINNET]],
    // [IBETH.address]: [ALPHA, WETH[ChainId.MAINNET]],
    // [PONT.address]: [PWING, WETH[ChainId.MAINNET]]
  }
}