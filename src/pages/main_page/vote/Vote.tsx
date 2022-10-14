import React, { useState, useEffect } from 'react'
import { allData, modsAddress,connectWallet } from '../hook/getWeb3'
import { VoteContainer } from './voteStyle'
import img from '../../../assets/svg/voting-presents.png'
import { IoIosPeople } from 'react-icons/io'
import { BsPatchCheckFill } from 'react-icons/bs'
import { AiFillFolderOpen, AiOutlineArrowRight } from 'react-icons/ai'
import { BiMessageAdd } from 'react-icons/bi'
import  moment from 'moment'
import { web3 } from '../hook/getWeb3'


export default function Vote() {
  const [tabActive, setTabActive] = useState({ core: true, community: false, all: false })
  const [proposalData, setProposalData] = useState([])
  const [mods, setMods] = useState([])
  // const [modsData, setModsData] = useState()
  const [modFil, setModFil] = useState([])
  const [abc, setABC] = useState([]);
  const [closed, setClosed] = useState("option1");
  const [reportData, setReportData] = useState([]);
  // const [chainId, setChainId] = useState(0);
  console.log(reportData ,'mods')


  useEffect(() => {
    web3.eth.getChainId().then(d => {
       console.log(d, 'chainIdddd')
      // setChainId(d)
      if(d!==1807){
        connectWallet()
      }
    })
    
  }, [])
  useEffect(() => {
    // connectWallet();
    allData()
      .then((d: any) => setProposalData(d?.allData))
      .catch(err => console.log(err, 'err'));
      // document.querySelector"#flexRadioDefault1").getAtt
  }, [])

  useEffect(() => {
    modsAddress().then((d: any) => {
      setMods(d.modAddress)
    })
  }, [])

  // useEffect(() => {
  //   mods &&
  //     mods?.map((item: any, i: any) => {
  //       // console.log(item, "ITEM<<<<<<<")
  //       setModsData(item)
  //     })
  // }, [mods])
  console.log(mods,"mossaaaaaaaaaa")
  useEffect(() => {
    mods?.filter((item, i) => {
      setModFil(item)
      setABC(item)
    })
    const votesData: any = proposalData?.filter((obj) => {
      // console.log(mods, obj[6], "l")
      const b = tabActive.all
        ? obj[6]
        : tabActive.community
        ? mods?.includes(obj[6]) ?? obj
        : tabActive.core
        ? !mods?.includes(obj[6]) ?? obj
        : ''
      // console.log(b, 'bb')

      return b
    })
    setABC(votesData)
  }, [mods, proposalData, tabActive, modFil])
  // console.log('modFilleeghvdcvdhscvh', abc)

  useEffect(() => {
    const abs = (new Date().getTime())
    // console.log(moment(abs).format("DD MMM yyyy"), "DD::MM::YY")
    if (abs !== null) {
        
            const report:any = abc?.filter(
                (obj) => {
                    const a = closed == "option3" ? (moment(Number(obj[5])).format("DD MMM yyyy") < (moment(Number(abs)).format("DD MMM yyyy")))
                        : closed == "option2" ? (moment(Number(obj[4])).format("DD MMM yyyy") > (moment(Number(abs)).format("DD MMM yyyy")))
                            : closed == "option1" ? (moment(Number(obj[4])).format("DD MMM yyyy") <= (moment(Number(abs)).format("DD MMM yyyy")))
                                && (moment(Number(obj[5])).format("DD MMM yyyy") >= (moment(Number(abs)).format("DD MMM yyyy")))
                                : ""
                    return a;
                }

            )
            setReportData(report)
        
    }

}, [proposalData, closed, abc])

  return (
    <VoteContainer>
      <div className="topBox">
        <div className="innerBox">
          <div className="row" style={{ padding: '0px 15px' }}>
            <div className="col-md-7 col-sm-12 votingCol">
              <div className="">
                <h2 className="votingHeader">Voting</h2>
                <h3 className="votingInfo">Have your say in the future of the Xtring Ecosystem</h3>
                <button className="votingBtn " onClick={() => (window.location.href = '/#/voting/proposal')}>
                  <BiMessageAdd className="message" />
                  Make a Proposal
                </button>
              </div>
            </div>
            <div className="col-md-5 col-sm-12 votingColR">
              <img src={img} alt="votingImg" />
            </div>
          </div>
        </div>
      </div>
      <h3 className="proposal">Proposal</h3>
      <div className="tabBox">
        <div className="box">
          <ul>
            <li
              className={tabActive.core ? 'active' : ''}
              onClick={() => setTabActive({ core: true, community: false, all: false })}
            >
              <BsPatchCheckFill className="icon" />
              Core
            </li>
            <li
              className={tabActive.community ? 'active' : ''}
              onClick={() => setTabActive({ core: false, community: true, all: false })}
            >
              <IoIosPeople className="icon" />
              Community
            </li>
            <li
              className={tabActive.all ? 'active' : ''}
              onClick={() => setTabActive({ core: false, community: false, all: true })}
            >
              <AiFillFolderOpen className="icon" />
              All
            </li>
          </ul>
        </div>
        <div className="form">
          <div className="form-check">
            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value="option1" onClick={(e:any) => setClosed(e.target.value)} checked={closed=="option1"?true:false}/>
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              Vote Now
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" value="option2" onClick={(e:any) => setClosed(e.target.value)} checked={closed=="option2"?true:false}/>
            <label className="form-check-label" htmlFor="flexRadioDefault2">
              Soon
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" value="option3" onClick={(e:any) => setClosed(e.target.value)} checked={closed=="option3"?true:false}/>
            <label className="form-check-label" htmlFor="flexRadioDefault3">
              Closed
            </label>
          </div>
        </div>
        {reportData &&
          reportData.map((data, i) => {
            // console.log(data,"dataa")
            
            const { userProposalTitle,proposalId } = data;
            const start = new Date(Number(data[4]));
            const end = new Date(Number(data[5]));
           
            const StartTime = (moment(Number(start)).format("DD-MMM-yyyy"));
            const EndTime = (moment(Number(end)).format("DD-MMM-yyyy"));
            return (
              <>
                <div
                  className="proposeBox position-relative"
                  
                >
                  <h4>{userProposalTitle}</h4>
                  <div className='date-time'>
                        <div className='me-2 text-date text-vote fw-bold' style={{fontSize:"14px"}} ><span className='text-success  p-1 rounded'>Start:</span> {StartTime}</div>
                        <div className='ms-2 text-date text-vote fw-bold'style={{margin:"0 0 8px 20px", fontSize:"14px"}}><span className='text-danger  p-1 rounded' >End:</span> {EndTime}</div>
                  </div>
                  <div className="div">
                    <a className="voteBtn" href ={`#/voting/proposal/items?proposalId=${proposalId}`}> <i className="fa-solid fa-check-to-slot" style={{marginRight:"5px"}}></i>Vote Now</a>
                   
                    <button className="communityBtn" disabled><i className="fa-solid fa-users" style={{marginRight:"5px"}}></i>{mods?.includes(data[6]) ? "Community":"Core"}</button>
                    {/* <IoIosPeople className='icon'/> */}
                  </div>
                  <AiOutlineArrowRight className="arrow" onClick={() => (window.location.href = `/#/voting/proposal/items?proposalId=${proposalId}`)} />
                </div>
              </>
            )
          }).reverse()}
       

        {/* {tabActive.core && (
          <>
            <div
              className="proposeBox position-relative"
              onClick={() => (window.location.href = '/#/voting/proposal/items')}
            >
              <h4>Marketplace store at Pancakeswap.</h4>
              <p>Ended Sep 28th,2022 04:30</p>
              <div className="div">
                <button className="voteBtn">Vote Now</button>
                <button className="communityBtn">Community</button>
               
              </div>
              <AiOutlineArrowRight className="arrow" />
            </div>
            <div className="proposeBox position-relative">
              <h4>Marketplace store at Pancakeswap.</h4>
              <p>Ended Sep 28th,2022 04:30</p>
              <div className="div">
                <button className="voteBtn">Vote Now</button>
                <button className="communityBtn">Community</button>
               
              </div>
              <AiOutlineArrowRight className="arrow" />
            </div>
            <div
              className="proposeBox position-relative"
              onClick={() => (window.location.href = '/#/voting/proposal/items')}
            >
              <h4>Marketplace store at Pancakeswap.</h4>
              <p>Ended Sep 28th,2022 04:30</p>
              <div className="div">
                <button className="voteBtn">Vote Now</button>
                <button className="communityBtn">Community</button>
              
              </div>
              <AiOutlineArrowRight className="arrow" />
            </div>
          </>
        )}
        {tabActive.community && (
          <>
            {}

            <div
              className="proposeBox position-relative"
              onClick={() => (window.location.href = '/#/voting/proposal/items')}
            >
              <h4>Marketplace store at Pancakeswap.</h4>
              <p>Ended Sep 28th,2022 04:30</p>
              <div className="div">
                <button className="voteBtn">Vote Now</button>
                <button className="communityBtn">Community</button>
               
              </div>
              <AiOutlineArrowRight className="arrow" />
            </div>
            <div className="proposeBox position-relative">
              <h4>Marketplace store at Pancakeswap.</h4>
              <p>Ended Sep 28th,2022 04:30</p>
              <div className="div">
                <button className="voteBtn">Vote Now</button>
                <button className="communityBtn">Community</button>
                
              </div>
              <AiOutlineArrowRight className="arrow" />
            </div>
          </>
        )}
        {tabActive.all && (
          <>
            <div className="proposeBox position-relative">
              <h4>Marketplace store at Pancakeswap.</h4>
              <p>Ended Sep 28th,2022 04:30</p>
              <div className="div">
                <button className="voteBtn">Vote Now</button>
                <button className="communityBtn">Community</button>
               
              </div>
            </div>
            <div className="proposeBox position-relative">
              <h4>Marketplace store at Pancakeswap.</h4>
              <p>Ended Sep 28th,2022 04:30</p>
              <div className="div">
                <button className="voteBtn">Vote Now</button>
                <button className="communityBtn">Community</button>
                
              </div>
            </div>
            <div className="proposeBox position-relative">
              <h4>Marketplace store at Pancakeswap.</h4>
              <p>Ended Sep 28th,2022 04:30</p>
              <div className="div">
                <button className="voteBtn">Vote Now</button>
                <button className="communityBtn">Community</button>
                
              </div>
            </div>
          </>
        )} */}
      </div>
    </VoteContainer>
  )
}
