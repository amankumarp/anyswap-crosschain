// import { transparentize } from 'polished'
import React, { useMemo } from 'react'
import styled, {
  ThemeProvider as StyledComponentsThemeProvider,
  createGlobalStyle,
  css,
  DefaultTheme
} from 'styled-components'
import { useIsDarkMode } from '../state/user/hooks'
import { Text, TextProps } from 'rebass'
import { Colors } from './styled'

export * from './components'

const MEDIA_WIDTHS = {
  upToEs:400,
  upToExtraSmall: 500,
  upToSmall: 768,
  upToMedium: 960,
  upToLarge: 1180,
  upToExtraLarge:1350
}

const mediaWidthTemplates: { [width in keyof typeof MEDIA_WIDTHS]: typeof css } = Object.keys(MEDIA_WIDTHS).reduce(
  (accumulator, size) => {
    ;(accumulator as any)[size] = (a: any, b: any, c: any) => css`
      @media (max-width: ${(MEDIA_WIDTHS as any)[size]}px) {
        ${css(a, b, c)}
      }
    `
    return accumulator
  },
  {}
) as any

const white = '#FFFFFF'
const black = '#000000'

export function colors(darkMode: boolean): Colors {
  return {
    // base
    white,
    black,
   

    // text
    //C3C5CB
    text1: darkMode ? '#FFFFFF' : '#96989e',
    text2: darkMode ? '#00c675' : '#565A69',
    text3: darkMode ? '#ddd' : '#fff',
    text4: darkMode ? '#565A69' : '#C3C5CB',
    text5: darkMode ? 'rgb(21, 26, 47)' : '#EDEEF2',
    text6: darkMode ? '#ddd' : '#999',
    text7: darkMode ? '#fff' : '#000',
    text8: darkMode ? "#000" :"#fff",
    text9: darkMode ? `#FFFFFF` : "#787b82",
    textNav: darkMode ? '#979dac' : '#062536',
    textColor: darkMode ? 'white' : '#000',
    textColorBold: darkMode ? white : '#062536',

    // backgrounds / greys
    // rgb(21, 26, 47)
    // navBg: darkMode ? '#21263e' : '#031a6e',
   // contentBg: darkMode ? '#21263e' : white,
    bg1: darkMode ? '#212429' : '#FFFFFF',
   
    bg2: darkMode ? '#0b090e' : '#F7F8FA',
    bg3: darkMode ? '#40444F' : '#f1f1f1',
    bg4: darkMode ? '#565A69' : '#CED0D9',
    bg5: darkMode ? '#ddd' : '#999',
    bg6: darkMode ? "#000" : white,
    bg7: darkMode ? '#141313' : '#F7F8FA',
    bg8: darkMode? '#0b090e':white,
    bg9: darkMode ?"#0b090e" :"#f7f7f7",
    text10:darkMode ? '#a4a2a7' : '#ccc',
    recieve: darkMode? '#c9c9c9' :'#898080',
    contentBg: darkMode ? '#21263e' : white,
    contentBg1: darkMode ? '#0b090e' : white,
    contentBg3:darkMode? "#212122" :white,
    contentBg2: darkMode ? "#0b090e"  : white,  
    drop:darkMode ? "#0b090e" : white,
 

    
    navIconBg: darkMode ? '#363d5f' : 'rgba(0,0,0,0.05)',
    navBg: darkMode ? '#21263e' : '#031a6e',
    navBg2: darkMode ? '#363d5f' : '#031a6e',
    bgColorLinear: 'linear-gradient(to right,#00c679 ,#34bb93)',
    outLinkIconBg: darkMode ? '#2b314f' : '#ecf6ff',
    bodyBg: darkMode ? '#151a2f' : '#f9fafb',
    tabBg: darkMode ? '#2b314f' : white,
    tabActiveBg: darkMode ? '#6725fc' : 'none',
    tabColor: darkMode ? white : '#96989e',
    tabActiveColor: darkMode ? '#00c675' : '#00c675',
    tabActiveColor1: darkMode ? "#00c675" : 'white',
    tabBdColor: darkMode ? 'none' : '#734be2',
    tipBg: darkMode ? 'transparent' : '#f2edff',
    tipBg1: darkMode ? 'radial-gradient(circle, #15111d, #181420, #1b1723, #1e1927, #211c2a)' : '#00c6791c',
    search: darkMode ? 'radial-gradient(circle, #15111d, #181420, #1b1723, #1e1927, #211c2a)' : white,
    tipBorder: darkMode ? '#2b314f' : '#b398f9',
    tipColor: darkMode ? white : '#00c675',
    hoverEffect: darkMode ?'#231f2a' :"rgb(87 188 188 / 10%)",

    lightPuroleBg: darkMode ? '#2b314f' : 'rgb(246, 244, 255)',
    viewMoreBtn: darkMode ? '#2b314f' : '#f9fafb',

    selectedBg: darkMode ? '#2b314f' : '#ecf6ff',
    selectedHoverBg: darkMode ? '#252b49' : '#deefff',

    selectedBorder: darkMode ? '#363d5f' : '#c0d6ea',
    selectedBorder1: darkMode ? 'rgba(255,255,255,0.2)' : '#c0d6ea',
    selectedHoverBorder: darkMode ? '#4a5482' : '#6d9cc6',

    selectedBgNo: darkMode ? '#2b314f' : '#f8f8f9',
    selectedHoverBgNo: darkMode ? '#252b49' : '#f2f2f2',

    selectedBorderNo: darkMode ? '#363d5f' : '#d9d9e2',
    selectedHoverBorderNo: darkMode ? '#4a5482' : '#9c9cb0',

    inputBorder: darkMode ? '#5c677d' : '#062536',

    selectTextColor: darkMode ? white : '#031a6e',

    arrowBg: darkMode ? '#21263e' : white,

    swapBg: darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.1)',

    chaliceGray: darkMode ? '#7B7B7B' : '#AEAEAE',
    royalBlue: darkMode ? '#00c675' : '#00c675',
    placeholderGray: darkMode ? '#5F5F5F' : '#E1E1E1',
    activeGray: darkMode ? '#363d5f' : '#F7F8FA',
    activeGray1: darkMode ? '#120f0f' : '#F7F8FA',
    borderBg:darkMode ? 'rgb(255,255,255,0.1)' : 'rgb(0,0,0,0.1)',
    bluecolor:darkMode ? '#c9c9c9':`#2172E5`,
    anchorColor:darkMode ? "#00c675": "#2172E5",

    // backgrounds
    // bgc1: darkMode ? '#21263e' : '#FFFFFF',

    // // borders
    // bsd1: darkMode ? '7px 2px 26px 0 rgba(5, 6, 13, 0.24)' : '7px 2px 26px 0 rgba(0, 0, 0, 0.06)',
    //primary1: 'linear-gradient(to right, #734ce2 , #606bfb)',

    //specialty colors
    modalBG: darkMode ? 'rgba(0,0,0,.425)' : 'rgba(0,0,0,0.3)',
    advancedBG: darkMode ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.6)',
//primary4: darkMode ? '#5f6bfb' : '#5f6bfb',
    //primary colors
    primary1: 'linear-gradient(to right,#00c679 ,#34bb93)',
    primary2: darkMode ? '#3680E7' : '#FF8CC3',
    primary3: darkMode ? '#4D8FEA' : '#5f6bfb',
    primary4: darkMode ? '#00c675' : '#00c675',
    primary5: darkMode ? '#00c675' : '#00c675',

    // color text
    primaryText1: darkMode ? '#fff' : '#fff',

    // secondary colors
    secondary1: darkMode ? '#2172E5' : '#2483fe',
    secondary2: darkMode ? '#17000b26' : '#5f6bfb',
    secondary3: darkMode ? '#17000b26' : '#5f6bfb',

    birdgeStateBg: darkMode ? 'rgba(255,245,224,.2)' : 'rgba(255,245,224)',
    birdgeStateBorder: darkMode ? 'rgba(227,209,170, .2)' : 'rgba(227,209,170, 1)',
    birdgeStateBg1: darkMode ? 'rgba(226,249,229,.2)' : 'rgba(226,249,229,1)',
    birdgeStateBorder1: darkMode ? 'rgba(163, 218, 171, .2)' : 'rgba(163, 218, 171, 1)',
    birdgeStateBg2: darkMode ? 'rgba(255,104,113,.2)' : 'rgba(255,104,113,.2)',
    birdgeStateBorder2: darkMode ? 'rgba(255,104,113, .2)' : 'rgba(255,104,113,1)',

    // birdgeStateBg: '#fff5e0',
    // birdgeStateBorder: '#e3d1aa',
    // birdgeStateBg1: '#e2f9e5',
    // birdgedarkModeStateBorder1: '#a3daab',
    // birdgeStateBg2: 'rgb(255,104,113,.2)',
    // birdgeStateBorder2: 'rgb(255,104,113)',

     // homePage
     homeBorder: darkMode ? 'rgb(255,255,255,0.1)' : 'rgb(0,0,0,0.1)',
     homeText1: darkMode ? 'rgb(255,255,255,0.7)' : 'rgb(0,0,0,0.7)',
     homeText2: darkMode? 'rgb(255,255,255,0.6)':'rgb(0,0,0,0.8)',
     homeText3: darkMode? 'rgb(255,255,255,0.5)':'rgb(0,0,0,0.7)',
     homeBackground: darkMode ? "#0b090e":"#FFF",
     homeBackground1: darkMode ? "#0b090e":"rgba(58,175,175,0.1)",
     homeBackground2:darkMode ? "#0f0c11":"rgba(58,175,175,0.1)",
     homeLogo: darkMode ? "rgb(255,255,255,0.4)":"rgb(0,0,0,0.4)",

    // other
    red1: '#FF6871',
    red2: '#F82D3A',
    green1: '#27AE60',
    yellow1: '#FFE270',
    yellow2: 'rgb(3, 26, 110)',
    blue1: '#2172E5',

    moreBtn: darkMode ? '#363d5f' : '#f9fafb',

    // dont wanna forget these blue yet
    // blue4: darkMode ? '#153d6f70' : '#C4D9F8',
    // blue5: darkMode ? '#153d6f70' : '#EBF4FF',
  }
}

export function theme(darkMode: boolean): DefaultTheme {
  return {
    ...colors(darkMode),

    grids: {
      sm: 8,
      md: 12,
      lg: 24
    },

    //shadows
    shadow1: darkMode ? '#000' : '#2F80ED',
    shadow2: darkMode ? '7px 2px 26px 0 rgba(5, 6, 13, 0.24)' : '7px 2px 26px 0 rgba(0, 0, 0, 0.06)',
    contentShadow: darkMode ? '7px 2px 26px 0 rgba(5, 6, 13, 0.24)' : '7px 2px 26px 0 rgba(0, 0, 0, 0.06)',
    tableShadow: darkMode ? '0 0.125rem 0.25rem 0 rgba(0, 0, 0, 0.4)' : '0 0.125rem 0.25rem 0 rgba(0, 0, 0, 0.04)',


    // media queries
    mediaWidth: mediaWidthTemplates,

    // css snippets
    flexColumnNoWrap: css`
      display: flex;
      flex-flow: column nowrap;
    `,
    flexRowNoWrap: css`
      display: flex;
      flex-flow: row nowrap;
    `,
    flexC: css`
      display: flex;
      justify-content: center;
      align-items: center;
    `,
    flexSC: css`
      display: flex;
      justify-content: flex-start;
      align-items: center;
    `,
    flexEC: css`
      display: flex;
      justify-content: flex-end;
      align-items: center;
    `,
    flexBC: css`
      display: flex;
      justify-content: space-between;
      align-items: center;
    `
  }
}

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const darkMode = useIsDarkMode()

  const themeObject = useMemo(() => theme(darkMode), [darkMode])

  return <StyledComponentsThemeProvider theme={themeObject}>{children}</StyledComponentsThemeProvider>
}

const TextWrapper = styled(Text)<{ color: keyof Colors }>`
  color: ${({ color, theme }) => (theme as any)[color]};
`

export const TYPE = {
  main(props: TextProps) {
    return <TextWrapper fontWeight={500} color={'text2'} {...props} />
  },
  link(props: TextProps) {
    return <TextWrapper fontWeight={500} color={'primary1'} {...props} />
  },
  black(props: TextProps) {
    return <TextWrapper fontWeight={500} color={'text1'} {...props} />
  },
  white(props: TextProps) {
    return <TextWrapper fontWeight={500} color={'white'} {...props} />
  },
  body(props: TextProps) {
    return <TextWrapper fontWeight={400} fontSize={16} color={'text1'} {...props} />
  },
  largeHeader(props: TextProps) {
    return <TextWrapper fontWeight={600} fontSize={24} {...props} />
  },
  mediumHeader(props: TextProps) {
    return <TextWrapper fontWeight={500} fontSize={20} {...props} />
  },
  subHeader(props: TextProps) {
    return <TextWrapper fontWeight={400} fontSize={14} {...props} />
  },
  small(props: TextProps) {
    return <TextWrapper fontWeight={500} fontSize={11} {...props} />
  },
  blue(props: TextProps) {
    return <TextWrapper fontWeight={500} color={'primary1'} {...props} />
  },
  yellow(props: TextProps) {
    return <TextWrapper fontWeight={500} color={'yellow1'} {...props} />
  },
  darkGray(props: TextProps) {
    return <TextWrapper fontWeight={500} color={'text3'} {...props} />
  },
  gray(props: TextProps) {
    return <TextWrapper fontWeight={500} color={'bg3'} {...props} />
  },
  italic(props: TextProps) {
    return <TextWrapper fontWeight={500} fontSize={12} fontStyle={'italic'} color={'text2'} {...props} />
  },
  error({ error, ...props }: { error: boolean } & TextProps) {
    return <TextWrapper fontWeight={500} color={error ? 'red1' : 'text2'} {...props} />
  }
}

export const FixedGlobalStyle = createGlobalStyle`
html, input, textarea, button {
  font-family:sans-serif !important;
  font-display: fallback;
}
@supports (font-variation-settings: normal) {
  html, input, textarea, button {
    font-family: sans-serif !important;
  }
}

html,
body {
  margin: 0;
  padding: 0;
}

 a {
   color: ${colors(false).blue1}; 
   font-family: 'Manrope', sans-serif !important;
 }

* {
  box-sizing: border-box;
}

button {
  user-select: none;
}

html {
  font-size: 16px;
  font-variant: none;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  font-feature-settings: 'ss01' on, 'ss02' on, 'cv01' on, 'cv03' on;
  
}
`

export const ThemedGlobalStyle = createGlobalStyle`
html {
  color: ${({ theme }) => theme.text9};
  background-color: ${({ theme }) => theme.bg9};
}

body {
  min-height: 100vh;
  background-position: 0 -30vh;
  background-repeat: no-repeat;
}
/* 滚动条凹槽的颜色，还可以设置边框属性 */
::-webkit-scrollbar-track-piece {
  background-color:rgba(0,0,0,0.4);
}
/* 滚动条的宽度 */
::-webkit-scrollbar {
width:8px;
height:8px;
}
/* 滚动条的设置 */
::-webkit-scrollbar-thumb {
background-color:rgba(255,255,255,0.3);
background-clip:padding-box;
min-height:28px;
}
::-webkit-scrollbar-thumb:hover {
background-color:rgba(255,255,255,0.4);
}
`
