import React from 'react'
import styled from 'styled-components'

export const BodyWrapper = styled.div`
  position: relative;
  width: 1440px;
  height: 100%;
  // max-width: 1100px;
  // padding: 2.5rem 23rem;
  overflow-x:hidden;
  margin:auto;
  ${({ theme }) => theme.mediaWidth.upToFourty`
 
  width:100%;
`};
  ${({ theme }) => theme.mediaWidth.upToExtraLarge`
  // padding: 2.5rem 10rem;
  width:100%;
`};
  ${({ theme }) => theme.mediaWidth.upToMedium`
    padding: 0rem 0px;
  `};
`

const BodyContent = styled.div`
  // position: absolute;
  // top: 70px;
  // right: 0;
  // bottom: 0;
  // // left: 320px;
  // left: 0px;
  width: 100%;
  height: 100%;
  padding: 0rem 0px;
  overflow: auto;
  ${({ theme }) => theme.mediaWidth.upToMedium`
    overflow:auto;
    padding: 0px;
    left:0;
    bottom:65px;
  `};
`

/**
 * The styled container element that wraps the content of most pages and the tabs.
 */
export default function AppBody({ children }: { children: React.ReactNode }) {
  return (
    <BodyContent>
      <BodyWrapper>{children}</BodyWrapper>
    </BodyContent>
  )
}
