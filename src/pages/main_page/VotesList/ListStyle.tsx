
import styled from "styled-components";

export const VoteContainer = styled.div`
width:1440px;
.back{
text-align:left;
color:#439af3;
cursor:pointer;
}
.container-fluid{
    padding:0
}
.mainDiv{
    h2{
        color:#00c679

    }
    p{
        letter-spacing:1px
    }
   
}
.voteBox {
    border:1px solid #6b7fb9;
    border-radius:10px;
    margin:30px 0 30px;
    h3{
        margin:0px;
        padding:15px 10px;
        order:1px solid #6b7fb9;
    border-top-left-radius:10px;
    border-top-right-radius:10px;
    }
}
.box{
    padding:10px;
    .form-check{
        border:1px solid #6b7fb9
        padding:10px;
        border-radius:10px
    }
    .form-check-label{
        padding-left:10px
        font-size: 20px;
        font-width:400
        

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
    padding:5px 15px
    border:none;
    outline:none
    background:linear-gradient(245.22deg,rgb(218,46,239),rgb(43,106,255),rgb(57,208,216)) 0% center / 400% 100%;
    color:${({ theme }) => theme.text7};
}
${({ theme }) => theme.mediaWidth.upToExtraLarge`
width:100%;

`
}
`