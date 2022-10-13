
import styled from "styled-components";

export const VoteContainer = styled.div`
width:1440px;
.back-item{
text-align:left;
color:#39d0d8;
cursor:pointer;
margin-top:10px
padding:0px 10px;
position:relative;
}
.container-fluid{
    padding:0
}
.div{
    padding-top:25px
}
.mainDiv{
    padding-top:50px
    h2{
        color:#00b5df
        margin:20px 0 15px

    }
    p{
        letter-spacing:1px
        color: ${({ theme }) => theme.text7};
    }
   
}


.voteBox {
    border:1px solid #6b7fb9;
    border-radius:10px;
    margin:30px 0 30px;
    .h3{
        border-bottom:1px solid #6b7fb9;
        margin:0;
        color: ${({ theme }) => theme.text7};

    }
    h3{
        margin:0px;
        padding:15px 10px;
        background:${({ theme }) => theme.expoTab};
        color: ${({ theme }) => theme.text7};
       
    border-top-left-radius:10px;
    border-top-right-radius:10px;
    }
}
.box{
    padding:10px;
    .form-check{
        border:1px solid #6b7fb9;
        padding:10px;
        border-radius:10px
    }
    .form-check-label{
        padding-left:10px
        font-size: 20px;
        font-width:400
        color:${({ theme }) => theme.text7};

    }
    .form-check-input{
        width:1rem;
        height:1rem
    }
   
}
.details{
    display:flex;
    justify-content:space-between;
    padding:5px 5px;
    fontWeight:600;
    font-size:14px;
    color:${({ theme }) => theme.text7};
}
.label{
    display:none
}
.cast{
    margin:10px;
    height:40px
    border-radius:10px;
    padding:5px 40px
    border:none;
    outline:none
    background:${({ theme }) => theme.votingGradient};
    color:${({ theme }) => theme.text7};
}
.opac{
    opacity:.6
}
.voteBtn1{
    background:${({ theme }) => theme.votingGradient};
    border:none;
    outline:none
    border-radius:10px;
    margin:0 10px 0 0
    padding:5px 15px;
    color:${({ theme }) => theme.text7};

}
.communityBtn1{
   background:transparent;

   border:1px solid red;
   outline:none
   border-radius:10px;
   margin:0 10px 0 0
   padding:5px 15px;
   color:${({ theme }) => theme.text7};
   .icon{
       font-size:25px;
       margin-right:5px;
   }
}
   .row{
    padding:0 25px
   }
  .text-center{
    text-align:center
   
  }
 
  .votesData{
    padding:10px 20px !important
    line-height:30px;
    color:${({ theme }) => theme.text7};
  }
  .rr{
    padding:10px 15px 10px 15px !important
   
        width: 100%;
        
        border-top: 1px solid ${({ theme }) => theme.homeBorder};;
        margin: 0;
    
  }
  .v1{
    text-align:left;
    color:rgb(57, 208, 216);
    ${({ theme }) => theme.mediaWidth.upToSmall`
    font-size:14px;
    `
    }
    ${({ theme }) => theme.mediaWidth.upToExtraSmall`
    font-size:14px
    `
    }

  }
  .v2{
    text-align:right;
    ${({ theme }) => theme.mediaWidth.upToSmall`
    font-size:14px
    `
    }
    ${({ theme }) => theme.mediaWidth.upToExtraSmall`
    font-size:14px
    `
    }
  }
  .results{
  
  margin:auto
  margin-top:30px;
    h3{
        width:100%
        border-bottom:1px solid #6b7fb9
        color:${({ theme }) => theme.text7};
    }
    ${({ theme }) => theme.mediaWidth.upToExtraSmall`
    width:100% !important;
    
    `
    }
  }
  .progressBar{
    padding:10px;
   
    h4{
        font-weight:600
        color:${({ theme }) => theme.text7};
    }
  }
  .info{
    width:50%;
    padding:15px;
    ${({ theme }) => theme.mediaWidth.upToExtraLarge`
    width:70%;
    
    `
    }
    
    ${({ theme }) => theme.mediaWidth.upToSmall`
width:100%;
padding:0px 15px

`
}
  }
  
  ${({ theme }) => theme.mediaWidth.upToMedium`
padding-top:50px

`
}
${({ theme }) => theme.mediaWidth.upToSmall`
padding-top:0px

`
}


${({ theme }) => theme.mediaWidth.upToExtraLarge`
width:100%;

`
}
`