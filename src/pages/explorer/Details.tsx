import React from 'react'
import styled from 'styled-components'

export default function Details() {
    const Wrap = styled.div`
    width: 1000px;
    padding: 20px;
    margin-top:50px;
    font-size:14px;
    color: ${({ theme }) => theme.text7};
    border 1px solid;
    border-color: ${({ theme }) => theme.borderBg};
    .row{
        display:flex;
        ${({ theme }) => theme.mediaWidth.upToMedium`
        width: 100%;
        flex-direction:column;
        padding:5px 0px
    `}
       
    }
    .col3{
        width:25%;
        
        ${({ theme }) => theme.mediaWidth.upToMedium`
        width: 100%;
        p{
            margin:0px !important;
            font-size:13px;
        }
    `}
        
    };
    .col9{
        width:75%;
        word-break: break-all;
        p{
            word-wrap: break-word;
        }
        a{
           
            word-wrap: break-word;
            text-decoration:none;
        }
        .anchor:{
            display:flex;
            align-items:center;
        }
        ${({ theme }) => theme.mediaWidth.upToMedium`

        width: 100%;
        p{
            margin:0px !important;
            font-size:13px;
            
        }
        a{
            margin:0px 0px;
        }
`}
    }
    .bold{
        font-weight:bold;
    }
    ${({ theme }) => theme.mediaWidth.upToMedium`

    width: 100%;
    margin-top:30px;
    `}
    `
 
  return (
    <div>
      <Wrap>
      <div className="row">
        <div className="col3">
           <p className='bold'>Source Hash:</p>
        </div>
        <div className="col9 anchor"> <p><a href="#">0x3644e3758227cbcb888859a9a586136b4766af40a35e14e045f1ada845873f7b</a></p></div>
      </div>
      <div className="row">
        <div className="col3">
           <p className='bold'>Dest Hash:</p>
        </div>
        <div className="col9 anchor"> <p> <a href="#">0xdd19856612b4be36a1294444b8240e6883876714d3dfcc3e643fd701e4aff419</a> </p></div>
      </div>
      <div className="row">
        <div className="col3">
           <p className='bold'>Source Chain:</p>
        </div>
        <div className="col9"> <p>Optimism Mainnet</p></div>
      </div>
      <div className="row">
        <div className="col3">
           <p className='bold'>Dest Chain:</p>
        </div>
        <div className="col9"> <p>Fantom Mainnet</p></div>
      </div>
      <div className="row">
        <div className="col3">
           <p className='bold'>From:</p>
        </div>
        <div className="col9 anchor"> <p> <a href="#">0x6a435bcd8ec93346d558b84cbb213a31da52222b</a> </p></div>
      </div>
      <div className="row">
        <div className="col3">
           <p className='bold'>To:</p>
        </div>
        <div className="col9 anchor"> <p><a href="#">0x6a435bcd8ec93346d558b84cbb213a31da52222b</a> </p></div>
      </div>
      <div className="row">
        <div className="col3">
           <p className='bold'>Date:</p>
        </div>
        <div className="col9"> <p>2022/08/20 14:41</p></div>
      </div>
      <div className="row">
        <div className="col3">
           <p className='bold'>CoinType:</p>
        </div>
        <div className="col9"> <p>USDT</p></div>
      </div>
      <div className="row">
        <div className="col3">
           <p className='bold'>Send Value:</p>
        </div>
        <div className="col9"> <p>57,298.41</p></div>
      </div>
      <div className="row">
        <div className="col3">
           <p className='bold'>Receive Value:</p>
        </div>
        <div className="col9"> <p>57,297.91</p></div>
      </div>
      <div className="row">
        <div className="col3">
           <p className='bold'>Status:</p>
        </div>
        <div className="col9"> <p>Success</p></div>
      </div>
      </Wrap>
    </div>
  )
}
