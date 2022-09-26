import React from 'react'
import moment from 'moment';
import styled from 'styled-components';

const RowContent = styled.div`
background:${({ theme }) => theme.expoContent};
padding:5px 5px;
margin:5px 5px;
border-radius:10px;
.col{
  display:flex;
  flex-direction:column;
  justify-content:center;
  height:50px;
  font-size:15px;
}
`

export default function ExplorerTable({data,i,page}:any) {
  const {
    from,
    to,
    pairId,
    srcAmount,
    destAmount,
    destChainTimestamp,
    srcChainTimestamp,
    status,
    destChainTx,
    srcChainTx,
    srcChainID,
    destChainID
  }:any = data;
  console.log( from,
    to,
    pairId,
    srcAmount,
    destAmount,
    destChainTimestamp,
    srcChainTimestamp,
    status,
    destChainTx,
    srcChainTx,
    srcChainID,
    destChainID,"hooolll")

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

  const date: any = destChainTimestamp !== 0 ? destChainTimestamp * 1000 : srcChainTimestamp * 1000
  const Updateddate = moment(date).fromNow()
  const navigate = ()=>{
    window.location.href = `/#/details?params=${
      status ? destChainTx : srcChainTx
    }&srcChainId=${srcChainID}&destChainId=${destChainID}`
  }

  return (
    <>
    <RowContent className="row" onClick = {navigate} style={{cursor:"pointer"}}>
      <div className="col-sm-1 col-xs-1 col">{(page - 1) * 10 + (i + 1)}</div>
      <div className="col-sm-2 col-xs-2 col">{pairId.substring(6)}</div>
      <div className="col-sm-2 col-xs-2 col"> Sent:{srcAmount / 1e18} <br />
      <span className="recieved">Recieved:{destAmount / 1e18}</span>
      </div>
      <div className="col-sm-2 col-xs-2 col">
      {srcChainName} <br />
          <a
           href={`/#/details?params=${
              status ? destChainTx : srcChainTx
            }&srcChainId=${srcChainID}&destChainId=${destChainID}`}
            className="address"
          >
           {from.substring(0, 6)}...{from.slice(-3)}
          </a>
      </div>
      <div className="col-sm-2 col-xs-2 col">
      {destChainName} <br />
           <a
             href={`/#/details?params=${
               status ? destChainTx : srcChainTx
            }&srcChainId=${srcChainID}&destChainId=${destChainID}`}
           className="address"
          >
            {to.substring(0, 6)}...{to.slice(-3)}
         </a>
      </div>
      <div className="col-sm-2 col-xs-2 col">{Updateddate}</div>
      <div className="col-sm-1 col-xs-1 col">
      {status == 1 ? (
           <span style={{ border: '1px solid #00c679', padding: '3px 10px', borderRadius: '10px', color: '#00c679' }}>
             Success
             </span>
          ) : (
            <span style={{ border: '1px solid red', padding: '3px 10px', borderRadius: '10px', color: 'red' }}>
              Pending
           </span>
          )}
      </div>
        
      </RowContent>
   
      {/* // <tr  className="tdRow" onClick = {navigate} style={{cursor:"pointer"}}>
      //   <td className="tdbody tdbodyhead">{(page - 1) * 10 + (i + 1)}</td>
      //   <td className="tdbody tbody">{pairId.substring(6)}</td>
      //   <td className="tdbody tbody">
      //     Sent:{srcAmount / 1e18} <br />
      //     <span className="recieved">Recieved:{destAmount / 1e18}</span>
      //   </td>
      //   <td className="tdbody tbody resposive">
      //     {srcChainName} <br />
      //</td>    <a
      //       href={`/#/details?params=${
      //         status ? destChainTx : srcChainTx
      //       }&srcChainId=${srcChainID}&destChainId=${destChainID}`}
      //       className="address"
      //     >
      //       {from.substring(0, 6)}...{from.slice(-3)}
      //     </a>
      //   </td>
      //   <td className="tdbody tbody resposive">
      //     {destChainName} <br />
      //     <a
      //       href={`/#/details?params=${
      //         status ? destChainTx : srcChainTx
      //       }&srcChainId=${srcChainID}&destChainId=${destChainID}`}
      //       className="address"
      //     >
      //       {to.substring(0, 6)}...{to.slice(-3)}
      //     </a>
      //   </td>
      //   <td className="tdbody tbody">{Updateddate}</td>
      //   <td className="tdbody">
      //     {status == 1 ? (
      //       <span style={{ border: '1px solid #00c679', padding: '0px 10px', borderRadius: '10px', color: '#00c679' }}>
      //         Success
      //       </span>
      //     ) : (
      //       <span style={{ border: '1px solid red', padding: '0px 10px', borderRadius: '10px', color: 'red' }}>
      //         Pending
      //       </span>
      //     )}
      //   </td>
      // </tr>
       */}
      </>
  )
}
