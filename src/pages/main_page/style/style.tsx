import styled, { keyframes } from 'styled-components'


const text4 = keyframes`
0%,25%, 50%,75%, 100%  {
    width: 0;
    
  }
  
  80%, 95% {
    width: 70%;
  }
`

const text3 = keyframes`
0%,25%, 50%,75%, 100%  {
    width: 0;
    
  }
  
  55%, 70% {
    width: 82%;
  }
`
const text2 = keyframes`
0%,25%, 50%,75%, 100%  {
    width: 0;
    
  }
  
  30%, 45% {
    width: 70%;
  }
`
const text1 = keyframes`
0%,25%, 50%,75%, 100% {
    width: 0;
  }
  5%,20% {
    width: 90%;
  }
`
const caret = keyframes`
0%, 100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
`


export const HomePage = styled.div`

width:1440px !important;
font-size:62.5%;


  .text_1 {
    animation: ${text1};
    &:after{
        content: "|";
  position: absolute;
  right: 0;
  animation: ${caret} infinite;
  animation-duration: 1s;
  animation-timing-function: steps(1, end);
    }
  }
  
  .text_2 {
    animation: ${text2};
    &:after{
        content: "|";
  position: absolute;
  right: 0;
  animation: ${caret} infinite;
  animation-duration: 1s;
  animation-timing-function: steps(1, end);
    }
  }
  .text_3 {
    animation: ${text3};
    &:after{
        content: "|";
  position: absolute;
  right: 0;
  animation: ${caret} infinite;
  animation-duration: 1s;
  animation-timing-function: steps(1, end);
    }
  }
  .text_4 {
    animation: ${text4};
    &:after{
        content: "|";
  position: absolute;
  right: 0;
  animation: ${caret} infinite;
  animation-duration: 1s;
  animation-timing-function: steps(1, end);
    }
  }
  .text_1, .text_2,.text_3,.text_4 {
    overflow: hidden;
    white-space: nowrap;
    display: inline-block;
    position: relative;
    animation-duration: 20s;
    animation-timing-function: steps(25, end);
    animation-iteration-count: infinite;
  }


a{
    text-decoration: none;
    cursor: pointer;
    transition: all 0.5s ease 0s;
}
ul{
    margin: 0;
    padding: 0;

}
li{
    list-style: none;
}
h1, h2, h3, h4, h5, h6{
    font-family: 'CodecColdTrial-ExtraLight';
    font-weight: 300;
}width:1350px;
a:hover{
    text-decoration: none;
    transition: all 0.5s ease 0s;
}
.mb20{
    margin-bottom: 20px
}
.mt50{
    margin-top: 50px;
}
.mt100{
    margin-top: 100px
}
.mb-x{
    margin-bottom: 10px;
}
.mb-2x{
    margin-bottom: 20px;
}
.mb-4x{
    margin-bottom: 40px;
}
.padding-2x{
    padding: 20px;
}
.mt_20{
    margin-top: 20px;
}
.relative{
    position: relative;
}
.reports_icon{
    font-size:16px;
    display:flex;
    align-items:center;
    justify-content:center;
    color: ${({ theme }) => theme.homeText2};
}
.reports_block p{
    font-size:14px;
    color: ${({ theme }) => theme.homeText2};
}


/*------- transitions -------*/
.transition{
    transition: 0.2s all;
    -o-transition: 0.2s all;
    -moz-transition: 0.2s all;
    -webkit-transition: 0.2s all;
}

.container-fluid {
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    padding-left: 15px;
    padding-right: 15px;
}

.header{
    position: relative;
    padding: 20px 0;
    --toolbar-height: 88px;
}
.menu {
    display: flex;
    align-items: center;
}
.menu li {
    margin: 9px 30px 0 0px;
    position: relative;
}
.logo {
    width: 140px;
}
.menu li a{
    color: rgb(255,255,255,0.7);
}
.banner_text {
    padding-top: 80px;
}
.banner_text h1,.banner_text h2 {
    font-size: 45px;
    color: ${({ theme }) => theme.text7};
    font-weight: 500;
    letter-spacing: 2px;
    margin:0px
}
.banner_text .type3{
    color: #00c675;
}
.banner_text .type1{
   line-height:65px
}
.banner_text p{
    color: ${({ theme }) => theme.text7};
    font-size: 16px;
    font-weight: 300;
    margin:30px 0; 
}
.main_btn{
    padding:14px 30px; 
    background-color: #00c675;
    color: #fff;
    font-weight: 500;
    border-radius: 5px;
    display: inline-block;    
    font-size: 16px;
    min-width: 233px;
    text-align: center;
    margin-top:10px;
}
.main_btn:hover{
    background-color: #00c675;
    color: #fff;
    text-decoration: none;
}
#bridged{
    text-align: center;
    margin-top: 100px
}
#bridged .bridged_heading{
    font-size: 53px;
    color: #00c675!important;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
}
.robo, .step a{
    font-family: 'Roboto', sans-serif;
}
#bridged p{
    color: ${({ theme }) => theme.homeText1};
    font-size: 18px;
    font-weight: 300;
}
#bridged .col-md-6.col-sm-6.col-xs-6 {
    border-right: 1px solid ${({ theme }) => theme.homeBorder}
}
#bridged .col-md-6.col-sm-6.col-xs-6:last-child{
    border: 0;
}
#bridged .col-md-4{
    border-right: 1px solid rgb(255,255,255,0.1);
}
#bridged .col-md-4:last-child{
    border-right: 0;
}
#bridged a{
    color: rgb(255,255,255,0.1);
    font-size: 18px;
}
#bridged span{
    color:${({ theme }) => theme.homeText1};
}
.our_features h2{
    color: ${({ theme }) => theme.text7}
}

.our_features_block {
    padding: 40px;
    border: 1px solid  ${({ theme }) => theme.homeBorder};
    background: ${({ theme }) => theme.homeBackground};
    border-radius: 10px;
    min-height: 220px;
    margin-top: 20px;
}
.our_features_center{
   position:relative;
   left:50%;
   transform:translate(-50%)
} 
.our_features_block p{
    color: ${({ theme }) => theme.homeText2};
}
.our_features_block h4{
color:#00c675;
}

.our_features_block h4{
    font-size: 24px;
    margin-top: 20px;
}
.our_features_block p{
    font-size:14px
}
.mptb30{
    margin: 30px 0;
}
.nav-tabs > li > a {
    border: 0;
    border-radius: 0;
    text-align: center;
    height: 50px;
}
.nav-tabs > li > a img {
    opacity: 0.5;
    width: 24px;
}
.nav-tabs > li.active > a img{
    opacity: 1;
}

.nav-tabs > li.active > a, .nav-tabs > li.active > a:hover, .nav-tabs > li.active > a:focus {
    background-color: transparent;
    border-color: transparent;
    border: 0;
}
.nav-tabs > li.active > a:focus{
    border: 0!important;
}
.nav > li > a:hover, .nav > li > a:focus {
    text-decoration: none;
    background-color: transparent;
    border:0;
}
.nav-tabs > li > a:hover {
    border-color: transparent;
    border:0;
}
.nav-tabs > li > a:hover img {
    opacity: 1;
}
a:focus {
    outline: none;
}
#our_supported_area .nav-tabs > li {
    width: 7.14%;
}
.nav-tabs > li.active{
    border-bottom: 1px solid #00c675 !important;
}
.nav-tabs {
    border-bottom:1px solid ${({ theme }) => theme.homeBorder};
}
.tab_area {
    border: 1px solid ${({ theme }) => theme.homeBorder};
    padding: 4%;
    float: left;
    width: 100%;
    margin-top: 40px;
    border-radius:5px;
}
.tab_area li {
    float: left;
    width: 20%;
    padding: 12px 0;
    color: ${({ theme }) => theme.homeText2};;
}
.tab_area img{
    width: 23px;
    height: 23px;
    margin-right: 9px;
}
.stroked-btn {
    --bg-alpha: 1;
    --bg-color: transparent;
    --text-alpha: 1;
    --text-color: var(--primary-color--rgb);
    --border-color: var(--primary-color--rgb);
    --border-alpha: 1;
    --outline-color: transparent;
    background-color: rgba(var(--bg-color), var(--bg-alpha));
    color: rgba(var(--text-color), var(--text-alpha));
    border: 1px solid rgba(var(--border-color), var(--border-alpha));
    box-shadow: 0 0 1px 1px var(--outline-color);
    font: 200 16px var(--main-font);
    padding: 15px 28px 13px;
    border-radius: 6px;
    text-align: center;
    transition: color .25s, background-color .25s, border-color .25s;
}
.stroked_btn{
    border: 1px solid #00c675;
    border-radius: 5px;
    padding: 10px 30px;
    display: inline-block;
    margin-top: 30px; 
    font-size: 17px;
    color:#00c675;
}

.stroked_btn:hover{
    color:#00c675;
    background-color: rgb(84, 178, 179, 0.1);
    text-decoration: none;
}
.i100{
    width: 100%;
}
.use_allbridge_left, .use_allbridge_right {
    position: absolute;
    width: 160px;
    z-index: 1;
    top: 0;
    ${({ theme }) => theme.mediaWidth.upToEs`
    position: static;
    `}

}
.use_allbridge_left strong{
    color: #00c675;
    font-family: 'Roboto', sans-serif;
}
.use_allbridge_right strong{
    color: #ff5c00;
    font-family: 'Roboto', sans-serif;
}
.use_allbridge_left span, .use_allbridge_right span {
    display: block;
    width: 100%;
    font-size: 17px;
    color: ${({ theme }) => theme.text7};
    padding: 6px 0;
}

 .use_allbridge_right {
    right:30px;
}

#our_supported_area .nav-tabs > li {
    width: 7.14%;
}
#our_token_area .nav-tabs > li{
    width: 8.33%;
}
#our_token_area .main_btn{
    min-width: auto;
    padding: 12px 30px;
}
#our_token_area .col-md-12 a{
    margin-right: 20px;
}
.partners_logo {
    width: 30px;
    height: 30px;
    margin-top: -3px;
    margin-right: 10px;
}
.our_partners_list li {
    border: 1px solid rgb(255,255,255,0.1);
    border-radius: 5px;
    margin-top: 20px;
    float: left;
    width: 18.3%;
    margin-right: 2%;
}
.our_partners_list li:nth-child(5n) {    
    margin-right: 0;
}
.our_partners_list li a{
    display: block;
    width: 100%;
    padding:15px 15px;
    color: ${({ theme }) => theme.text7};
    background-color: ${({ theme }) => theme.homeBackground2};;
    border-radius: 5px;
}
.our_partners_list li a:hover{
    background-color: ${({ theme }) => theme.homeBackground2};;
    text-decoration: none;
    color:${({ theme }) => theme.text8};
}
.reports_block{
    border: 1px solid  ${({ theme }) => theme.homeBorder};
    border-radius: 5px;
    padding: 40px;
    color: ${({ theme }) => theme.text7};
    background-color: ${({ theme }) => theme.homeBackground};;
    font-size: 16px;
    ${({ theme }) => theme.mediaWidth.upToSmall`
    padding: 30px;
    `}
}
.reports_icon {
    font-size: 18px;
}
.reports_block .stroked_btn {
    display: block;
    text-align: center;
}

.reports_block h4{
    color:#00c675
   
}
.reports_block p{
    margin: 20px 0 15px; 
}
#Reports_area .col-md-6{
    margin-bottom: 30px;
}
.our_contacts_list{
    float: left;
    width: 100%;
}
.our_contacts_list li{
     border: 1px solid ${({ theme }) => theme.homeBorder};
     float: left;
     width: 31.3%;
     margin-right: 3%;     
     border-radius: 5px;
     margin-bottom: 20px;
   
}
.our_contacts_list li a .fa {
    color: ##00c675: 23px;
    margin-right: 10px;
}
.our_contacts_list li a {
    display: block;
    padding: 27px 32px;
    color: ${({ theme }) => theme.homeText2};;
    background: ${({ theme }) => theme.homeBackground2};
    font-size: 18px;
}
.our_contacts_list li a:hover{
    text-decoration: none;
    background-color: #00c675;
}
.our_contacts_list li a:hover .fa {
    color: #fff;
}
.our_contacts_list li:nth-child(3n){
     margin-right: 0;
}
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
.stroked_btn.Launch_btn {
    position: absolute;
    top: -29px;
    right: 0;
    min-width: 180px;
    text-align: center;
}
.choose_blockchain{
    max-width: 750px;
    margin: 0 auto;
    border: 1px solid rgb(255,255,255,0.1);
    padding: 30px;
    border-radius: 5px;
    margin-top: 70px;
}

.choose_blockchain_link{
    color: #00c675;
}
.finish_transfer {
    border-radius: 20px;
    color: #ff480a;
    background-color: rgba(255, 92, 0, 0.1);
    display: inline-block;
    padding: 3px 15px;
    position: absolute;
    right: 30px;
}
.finish_transfer:hover{
    background-color: rgba(255, 92, 0, 0.3);
    color: #ff480a;
}
.fake_select {
    display: flex;
    align-items: center;
    margin-top: 8px;
    padding: 9px 18px 8px;
    min-height: 48px;
    background: linear-gradient(180deg,rgba(var(--gradient-stop-color-1),.5) 0,rgba(var(--gradient-stop-color-2),.5) 100%);
    border: 1px solid rgb(255,255,255,0.1);
    width: 100%;
    position: relative;
    color: #fff;
    font-size: 16px;
    font-weight: 300;
}
.fake_select:hover{
     color: #fff;
}
.step_form button img{
    width: 25px;
    margin-right: 20px;
}
.btn_arrow {
    position: absolute;
    right: 20px;
    font-size: 22px;
    color: rgb(255,255,255,0.3);
}
.step_form h3{
    color: #fff;
}

.arrow_down {
    display: inline-block;
    border-radius: 100%;
    border: 1px solid #333;
    width: 40px;
    height: 40px;
    text-align: center;
    line-height: 36px;
    cursor: pointer;
    margin: 0 auto;
    margin-top: 20px;
    margin-bottom: 20px;
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    top: 277px;
}
.step_form label{
    color: #fff;
    font-weight: 300;
}
.btn_area{
    margin-top: 25px;
}
.mt25{
    margin-top: 25px;
}
.choose_asset img {
    width: 30px;
}
.sht_logo {
    position: relative;
    top: 17px;
    height: 42px;
    display: inline-block;
    float: left;
}
.sht_logo .fa.fa-angle-right {
    font-size: 28px;
}
.sht_logo img {
    position: relative;
    top: -5px;
}
.abr {
    float: left;
    position: relative;
    top: 12px;
    margin-left: 10px;
    color: #fff;
}
.abr a {
    color: rgb(255,255,255,0.3);
    padding: 0 4px;
}
.abr span{
    display: block;
    color: rgb(255,255,255,0.3);
    font-size: 13px;
}
.abr span a{
    color: #00c675;
    font-size: 13px;
}
.choose_blockchain.top20{
    margin-top: 30px!important;
    font-size: 20px;
}

.step_area {
    padding: 20px 0;
    text-align: center;
}

.step {
    width: 190px;
    display: inline-block;
    border-bottom: 1px dotted #595959;
    text-align: left;
}
.step a {
    border: 1px solid rgb(255,255,255,0.3);
    width: 25px;
    height: 25px;
    display: inline-block;
    border-radius: 100%;
    line-height: 25px;
    color: rgb(255,255,255,0.3);
    font-size: 13px;
    text-align: center;
    margin-right: 26px;
    background-color: #151316;
    position: relative;
    top: 13px;
}
.step a:last-child{
    margin-right: 0;
}
.active_link{
    border: 1px solid #00c675 !important;
    color: ##00c675 !important;
}
.active_menu a{
    color: #00c675 !important;
}
.drop_menu {
    position: absolute;
    top: 22px;
    background: #333;
    border-radius: 5px;
    padding: 2px 10px;
    width: 114px;
    z-index: 1;
    border: 1px solid rgb(255,255,255,0.2);
    background-color: #151316;
}
.drop_menu li {
    margin:5px 0;

}
.drop_menu li a:hover{
    color: #fff;
}
#toogle_menu {
    font-size: 23px;
    font-weight: 300;
    margin-right: 10px;
    position: absolute;
    top: 1px;
    display: none;
    cursor: pointer;
}
.banner_img {
    float: right !important;
}
.banner_img .i100 {
    margin-top: 80px;
}
.i100.db {
    display: block;
}
.i100.dn {
    display: none;
}


.modal-content {
    position: relative;
    background-color: #171518;
    border: 1px solid rgb(255,255,255,0.2);;
    border-radius: 5px;
}
.modal-dialog {
    width: 400px;
    margin: 30px auto;
    border-radius: 0;
}
.modal-body h3 {
    margin: 0;
    color: #fff;
}
.modal-body input {
    background-color: #272628;
    border: 0;
    width: 100%;
    padding: 0 15px;
    border-radius: 5px;
    height: 41px;
    margin: 12px 0 010px;
}
.popup_ul button{
    border: 0;    
}
.popup_ul button img {
    width: 29px;
    margin-right: 13px;
}
.popup_ul button .btn_arrow {
    position: absolute;
    right: 11px;
    font-size: 16px;
    color: #62d2d2;
    display: none;
}
.popup_ul button:hover{
    background-color: #1d2226;
}
.popup_ul button:hover .btn_arrow {
    display: block;
}

.popup_ul{
  -ms-overflow-style: none; /* for Internet Explorer, Edge */
  scrollbar-width: none; /* for Firefox */
  overflow-y: scroll; 
}

.modal-body .popup_ul::-webkit-scrollbar {
  display: none; /* for Chrome, Safari, and Opera */
}

/* other styling */
.modal-body .popup_ul{
  max-height: 400px;
}
.modal-body h4{
    color: #fff;
}
.btn.fake_select.active{
    background-color: #1d2226;
}
.btn.fake_select.active .btn_arrow {
    display: block;
}

#count1{
    color: #00c675 !important
}

[data-animate-in] {
    opacity: 0;
    transition: transform 0.8s ease, opacity 0.8s ease
}

[data-animate-in="up"] {
    transform: translate3d(0, 24px, 0)
}

[data-animate-in="left"] {
    transform: translate3d(-25%, 0, 0)
}

[data-animate-in="right"] {
    transform: translate3d(25%, 0, 0)
}

[data-animate-in="down"] {
    transform: translate3d(0, -24px, 0)
}

[data-animate-in="fadeIn"] {
    transform: translate3d(0, 0, 0)
}

[data-animate-in].in-view {
    opacity: 1;
    transform: translate3d(0, 0, 0);
    -webkit-transform: translate3d(0, 0, 0);
    transition: transform 0.6s ease, opacity 0.6s ease
}

.fade-in {
    opacity: 0;
    transition: opacity 1s ease
}

.page-loaded .fade-in,.page-loaded.fade-in {
    opacity: 1
}

.isSafari.isTouch [data-animate-in],.isSafari.isTouch [data-animate-in="up"] {
    opacity: 1;
    transition: none;
    transform: none
}

#our_features_area .col-md{
    overflow: hidden;
}

${({ theme }) => theme.mediaWidth.upToExtraLarge`
max-width:1200px !important
.banner_text h1, .banner_text h2{
    font-size:36px;
}
.banner_text .type1{
    line-height:50px
 }
 .reports_block1{
    padding-bottom:40px !important
}

`}
${({ theme }) => theme.mediaWidth.upToLarge`
max-width:1150px !important
.banner_text h1,.banner_text h2{
    font-size:36px;
}
.banner_text .type1{
    line-height:50px
 }

`}
${({ theme }) => theme.mediaWidth.upToMedium`
max-width:100% !important;
.banner_block{
    width: 100%;
}
.banner_img {
    float: left;
    text-align: center;
}
.banner_img .i100 {
    width: 100% !important;
}
.banner_text {
    text-align: center;
}
.banner_img .i100 {
    width: 500px;
}

#toogle_menu {
    display: block;
    z-index: 2;
}
#toogle_menu:hover {
    color: #00c675 !important
}
.menu_block {
    width: 50%;
    float: left;
} 
.logo {
    width: 140px;
    margin-left: 31px;
    position: relative;
    z-index: 3;
}
.Launch_btn{
    z-index: 3
}
.menu {
    position: absolute;
    top: 0;
    left: 0;
}
.menu_area{
    position: inherit;
}
.stroked_btn.Launch_btn {
    top: -12px;
    right: 39px;
}
.menu_block_toggle{
    background-color: red!important;
    float: left;
    width: 100%;
}
.menu {
    position: absolute;
    top: 0;
    left: 0;
    background: rgb(0,0,0,0.9);
    width: 100%;
    text-align: center;
    height: 100vh;
    z-index: 1;
    display: block;
    padding: 75px 0;
}
.menu li a {
    color: rgb(255,255,255,0.7);
    font-size: 20px;
}
.menu li:nth-child(5) > a {
    display: none;
}
.drop_menu {
    position: absolute;
    top: 0;
    background: none;
    border-radius: 5px;
    padding: 2px 10px;
    width: 114px;
    z-index: 1;
    border: 0;
    background-color: no;
    text-align: center;
    width: 100%;
    display: block!important;
}
#our_token_area .i100 {
    width: 400px;
}
#our_token_area .col-md-4{
    text-align: center;
}
#bridged .bridged_heading {
    font-size: 28px;
}
.our_contacts_list li a {
    font-size: 15px;
}
.footer_link a {
    margin-right: 9px;
    font-size: 12px;
}
.cr_area {
    font-size: 10px;
    padding-top: 23px;
}
.banner_img .i100 {
    margin-top:30px;
}
.menu{
    display: none;
}

    `}
${({ theme }) => theme.mediaWidth.upToSmall`

.stroked_btn.Launch_btn {
    min-width: auto;
    padding: 10px 13px;
}
.banner_text h1, .banner_text h1{
    font-size:45px;
}
.logo {
    width: 114px;
    top: 4px;
}
.stroked_btn{
    font-size: 15px;
}
#bridged .bridged_heading {
    font-size: 20px;
}
#bridged p {
    font-size: 15px;   
}
.nav_li_area {
    overflow-x: auto;
    white-space: nowrap;
    padding-bottom: 12px;
}
.tab_area li {
    float: left;
    width: 32%;
    padding: 12px 0;
}
.nav.nav-tabs {
    display: flex;
}
#our_supported_area .nav-tabs > li, #our_token_area .nav-tabs > li {
    width: 13.14% !important;        
}
.nav > li > a {
    display: inline-block;        
}
.nav-tabs > li{
    border-bottom: 1px solid rgb(255,255,255,0.1)!important;
}
.our_partners_list li {
    width: 49%;
    margin-right: 1%;
}
.our_partners_list li:nth-child(5n) {
    margin-right: 1%;
}
.our_contacts_list li {
    width: 100%;
    margin-right: 0;
}
.container-fluid {
    width: 100%;
}
.mt100 {
    margin-top: 10px;
}
#footer .col-md-4.col-sm-4 {
    width: 100%;
    text-align: center;
}
.fr_side {
    float: none;
    text-align: center;
}
.stroked_btn.Launch_btn {
    right: 15px;
}
#bridged .bridged_heading {
    font-size: 30px;
    margin: 0;
}
.our_features_block {
    padding: 30px;
  
}
.reports_icon img{
    width:40px;
    margin-right:10px;
}
.features_title {
    font-size:20px
}
.reports_icon{
    font-size:16px;
    justify-content:flex-start;
    color: ${({ theme }) => theme.homeText2};
}
.reports_block p{
    font-size:14px;
    color: ${({ theme }) => theme.homeText2};
}
.our_features_block p {
    font-size:12px;
}
.db{
    display:none !important
}
.dn{
    padding-top:0px;
    display:inline-block !important
}



`}

${({ theme }) => theme.mediaWidth.upToExtraSmall`
    max-width:100% !important;
    .i100{
        width: 100%;
    }
    .tab_area li {
        width: 48%;
    }
    .partners_logo {
        width: 21px;
        height: 21px;
        font-size: 14px;
    }
    .banner_text h1,.banner_text h2 {
        font-size: 23px;
         font-weight:600
    }
    .banner_text .type1{
        line-height:40px
     }
  
    .step_form h3{
        font-size: 15px!important;
       
    }
    .arrow_down {
        top: 266px;
    }
    .choose_blockchain .main_btn {
        min-width: 169px !important;
    }
    .finish_transfer {
        right: 0;
        top: -32px;
    }
    .modal-dialog {
        width: 300px;
    }
    #our_token_area .i100 {
        width: 100%;
    }
 
    .main_btn{
        width:100%
    }
    .stroked_btn{
        width:100%;
        text-align:center

    }
    .reports_block1{
        padding-bottom:40px !important
    }
    
`}

${({ theme }) => theme.mediaWidth.upToEs`
   max-width:100% !important;
   .banner_text h1,.banner_text h2 {
    font-size: 20px;
}
.banner_text .type1{
    padding-bottom:0px
}
`}





`
