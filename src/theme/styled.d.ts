import { FlattenSimpleInterpolation, ThemedCssFunction } from 'styled-components'

export type Color = string
export interface Colors {
  // base
  white: Color
  black: Color

  // text
  text1: Color
  text2: Color
  text3: Color
  text4: Color
  text5: Color
  text6:Color
  text7:Color
  text8:Color
  text9:Color
  text10:Color
  recieve:Color
  textNav: Color
  textColor: Color
  textColorBold: Color
  drop:Color

  // backgrounds / greys
  bg1: Color
  bg2: Color
  bg3: Color
  bg4: Color
  bg5: Color
  bg6: Color
  bg7: Color
  bg8:Color
  bg9:Color
  bluecolor:Color
  contentBg: Color
  contentBg1: Color
  contentBg2: Color
  contentBg3: Color
  borderBg:Color
  anchorColor:color
  search:color
 
  navIconBg: Color
  navBg: Color
  navBg2: Color
  bgColorLinear: Color
  outLinkIconBg: Color
  bodyBg: Color
  tabBg: Color
  tabActiveBg: Color
  tabColor: Color
  tabActiveColor: Color
  tabActiveColor1: Color
  tabBdColor: Color
  hoverEffect:Color
  
  tipBg: Color
  tipBg1: Color
  tipBorder: Color
  tipColor: Color
  
  lightPuroleBg: Color
  viewMoreBtn: Color

  selectedBg: Color
  selectedHoverBg: Color

  selectedBorder: Color
  selectedBorder1: Color
  selectedHoverBorder: Color

  selectedBgNo: Color
  selectedHoverBgNo: Color

  selectedBorderNo: Color
  selectedHoverBorderNo: Color

  inputBorder: Color

  selectTextColor: Color

  arrowBg: Color

  swapBg: Color

  chaliceGray: Color
  royalBlue: Color
  placeholderGray: Color
  activeGray: Color
  activeGray1: Color

  modalBG: Color
  advancedBG: Color

  //blues
  primary1: Color
  primary2: Color
  primary3: Color
  primary4: Color
  primary5: Color

  primaryText1: Color

  // pinks
  secondary1: Color
  secondary2: Color
  secondary3: Color

  birdgeStateBg: Color
  birdgeStateBorder: Color
  birdgeStateBg1: Color
  birdgeStateBorder1: Color
  birdgeStateBg2: Color
  birdgeStateBorder2: Color

  // other
  red1: Color
  red2: Color
  green1: Color
  yellow1: Color
  yellow2: Color
  blue1: Color

  moreBtn: Color

  // Home
  homeBorder:Color
  homeText1:Color
  homeText2:Color
  homeText3:Color
  homeBackground:Color
  homeBackground1:Color
  homeBackground2:Color
  homeLogo:Color
}

export interface Grids {
  sm: number
  md: number
  lg: number
}

declare module 'styled-components' {
  export interface DefaultTheme extends Colors {
    grids: Grids

    // shadows
    shadow1: string
    shadow2: string
    contentShadow: string
    tableShadow: string

    // media queries
    mediaWidth: {
      upToEs: ThemedCssFunction<DefaultTheme>
      upToExtraSmall: ThemedCssFunction<DefaultTheme>
      upToSmall: ThemedCssFunction<DefaultTheme>
      upToMedium: ThemedCssFunction<DefaultTheme>
      upToLarge: ThemedCssFunction<DefaultTheme>
      upToExtraLarge: ThemedCssFunction<DefaultTheme>
    }

    // css snippets
    flexColumnNoWrap: FlattenSimpleInterpolation
    flexRowNoWrap: FlattenSimpleInterpolation
    flexC: FlattenSimpleInterpolation
    flexSC: FlattenSimpleInterpolation
    flexEC: FlattenSimpleInterpolation
    flexBC: FlattenSimpleInterpolation
  }
}
