
import bsc from './bsc'
import eth from './eth'
import matic from './matic'
import taral from './taral'
import rabbit from './rabbit'

import { ChainId } from './chainId'

import {VERSION,USE_VERSION} from '../constant'

interface ConFig {
  [key: string]: any
}
export const chainInfo:ConFig = {
  ...bsc,
  ...eth,
  ...matic,
  ...taral,
  ...rabbit
}
// const allChainList = [
//   ChainId.ETH,
//   ChainId.AVAX,
//   ChainId.ARBITRUM,
//   ChainId.BNB,
//   ChainId.FTM,
//   ChainId.MATIC,
//   ChainId.GLMR,
//   ChainId.MOVR,
//   ChainId.ONE,
//   ChainId.OPTIMISM,
//   ChainId.AURORA,
//   ChainId.BOBA,
//   ChainId.CRO,
//   ChainId.OKT,
//   ChainId.HT,
//   ChainId.XDAI,
//   ChainId.CELO,
//   ChainId.KCC,
//   ChainId.FSN,
//   ChainId.METIS,
//   ChainId.TLOS,
//   ChainId.ROSE,
//   ChainId.SYS,
//   ChainId.IOTEX,
//   ChainId.SDN,
//   ChainId.FUSE,
//   ChainId.ASTAR,
//   ChainId.VLX,
//   ChainId.CLV,
//   ChainId.CRAB,
//   ChainId.MIKO,
//   ChainId.REI,
//   ChainId.CFX,
//   ChainId.RBTC,
//   ChainId.JEWEL,
//   ChainId.BTT,
//   ChainId.EVMOS,
//   ChainId.ETC,
//   ChainId.DOGE,
//   ChainId.CMP,
//   ChainId.GOERLI,
//   ChainId.GT,
//   ChainId.TOMO,
//   ChainId.HOO,
//   ChainId.TT,
//   ChainId.KAVA,
//   ChainId.KLAY
// ]

const testChainList = [
  ChainId.RINKEBY,
  ChainId.BNB_TEST,
  ChainId.MATIC_TEST,
  ChainId.TARAL_TEST,
  ChainId.RABBIT_TEST
]

const useChain:any = {
  [VERSION.V1]: [
    ChainId.ETH,
    ChainId.BNB,
  ],
 [VERSION.V1_T1]:[
  ...testChainList
 ], 
  ALL_MAIN: [
    ChainId.ETH,
    ChainId.BNB,
    ChainId.FSN,
    ChainId.FTM,
    ChainId.MATIC,
    ChainId.HT,
    ChainId.AVAX,
    ChainId.XDAI,
    ChainId.ARBITRUM,
    ChainId.KCC,
    ChainId.OKT,
    ChainId.ONE,
    ChainId.MOVR,
    ChainId.TERRA,
    ChainId.AURORA,
    ChainId.ASTAR,
    ChainId.NAS,
  ]
}

// const envType:any = env
// export const spportChainArr = envType === 'dev' ? useChain['ALL_MAIN'] : useChain[USE_VERSION]
export const spportChainArr:any = useChain[USE_VERSION]