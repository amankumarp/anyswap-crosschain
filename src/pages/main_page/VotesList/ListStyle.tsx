
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
        margin:30px 0 15px

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
.cast{
    margin:10px;
    height:40px
    border-radius:10px;
    padding:5px 40px
    border:none;
    outline:none
    background:linear-gradient(245.22deg,rgb(218,46,239),rgb(43,106,255),rgb(57,208,216)) 0% center / 400% 100%;
    color:${({ theme }) => theme.text7};
}
.voteBtn1{
    background:linear-gradient(245.22deg,rgb(218,46,239),rgb(43,106,255),rgb(57,208,216)) 0% center / 400% 100%;
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
    padding:10px 10px !important
    line-height:30px;
    color:${({ theme }) => theme.text7};
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

`
}
  }
  

${({ theme }) => theme.mediaWidth.upToExtraLarge`
width:100%;

`
}
`