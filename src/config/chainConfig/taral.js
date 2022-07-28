import {formatSwapTokenList, getLocalRPC} from './methods'
import {tokenListUrl, VERSION, USE_VERSION} from '../constant'
import {ChainId} from './chainId'
// console.log(process.env)
// alert(process.env.NODE_ENV)

// const useNode = 'https://bsc-dataseed1.defibit.io/'
// const useNode = 'https://bsc-dataseed2.defibit.io/'
// const useNode = 'https://bsc-dataseed3.defibit.io/'
// const useNode = 'https://bsc-dataseed4.defibit.io/'

// const useNode = 'https://bsc-dataseed1.ninicoin.io/'
// const useNode = 'https://bsc-dataseed2.ninicoin.io/'
const useNode = 'https://rpc01.taralityscan.com/'
// const useNode = 'https://bsc-dataseed4.ninicoin.io/'

// const useNode = 'https://bsc-dataseed1.binance.org/'
// const useNode = 'https://bsc-dataseed2.binance.org/'
// const useNode = 'https://bsc-dataseed3.binance.org/'
// const useNode = 'https://bsc-dataseed4.binance.org/'

export const TARAL_TEST_CHAINID = ChainId.TARAL_TEST
export const TARAL_TESTNET = process.env.NODE_ENV === 'development' ? getLocalRPC(TARAL_TEST_CHAINID, useNode) : getLocalRPC(TARAL_TEST_CHAINID, 'https://rpc01.taralityscan.com/')
export const TARAL_TESTNET_EXPLORER = 'https://testnet.taralityscan.com'

// export const tokenList = [
//   {
//     "address": "0x2170ed0880ac9a755fd29b2688956bd959f933f8",
//     "chainId": BNB_MAIN_CHAINID,
//     "decimals": 18,
//     "name": "Binance-Peg Ethereum",
//     "symbol": "ETH"
//   },
//   {
//     "address": "0x4338665cbb7b2485a8855a139b75d5e34ab0db94",
//     "chainId": BNB_MAIN_CHAINID,
//     "decimals": 18,
//     "name": "Binance-Peg Litecoin",
//     "symbol": "LTC"
//   },
//   {
//     "address": "0x55d398326f99059ff775485246999027b3197955",
//     "chainId": BNB_MAIN_CHAINID,
//     "decimals": 18,
//     "name": "Binance-Peg BSC-USD",
//     "symbol": "USDT"
//   },
// ]

export const testTokenList = [

]

const symbol = 'TARAL'

const bridgeToken = {
  [VERSION.V1]: {
    bridgeInitToken: '0xb12c13e66ade1f72f71834f2fc5082db8c091358',
    bridgeInitChain: '1'
  },
  [VERSION.V1_1]: {
    bridgeInitToken: '0xb12c13e66ade1f72f71834f2fc5082db8c091358',
    bridgeInitChain: '1'
  },
  [VERSION.V2]: {
    bridgeInitToken: '0xaeddc4a469ace97e90c605e3f52eb89620e305c0',
    bridgeInitChain: '137'
  },
  [VERSION.V2_1]: {
    bridgeInitToken: '0xaeddc4a469ace97e90c605e3f52eb89620e305c0',
    bridgeInitChain: '137'
  },
  [VERSION.V2_2]: {
    bridgeInitToken: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
    bridgeInitChain: '137'
  },
  [VERSION.V2_T1]: {
    bridgeInitToken: '0x6fd2b7fc5db32a133a6824e1117d0f290ba43abc',
    bridgeInitChain: '4'
  },
  [VERSION.V3_1]: {
    bridgeInitToken: '0xca3f508b8e4dd382ee878a314789373d80a5190a',
    bridgeInitChain: '42161',
    nativeToken: ''
  },
  [VERSION.V4_MOVR]: {
    bridgeInitToken: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
    bridgeInitChain: '137',
    crossBridgeInitToken: 'BNB'
  },
  [VERSION.V5]: {
    bridgeInitToken: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
    bridgeInitChain: '137',
    nativeToken: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    crossBridgeInitToken: 'BNB'
  },
  [VERSION.V7]: {
    bridgeInitToken: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
    bridgeInitChain: '137',
    nativeToken: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    crossBridgeInitToken: ''
  },
  [VERSION.V7_BAS_TEST]: {
    bridgeInitToken: '',
    bridgeInitChain: '',
    nativeToken: '',
    crossBridgeInitToken: ''
  },
}

export default {
  [TARAL_TEST_CHAINID]: {
    tokenListUrl: tokenListUrl + TARAL_TEST_CHAINID,
    tokenList: formatSwapTokenList(symbol, testTokenList),
    ...bridgeToken[USE_VERSION],
    swapInitToken: '0xcdcb6fffbd8d68b3ed53e1b4fc1616ee24de360a',
    multicalToken: '0x87f7b3b6c75f2c7bd9f8f802a4c29114d76d6f4c',
    
    v2FactoryToken: '0x950c10a59b6662a915fe81a86790168a1ed5f2b2',
    nodeRpc: TARAL_TESTNET,
    nodeRpcList: [
        TARAL_TESTNET
    ],
    chainID: TARAL_TEST_CHAINID,
    lookHash: TARAL_TESTNET_EXPLORER + '/tx/',
    lookAddr: TARAL_TESTNET_EXPLORER + '/address/',
    lookBlock: TARAL_TESTNET_EXPLORER + '/block/',
    explorer: TARAL_TESTNET_EXPLORER,
    symbol: symbol,
    name: 'TARAL CHAIN',
    networkName: 'TARAL CHAIN Testnet',
    networkLogo: 'Taral',
    type: 'main',
    label: TARAL_TEST_CHAINID,
    isSwitch: 1,
    suffix: 'TARAL'
  }
}