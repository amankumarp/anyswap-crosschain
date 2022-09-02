import React, { useEffect,useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'


export default function Details() {
  const [data, setData] =useState([])

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
 
    console.log(window.location,"window.location.search");

   async function fetchDetails(){
      const query = window.location.hash.substring(17);
      const data = await axios.post("http://localhost:3000/v2/transctionDetail",{address:query})
     setData(data.data)


    }
    useEffect(()=>{
      fetchDetails()
     
      // console.log(apidata.),"apiData")
    },[])
    console.log(data,"datatata")
    const {srcChainTx,destChainTx,from,to,pairId,status,srcAmount,destAmount,destChainTimestamp , srcChainTimestamp,srcChainID, destChainID}:any = data;
    const destdate = new Date(destChainTimestamp*1000).toUTCString();
    const srcdate = new Date(srcChainTimestamp*1000).toUTCString();
    const srcChainName = srcChainID==97? "Binance TestNet" :srcChainID==1807?"Tarality Testnet": srcChainID==4369?"Rabbit Testnet":srcChainID==80001?"Matic Testnet":""
    const destChainName = destChainID==97? "Binance TestNet" :destChainID==1807?"Tarality Testnet": destChainID==4369?"Rabbit Testnet":destChainID==80001?"Matic Testnet":""
    // console.log(destdate,srcdate,"hola")

 
  return (
    <div>
      <Wrap>
      <div className="row">
        <div className="col3">
           <p className='bold'>Source Hash:</p>
        </div>
        <div className="col9 anchor"> <p><a href="#">{srcChainTx}</a></p></div>
      </div>
      <div className="row">
        <div className="col3">
           <p className='bold'>Dest Hash:</p>
        </div>
        <div className="col9 anchor"> <p> <a href="#">{status==1?destChainTx:<span style={{color:"#fff"}}>-</span>} </a> </p></div>
      </div>
      <div className="row">
        <div className="col3">
           <p className='bold'>Source Chain:</p>
        </div>
        <div className="col9"> <p>{srcChainName}</p></div>
      </div>
      <div className="row">
        <div className="col3">
           <p className='bold'>Dest Chain:</p>
        </div>
        <div className="col9"> <p>{destChainName}</p></div>
      </div>
      <div className="row">
        <div className="col3">
           <p className='bold'>From:</p>
        </div>
        <div className="col9 anchor"> <p> <a href="#">{from}</a> </p></div>
      </div>
      <div className="row">
        <div className="col3">
           <p className='bold'>To:</p>
        </div>
        <div className="col9 anchor"> <p><a href="#">{to}</a> </p></div>
      </div>
      <div className="row">
        <div className="col3">
           <p className='bold'>Date:</p>
        </div>
        <div className="col9"> <p>{status==1 ? destdate :srcdate}</p></div>
      </div>
      <div className="row">
        <div className="col3">
           <p className='bold'>CoinType:</p>
        </div>
        <div className="col9"> <p>{pairId?.substring(6)}</p></div>
      </div>
      <div className="row">
        <div className="col3">
           <p className='bold'>Send Value:</p>
        </div>
        <div className="col9"> <p>{srcAmount/1e18}</p></div>
      </div>
      <div className="row">
        <div className="col3">
           <p className='bold'>Receive Value:</p>
        </div>
        <div className="col9"> <p>{destAmount/1e18}</p></div>
      </div>
      <div className="row">
        <div className="col3">
           <p className='bold'>Status:</p>
        </div>
        <div className="col9"> <p>{status==1?"Success":"Pending"}</p></div>
      </div>
      </Wrap>
    </div>
  )
}
