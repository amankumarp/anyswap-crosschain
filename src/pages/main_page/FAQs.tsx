import React, { useState, useRef } from 'react'
import styled from 'styled-components'
//  import ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";

const AccordionStyle = styled.div``;
const FaqsStyle=styled.div`
max-width:1440px;
padding-bottom:40px
.rc-accordion-toggle {
  display: flex;
 
  cursor: pointer;
  justify-content: space-between;
  align-items:center;
  padding:15px 20px;
  background:${({ theme }) => theme.faqBackground};
 
  transition: 0.3s;
}
.rc-accordion-toggle.active{
  background-color:${({ theme }) => theme.faqActive} ;
  
}
.rc-accordion-toggle.active .rc-accordion-icon{
  transform: rotate(180deg);
  color:${({ theme }) => theme.homeText4};
}
.rc-accordion-card{
   border: 1px solid ${({ theme }) => theme.homeBorder};
  border-radius: 5px;
  margin-bottom: 10px ;
  overflow: hidden;
}

.accordian-margin{
padding:10px 20px
${({ theme }) => theme.mediaWidth.upToMedium`
padding: 0px 10px;
`}
.rc-accordion-toggle.active h5{
  color:${({ theme }) => theme.homeText4};

}

}
.rc-accordion-header{
  margin:0px 0 0
}


.rc-accordion-title{
  font-weight: 500;
  font-size: 16px;
  position: relative;
  margin-top:0px;
  margin-bottom: 0;
  color:  #00c679;
  transition: 0.3s;
  padding:5px 0;
}
.rc-accordion-toggle.active .rc-accordion-title{
  color: #fff;
}
.rc-accordion-icon{
  position: relative;
 
  color: #475F7B;
  transition: 0.35s;
  font-size: 12px;
}
.rc-accordion-body{
  flex: 1 1 auto;
  min-height: 1px;
  padding: 15px;
}
.rc-accordion-body p{
  margin-bottom: 0;
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  color: #727E8C;
  padding:5px 0;
}
.rc-collapse{
  position: relative;
  height: 0;
  overflow: hidden;
  transition: height 0.35s ease;
  background:${({ theme }) => theme.faqBackground};
}

.rc-collapse.show{
  height: auto;
}
${({ theme }) => theme.mediaWidth.upToExtraLarge`
width:100%;`}
`;


const faqs = [
  {
    id: 1,
    header: 'Which networks does the Bridge operate with?',
    text: `
        Ethereum, Polygon, BNB chain, Fantom Opera, and Analog are among the networks that may make and receive two-way transactions using the Bridge right now.`,
    text2: '',
    text3: '',
    a: ''
  },
  
  {
    id: 2,
    header: 'What is the price of a transaction?',
    text:
      "The cost of a transfer is determined by the networks' commissions, which you will deal with throughout the transfer procedure.",

    text2:
      'Although it is unfortunately difficult to totally eliminate these costs, we can promise that they will be modest when engaging with the contracts of the Analog network. The highest costs should be anticipated while communicating with the Ethereum network given the situation of the market at the moment.',

    text3: 'To carry out transactions at the least expensive times, we advise monitoring the gas price on Etherscan: ',
    a: 'https://etherscan.io/gastracker'
  },
  {
    id: 3,
    header: 'What is an Analog?',
    text: `The Analog currency is used only on the Analog network. You'll need Analog for the Bridge's gas costs if you want to send tokens around.`,
    text2:
      'To choose out any property, just go ahead and click the corresponding button. To show or hide a certain item, just move the corresponding slider.',
    text3: '',
    a: ''
  },
 
  {
    id: 4,
    header: 'What is the credit gas option about?',
    text: `In order to complete a transfer in Analog Chain, you need to have a minimal quantity of Analog. Selecting the Credit gas option will cause some of your tokens to be converted mechanically into Analog and transferred to your Metamask Wallet.`,
    text2: '',
    text3: '',
    a: ''
  },
  
]
const faq2= [
  {
    id: 5,
    header: 'I am unable to announce my trade or complete a swap.',
    text: `Your wallet might come in handy. Press the Deploy button on your wallet to activate Analog. If you're ready to proceed, choose the wallet type you want to use, and then finish off the purchase.`,
    text2: '',
    text3: '',
    a: ''
  },
 
  {
    id: 6,
    header: "I'd want to know how to make certain tokens visible in my Metamask Wallet.",
    text: `The only currency that will be shown when you open your wallet is Analog. `,
    text2:
      'To choose out any property, just go ahead and click the corresponding button. To show or hide a certain item, just move the corresponding slider.',
    text3: '',
    a: ''
  },
  {
    id: 7,
    header: 'If I want to send money to someone on a different network, do I really need to use Metamask Wallet?',
    text: `The Metamask Wallet is required for processing gas payments on the Analog network, which is the network upon which the Bridge was constructed.`,
    text2: '',
    text3: '',
    a: ''
  },
]

const AccordionItem = (props: any) => {
  const contentEl: any = useRef()
  const { handleToggle, active, faq } = props
  const { header, id, text, text2, text3, a } = faq

  return (
    <AccordionStyle>
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
          <a href={a} style={{ fontSize: '14px' }} target="_blank" rel="noreferrer">
            {a}
          </a>
        </div>
      </div>
    </div>
    </AccordionStyle>
  )
}

export default function FAQs() {
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
    <FaqsStyle>
      <div className="container-fluid mt-5 mb-5">
        <div className="row justify-content-center">
        <div className="col-md-6 col-12 accordian-margin" >
        <div className="card">
                    <div className="card-body">
          {faqs.map((faq, index) => {
            return (
              <>
                    <AccordionItem key={index} active={active} handleToggle={handleToggle} faq={faq} />
              </>
            )
          })}
           </div>
          </div>
          </div>
          <div className="col-md-6 col-12 accordian-margin">
          <div className="card">
                    <div className="card-body">
          {faq2.map((faq, index) => {
            return (
              <>
                    <AccordionItem key={index} active={active} handleToggle={handleToggle} faq={faq} />
              </>
            )
          })}
           </div>
          </div>

          </div>
        </div>
      </div>
      </FaqsStyle>
    </>
  )
}
