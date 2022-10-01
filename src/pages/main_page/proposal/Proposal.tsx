import React, { useState,useEffect } from 'react'
import { useQuill } from 'react-quilljs'
import 'quill/dist/quill.snow.css'
import { ProposalContainer } from './style';
// import {useActiveReact} from "../../../hooks/useActiveReact"
import { connectWallet , voting} from '../hook/getWeb3';
import { web3 } from '../hook/getWeb3';

export default function Proposal() {
  const inputArr = [
    {
      type: 'text',
      id: 0,
      value: ''
    }
  ]
  const [title,setTitle] = useState("")
  const [textArea, setTextArea] = useState('')
  const [textAreaStatus, setTextAreaStatus] = useState(false)
  const [textMsg, setTextMsg] = useState('')
  // const [choice1, setChoice1] = useState('');
  const [userAddress, setUserAddress] = useState("");
  const [choiceData, setChoiceData] = useState("");
  const [choice, setChoice] = useState("");
  const [arr, setArr] = useState(inputArr);
  const [startn, setStartDate] = useState("");
  const [endn, setEndDate] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [chainId,setChainId] =useState(0)
  
  
  const choiceArr = {
    value: choice
  };
  const choiceDatan = [choiceArr, ...arr];
  console.log(choiceDatan,"choiceDatanchoiceDatanchoiceDatan");
  
  console.log(userAddress.length,"userAddress")
  // console.log(start,end,title,choiceData,textArea,userAddress.userAddress,"wallet")

  const { quill, quillRef } = useQuill()



  const addInput = () => {
    setArr((s: any) => {
      // console.log(s, 'ssssss')
      return [
        ...s,
        {
          type: 'text',
          id: s.length,
          value: ''
        }
      ]
    })
  }
  const handleChange = (e: any) => {
    e.preventDefault()

    const index = e.target.id
    setArr(s => {
      const newArr = s.slice()
      newArr[index].value = e.target.value
      // console.log(newArr,"newArrnewArr")
      return newArr
    })
  }
  const submit = () => {
      voting(userAddress,title,textArea,choiceData,start,end)

  }


  useEffect(()=>{
    connectWallet().then((d:any)=>{setUserAddress(d.userAddress);});

  },[]);


  useEffect(()=>{
    web3.eth.getChainId().then((d)=>{console.log(d,"chainIdddd"); setChainId(d);});
  },[chainId]);


  useEffect(() => {
    choiceDatan.map((item:any, i) => {
      console.log(item.value, "item.value:::VOTING")
      
      // console.log(item.value?.join(','),"items")
      setChoiceData(item.value);
    })
    const startDate = new Date(startn).getTime().toString();
    const endDate = new Date(endn).getTime().toString();
    console.log(startDate,"START>>>>>>>>>>>")
    console.log(endDate,"END:::>>>>>>>>>>>")
    setStart(startDate);
    setEnd(endDate);
  });


  useEffect(() => {
    if (quill) {
      quill.on('text-change', () => {
        console.log(quill.getText().length, 'quill.getText()')
        const quilData = quill.getText()
        setTextArea(quilData)

        if (quilData.length > 1) {
          setTextAreaStatus(true)
        } else if (quilData.length < 2) {
          setTextAreaStatus(false)
          setTextMsg('Body is required*')
          setTimeout(() => {
            setTextMsg('')
          }, 5000);
        }
      })
    }
  }, [quill]);

  const deleteInput = (i: number) => {
    
    const data = arr.filter(item => item.id !== i)
    setArr(data)
  };

  return (
    <ProposalContainer>
      
      <div className="innerProposal">
      
      <h2 className="proposalHeading">MAKE A PROPOSAL</h2>
      <div className="row">
        <div className="col-md-8 col-xs-12">
          <h5 className="label">
            <label htmlFor="">Title:</label>
          </h5>
          <div className="inputDiv" style={{ margin: '0px 0px 20px 0' }}>
            <input type="text" style={{ width: '100%', lineHeight: '30px' }} placeholder="Enter Title" className='title' value={title} onChange={(e)=>setTitle(e.target.value)}/>
          </div>

          <div className="quillParent" style={{ width: '100%', height: 400, marginBottom: '80px' }}>
            <div ref={quillRef} />
          </div>
          {textAreaStatus ? (
            <div className="textArea">
              <h5>Preview</h5>

              <textarea
                name=""
                id=""
                cols={50}
                rows={5}
                value={textArea}
                onChange={e => setTextArea(e.target.value)}
                disabled
              ></textarea>
            </div>
          ) : (
            <p style={{ margin: '20px 0' , color:"red"}}>{textMsg}</p>
          )}

          <div className="choices">
            <h5>Choices</h5>
            <div className="choicesInput1" id="set">
              <input
                type="text"
                className="choicesInput"
                placeholder="Enter Choice"
                value={choice}
                onChange={(e:any) =>setChoice(e.target.value)}
              />
            
              {arr.map((item: any, i: any) => {
                console.log(i, 'itemitem')
                return (
                  <>
                    <div className="inputWrapper">
                      <input
                        onChange={handleChange}
                        value={item.value}
                        placeholder="Enter Choice"
                        id={i}
                        type={item.type}
                        className="choicesInput"
                      />
                      {i != 0 && <i className="fa-solid fa-xmark" onClick={() => deleteInput(i)}></i>}
                    </div>
                  </>
                )
              })}
            </div>
            <button className="addChoices" onClick={addInput}>
              Add Choice
            </button>
          </div>
        </div>
        <div className="col-md-4 col-xs-12 actionDiv">
       
          <div className="card" style={{ width: '22rem' }}>
          <h3>Actions</h3>
          <div className="cardContent">
            <div className="actionInputDiv">
              <label htmlFor="sDate">Start Date</label>
              <br />
              <input type="date" name="" id="sDate" className="actionsInput" placeholder="Start Date" onChange={(e:any) => setStartDate((e.target.value)?.split("-"))}/>
            </div>
           
            <div>
              <label htmlFor="edate" className="actionInputDiv">
                End Date
              </label>
              <br />
              <input type="date" name="" id="edate" className="actionsInput" placeholder="End Date" onChange={(e:any) => setEndDate((e.target.value)?.split("-"))}/>
            </div>

            {/* <div>
              <label htmlFor="" className="actionInputDiv">
                End Time
              </label>
              <br />
              <input type="time" name="" id="" className="actionsInput" />
            </div> */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
             {/* { userAddress.status? */}
               {/* <button className="actionBtn">Submit</button> */}
              {/* <button className="actionBtn" onClick={()=>connectWallet().then((d:any)=>{setUserAddress({userAddress:d.userAddress, status:d.status});})}>Connect Wallet</button>} */}
             {chainId==97 && userAddress ?<button className="actionBtn1" onClick={submit}>Submit</button>: <button className="actionBtn" onClick={()=>connectWallet().then((d:any)=>{setUserAddress(d.userAddress);})}>Connect Wallet</button>
              }
            </div>
            </div>
            
          </div>
     
        </div>
      </div>
      </div>
    </ProposalContainer>
  )
}
