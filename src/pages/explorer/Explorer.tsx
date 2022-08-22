import React, { useState } from 'react'
import styled from 'styled-components'
import { dummy } from './dummydata'

export default function Explorer() {
  const [tab1, setTab1] = useState(true)
  const [tab2, setTab2] = useState(false)
  const [tab3, setTab3] = useState(false)
  const [dropdown, setDropdown] = useState(false)
  const [dropdown1, setDropdown1] = useState(false)
  const [selectBox1, setSelectBox1] = useState("")
  const [selectBox, setSelectBox] = useState("")

  function selectBoxFunc(text1:string){
   
    setSelectBox1(text1);
    setDropdown1(false);
   
   };
   function selectBoxFunc1(text1:string){
    setSelectBox(text1);
    setDropdown(false);
   };

  const Wrap = styled.div`
    width: 1440px;
    padding: 20px;

    h1 {
      color: #fff;
    }
    .tab-container {
      padding: 20px 0px;
      .tab {
        font-size: 16px;
        padding: 10px 10px;
        cursor: pointer;
        color: ${({ theme }) => theme.text7};
        background: transparent;
        border: 1px solid;
        border-color: ${({ theme }) => theme.borderBg};
        margin-left: 5px;
        margin-right: 5px;
        border-radius: 10px;
        ${({ theme }) => theme.mediaWidth.upToMedium`
        font-size: 14px;
        `}
      }
      .active {
        font-size: 16px;
        padding: 10px 10px;
        cursor: pointer;
        color: #000;
        background: ${({ theme }) => theme.tabActiveColor1};
        border-radius: 10px;
        border: 1px solid;
        border-color: ${({ theme }) => theme.borderBg};
        margin-left: 5px;
        margin-right: 5px;
        ${({ theme }) => theme.mediaWidth.upToMedium`
        font-size: 14px;
        `}
      }
    }
    .table-responsive {
      overflow: auto;
      max-height: 70vh;
    }
    ${({ theme }) => theme.mediaWidth.upToLarge`
            width:90%;
            padding:5px;
        `}
    ${({ theme }) => theme.mediaWidth.upToMedium`
            width:100%;
            padding:5px;
        `}
  `
  const Table = styled.table`
    width: 100%;
    height: 650px;
    padding: 10px;
    overflow: auto;
    border-radius: 10px;
    background: ${({ theme }) => theme.contentBg2};
    color: ${({ theme }) => theme.text7};
    border: 1px solid;
    border-color: ${({ theme }) => theme.borderBg};
    border-spacing:0px;

    thead {
      vertical-align: bottom;
      padding-top: 20px;
      padding-bottom: 20px;
      background: ${({ theme }) => theme.tipBg1};
      color: ${({ theme }) => theme.text7};
    }
    a {
      text-decoration: none;
      color: blue;
    }
    td{
      border:none;
    }

    .tdhead {
      padding-top: 10px;
      padding-bottom: 10px;
      padding-left: 5px;
      padding-right: 5px;
      font-weight: bold;
    }
    .tdbody {
      padding-top: 5px;
      padding-bottom: 5px;
      padding-left: 5px;
      padding-right: 5px;
      font-size: 14px;
      font-weight: 400;
      ${({ theme }) => theme.mediaWidth.upToMedium`
      font-size: 12px;
   
      `}
    }
    .tdbodyhead {
      font-weight: bold;
    }
    .recieved {
      color: #c9c9c9;
    }
    .address {
      color: ${({ theme }) => theme.anchorColor};
    }
    .tdRow{
      &:hover{
        background:${({ theme }) => theme.hoverEffect};
      }
    }

  `
  const InputWrapper = styled.div`
    width: 70%;
    margin: auto;
    margin-bottom: 20px;
    .btn {
      width: 44px;
      line-height: 40px;
      background: #01b2b1;
      border: none;
      outline: none;
      border: 1px solid;
      border-color: ${({ theme }) => theme.borderBg};
      cursor: pointer;
    }
  `
  const InputText = styled.input`
    width:90%
    line-height:40px;
    outline:none; 
    border:none;
    padding-left:10px;
    color:${({ theme }) => theme.text7};
    background:${({ theme }) => theme.search};
    border:1px solid;
    border-color: ${({ theme }) => theme.borderBg};
    ${({ theme }) => theme.mediaWidth.upToMedium`
    width:80%;
   
`}

`
  const ToolSection = styled.div`
    width: 850px;
    margin: auto;
    margin-top: 30px;
    border: 1px solid;
    padding: 30px 40px;
    border-radius: 20px;
    border-color: ${({ theme }) => theme.borderBg};
    background: ${({ theme }) => theme.search};

    ${({ theme }) => theme.mediaWidth.upToMedium`
    width:100%;
    padding: 30px 20px;
   
`}
  `
  const Para = styled.p`
    font-size:14px;
    color: ${({ theme }) => theme.text7};
  `

  const ToolSectionBottom = styled.div`
    width: 600px;
    margin: auto;
    margin-top: 40px;
    .dropdown{
      position:relative;
      margin-top: 15px ;
    }
    .dropdown-btn{
      background:white;
      line-height:28px;
      min-height:28px;
    }
    .content1{
      background:#fff;
      width:100%
      position: absolute;
      top: 33px;
      z-index:1;
      max-height:158px;
      overflow-y:scroll;
      box-shadow: 1px 7px 17px 1px rgb(0 0 0 / 10%);
      ul{
        padding:0px
        text-decoration:none;
        
      };
      li{
        color:#000;
        padding:5px 15px;
        cursor:pointer;
        &:hover{
          background:#ccc
          
        }
      }
    }
    .content2{
      background:#fff;
      width:100%
      position: absolute;
      z-index:2;
      top: 33px;
      max-height:158px;
      overflow-y:scroll;
      box-shadow: 1px 7px 17px 1px rgb(0 0 0 / 10%);
      ul{
        padding:0px
        text-decoration:none;
        
      };
      li{
        color:#000;
        padding:5px 15px;
        cursor:pointer;
        &:hover{
          background:#ccc;
        }
      }
    }
    .chain{
      font-size:15px;
      color:${({ theme }) => theme.text7};
    
    }
    ${({ theme }) => theme.mediaWidth.upToMedium`
    width:80%;
`};
    
  `


  return (
    <Wrap>
      <InputWrapper>
        <InputText type="text" placeholder="Hash/Address" />
        <button className="btn">
          <i className="fa-solid fa-magnifying-glass" style={{ color: '#fff', fontSize: '20px' }}></i>
        </button>
      </InputWrapper>
      <div className="tab-container">
        <span
          className={tab1 ? 'active' : 'tab'}
          onClick={() => {
            setTab1(true)
            setTab2(false)
            setTab3(false)
          }}
        >
          View Txns
        </span>
        <span
          className={tab2 ? 'active' : 'tab'}
          onClick={() => {
            setTab2(true)
            setTab1(false)
            setTab3(false)
          }}
        >
          Pending Txns
        </span>
        <span
          className={tab3 ? 'active' : 'tab'}
          onClick={() => {
            setTab3(true)
            setTab2(false)
            setTab1(false)
          }}
        >
          Tools
        </span>
      </div>
      <div className="table-responsive">
        {tab1 && (
          <Table className="table">
            <thead>
              <tr>
                <td scope="col" className="tdhead">
                  #
                </td>
                <td scope="col" className="tdhead">
                  CoinType
                </td>
                <td scope="col" className="tdhead">
                  Value
                </td>
                <td scope="col" className="tdhead">
                  From
                </td>
                <td scope="col" className="tdhead">
                  To
                </td>
                <td scope="col" className="tdhead">
                  Date
                </td>
                <td scope="col" className="tdhead">
                  Status
                </td>
              </tr>
            </thead>
            <tbody>
              {dummy.map((data, i) => {
                const { fromAddr, toAddr } = data

                return (
                  <>
                    <tr key={data.id} className="tdRow">
                      <td className="tdbody tdbodyhead">{data.id}</td>
                      <td className="tdbody">{data.coinType}</td>
                      <td className="tdbody">
                        Sent:{data.sent} <br />
                        <span className="recieved">Recieved:{data.recieved}</span>
                      </td>
                      <td className="tdbody">
                        {data.From} <br />
                        <a href={`/#/explorer/details?params=${data.fromAddr}`} className="address">
                          {fromAddr.substring(0, 6)}...{fromAddr.substring(fromAddr.length - 1, fromAddr.length - 4)}
                        </a>
                      </td>
                      <td className="tdbody">
                        {data.to} <br />
                        <a href={`/#/explorer/details?params=${data.toAddr}`} className="address">
                          {toAddr.substring(0, 6)}...{toAddr.substring(toAddr.length - 1, toAddr.length - 4)}
                        </a>
                      </td>
                      <td className="tdbody">{data.data}</td>
                      <td className="tdbody">{data.status}</td>
                    </tr>
                  </>
                )
              })}
            </tbody>
          </Table>
        )}

        {tab2 && (
          <Table className="table">
            <thead>
              <tr>
                <td scope="col" className="tdhead">
                  #
                </td>
                <td scope="col" className="tdhead">
                  CoinType
                </td>
                <td scope="col" className="tdhead">
                  Value
                </td>
                <td scope="col" className="tdhead">
                  From
                </td>
                <td scope="col" className="tdhead">
                  To
                </td>
                <td scope="col" className="tdhead">
                  Date
                </td>
                <td scope="col" className="tdhead">
                  Status
                </td>
              </tr>
            </thead>
            <tbody>
              {dummy.map((data, i) => {
                const { fromAddr, toAddr } = data
                console.log(fromAddr, toAddr, 'sfhgj')

                return (
                  <>
                    <tr key={data.id}>
                      <td className="tdbody tdbodyhead">{data.id}</td>
                      <td className="tdbody">{data.coinType}</td>
                      <td className="tdbody">
                        Sent:{data.sent} <br />
                        <span className="recieved">Recieved:{data.recieved}</span>
                      </td>
                      <td className="tdbody">
                        {data.From} <br />
                        <a href={`/#/explorer/details?params=${data.toAddr}`} className="address">
                          {fromAddr.substring(0, 6)}...{fromAddr.substring(fromAddr.length - 1, fromAddr.length - 4)}
                        </a>
                      </td>
                      <td className="tdbody">
                        {data.to} <br />
                        <a href={`?#/explorer/details?params=${data.toAddr}`} className="address">
                          {toAddr.substring(0, 6)}...{toAddr.substring(toAddr.length - 1, toAddr.length - 4)}
                        </a>
                      </td>
                      <td className="tdbody">{data.data}</td>
                      <td className="tdbody">{data.status}</td>
                    </tr>
                  </>
                )
              })}
            </tbody>
          </Table>
        )}
      </div>
      {tab3 && (
        <>
          <ToolSection>
            <Para>
              Due to the unpredictable glitches on different blockchain networks and the decentralized nature of
              Multichain protocol, you may not find your cross chain transaction in the Multichain explorer sometimes.
            </Para>
            <Para>
              Dont worry, your asset is safe. You can use the tool below if your transaction is not showing up in our
              explorer.
            </Para>
            <Para>
              Multichain will then register your transaction. Please check your transaction in Multichain explorer 5
              minutes after using this tool.
            </Para>
          </ToolSection>
          <ToolSectionBottom>
            <span className="chain">TXN Hash</span>
            <input
              type="text"
              style={{ width: '100%', lineHeight: '28px', border: 'none', outline: 'none', marginTop: '15px' }}
            />
          </ToolSectionBottom>
          <ToolSectionBottom>
            <span className="chain">From Chain:</span>
            <br />
            <div className="dropdown">
              <div
                className="dropdown-btn"
                style={{ position: 'relative', cursor: 'pointer', color:"#000", paddingLeft:"10px"  }}
                onClick={() => setDropdown(!dropdown)}
              >
                 {selectBox.length==0 ? "":selectBox.toUpperCase()}
                <i
                  className="fa-solid fa-caret-down"
                  style={{ position: 'absolute', right: '10px', top: '6px', color: '#000' }}
                ></i>
              </div>
              <div className="content1">
                {dropdown && (
                  <ul>
                    <li onClick={()=>selectBoxFunc1("text1")}>text1</li>
                    <li onClick={()=>selectBoxFunc1("text1")}>text1</li>
                  </ul>
                )}
              </div>
            </div>
          </ToolSectionBottom>
          <ToolSectionBottom>
            <span className="chain">To Chain:</span>
            <div className="dropdown" style={{ marginBottom: '20px' }}>
              <div
                className="dropdown-btn"
                style={{ position: 'relative', cursor: 'pointer', color:"#000", paddingLeft:"10px" }}
                onClick={() => setDropdown1(!dropdown1)}
              >
                {selectBox1.length==0 ? "":selectBox1.toUpperCase()}
                <i
                  className="fa-solid fa-caret-down"
                  style={{ position: 'absolute', right: '10px', top: '6px', color: '#000' }}
                ></i>
              </div>
              <div className="content2" style={{marginBottom:"20px"}}>
                {dropdown1 && (
                  <ul>
                    <li onClick={()=>selectBoxFunc("text1")}>text1</li>
                    <li onClick={()=>selectBoxFunc("text2")}>text2</li>
                    <li onClick={()=>selectBoxFunc("text1")}>text1</li>
                    <li onClick={()=>selectBoxFunc("text1")}>text1</li>
                    <li onClick={()=>selectBoxFunc("text1")}>text1</li>
                  </ul>
                )}
              </div>
            </div>
          </ToolSectionBottom>
        </>
      )}
    </Wrap>
  )
}
