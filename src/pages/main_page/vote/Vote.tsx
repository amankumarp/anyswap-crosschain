import React,{useState} from 'react'
import { VoteContainer } from './voteStyle'
import img from "../../../assets/svg/voting-presents.png"
import {IoIosPeople} from "react-icons/io";
import {BsPatchCheckFill} from "react-icons/bs";
import {AiFillFolderOpen,AiOutlineArrowRight} from "react-icons/ai";
import {BiMessageAdd} from "react-icons/bi";

export default function Vote() {
  const [tabActive,setTabActive] = useState({core:true,community:false,all:false})
  return (
    <VoteContainer>
      <div className="topBox">
        <div className="innerBox">
        
        <div className="row" style={{padding:"0px 15px"}}>
          <div className="col-md-7 col-sm-12 votingCol">
            <div className="">
            <h2 className="votingHeader">Voting</h2>
            <h3 className='votingInfo'>Have your say in the future of the Xtring Ecosystem</h3>
            <button className="votingBtn " onClick={()=>window.location.href="/#/voting/proposal"}><BiMessageAdd className='message'/>Make a Proposal</button>
            </div>
          </div>
          <div className="col-md-5 col-sm-12 votingColR">
            <img src={img} alt="votingImg"  />
          </div>
        </div>
       
        </div>
        </div>
        <h3 className='proposal'>Proposal</h3>
        <div className="tabBox">
          <div className="box">
            <ul>
              <li className={tabActive.core ?'active':""} onClick={()=>setTabActive({core:true,community:false,all:false})}><BsPatchCheckFill className='icon'/>Core</li>
              <li className={tabActive.community ?'active':""} onClick={()=>setTabActive({core:false,community:true,all:false})}><IoIosPeople className='icon'/>Community</li>
              <li  className={tabActive.all ?'active':""}onClick={()=>setTabActive({core:false,community:false,all:true})}><AiFillFolderOpen className='icon'/>All</li>
            </ul>
          </div>
          <div className="form">
          <div className="form-check">
            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              Vote Now
            </label>
          </div>
          <div className="form-check">
               <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
               <label className="form-check-label" htmlFor="flexRadioDefault2">
              Soon
            </label>
             
          </div>
          <div className="form-check">
               <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3"/>
               <label className="form-check-label" htmlFor="flexRadioDefault3">
              Closed
            </label>
             
          </div>
          </div>
          {tabActive.core &&
         (
          <>
           <div className="proposeBox position-relative" onClick={()=>window.location.href="/#/voting/proposal/items"}>
            <h4>Marketplace store at Pancakeswap.</h4>
            <p>Ended Sep 28th,2022 04:30</p>
            <div className="div">
              <button className='voteBtn'>Vote Now</button>
              <button className='communityBtn'>Community</button>
              {/* <IoIosPeople className='icon'/> */}
            </div>
            <AiOutlineArrowRight className='arrow'/>
          </div>
          <div className="proposeBox position-relative">
            <h4>Marketplace store at Pancakeswap.</h4>
            <p>Ended Sep 28th,2022 04:30</p>
            <div className="div">
              <button className='voteBtn'>Vote Now</button>
              <button className='communityBtn'>Community</button>
              {/* <IoIosPeople className='icon'/> */}
            </div>
            <AiOutlineArrowRight className='arrow'/>
          </div>
          <div className="proposeBox position-relative" onClick={()=>window.location.href="/#/voting/proposal/items"}> 
            <h4>Marketplace store at Pancakeswap.</h4>
            <p>Ended Sep 28th,2022 04:30</p>
            <div className="div">
              <button className='voteBtn'>Vote Now</button>
              <button className='communityBtn'>Community</button>
              {/* <IoIosPeople className='icon'/> */}
            </div>
            <AiOutlineArrowRight className='arrow'/>
          </div>
          </>)
          }
           {tabActive.community &&
         (
          <>
         
          <div className="proposeBox position-relative" onClick={()=>window.location.href="/#/voting/proposal/items"}>
            <h4>Marketplace store at Pancakeswap.</h4>
            <p>Ended Sep 28th,2022 04:30</p>
            <div className="div">
              <button className='voteBtn'>Vote Now</button>
              <button className='communityBtn'>Community</button>
              {/* <IoIosPeople className='icon'/> */}
            </div>
            <AiOutlineArrowRight className='arrow'/>
          </div>
          <div className="proposeBox position-relative">
            <h4>Marketplace store at Pancakeswap.</h4>
            <p>Ended Sep 28th,2022 04:30</p>
            <div className="div">
              <button className='voteBtn'>Vote Now</button>
              <button className='communityBtn'>Community</button>
              {/* <IoIosPeople className='icon'/> */}
            </div>
            <AiOutlineArrowRight className='arrow'/>
          </div>
          </>)
          }
           {tabActive.all &&
         (
          <>
           <div className="proposeBox position-relative">
            <h4>Marketplace store at Pancakeswap.</h4>
            <p>Ended Sep 28th,2022 04:30</p>
            <div className="div">
              <button className='voteBtn'>Vote Now</button>
              <button className='communityBtn'>Community</button>
              {/* <IoIosPeople className='icon'/> */}
            </div>
          </div>
          <div className="proposeBox position-relative">
            <h4>Marketplace store at Pancakeswap.</h4>
            <p>Ended Sep 28th,2022 04:30</p>
            <div className="div">
              <button className='voteBtn'>Vote Now</button>
              <button className='communityBtn'>Community</button>
              {/* <IoIosPeople className='icon'/> */}
            </div>
          </div>
          <div className="proposeBox position-relative">
            <h4>Marketplace store at Pancakeswap.</h4>
            <p>Ended Sep 28th,2022 04:30</p>
            <div className="div">
              <button className='voteBtn'>Vote Now</button>
              <button className='communityBtn'>Community</button>
              {/* <IoIosPeople className='icon'/> */}
            </div>
          </div>
          </>)
          }

        </div>
       
    </VoteContainer>
  )
}
