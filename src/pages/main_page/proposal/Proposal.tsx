import React, { useState } from 'react'
import { useQuill } from 'react-quilljs'
import 'quill/dist/quill.snow.css'
import { ProposalContainer } from './style'

export default function Proposal() {
  const [textArea, setTextArea] = useState('')
  const [textAreaStatus, setTextAreaStatus] = useState(false)
  const [textMsg, setTextMsg] = useState('')
  const [choice1, setChoice1] = useState('')
  //  const [getId,setId] =useState("")

  const { quill, quillRef } = useQuill()
  const inputArr = [
    {
      type: 'text',
      id: 0,
      value: ''
    }
  ]
  const [arr, setArr] = useState(inputArr)

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

  React.useEffect(() => {
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
  }, [quill])
  const deleteInput = (i: number) => {
    // console.log(i,"iiiiiiiiiiiiii")
    const data = arr.filter(item => item.id !== i)
    setArr(data)
  }

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
            <input type="text" style={{ width: '100%', lineHeight: '30px' }} placeholder="Enter Title" className='title'/>
          </div>

          <div className="quillParent" style={{ width: '100%', height: 200, marginBottom: '80px' }}>
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
                value={choice1}
                onChange={e => setChoice1(e.target.value)}
              />
              {/* <input type="text" className='choicesInput' placeholder='Enter Choice'value = {choice2} onChange={(e)=>setChoice2(e.target.value)}/> */}
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
              <input type="date" name="" id="sDate" className="actionsInput" placeholder="Start Date" />
            </div>
           
            <div>
              <label htmlFor="edate" className="actionInputDiv">
                End Date
              </label>
              <br />
              <input type="date" name="" id="edate" className="actionsInput" placeholder="End Date" />
            </div>

            {/* <div>
              <label htmlFor="" className="actionInputDiv">
                End Time
              </label>
              <br />
              <input type="time" name="" id="" className="actionsInput" />
            </div> */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <button className="actionBtn">Connect Wallet</button>
              {/* <button className="actionBtn1">Submit</button> */}
            </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </ProposalContainer>
  )
}
