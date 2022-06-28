
import { useCallback } from 'react'
import { useWallet, ConnectType } from '@terra-money/wallet-provider'
import { useWalletModalToggle } from '../state/application/hooks'
import { useUserSelectChainId } from '../state/user/hooks'

import { ChainId } from '../config/chainConfig/chainId'

import {useLogin} from './near'
import {useActiveReact} from './useActiveReact'

export function useConnectWallet () {
  const {account} = useActiveReact()
  const {selectNetworkInfo} = useUserSelectChainId()
  const toggleWalletModal = useWalletModalToggle()
  const { connect } = useWallet()
  const {login} = useLogin()
  return useCallback(() => {
    if (selectNetworkInfo?.label === ChainId.TERRA) {
      if (connect) {
        try {
          connect(ConnectType.CHROME_EXTENSION)
        } catch (error) {
          alert('Please install Terra Station!')
        }
      } else {
        alert('Please install Terra Station!')
      }
    } else if (selectNetworkInfo?.label === ChainId.BTC) {
      
    } else if (selectNetworkInfo?.label === ChainId.NAS) {
      
    } else if (
      selectNetworkInfo?.label === ChainId.NEAR
      || selectNetworkInfo?.label === ChainId.NEAR_TEST
    ) {
      if (!account) {
        login()
      } else {
        toggleWalletModal()
      }
    } else {
      toggleWalletModal()
    }
  }, [selectNetworkInfo, toggleWalletModal, account])
}