import React, { useEffect, useState , CSSProperties} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { useLocation } from 'react-router-dom';
import { nodeApi } from '../../config/constant';
import BarLoader from 'react-spinners/BarLoader';
import moment from 'moment';

const Wrap = styled.div`
width: 1000px;
margin-top:50px;
font-size:14px;
color: ${({ theme }) => theme.text7};
border 1px solid;
border-color: ${({ theme }) => theme.borderBg};
background:${({ theme }) => theme.contentBg4}
.msg{
  color: ${({ theme }) => theme.text7};
};
.ml{
  margin-left:15px;
  font-weight:600;
  
  font-size:30px;
  line-height:45px;
  ${({ theme }) => theme.mediaWidth.upToMedium`
  font-size:24px;
  line-height:38px
  `}
  ${({ theme }) => theme.mediaWidth.upToSmall`
  margin-left:5px;
  `}
}
.row{
    display:flex;
    margin-bottom:15px; 
    margin-left:20px;
    margin-right:20px;
    ${({ theme }) => theme.mediaWidth.upToMedium`
    margin-bottom:8px; 
    width: 100%;
    flex-direction:column;
    padding:5px 10px;
    margin-left:0px;
    margin-right:0px;
    
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
.loading{
    width:100%;
    position:relative;
    height:100px
    display:flex;
    justify-content:center;
    align-items:center;

}

${({ theme }) => theme.mediaWidth.upToMedium`

width: 100%;
margin-top:30px;
`}
`
export default function Details() {
  const location = useLocation();
  const [data, setData] = useState([]);
  const[loading,setLoading] =useState(true)
  const [textStatus,setTextStatus] =useState(false);

 const override: CSSProperties = {
    display: 'block',
    margin: '0 auto',
  }



  const qs = location.search.split('&')
  const string1 = qs[0]
  const txnHash = string1.split('=')[1]


  async function fetchDetails() {
   
    if (qs.length == 3) {
      const string2 = qs[1]
      const string3 = qs[2]
      const srcChainId = string2.split('=')[1]
      const destChainId = string3.split('=')[1]

      const dataa = await axios.post(`${nodeApi}/v2/transactionDetail/hash`, {
        address: txnHash.length>0?txnHash:"empty",
        srcChainId: srcChainId,
        destChainId: destChainId
      });
    

      console.log(dataa.data.flag,"dataa.data.status........");
      
      
      
      
      if(dataa.data?.flag ===false){
        setLoading(false);
      setTextStatus(true) ;

      }else if(dataa.data?.flag === undefined){
        
        setTextStatus(false)
        setLoading(false)
        setData(dataa.data);
       
      }
     
      
    }
  }

  useEffect(() => {
    fetchDetails()
  }, [])
  const {
    srcChainTx,
    destChainTx,
    from,
    to,
    pairId,
    status,
    srcAmount,
    destAmount,
    destChainTimestamp,
    srcChainTimestamp,
    srcChainID,
    destChainID
  }: any = data;
  
  const time = new Date(destChainTimestamp==0 || destChainTimestamp==undefined ? srcChainTimestamp*1000 :destChainTimestamp * 1000)
  
  const destdate = new Date(destChainTimestamp * 1000).toUTCString()
  const srcdate = new Date(srcChainTimestamp * 1000).toUTCString()
  const Updateddate = moment(time).fromNow()
 
  const srcChainName =
    srcChainID == 97
      ? 'Binance TestNet'
      : srcChainID == 1807
      ? 'Tarality Testnet'
      : srcChainID == 4369
      ? 'Rabbit Testnet'
      : srcChainID == 80001
      ? 'Matic Testnet'
      : ''
  const destChainName =
    destChainID == 97
      ? 'Binance TestNet'
      : destChainID == 1807
      ? 'Tarality Testnet'
      : destChainID == 4369
      ? 'Rabbit Testnet'
      : destChainID == 80001
      ? 'Matic Testnet'
      : ''
 

  return (
    <div>
      <Wrap>
     
       
       
      {!textStatus?(<>
        <h2 className='text-bold pb-2 ml'>Transaction Details</h2><br/>
      { !loading && (<><div className="row">
      
          <div className="col3">
            <p className="bold">Source Hash:</p>
          </div>
          <div className="col9 anchor">
           
            <p>
              {srcChainTx?<a href={`${srcChainID}==97 ? https://testnet.bscscan.com/tx/${srcChainTx}`} >{srcChainTx}</a>:"-"}
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col3">
            <p className="bold">Dest Hash:</p>
          </div>
          <div className="col9 anchor">
            
            <p>
             
              {status == 1 ?<a href={`https://testnet.bscscan.com/tx/${destChainTx}`}>{ destChainTx } </a>: <span>-</span>}
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col3">
            <p className="bold">Source Chain:</p>
          </div>
          <div className="col9">
            {' '}
            <p>{srcChainName?srcChainName:"-"}</p>
          </div>
        </div>
        <div className="row">
          <div className="col3">
            <p className="bold">Dest Chain:</p>
          </div>
          <div className="col9">
            {' '}
            <p>{destChainName?destChainName:"-"}</p>
          </div>
        </div>
        <div className="row">
          <div className="col3">
            <p className="bold">From:</p>
          </div>
          <div className="col9 anchor">
            {' '}
            <p>
              {' '}
              <a href="#">{from?from:"-"}</a>{' '}
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col3">
            <p className="bold">To:</p>
          </div>
          <div className="col9 anchor">
            {' '}
            <p>
              <a href="#">{to?to:"-"}</a>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col3">
            <p className="bold">Date:</p>
          </div>
          <div className="col9">
            {' '}
            <p>{Updateddate} | {status == 1 ? destdate?destdate:"-" : srcdate?srcdate:"-"}</p>
          </div>
        </div>
        <div className="row">
          <div className="col3">
            <p className="bold">CoinType:</p>
          </div>
          <div className="col9">
      
            <p>{pairId? pairId?.substring(6):"-"}</p>
          </div>
        </div>
        <div className="row">
          <div className="col3">
            <p className="bold">Send Value:</p>
          </div>
          <div className="col9">
            {' '}
            <p>{srcAmount?srcAmount / 1e18:"-"}</p>
          </div>
        </div>
        <div className="row">
          <div className="col3">
            <p className="bold">Receive Value:</p>
          </div>
          <div className="col9">
            {' '}
            <p>{destAmount?destAmount / 1e18:"-"}</p>
          </div>
        </div>
        <div className="row">
          <div className="col3">
            <p className="bold">Status:</p>
          </div>
          <div className="col9">
            {' '}
            <p >{status == 1 ? <span style={{color:"#08a708", fontWeight:"bold"}}><i className="fa-regular fa-clock" style={{paddingRight:"5px"}} />Success</span>: <span style={{color:"red", fontWeight:"bold"}}> <i className="fa-solid fa-clock-rotate-left" style={{paddingRight:"5px"}}></i>Pending</span>}</p>
          </div>
        </div>
        </>)}
        </> 
        ):
        <div className="msg">
          <h2 style={{textAlign:"center", padding:"40px"}}>No record found.</h2>
        </div>

        }
        
       
          
         {loading && 
        <div className="loading">
         <BarLoader color="#00c675" loading={loading} cssOverride={override} width={100} />
         </div>}
      </Wrap>
    </div>
  )
}
