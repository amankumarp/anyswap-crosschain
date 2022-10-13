import React from 'react';
import FAQs from './FAQs';
import styled from 'styled-components';

const FaqsStyle = styled.div`
width:1440px;
.our_features h2{
    color: ${({ theme }) => theme.text7}
}
.div-center{
    display:flex;
    justify-content:center;
    padding-bottom:15px;
}
.features_title {
    font-size:20px
    ${({ theme }) => theme.mediaWidth.upToEs`
        font-size:18px;
    
    `}
}
.span-faqs{
    ${({ theme }) => theme.mediaWidth.upToSmall`
        display:none !important;
    `}
}
${({ theme }) => theme.mediaWidth.upToExtraLarge`
width:100%;
`}

`

export default function FaqsSection() {

  return (
    <FaqsStyle>
          <div id="Faqs" className="container-fluid our_features our_contacts mt100">
          <div className="row">
            <div className="col-md-12 div-center">
              <h2 className="features_title ">
                <img src="images/faq.png" style={{width:"30px",marginRight:"8px"}}/> Frequently Asked Questions <span className='span-faqs'>(FAQS)</span> 
              </h2>
            </div>
            <div className="col-md-12">
              <FAQs />
            </div>
          </div>
        </div>
    </FaqsStyle>
  )
}
