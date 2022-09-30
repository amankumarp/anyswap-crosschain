import React from 'react';
import { VoteContainer } from './ListStyle';
import {HiOutlineArrowSmLeft} from "react-icons/hi";

export default function VotesList() {
  return (
    <>
    <VoteContainer>
        <h4 className='back'><HiOutlineArrowSmLeft/>Back to Vote Overview</h4>
        <div className="container-fluid row mainDiv">
            <div className="col-md-7 col-sm-12">
            <h2>MARKET PLACE STORE AT PANCAKE SWAP</h2>
            <p>yes market place like AMAZON,BANGGOD,EBAY,SHOPEE, and etc. buy n sell used crypto currency.</p>
            <div className="voteBox">
                <div className='h3'>
                <h3>Cast Your Vote</h3>
                </div>
                <div className="inputContainer">
                    <div className="box yes">
                    <div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="yes"  />
  <label className="form-check-label" htmlFor="inlineRadio1">Yes</label>
</div>
                    </div>
                    <div className="box no">
                    <div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="no" />
  <label className="form-check-label" htmlFor="inlineRadio2">No</label>
</div>
                    </div>
                    <button className='cast'>Cast Vote</button>

                </div>
            </div>
            </div>
            <div className="col-md-5 col-sm-12">

            </div>
        </div>
    </VoteContainer>
    </>
  )
}
