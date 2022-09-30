import React from 'react'
import { VoteContainer } from './ListStyle'
import { HiOutlineArrowSmLeft } from 'react-icons/hi'
import ProgressBar from "@ramonak/react-progress-bar";

export default function VotesList() {
  return (
    <>
      <VoteContainer>
        <h4 className="back-item position-relative">
          <HiOutlineArrowSmLeft style={{ position: 'relative', top: '5px', fontSize: '24px' }} />
          Back to Vote Overview
        </h4>
        <div className="container-fluid row mainDiv">

          <div className="info" >
          <div className="div">
              <button className='voteBtn1'>Vote Now</button>
              <button className='communityBtn1'>Community</button>
              {/* <IoIosPeople className='icon'/> */}
            </div>
            <h2>MARKET PLACE STORE AT PANCAKE SWAP</h2>
            <p>yes market place like AMAZON, BANGGOD, EBAY, SHOPEE, and etc.</p>
          </div>
        
          <div className="col-md-7 col-sm-12">
         
          
            <div className="voteBox">
              <div className="h3">
                <h3>Cast Your Vote</h3>
              </div>
              <div className="inputContainer">
                <div className="box yes">
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio1"
                      value="yes"
                    />
                    <label className="form-check-label" htmlFor="inlineRadio1">
                      Yes
                    </label>
                  </div>
                </div>
                <div className="box no">
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio1"
                      value="no"
                    />
                    <label className="form-check-label" htmlFor="inlineRadio2">
                      No
                    </label>
                  </div>
                </div>
                <button className="cast">Cast Vote</button>
              </div>
            </div>
            <div className="voteBox">
            <div className="h3">
                <h3>Votes</h3>
              
            </div>
            <div className="row">
                  <div className="col-md-5 col-xs-5 votesData text-start" >
                  0x57...9669
                  </div>
                  <div className="col-md-2 col-xs-2 votesData text-center" >Yes</div>
                  <div className="col-md-5 col-xs-5 votesData text-right"  >105,168.317</div>
                </div>
                <div className="row">
                  <div className="col-md-5 col-xs-5 votesData text-start" >
                  0x57...9669
                  </div>
                  <div className="col-md-2 col-xs-2 votesData text-center" >Yes</div>
                  <div className="col-md-5 col-xs-5 votesData text-right"  >105,168.317</div>
                </div>
                <div className="row">
                  <div className="col-md-5 col-xs-5 votesData text-start" >
                  0x57...9669
                  </div>
                  <div className="col-md-2 col-xs-2 votesData text-center" >Yes</div>
                  <div className="col-md-5 col-xs-5 votesData text-right"  >105,168.317</div>
                </div>
              </div>
              
          </div>
          <div className="col-md-5 col-sm-12">
          <div className="voteBox results" style={{width:"25rem",paddingBottom:"15px"}}>
            <h3>
            Current Results
            </h3>
            {/* <div className="progress">
              <div className="progress-bar" role="progressbar" aria-valuenow={0} aria-valuemin={100} aria-valuemax={100}></div>
            </div> */}
            <div className="progressBar">
              <h4>Yes</h4>
            <ProgressBar completed={60} bgColor="linear-gradient(245.22deg,rgb(218,46,239),rgb(43,106,255),rgb(57,208,216)) 0% center / 400% 100%" height="15px"/>
            </div>
            <div className="progressBar">
              <h4>Yes</h4>
            <ProgressBar completed={40}  bgColor="linear-gradient(245.22deg,rgb(218,46,239),rgb(43,106,255),rgb(57,208,216)) 0% center / 400% 100%" height="15px" />
            </div>
           
          </div>


          </div>
        </div>
      </VoteContainer>
    </>
  )
}
