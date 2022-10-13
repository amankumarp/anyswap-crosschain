import React from 'react'
import Logo from "../../assets/svg/xtring_logo_wt.png";
import DarkLogo from "../../assets/svg/xtring_logo-bk.png";
import { useDarkModeManager } from '../../state/user/hooks';
import styled from 'styled-components';

const FooterStyle =styled.div`
width:1440px;
padding-bottom:50px;
margin:auto
.sm_logo {
    margin-top: 5px;
}
.sm_logo a{
        color:  ${({ theme }) => theme.homeLogo};
        font-size: 22px;
        margin: 0 5px;
}
.sm_logo a:hover{
    color: #00c675;
}
.fr_side .fa{
   font-size: 22px;
   margin: 0 5px;
   color: #00c675;
}
.fr_side{
    text-align: right;
    color: ${({ theme }) => theme.text7};
    padding-top: 10px;
    font-size: 16px;
}
.footer_link {
    padding:20px 0 10px; 
}
.footer_link a{
     color: ${({ theme }) => theme.homeText3};
     margin-right: 20px;
}
.cr_area{
    color: ${({ theme }) => theme.homeText3};;
    font-size: 13px;
    padding-top: 20px;
    text-align: right;
}
.footer-logo{
    width:150px;
    ${({ theme }) => theme.mediaWidth.upToSmall`
    width:120px
    `
}
}
.footer_link{
  font-size:12px
}
${({ theme }) => theme.mediaWidth.upToExtraLarge`
width:100%;`}
${({ theme }) => theme.mediaWidth.upToSmall`
padding-bottom:100px`
}
`


export default function Footer() {
    const [isDark] = useDarkModeManager()
  return (
    <>
    <FooterStyle>
        <div id="footer" className="container-fluid our_features our_contacts mt100">
          <div className="row">
            <div className="col-md-4 col-sm-4">
              <img src={isDark?`${Logo}`:`${DarkLogo}`} alt="logo" className='footer-logo' />
             
            </div>
            <div className="col-md-4 col-sm-4 text-center">
              <div className="sm_logo ">
                <a href="">
                  <i className="fa-brands fa-twitter" aria-hidden="true"></i>
                </a>
                <a href="">
                  <i className="fa-brands fa-telegram" aria-hidden="true"></i>
                </a>
                <a href="">
                  <i className="fa-brands fa-medium" aria-hidden="true"></i>
                </a>
                <a href="">
                  <i className="fa-brands fa-github-square" aria-hidden="true"></i>
                </a>
                <a href="">
                  <i className="fa fa-file-text" aria-hidden="true"></i>
                </a>
                <a href="">
                  <i className="fa-brands fa-github-alt" aria-hidden="true"></i>
                </a>
              </div>
            </div>
            <div className="col-md-4 col-sm-4">
              <div className="fr_side">
                Have questions?{' '}
                <a href="">
                  <i className="fa fa-paper-plane" aria-hidden="true"></i>
                </a>{' '}
                <a href="mailto:support@speciex.network">
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-sm-8">
              <div className="footer_link">
                <a href="/#/disclaimer">Disclaimer</a>
                <a href="/#/privacy-policy">Privacy And GDPR Policy</a>
                <a href="/#/term&amp;condition">Terms And Conditions</a>
                {/* <a href="">Cookies Policy</a> */}
              </div>
            </div>
            <div className="col-md-6 col-sm-4">
              <div className="cr_area">
                Copyright <span className="robo">© 2022</span> All rights reserved. Xtring
              </div>
            </div>
          </div>
        </div>
        </FooterStyle>
    </>
  )
}
