// import React from "react";
import styled from "styled-components";
import Icon from "../../../assets/svg/calendaar.png"


export const ProposalContainer = styled.div`

width:1400px;

margin:20px 0 20px;
padding:10px;

input[type="date"]::-webkit-calendar-picker-indicator {
    color: rgba(0, 0, 0, 0);
    opacity: 1;
    display: block;
    background: url(${Icon}) no-repeat;
    background-size:contain;
    width: 20px;
    height: 20px;
    border-width: thin;
    cursor:pointer;
    
   
}
.outerProposal{
    background:linear-gradient(var(--gradient-rotate, 246deg), #da2eef 7.97%, #2b6aff 49.17%, #39d0d8 92.1%);
    padding:2px;
border-radius:10px;

}
.innerProposal{
    padding:0 15px 40px;
    background:${({ theme }) => theme.mainCard};
    border-radius:10px;

}
.quillParent{
    ${({ theme }) => theme.mediaWidth.upToSmall`
margin-bottom:110px !important;
height:300px !important
`}

}
.ql-container.ql-snow  {
   
    background:#05071b0d
    border:1px solid #6b7fb9;
    
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
}
.ql-toolbar.ql-snow{
    border:1px solid #6b7fb9;
    background:#5bc0de !important;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
   
}
.ql-editor {
    color:${({ theme }) => theme.text7};
    font-size:20px;
    


}
.ql-image,.ql-video{
    display:none !important
}

.proposalHeading{
    text-align:center;
    padding:30px 0;
    font-size:45px
    margin:0;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
    background-color: red;
    background-image: linear-gradient(91.24deg,#da2eef 30.86%,#2b6aff 70.43%);
    background-repeat: repeat;
    background-size: 100%;
    color: #00a0ff;
    ${({ theme }) => theme.mediaWidth.upToSmall`
    font-size:30px;
    font-weight:600
`}
    
}
.label{
    margin:0px
    label{
        font-size:20px;
        color:${({ theme }) => theme.text7};
        
        font-weight:500;
    }
    .inputDiv{
        input{
            line-height:30px !important
        }
    }
    
  
}
.card{
    background:${({ theme }) => theme.mainCard};;
    border:1px solid #6b7fb9
    
    border-radius:10px
    h3{
        padding:15px 0;
        margin:0px;
        border-bottom:1px solid #6b7fb9;
        border-radius:10px;
        text-align:center;
        color:${({ theme }) => theme.text7};
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
        background-clip: text;
        background-color: red;
        background-image: linear-gradient(91.24deg,#da2eef 30.86%,#2b6aff 70.43%);
        background-repeat: repeat;
        background-size: 100%;
    }
   
    .cardContent{
        padding:0px 20px 20px;
    }
}
.actionDiv{
    display:flex;
    justify-content:center
   
    margin-top:20px;
}
.actionsInput{
    width:100% !important;
    line-height:30px;
    border-radius:10px
    border:1px solid #6b7fb9;
    color:#fff;
    padding:5px 10px;
    background:#05071b0d;
    ::placeholder:{
        color:#6b7fb9;
    }
   
}
.actionInputDiv{
    margin:10px 0px;
    color:${({ theme }) => theme.text7}
}
.actionBtn,.actionBtn1{
    width:100%;
    margin:20px 10px 5px;
    background:#00c481;
    height:40px;
    border-radius:10px
    border:none;
    outline:none;
    color:${({ theme }) => theme.text7}
}
.title{
    background:#05071b0d;
    border:1px solid #6b7fb9;
    outline:none
    color:${({ theme }) => theme.text7};
    
    ::placeholder{
        color:#6b7fb9
    }
    border-radius:10px;
    padding:5px 10px;
}

.textArea{
    margin:0px 0 20px;
   
    .textA{
        width:100%
        color:${({ theme }) => theme.text7};
        border:1px solid #6b7fb9;
        outline:none;
        background-color:#05071b0d;
        padding:10px 10px 8px ;
        border-radius:10px
        min-height:165px;
        word-break:break-word;
        
        
    }
    h5{
        font-size:20px;
        font-weight:bold;
        padding:0px 10px 8px ;
    }
}
.choices{
    
    padding:0px 0px 20px ;
    h5{
        font-size:20px;
        font-weight:500;
        margin:0
        padding:0px 10px 8px ;
        color:${({ theme }) => theme.text7}
    }
}
.choicesInput{
    width:100%;
    margin:10px 0;
    line-height:30px
    color:${({ theme }) => theme.text7};
    border:1px solid #6b7fb9;;
    outline:none;
    padding:5px 10px;
    background:#05071b0d;
    border-radius:10px;
    ::placeholder{
        color:#6b7fb9
    }
}
.addChoices{
    margin:0px 0;
    background:#00c481;
    height:40px;
    width:150px;
    border-radius:10px
    border:none;
    color:${({ theme }) => theme.text7}

}
.inputWrapper{
    position:relative;
    .fa-solid{
        position:absolute;
        right:15px;
        color:${({ theme }) => theme.text7};
        top:50%;
        transform:translateY(-50%);
        cursor:pointer;
    }
}
${({ theme }) => theme.mediaWidth.upToExtraLarge`
width:100%
margin:0px 10px
`}
${({ theme }) => theme.mediaWidth.upToMedium`
margin: 60px 0;
`}
${({ theme }) => theme.mediaWidth.upToSmall`
width:98%;
margin: 10px 0;
`}
`