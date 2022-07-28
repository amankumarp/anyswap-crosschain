import {formatSwapTokenList, getLocalRPC} from './methods'
import {tokenListUrl, VERSION, USE_VERSION} from '../constant'
import {ChainId} from './chainId'
const useNode = 'https://rabbit.analog-rpc.com'

export const RABBIT_TEST_CHAINID = ChainId.RABBIT_TEST
export const RABBIT_TESTNET = process.env.NODE_ENV === 'development' ? getLocalRPC(RABBIT_TEST_CHAINID, useNode) : getLocalRPC(RABBIT_TEST_CHAINID, 'https://rabbit.analog-rpc.com')
export const RABBIT_TESTNET_EXPLORER = 'https://rabbit.analogscan.com/'


export const testTokenList = [

]

const symbol = 'ANA';

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
  [RABBIT_TEST_CHAINID]: {
    tokenListUrl: tokenListUrl + RABBIT_TEST_CHAINID,
    tokenList: formatSwapTokenList(symbol, testTokenList),
    ...bridgeToken[USE_VERSION],
    swapInitToken: '0xcdcb6fffbd8d68b3ed53e1b4fc1616ee24de360a',
    multicalToken: '0xAD1497c9EdDB62Aa7b6EaD7cec239733d48e5447',  
    v2FactoryToken: '0x950c10a59b6662a915fe81a86790168a1ed5f2b2',
    nodeRpc: RABBIT_TESTNET,
    nodeRpcList: [
        RABBIT_TESTNET
    ],
    chainID: RABBIT_TEST_CHAINID,
    lookHash: RABBIT_TESTNET_EXPLORER + '/tx/',
    lookAddr: RABBIT_TESTNET_EXPLORER + '/address/',
    lookBlock: RABBIT_TESTNET_EXPLORER + '/block/',
    explorer: RABBIT_TESTNET_EXPLORER,
    symbol: symbol,
    name: 'RABBIT CHAIN',
    networkName: 'RABBIT CHAIN Testnet',
    networkLogo:"Rabbit",
    type: 'main',
    label: RABBIT_TEST_CHAINID,
    isSwitch: 1,
    suffix: 'ANA'
  }
}