import React, { useState, useRef } from 'react'
//  import ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";

const faqs = [
  {
    id: 1,
    header: 'Which networks does the Bridge operate with?',
    text: `
        Ethereum, Polygon, BNB chain, Fantom Opera, and Analog are among the networks that may make and receive two-way transactions using the Bridge right now.`,
    text2: '',
    text3: '',
    a:""
  },
  {
    id: 2,
    header: 'What is the price of a transaction?',
    text:
      "The cost of a transfer is determined by the networks' commissions, which you will deal with throughout the transfer procedure.",

    text2:
      'Although it is unfortunately difficult to totally eliminate these costs, we can promise that they will be modest when engaging with the contracts of the Analog network. The highest costs should be anticipated while communicating with the Ethereum network given the situation of the market at the moment.',

    text3:
      "To carry out transactions at the least expensive times, we advise monitoring the gas price on Etherscan: ",
    a:"https://etherscan.io/gastracker"
  },
  {
    id: 3,
    header: 'If I want to send money to someone on a different network, do I really need to use Metamask Wallet?',
    text: `The Metamask Wallet is required for processing gas payments on the Analog network, which is the network upon which the Bridge was constructed.`,
    text2: '',
    text3: '',
    a:""
  },
  {
    id: 4,
    header: 'What is the credit gas option about?',
    text: `In order to complete a transfer in Analog Chain, you need to have a minimal quantity of Analog. Selecting the Credit gas option will cause some of your tokens to be converted mechanically into Analog and transferred to your Metamask Wallet.`,
    text2: '',
    text3: '',
    a:""
  },
  {
    id: 5,
    header: 'I am unable to announce my trade or complete a swap.',
    text: `Your wallet might come in handy. Press the Deploy button on your wallet to activate Analog. If you're ready to proceed, choose the wallet type you want to use, and then finish off the purchase.`,
    text2: '',
    text3: '',
    a:""
  },
  {
    id: 6,
    header: 'What is an Analog?',
    text: `The Analog currency is used only on the Analog network. You'll need Analog for the Bridge's gas costs if you want to send tokens around.`,
    text2: "To choose out any property, just go ahead and click the corresponding button. To show or hide a certain item, just move the corresponding slider.",
    text3: '',
    a:""
  },
  {
    id: 7,
    header: "I'd want to know how to make certain tokens visible in my Metamask Wallet.",
    text: `The only currency that will be shown when you open your wallet is Analog. `,
    text2: "To choose out any property, just go ahead and click the corresponding button. To show or hide a certain item, just move the corresponding slider.",
    text3: '',
    a:""
  }
]

const AccordionItem = (props: any) => {
  const contentEl: any = useRef()
  const { handleToggle, active, faq } = props
  const { header, id, text,text2,text3,a } = faq

  return (
    <div className="rc-accordion-card">
      <div className="rc-accordion-header">
        <div className={`rc-accordion-toggle ${active === id ? 'active' : ''}`} onClick={() => handleToggle(id)}>
          <h5 className="rc-accordion-title">{header}</h5>
          <i className="fa fa-chevron-down rc-accordion-icon"></i>
        </div>
      </div>
      <div
        ref={contentEl}
        className={`rc-collapse ${active === id ? 'show' : ''}`}
        style={active === id ? { height: contentEl.current.scrollHeight } : { height: '0px' }}
      >
        <div className="rc-accordion-body">
          <p className="mb-0">{text}</p>
          <p className="mb-0">{text2}</p>
          <p className="mb-0">{text3}</p>
          <a href={a} style={{fontSize:"14px"}} target="_blank" rel="noreferrer" >{a}</a>
          
        </div>
      </div>
    </div>
  )
}

export default function fAQs() {
  const [active, setActive] = useState(null)

  const handleToggle = (index: any) => {
    if (active === index) {
      setActive(null)
    } else {
      setActive(index)
    }
  }

  return (
    <>
      <div className="container-fluid mt-5 mb-5">
        <div className="row justify-content-center">
          <div className="col-md-8 col-12 accordian-margin">
            <div className="card">
              <div className="card-body">
                {/* <h4 className="form-heading mb-4 text-primary text-center mt-3">React Accordion</h4> */}
                {faqs.map((faq, index) => {
                  return <AccordionItem key={index} active={active} handleToggle={handleToggle} faq={faq} />
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
