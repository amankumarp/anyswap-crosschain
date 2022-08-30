
export enum VERSION {
  V1 = 'UNDERLYING',
  V1_T1 = 'UNDERLYING_TEST',
  V2 = 'STABLE',
  V2_T1 = 'STABLE_TEST',
  V3 = 'BRIDGE',
  V3_T1= 'BRIDGE_TEST',
  V4 = 'ALL',
  V4_TEST = 'ALL_TEST'
}


// export const INIT_VERSION = VERSION.V1_1
// export const INIT_VERSION = VERSION.V3_1
// export const INIT_VERSION = VERSION.V2_2
// export const INIT_VERSION = VERSION.V4_OKT
// const INIT_VERSION = VERSION.V4_MOVR
// export const INIT_VERSION = VERSION.V5
// export const INIT_VERSION = VERSION.V6
// export const INIT_VERSION = VERSION.V6_1
export const INIT_VERSION = VERSION.V1_T1
// export const INIT_VERSION = VERSION.V7_TEST
// export const INIT_VERSION = VERSION.V7_BAS_TEST

// function getUrlVersion (init:any) {
//   const url = window.location.href
//   let version:any
//   if (url.indexOf('https://stable.anyswap.exchange') === 0) {
//     version = VERSION.V2_2
//   } else if (url.indexOf('https://router.anyswap.exchange') === 0) {
//     version = VERSION.V1_1
//   } else if (url.indexOf('https://oec.anyswap.exchange') === 0) {
//     version = VERSION.V4_OKT
//   } else if (url.indexOf('https://movr.anyswap.exchange') === 0) {
//     version = VERSION.V4_MOVR
//   } else if (
//     url.indexOf('https://app.anyswap.exchange') === 0
//     || url.indexOf('https://anyswap.exchange') === 0
//   ) {
//     version = VERSION.V5
//   } else if (url.indexOf('https://arb.anyswap.exchange') === 0) {
//     version = VERSION.V3_1
//   } else if (url.indexOf('https://nft.anyswap.exchange') === 0) {
//     version = VERSION.V6_1
//   } else if (url.indexOf('https://nfttest.anyswap.exchange') === 0) {
//     version = VERSION.V6
//   } else if (
//     url.indexOf('https://app.multichain.org') === 0
//     || url.indexOf('https://app.multichain.tools') === 0
//   ) {
//     version = VERSION.V7
//   } else if (url.indexOf('https://test.multichain.org') === 0) {
//     version = VERSION.V7_TEST
//   } else if (url.indexOf('https://bas.multichain.org') === 0) {
//     version = VERSION.V7_BAS_TEST
//   } else {
//     version = init
//   }
//   return version
// }
export const USE_VERSION:any = INIT_VERSION



export const tokenListUrl = 'https://list.htswap.io/tokenList/'
// export const bridgeApi = USE_VERSION === VERSION.V7_TEST || USE_VERSION === VERSION.V7_BAS_TEST ? 'https://l2api.anyswap.exchange' : 'https://bridgeapi.anyswap.exchange'
// export const bridgeApi = 'https://l2api.anyswap.exchange'
export const bridgeApi = 'http://192.168.1.107:3000'
// export const bridgeApi = 'http://192.168.19.68:8107'
export const explorer = 'https://anyswap.net'

export enum BRIDGE_KEY {
  routerTokenList = 'routerTokenList',
  bridgeTokenList = 'bridgeTokenList',
  mergeTokenList = 'mergeTokenList',
}

// export const CROSS_BRIDGE_LIST = [BRIDGE_KEY.bridgeTokenList, BRIDGE_KEY.mergeTokenList]
export const CROSS_BRIDGE_LIST = [BRIDGE_KEY.bridgeTokenList]

export const env:any = 'pro'
// export const env:any = 'dev'

export const version = '0.1.28'
export const timeout = 1000 * 60 * 30
// export const timeout = 1000 * 60

// console.log(USE_VERSION)
function initVersion (version:any, configVersion:any) {
  const VERSION = version + '_VERSION'
  const curVersion = localStorage.getItem(VERSION)
  if (curVersion && curVersion !== configVersion) {
    sessionStorage.clear()
    localStorage.clear()
    localStorage.setItem(VERSION, configVersion)
  } else if (!curVersion) {
    localStorage.setItem(VERSION, configVersion)
  }
}
initVersion(USE_VERSION, version)

function formatHiddenCoin (list?:Array<any>) {
  const arr:any = []
  if (list && list.length > 0) {
    for (let str of list) {
      arr.push(str)
      if (str.indexOf('any') !== 0) str = 'any' + str
      arr.push(str)
    }
  }
  // console.log(arr)
  return arr
}

export const controlConfig:any = {
  [VERSION.V1]: {
    bridgeInitDataChain: '56',
    hiddenCoin: formatHiddenCoin([]),
    hiddenChain: [],
    showCoin: [],
    showChain: [],
    initNode: '1',
    isOpenRouter: 0,
    isOpenRouterTxns: env === 'dev' ? 1 : 0,
    isOpenBridge: 0,
    isOpenMerge: 1
  },

  [VERSION.V1_T1]: {
    bridgeInitDataChain: '97',
    hiddenCoin: formatHiddenCoin([]),
    hiddenChain: [],
    showCoin: [],
    showChain: [],
    initNode: '97',
    isOpenRouter: 0,
    isOpenRouterTxns: env === 'dev' ? 1 : 0,
    isOpenBridge: 0,
    isOpenMerge: 1
  },
}


export const ENV_NODE_CONFIG = USE_VERSION + '_ENV_NODE_CONFIG'

export const INIT_NODE = controlConfig[USE_VERSION].initNode

export const BASECURRENCY = 'BASECURRENCY'
