import axios from 'axios'
import React, { useEffect, useState, CSSProperties } from 'react'
import styled from 'styled-components'
import Pagination from '@material-ui/lab/Pagination'
// import moment from 'moment'
import BarLoader from 'react-spinners/BarLoader'
import { nodeApi } from '../../config/constant'
import { useLocation } from 'react-router-dom'
import ExplorerTable from './component/ExplorerTable'


const InputWrapper = styled.div`
  width: 30%;
  margin-left: auto;
  margin-bottom: 20px;
  border-radius: 20px;
  .btn1 {
    width: 44px;
    line-height: 40px;
    background: transparent;
    border: none;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    outline: none;
   
    border: 1px solid #6e7aae;
    cursor: pointer;
    .searchIcon{
      color:${({ theme }) => theme.text7};
    }
  }
  ${({ theme }) => theme.mediaWidth.upToMedium`
  
  width: 100%
  margin:auto;
  margin-bottom:10px;
  `}
  ${({ theme }) => theme.mediaWidth.upToSmall`
  
  margin:auto;
  margin-bottom:10px;
  `}
`
const InputText = styled.input`
  width: 85%;
  line-height: 40px;
  outline: none;
  border: 1px solid #6e7aae;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  padding-left: 15px;
  color: #6e7aae;
  background: transparent;
  &::placeholder{
    color: #6e7aae;

  }
  
 
  ${({ theme }) => theme.mediaWidth.upToMedium`
width:92%;
`}
${({ theme }) => theme.mediaWidth.upToMedium`
width:85%;
`}
`

const Wrap = styled.div`
width: 1440px;
padding: 20px;
.main-wrapper{
  background: ${({ theme }) => theme.contentBg2};
  border-radius:10px;
  padding:3px;
}
h1 {
  color: #fff;
}
.MuiPaginationItem-outlined {
  border: 1px solid ${({ theme }) => theme.text10} ;
}

.MuiPaginationItem-root {
  height:30px;
  width:28px;
color:${({ theme }) => theme.text7};
}
.MuiPaginationItem-rounded {
  border-radius: 7px;
}
.MuiPaginationItem-outlinedSecondary.Mui-selected {
color: ${({ theme }) => theme.text7} !important;
border: 1px solid #39d0d8;
background-color: #caf0f84d ;
font-weight:600
}
.MuiPaginationItem-outlinedSecondary.Mui-selected:hover{
  background-color: #caf0f84d;
}
.tab-container {
  padding: 20px 0px;
  display:flex;
  justify-content:center;
  .tab {
    font-size: 14px;
    font-Weight:600;
    padding: 5px 10px;
    cursor: pointer;
    color: ${({ theme }) => theme.textNav};
    background: transparent;
    border-radius: 15px;
    padding:10px;
    
    margin-left: 5px;
    margin-right: 5px;
    border-radius: 7px;
    ${({ theme }) => theme.mediaWidth.upToMedium`
    font-size: 14px;
    `}
  }
  .tabSpan{
    background:${({ theme }) => theme.expoTab};
    padding:15px 10px;
    border-radius:20px
  }
  .active {
    font-size: 14px;
    padding: 5px 10px;
    font-Weight:600;
    cursor: pointer;
    color: ${({ theme }) => theme.text7};
     background:${({ theme }) => theme.expoActive}
    border-radius: 15px;
    padding:10px;
   
    margin-left: 5px;
    margin-right: 5px;
    ${({ theme }) => theme.mediaWidth.upToMedium`
    font-size: 14px;
    `}
  }
}
.mainDiv{
  background:linear-gradient(var(--gradient-rotate, 246deg), #da2eef 7.97%, #2b6aff 49.17%, #39d0d8 92.1%);
  padding:2px;
  border-radius:10px
}
.table-responsive {
  overflow-y: auto;
  background:${({ theme }) => theme.expoContainer};
  border-radius:10px
  padding:20px
  color:${({ theme }) => theme.text7};
 
}

.loader{
  min-height:60vh;
  width:100%;
  
   ${({ theme }) => theme.mediaWidth.upToSmall`
       min-width:40vh;
    `}
}
.contentContainer{
  min-width:1300px;
  ${({ theme }) => theme.mediaWidth.upToExtraLarge`
        min-width:1250px;
       
    `}
  
 
}
.notFound{
  color: ${({ theme }) => theme.text7};
}
${({ theme }) => theme.mediaWidth.upToExtraLarge`
        width:95%;
        padding:5px;
    `}
    ${({ theme }) => theme.mediaWidth.upToLarge`
    width:100%
    padding:5px;
`}
${({ theme }) => theme.mediaWidth.upToMedium`
        width:100%;
        padding:5px;
    `}
`
// const Table = styled.table`
// width: 100%;
// padding: 10px;
// overflow-x: auto;
// border-radius: 10px;
// background: ${({ theme }) => theme.contentBg2};
// color: ${({ theme }) => theme.text7};
// border-spacing: 0px;
// max-height: 70vh;
// ${({ theme }) => theme.mediaWidth.upToSmall`
// max-height: 100vh;
//   `}

// .record-message {
//   color: #fff;
//   text-align: center;
//   position: relative;
// }
// thead {
//   padding-top: 20px;
//   padding-bottom: 20px;
//   background: ${({ theme }) => theme.tipBg1};
//   color: ${({ theme }) => theme.text7};
// }
// .thead{
//   font-size:15px;
// }
// a {
//   text-decoration: none;
//   color: blue;
// }
// td {
//   border: none;
// }

// .tdhead {
//   padding-top: 10px;
//   padding-bottom: 10px;
//   padding-left: 5px;
//   padding-right: 5px;
//   font-weight: bold;
//   font-size:15px;
// }
// .tbody{
//   min-width:100px;
// }
// .tdbody {
//   padding-top: 5px;
//   padding-bottom: 5px;
//   padding-left: 5px;
//   padding-right: 5px;
//   font-size: 14px;
//   font-weight: 400;
//   height: 50px;
//   border-bottom: 1px solid ${({ theme }) => theme.borderBg};

//   ${({ theme }) => theme.mediaWidth.upToMedium`
//   font-size: 12px;

//   `}
// }
// .resposive{
//   ${({ theme }) => theme.mediaWidth.upToSmall`
//   min-width:130px;

//   `}

// }
// .tdbodyhead {
//   font-weight: bold;
// }
// .recieved {
//   color:${({ theme }) => theme.recieve};
// }
// .address {
//   color: ${({ theme }) => theme.anchorColor};
// }
// .tdRow {
//   &:hover {
//     background: ${({ theme }) => theme.hoverEffect};
//   }
// }
// `


const Input = styled.input`
  width: 100%;
  color: ${({ theme }) => theme.text8};
  border: 1px solid;
  border-color: ${({ theme }) => theme.borderBg};
`

const ToolSection = styled.div`
  width: 1000px;
  margin: auto;
  margin-top: 0px;
  border: 1px solid;
  padding: 30px 40px;
  border-radius: 20px;
  border: 1px solid;
  border-color: ${({ theme }) => theme.borderBg};
  background: ${({ theme }) => theme.tipBg1};

  ${({ theme }) => theme.mediaWidth.upToMedium`
width:100%;
padding: 30px 20px;

`}
`
const Para = styled.p`
  font-size: 14px;
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
  line-height:30px;
  min-height:30px;
  border-radius:6px
  border:1px solid ;
  border-color: ${({ theme }) => theme.borderBg};
}
.content1{
  background:#fff;
  width:100%
  position: absolute;
  top: 33px;
  z-index:1;
  border-radius:6px;
  max-height:158px;
  overflow-y:auto;
  background:#fff;
  box-shadow: 1px 7px 17px 1px rgb(0 0 0 / 10%);
  ul{
    padding:0px;
    margin:10px 0
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
  z-index:200;
  top: 33px;
  max-height:158px;
  overflow-y:auto;
  border-radius:6px;
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
.sendButton{
  background:#00c675;
  color:#fff;
  border:none;
  outline:none;
  border-radius:10px;
 padding:7px 50px;
 position:absolute;
 text-decoration:none;
 left:50%;
 transform:translateX(-50%);
 cursor:pointer;
}
${({ theme }) => theme.mediaWidth.upToMedium`
width:80%;
`};

`
const Row = styled.div`
  background:${({ theme }) => theme.expoHeading};
  padding: 10px 0px;
  border-radius: 10px;
  font-size: 16px;
    font-weight: 600;
`

export default function Explorer() {
  const location = useLocation()
  const [tab1, setTab1] = useState(true)
  const [tab2, setTab2] = useState(false)
  const [tab3, setTab3] = useState(false)
  const [dropdown, setDropdown] = useState(false)
  const [dropdown1, setDropdown1] = useState(false)
  const [selectBox1, setSelectBox1] = useState('')
  const [selectBox, setSelectBox] = useState('')
  const [apiStatus, setApiStatus] = useState(1)
  const [successData, setSuccessData] = useState([])
  const [pendingData, setPendingData] = useState([])
  const [page, setPage] = useState(1)
  const [pagination, setPagination] = useState(1)
  const [pPagination, setPPagination] = useState(1)
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [pagiStatus, setPagiStatus] = useState(false)
  const [pPagiStatus, setPPagiStatus] = useState(false)
  const [content, setContent] = useState(false)
  const [content2, setContent2] = useState(false)
  const [chain, setChain] = useState([])
  const [txnhash, SetTxnhash] = useState('')
  const [srcChainId, setSrcChainId] = useState(0)
  const [destChainId, setDestChainId] = useState(0)

  const handleChange = (e: any, p: number) => {
    setPage(p)
    if (p != page) {
      setLoading(true)
    }
  }

  const inputChange = (e: any) => {
    SetTxnhash(e.target.value)
  }

  function selectBoxFunc(text1: string, id: number) {
    setDestChainId(id)
    setSelectBox1(text1)
    setDropdown1(false)
  }

  function selectBoxFunc1(text1: string, id: number) {
    setSrcChainId(id)
    console.log(id, 'idddddd')
    setSelectBox(text1)
    setDropdown(false)
  }

  const override: CSSProperties = {
    display: 'block',
    margin: '0 auto',
    borderColor: 'red',
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%)'
  }

  async function api() {
    const data = await axios.get(`${nodeApi}/v2/history?page=${page}&status=${apiStatus}`)

    if ((data.status = 200)) {
      setLoading(false)
      setPagiStatus(true)
      setContent(false)
      console.log(data?.data?.trx?.length,"ata?.data?.trx?.length");

      if (data?.data?.trx?.length == 0) {
        setContent(true)
        setPagiStatus(false)
      } else if (data?.data?.trx[0].length == 0) {
        setPPagiStatus(false)
      } // const successLength = transactionSuccess.length
      // const pendingLength = pendingTransaction.length
      // console.log(pendingLength, successLength, 'successLengthsuccessLength')
      
    }

    const transactionSuccess = data?.data?.trx
    const pendingTransaction = data?.data?.trx0
    if (pendingTransaction.length == 0) {
      setContent2(true)
    } else {
      setContent2(false)
    }
   
    setSuccessData(transactionSuccess)
    setPendingData(pendingTransaction)
    const sp =
      Number.isInteger(data?.data?.tr1 / 10) == false ? Math.floor(data?.data?.tr1 / 10) + 1 : data?.data?.tr1 / 10
    const pp =
      Number.isInteger(data?.data?.tr0 / 10) == false ? Math.floor(data?.data?.tr0 / 10) + 1 : data?.data?.tr0 / 10
    console.log(sp, pp, 'sp pp')
    setPagination(sp)
    setPPagination(pp)
    if (sp <= 1) {
      setPagiStatus(false)
    }
    if (pp <= 1) {
      setPPagiStatus(false)
    }
  }

  const fetchChainRecord = async () => {
    const chainData = await axios.get(`${nodeApi}/v2/chainConfig`)
    // console.log(chainData.data,"chainDatachainDatachainData")
    setChain(chainData.data)
  }

  useEffect(() => {
    api()
    fetchChainRecord()
  }, [page])
  useEffect(() => {
    if (location.pathname == '/explorer/viewTxn') {
      setTab1(true)
      setTab2(false)
      setTab3(false)
      setApiStatus(1)
      setPage(1)
      api()
    } else if (location.pathname == '/explorer/pendingTxn') {
      setTab2(true)
      setTab1(false)
      setTab3(false)
      setApiStatus(0)
      setPage(1)
      api()
    } else if (location.pathname === '/explorer/tools') {
      setTab3(true)
      setTab2(false)
      setTab1(false)
      setLoading(false)
    }
  }, [location.pathname])
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 5000)
  }, [])

  async function fetchOnClick(e: any) {
    e.preventDefault()
    // console.log(search, 'searchsearchsearchsearchsearch')

    const fetchedData: any = await axios.post(`${nodeApi}/v2/transactionSearch`, {
      data: search.length > 0 ? search.trim() : 'empty'
    })
    if (fetchedData.status === 200) {
      setTab1(true)
      setTab2(false)
      setPage(1)
      setSuccessData(fetchedData.data.trx)
      setSearch('')
      setPagiStatus(false)
      if (fetchedData?.data?.trx.length === 0) {
        // console.log(fetchedData.data.trx.length,"fetchedDatafetchedData")
        setContent(true)
      }
    }
  }

  return (
    <Wrap>
      {/* *********************************Input-Top**************************************** */}
      {/* {!tab3 && (
        <InputWrapper>
        <form onSubmit={(e)=>fetchOnClick(e)}>
          <InputText type="text" placeholder="Hash/Address" onChange={e => setSearch(e.target.value)} value={search}/>
          <button className="btn1"  type="submit">
            <i className="fa-solid fa-magnifying-glass" style={{ color: '#fff', fontSize: '20px' }}></i>
          </button>
          </form>
        </InputWrapper>
      )} */}
      {/* *********************************Tab-Button**************************************** */}
      <div className="tab-container">
        <span className="tabSpan">
          <span
            className={tab1 ? 'active' : 'tab'}
            onClick={() => {
              setTab1(true)
              setTab2(false)
              setTab3(false)
              setApiStatus(1)
              setPage(1)
              api()

              // location.createHref('/#/explorer/viewTxn');
              window.location.href = '/#/explorer/viewTxn'
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
              setApiStatus(0)
              setPage(1)
              api()
              window.location.href = '/#/explorer/pendingTxn'
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
              setLoading(false)

              window.location.href = '/#/explorer/tools'
            }}
          >
            Tools
          </span>
        </span>
      </div>
      {(tab1 || tab2) && (
        <div className="mainDiv">
          <div className="table-responsive">
            {/* *********************************Tab1**************************************** */}

            <div className="table1">
              {/* <Table className="table">
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
                  {successData &&
                    successData.map((data, i) => {
                     
                      return (
                        <>
                         {!loading && <ExplorerTable data={data} i={i} page={page} key={i.toString()}/>}
                        </>
                      )
                    })}
                </tbody>
              </Table> */}
              <InputWrapper>
                <form onSubmit={e => fetchOnClick(e)}>
                  <InputText
                    type="text"
                    placeholder="Hash/Address"
                    onChange={e => setSearch(e.target.value)}
                    value={search}
                  />
                  <button className="btn1" type="submit">
                    <i className="fa-solid fa-magnifying-glass searchIcon" style={{ fontSize: '20px' }}></i>
                  </button>
                </form>
              </InputWrapper>
              <div className="contentContainer">
              <Row className="row">
                <div className="col-sm-1 col-xs-1">S.No</div>
                <div className="col-sm-2 col-xs-2">Coin-Type</div>
                <div className="col-sm-2 col-xs-2">Value</div>
                <div className="col-sm-2 col-xs-2">From</div>
                <div className="col-sm-2 col-xs-2">To</div>
                <div className="col-sm-2 col-xs-2">Date</div>
                <div className="col-sm-1 col-xs-1">Status</div>
              </Row>
              {tab1 &&
                successData &&
                successData.map((data, i) => {
                  return <>{!loading && <ExplorerTable data={data} i={i} page={page} key={i.toString()} />}</>
                })}

              {tab2 &&
                pendingData &&
                pendingData.map((data, i) => {
                  return <>{!loading && <ExplorerTable data={data} i={i} page={page} key={i.toString()} />}</>
                })}
                </div>

              {tab1 && content && (
                <p className="notFound" style={{ textAlign: 'center' }}>
                  No Record Found.
                </p>
              )}
              {tab2 && content2 && (
                <p className="notFound" style={{ textAlign: 'center' }}>
                  No Record Found.
                </p>
              )}

              {loading && (
                <div className="loader">
                  <BarLoader color="#00c675" loading={loading} cssOverride={override} width={100} />
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* *********************************Pagination**************************************** */}

      <div className="pagination" style={{ display: 'flex', justifyContent: 'center', marginTop: '25px' }}>
        {tab1 && pagiStatus && (
          <Pagination
            count={pagination}
            variant="outlined"
            shape="rounded"
            color="secondary"
            onChange={handleChange}
            page={page}
            style={{ margin: 'auto' }}
          />
        )}
        {tab2 && pPagiStatus && (
          <Pagination
            count={pPagination}
            variant="outlined"
            shape="rounded"
            color="secondary"
            onChange={handleChange}
            page={page}
            style={{ margin: 'auto' }}
          />
        )}
      </div>

      {/* *********************************Tab3**************************************** */}
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
            <Input
              placeholder="Enter Transaction Hash"
              type="text"
              onChange={e => inputChange(e)}
              className="inputHash"
              value={txnhash}
              style={{
                width: '100%',
                lineHeight: '30px',
                outline: 'none',
                marginTop: '15px',
                borderRadius: '6px',
                paddingLeft: '10px'
              }}
            />
          </ToolSectionBottom>
          <ToolSectionBottom>
            <span className="chain">From Chain:</span>
            <br />
            <div className="dropdown">
              <div
                className="dropdown-btn "
                style={{ position: 'relative', cursor: 'pointer', color: '#000', paddingLeft: '10px' }}
                onClick={() => setDropdown(!dropdown)}
              >
                {selectBox.length == 0 ? 'Select Chain Name' : selectBox.toUpperCase()}
                <i
                  className="fa-solid fa-caret-down"
                  style={{ position: 'absolute', right: '10px', top: '6px', color: '#000' }}
                ></i>
              </div>
              <div className="content1">
                {dropdown && (
                  <ul>
                    {chain &&
                      chain.map((element, index) => {
                        console.log(element, 'elementelementelement')
                        const { blockChainName, chainId }: any = element
                        return (
                          <>
                            <li
                              key={index.toString()}
                              onClick={() => selectBoxFunc1(blockChainName, chainId)}
                              style={{ display: blockChainName === selectBox1 ? 'none' : 'block' }}
                            >
                              {blockChainName}
                            </li>
                          </>
                        )
                      })}
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
                style={{ position: 'relative', cursor: 'pointer', color: '#000', paddingLeft: '10px' }}
                onClick={() => setDropdown1(!dropdown1)}
              >
                {selectBox1.length == 0 ? 'Select Chain Name' : selectBox1.toUpperCase()}
                <i
                  className="fa-solid fa-caret-down"
                  style={{ position: 'absolute', right: '10px', top: '6px', color: '#000' }}
                ></i>
              </div>
              <div className="content2" style={{ marginBottom: '20px' }}>
                {dropdown1 && (
                  <ul>
                    {chain &&
                      chain.map((element, index) => {
                        console.log(element, 'elementelementelement')
                        const { blockChainName, chainId }: any = element
                        return (
                          <>
                            <li
                              key={index.toString()}
                              onClick={() => selectBoxFunc(blockChainName, chainId)}
                              style={{ display: blockChainName === selectBox ? 'none' : 'block' }}
                            >
                              {blockChainName}
                            </li>
                          </>
                        )
                      })}
                  </ul>
                )}
              </div>
            </div>
            <div style={{ position: 'relative', minHeight: '50px' }}>
              <a
                className="sendButton"
                href={`/#/details?hash=${txnhash.trim()}&srcChainId=${srcChainId}&destChainId=${destChainId}`}
              >
                Send
              </a>
            </div>
          </ToolSectionBottom>
        </>
      )}
    </Wrap>
  )
}
