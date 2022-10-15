import React, { useEffect, useState } from 'react'
import { VoteContainer } from './ListStyle'
import { HiOutlineArrowSmLeft } from 'react-icons/hi'
import ProgressBar from '@ramonak/react-progress-bar'
import { getDataByid, getVotingDetails, toTalNumberOfVote, vote } from '../hook/getWeb3'
import { useActiveReact } from '../../../hooks/useActiveReact'
import toast from 'react-hot-toast'
import moment from 'moment';
import { useDarkModeManager } from '../../../state/user/hooks'


export default function VotesList() {
  const [getsData, setGetData] = useState('')
  const [votingDetails, setVotingDetails] = useState([])
  const [heading, setHeading] = useState({ title: '', content: '' })
  const [choiceI, setChoiceI] = useState([])
  const [element, setElement] = useState([])
  const [selectedOption, setSelectOption] = useState('')
  const [timeStamp, setTimeStamp] = useState({ start: '', end: '' })
  const [ref, setRef] = useState(false)
  const [btnDisabled, setBtnDisabled] = useState(true)
  const { account } = useActiveReact()
  const [isDark] = useDarkModeManager()
  console.log(timeStamp, 'timestamp')

  // console.log(account,"accountaccountaccountaccountaccountaccountaccountaccountaccountaccount")

  const urlArray = window.location.href.split('?')
  const proposalId = urlArray[1].slice(11)
  // console.log(proposalId, 'proposalId')
  // console.log(getsData, 'getsDatagetsDatagetsData')

  useEffect(() => {
    getDataByid(proposalId).then((d: any) => {
      setHeading({ title: d.getData[0][0].userProposalTitle, content: d.getData[0][0].userProposalContent })
      setTimeStamp({ start: d.getData[0][0].userProposalStartTimestamp, end: d.getData[0][0].userProposalEndTimestamp })
      setGetData(d.getData[0][0].choice)
    })

    getVotingDetails(proposalId).then((d: any) => {
      setVotingDetails(d.getVoting)
      // console.log(d.getVoting, 'GET:VOTING:DETAILS')
    })
  }, [proposalId, votingDetails])

  useEffect(() => {
    const arr: any = getsData?.split(',')
    const arrr = arr.slice(0, arr.length - 1)
    // console.log(arrr, '.........arrrarar')
    setChoiceI(arrr)
  }, [getsData, ref])

  useEffect(() => {
    if (timeStamp) {
      const abs = moment(Number(new Date().getTime())).format('DD MMM yyyy')
      const StartTime = moment(Number(timeStamp.start)).format('DD MMM yyyy')
      const EndTime = moment(Number(timeStamp.end)).format('DD MMM yyyy')
      if (StartTime <= abs && EndTime >= abs) {
        setBtnDisabled(false)
      }
    }
  }, [timeStamp])

  useEffect(() => {
    ;(async () => {
      if (choiceI?.length > 0) {
        const res: any = await choiceI.map(async (item, i) => {
          const d = await toTalNumberOfVote(proposalId, item)
          const obj = { text: item, totalvote: d ? d : 0 }
          return obj
        })
        Promise.all(res).then((d: any) => {
          console.log('mandsdsds::', d)
          setElement(d)
        })
      }
    })()
  }, [choiceI, ref])

  return (
    <>
      <VoteContainer>
        <h4 className="back-item position-relative" onClick={() => (window.location.href = '/#/voting')} >
          <HiOutlineArrowSmLeft style={{ position: 'relative', top: '5px', fontSize: '24px' }} />
          Back to Vote Overview
        </h4>
        <div className="container-fluid row mainDiv">
          <div className="info">
            <h2>{heading && heading.title}</h2>
            <p dangerouslySetInnerHTML={{ __html: heading.content }}></p>
          </div>

          <div className="col-md-7 col-sm-12">
            <div className="voteBox">
              <div className="h3">
                {/* <div className="div">
              <button className="voteBtn1">Vote Now</button>
              <button className="communityBtn1">Community</button>
              
            </div> */}
            <h3>Cast your vote</h3>
           
              </div>
              <div className="inputContainer">
                {choiceI &&
                  choiceI.map((item: any, i: any) => {
                    console.log(item, 'item........')
                    return (
                      <>
                        <div className="box yes">
                          <div className="form-check form-check-inline">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="inlineRadioOptions"
                              id={i}
                              value={item}
                              onChange={e => {
                                setSelectOption(e.target.value)
                              }}
                            />
                            <label className="form-check-label" htmlFor="inlineRadio1">
                              {item}
                            </label>
                          </div>
                        </div>
                      </>
                    )
                  })}

                {/* <div className="box no">
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
                </div> */}
                <button
                  className={!btnDisabled ? 'cast' : 'cast opac'}
                  disabled={btnDisabled ? true : false}
                  onClick={() => {
                    if (selectedOption === '') {
                      toast('Pleace Select Choice...')
                      console.log('hello')
                    } else {
                      vote(proposalId, account, selectedOption, setRef)
                    }
                  }}
                >
                  Cast Vote
                </button>
              </div>
            </div>
            <div className="voteBox">
              <div className="h3">
                <h3>Votes &nbsp;({votingDetails.length})</h3>
              </div>
              {votingDetails &&
                votingDetails?.map((item: any, i) => {
                  console.log(item[0],"item[0]")
                  return (
                    <>
                      <div className="row rr">
                        <div className="col-md-6 col-xs-7 votesData v1 text-start" onClick={()=>window.location.href=`https://rabbit.analogscan.com/address/${item[0]}`} style={{cursor:"pointer"}}>
                          {window.innerWidth>=768?item[0]:item[0].substring(0, 9)+"..." +item[0].slice(-5)}
                        </div>
                        {/* <div className="col-md-2 col-xs-2 votesData text-center">Yes</div> */}
                        <div className="col-md-6 col-xs-5 votesData v2 text-right">{item[1]}</div>
                      </div>
                    </>
                  )
                })}
            </div>
          </div>
          <div className="col-md-5 col-sm-12">
            <div className="voteBox results" style={{ width: '25rem', paddingBottom: '15px' }}>
              <h3>Current Results</h3>
              {/* <div className="progress">
              <div className="progress-bar" role="progressbar" aria-valuenow={0} aria-valuemin={100} aria-valuemax={100}></div>
            </div> */}
              {element &&
                element.map((item: any, i) => {
                  // console.log(item, 'ITEMITEMITEM');
                  // console.log(item?.totalvote.totalVote,"totalvotetotalvote")
                  // console.log((item?.totalvote?.totalVote * 100) / votingDetails.length, "!@#:::::::")

                  return (
                    <>
                      <div className="progressBar">
                        <h4>{item.text}</h4>
                        <ProgressBar
                          labelClassName="label"
                          completed={
                            isNaN((item.totalvote.totalVote * 100) / votingDetails.length)
                              ? 0
                              : (item.totalvote.totalVote * 100) / votingDetails.length
                          }
                          bgColor={isDark?"linear-gradient(245.22deg,rgb(218,46,239),rgb(43,106,255),rgb(57,208,216)) 0% center / 400% 100%":"linear-gradient(245.22deg,rgb(218,46,239),rgb(231 231 231),rgb(120 235 241)) 0% center / 400% 100%"}
                          height="15px"
                        />
                        <div className="details">
                          <div className="noOfVotes">{item?.totalvote.totalVote} vote</div>
                          <div className="votesPer">
                            {isNaN((item.totalvote.totalVote * 100) / votingDetails.length)
                              ? 0
                              : ((item.totalvote.totalVote * 100) / votingDetails.length).toFixed(2)}
                            %
                          </div>
                        </div>
                      </div>
                    </>
                  )
                })}

              {/* <div className="progressBar">
                <h4>Yes</h4>
                <ProgressBar
                  completed={40}
                  bgColor="linear-gradient(245.22deg,rgb(218,46,239),rgb(43,106,255),rgb(57,208,216)) 0% center / 400% 100%"
                  height="15px"
                />
              </div> */}
            </div>
          </div>
        </div>
      </VoteContainer>
    </>
  )
}
