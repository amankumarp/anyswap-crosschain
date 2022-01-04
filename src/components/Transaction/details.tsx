import React, { useEffect } from "react"
import styled from "styled-components"
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { CheckCircle } from 'react-feather'
import Loader from '../Loader'
import Copy from '../AccountDetails/Copy'
import TokenLogo from '../TokenLogo'

import { getEtherscanLink } from '../../utils'
import {useWeb3} from '../../utils/tools/web3UtilsV2'
// import {timeChange} from '../../utils/tools/tools'

import {useUpdateUnderlyingStatus} from '../../state/transactions/hooks'

import { ExternalLink } from '../../theme'

import {Status} from '../../config/status'
import config from '../../config'

import ScheduleIcon from '../../assets/images/icon/schedule.svg'

const ChainStatusBox = styled.div`
  ${({ theme }) => theme.flexBC};
  width: 100%;
  font-size:12px;
  color: ${({ theme }) => theme.textColorBold};
  // color: #031a6e;
  font-weight:bold;
  padding: 12px 15px;
  border-radius:9px;
  margin:15px 0;
  .name {
    ${({ theme }) => theme.flexSC};
  }
  .status {
    ${({ theme }) => theme.flexEC};
  }
  &.yellow,&.Confirming,&.Crosschaining {
    border: 1px solid ${({ theme }) => theme.birdgeStateBorder};
    background: ${({ theme }) => theme.birdgeStateBg};
  }
  &.green,&.Success, &.Pending{
    border: 1px solid ${({ theme }) => theme.birdgeStateBorder1};
    background: ${({ theme }) => theme.birdgeStateBg1};
  }
  &.red,&.Failure, &.Timeout, &.BigAmount{
    border: 1px solid ${({ theme }) => theme.birdgeStateBorder2};
    background: ${({ theme }) => theme.birdgeStateBg2};
  }
`

const Link = styled(ExternalLink)``
const Link2 = styled(NavLink)`
  text-align:right;
`
const ConfirmBox  = styled.div`
  width: 100%;
  padding: 20px 20px;
  .a {
    width: 100%;
    font-size: 14px;
    color: ${({theme}) => theme.primary4};
    text-decoration: none;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
    display:block;
    &:hover,&:focus,&:active,&:focus-visible{
      border:none;
      background: none;
    }
  }
  .tips {
    font-size: 14px;
    height: 21px;
    line-height: 21px;
    text-align:center;
    .a {
      width: 100%;
    }
  }
`
const ConfirmList = styled.div`
  width: 100%;
  padding:10px;
  margin: 0 0 10px;
  border-radius: 10px;
  border: 1px solid ${({theme}) => theme.bg3};
  .item {
    ${({ theme }) => theme.flexBC};
    width: 100%;
    margin-bottom: 10px;
    &:last-child {
      margin-bottom: 0px;
    }
    .title {
      font-size: 16px;
      margin: 0;
      width: 40%;
    }
    .label {
      ${({ theme }) => theme.flexSC};
      width: 40%;
      .cont {
        font-size: 14px;
        color: ${({ theme }) => theme.textColor};
        margin-left: 10px;
        .info {
          color: ${({ theme }) => theme.text2};
        }
      }
    }
    .value {
      ${({ theme }) => theme.flexEC};
      width: 60%;
      .cont {
        ${({ theme }) => theme.flexEC};
        font-size: 14px;
        color: ${({ theme }) => theme.textColor};
        margin-left: 10px;
        .info {
          color: ${({ theme }) => theme.text2};
        }
        .name {
          margin-right: 5px;
        }
      }
    }
    .txtLabel {
      font-size: 14px;
      width: 40%;
      color: ${({ theme }) => theme.textColor};
    }
  }
`

function DestChainStatus ({fromStatus, toStatus}: {fromStatus:any, toStatus:any}) {
  if (fromStatus === Status.Pending) {
    return Status.Pending
  } else if (fromStatus === Status.Failure) {
    return Status.Failure
  } else if (fromStatus === Status.Success) {
    if (!toStatus || toStatus === Status.Confirming) {
      return (<>
        <span style={{marginRight:'5px'}}>{Status.Confirming}</span> <Loader stroke="#5f6bfb" />
      </>)
    } else if (toStatus === Status.Crosschaining) {
      return (<>
        <span style={{marginRight:'5px'}}>{Status.Crosschaining}</span> <Loader stroke="#5f6bfb" />
      </>)
    } else if (toStatus === Status.Success) {
      return Status.Success
    } else {
      return toStatus
    }
  } else {
    return toStatus
  }
}

export default function HistoryDetails ({
  symbol,
  from,
  to,
  fromChainID,
  toChainID,
  fromStatus,
  toStatus,
  swapvalue,
  timestamp,
  txid,
  swaptx,
  value,
  version,
  token,
  underlying,
  isReceiveAnyToken,
  avgTime
}: {
  symbol?: any,
  from?: any,
  to?: any,
  fromChainID?: any,
  toChainID?: any,
  fromStatus?: any,
  toStatus?: any,
  swapvalue?: any,
  timestamp?: any,
  txid?: any,
  swaptx?: any,
  value?: any,
  version?: any,
  token?: any,
  underlying?: any,
  isReceiveAnyToken?: any,
  avgTime?: any,
}) {
  const { t } = useTranslation()
  const {setUnderlyingStatus} = useUpdateUnderlyingStatus()
  useEffect(() => {
    if (underlying && swaptx && !isReceiveAnyToken) {
      useWeb3(toChainID, 'eth', 'getTransactionReceipt', [swaptx]).then((res:any) => {
        if (res && res.logs && res.logs.length === 1 && setUnderlyingStatus) {
          setUnderlyingStatus(fromChainID, txid, true)
        }
      })
    }
  }, [underlying, swaptx, toChainID])
  return (
    <>


      <ConfirmBox>
        <ConfirmList>
          <div className="item">
            <h3 className="title">{t('From')}</h3>
          </div>
          <div className="item">
            <div className="label">
              <TokenLogo symbol={config.getCurChainInfo(fromChainID)?.networkLogo ?? config.getCurChainInfo(fromChainID)?.symbol} size={'24px'} />
              <div className="cont">
                <div className="name">{config.getCurChainInfo(fromChainID)?.name}</div>
                {/* <div className="info">{t('SourceChain')}</div> */}
              </div>
            </div>
            <div className="value">
              <div className="cont">
                - {value + ' ' + symbol}
              </div>
            </div>
          </div>
          <div className="item">
            <div className="txtLabel">Hash:</div>
            <div className="value">
              <Link className="a" href={getEtherscanLink(fromChainID, txid, 'transaction')} target="_blank">{txid}</Link>
              <Copy toCopy={txid}></Copy>
            </div>
          </div>
          <div className="item">
            <div className="txtLabel">{t('From')}:</div>
            <div className="value">
              <Link className="a" href={getEtherscanLink(fromChainID, from, 'address')} target="_blank">{from}</Link>
              <Copy toCopy={from}></Copy>
            </div>
          </div>
        </ConfirmList>
        <ChainStatusBox className={fromStatus}>
          <div className="name">
            {
              fromStatus === Status.Success? (
                <CheckCircle size="16" style={{marginRight: '10px'}} />
              ) : <img src={ScheduleIcon} alt='' style={{marginRight: '10px'}}/>
            }
            {config.getCurChainInfo(fromChainID)?.name + ' Status'}
          </div>
          <span className="status">{fromStatus === Status.Pending ? (<><span style={{marginRight:'5px'}}>{fromStatus}</span> <Loader stroke="#5f6bfb" /></>) : fromStatus}</span>
        </ChainStatusBox>
        <ConfirmList>
          <div className="item">
            <h3 className="title">{t('to')}</h3>
          </div>
          <div className="item">
            <div className="label">
              <TokenLogo symbol={config.getCurChainInfo(toChainID)?.networkLogo ?? config.getCurChainInfo(toChainID)?.symbol} size={'24px'} />
              <div className="cont">
                <div className="name">{config.getCurChainInfo(toChainID)?.name}</div>
              </div>
            </div>
            <div className="value">
              <div className="cont">
                {swapvalue ? '+ ' + swapvalue + ' ' + symbol : '-'}
                {/* {
                  fromStatus === Status.Success && toStatus === Status.Success && !['swapin', 'swapout'].includes(version) && token && isReceiveAnyToken ? (
                    <>
                      <Link2 className="a" to={`/pool/add?bridgetoken=${token}&bridgetype=withdraw`}>Remove the liquidity -&gt;</Link2>
                    </>
                  ) : ''
                } */}
              </div>
            </div>
          </div>
          <div className="item">
            <div className="txtLabel">Hash:</div>
            <div className="value">
              {swaptx ? (
                <>
                  <Link className="a" href={getEtherscanLink(toChainID, swaptx, 'transaction')} target="_blank">{swaptx}</Link>
                  <Copy toCopy={swaptx}></Copy>
                </>
              ) : '-'}
            </div>
          </div>
          <div className="item">
            <div className="txtLabel">{t('Receive')}:</div>
            <div className="value">
              <Link className="a" href={getEtherscanLink(fromChainID, to, 'address')} target="_blank">{to}</Link>
              <Copy toCopy={to}></Copy>
            </div>
          </div>
          {
            fromStatus === Status.Success && toStatus === Status.Success && !['swapin', 'swapout'].includes(version) && token && isReceiveAnyToken ? (
              <>
                <div className="item">
                  <div className="txtLabel">{t('Remove')}:</div>
                  <div className="value">
                    <Link2 className="a" to={`/pool/add?bridgetoken=${token}&bridgetype=withdraw`}>Remove the liquidity -&gt;</Link2>
                  </div>
                </div>
              </>
            ) : ''
          }
        </ConfirmList>
        <ChainStatusBox className={toStatus ? toStatus : Status.Pending}>
          <div className="name">
            {
              toStatus === Status.Success? (
                <CheckCircle size="16" style={{marginRight: '10px'}} />
              ) : <img src={ScheduleIcon} alt='' style={{marginRight: '10px'}}/>
            }
            {config.getCurChainInfo(toChainID)?.name + ' Status'}
          </div>
          <span className="status"><DestChainStatus fromStatus={fromStatus} toStatus={toStatus} /></span>
        </ChainStatusBox>
        {
          avgTime ? (
            <ConfirmList>
              <div className="item">
                <div className="label">
                  <div className="cont">Use Time:</div>
                </div>
                <div className="value">
                  <div className="cont">{avgTime} s</div>
                </div>
              </div>
            </ConfirmList>
          ) : ''
        }
        
        
        {
          fromStatus === Status.Success && !toStatus && (Date.now() - (timestamp.length <= 10 ? (Number(timestamp) * 1000) : Number(timestamp)) > (1000 * 60 * 30)) ? (
            <div className="tips">
              <Link className="a" href={`${config.explorer}?tabparams=tools&fromChainID=${fromChainID}&toChainID=${toChainID}&symbol=${symbol}&hash=${txid}`} target="_blank">Go to Explorer submit hash -&gt;</Link>
            </div>
          ) : ''
        }
      </ConfirmBox>
    </>
  )
}