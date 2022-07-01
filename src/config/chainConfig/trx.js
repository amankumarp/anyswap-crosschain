import {formatSwapTokenList} from './methods'
import {tokenListUrl, VERSION, USE_VERSION} from '../constant'
import {ChainId} from './chainId'

export const TRX_MAINNET = ''
export const TRX_MAIN_CHAINID = ChainId.TRX
export const TRX_MAIN_EXPLORER = 'https://tronscan.org/#/'

export const tokenList = [

]

const symbol = 'TRX'

const bridgeToken = {
  [VERSION.V1]: {
    bridgeInitToken: '',
    bridgeInitChain: ''
  }
}

export default {
  [TRX_MAIN_CHAINID]: {
    tokenListUrl: tokenListUrl + TRX_MAIN_CHAINID,
    tokenList: formatSwapTokenList(symbol, tokenList),
    ...bridgeToken[USE_VERSION],
    multicalToken: '',
    v1FactoryToken: '',
    v2FactoryToken: '',
    timelock: '',
    nodeRpc: TRX_MAINNET,
    chainID: TRX_MAIN_CHAINID,
    lookHash: TRX_MAIN_EXPLORER + '/transaction/',
    lookAddr: TRX_MAIN_EXPLORER + '/address/',
    lookBlock: TRX_MAIN_EXPLORER + '/block/',
    explorer: TRX_MAIN_EXPLORER,
    symbol: symbol,
    name: 'TRON',
    networkName: 'TRON mainnet',
    networkLogo: 'TRX',
    type: 'main',
    label: TRX_MAIN_CHAINID,
    isSwitch: 1,
    suffix: 'TRX',
    anyToken: '',
    chainType: TRX_MAIN_CHAINID
  },
}