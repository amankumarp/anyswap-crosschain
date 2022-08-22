import React from 'react'
import styled from 'styled-components'

import { useActiveWeb3React } from '../../hooks'

import config from '../../config'

import initPath from '../../assets/images/question.svg'

//width: ${({ size }) => size};
//height: ${({ size }) => size};
//border-radius: ${({ size }) => size};
const Image = styled.img<{ size?: any }>`
  width:30px;
  height:30px;
  max-width: 100%;
  max-height: 100%;
  border-radius:50%;
  background-color: white;
  
`

// const initPath = require('../../assets/images/question.svg')

function getSourcePath(symbol: any) {
  let path = ''
  try {
    path = require('../../assets/images/coin/source/' + symbol + '.svg')
  } catch (error) {
    try {
      path = require('../../assets/images/coin/source/' + symbol + '.png')
    } catch (error) {
      path = initPath
    }
  }
  return path
}
function getAnyPath(symbol: any) {
  let path = ''
  try {
    path = require('../../assets/images/coin/any/' + symbol + '.svg')
  } catch (error) {
    try {
      path = require('../../assets/images/coin/any/' + symbol + '.png')
    } catch (error) {
      path = initPath
    }
  }
  return path
}

export default function TokenLogo({
  symbol,
  size = '1rem',
  isAny = true,
  style,
  logoUrl,
  ...rest
}: {
  symbol?: any
  size?: any
  style?: React.CSSProperties
  logoUrl?: any
  isAny?: any
}) {
  const { chainId } = useActiveWeb3React()
  let path = ''
  symbol = config.getBaseCoin(symbol, chainId)
  symbol = symbol === 'W' + config.getCurChainInfo(chainId).symbol ? symbol.substr(1) : symbol
  // symbol = symbol === 'WHT' ? 'HT' : symbol
  // console.log(symbol)
  if (logoUrl) {
    path = logoUrl
  } else if (symbol) {
    if (isAny) {
      if (symbol.indexOf('a') === 0 && symbol.indexOf('any') === -1) {
        symbol = symbol.replace('a', 'any')
        path = getAnyPath(symbol)
      } else if (symbol.indexOf('any') !== -1) {
        path = getAnyPath(symbol)
      } else {
        path = getSourcePath(symbol)
      }
    } else {
      symbol = symbol.replace('any', '').replace('a', '')
      path = getSourcePath(symbol)
    }
  } else {
    path = initPath
  }
  // console.log(logoUrl)
  // console.log(path)
  return <Image {...rest} alt={symbol} src={path} size={size} style={style} />
}
