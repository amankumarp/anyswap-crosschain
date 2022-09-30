import styled from "styled-components";

export const VoteContainer = styled.div`
padding-top:20px;
width:1400px;

.topBox{
    background:linear-gradient(var(--gradient-rotate,246deg),#da2eef 7.97%,#2b6aff 49.17%,#39d0d8 92.1%);
    padding:2px ;
    border-radius:10px;
    .innerBox{
        background:${({ theme }) => theme.expoTab};;
        padding:15px 10px 15px;
        border-radius:10px;
        .margin-bottom:22px;
    }
    .votingHeader{
        margin:0px
        font-size:50px;
        letter-spacing:1px
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
        background-clip: text;
        background-color: red;
        background-image: linear-gradient(270.24deg,#da2eef 30.86%,#2b6aff 70.43%);
        background-repeat: repeat;
        font-weight:700;
        ${({ theme }) => theme.mediaWidth.upToSmall`
        font-size:40px;
        
        `}
       
    }
    .votingInfo{
        font-size:30px;
        font-weight:600;
        color:${({ theme }) => theme.text7}
        ${({ theme }) => theme.mediaWidth.upToSmall`
       font-size:24px;
        
        `}

    }
    .votingBtn{
        color:${({ theme }) => theme.text7}
        height:50px;
        border:none;
        outline:none;
        border-radius:10px;
        background:linear-gradient(245.22deg,rgb(218,46,239),rgb(43,106,255),rgb(57,208,216)) 0% center / 400% 100%;
        padding:0 024px;
        margin:8px 0;
       
        font-weight:500;
        letter-spacing:0.03em;
        font-size:24px;
        ${({ theme }) => theme.mediaWidth.upToSmall`
        height:40px;
        
        `}
    }
    .message{
        position:relative;
        top:50%;
        transform:translateY(-80%);
        margin-right:5px
        ${({ theme }) => theme.mediaWidth.upToSmall`
        transform:translateY(-70%);

        `}
    }
    .votingCol{
    padding:30px 0
        
    }

    .votingColR{
        display:flex;
        justify-content:center
    }
   

}
.proposal{
    text-align:center;
    font-size:50px;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
    background-color: red;
    background-image: linear-gradient(90.24deg,#da2eef 30.86%,#2b6aff 70.43%);
    background-repeat: repeat;
    padding:30px 0 15px;
}
.tabBox{
    border:1px solid #6b7fb9
    border-radius:10px;
    padding-bottom:5px;
    .box{
        background:${({ theme }) => theme.expoTab};
        border-top-left-radius:10px;
        border-top-right-radius:10px;
        padding:10px 0;
        ul{
            list-style:none;
            padding:10px;
            margin:0;
            display:flex;
            .active{
               color:#4d52f4
            }
        }
        li{
            padding:10px;
            font-size:20px;
            color:${({ theme }) => theme.text7};
            background:${({ theme }) => theme.votingAct};
            margin:2px 0 2px 5px;
            padding:8px 10px;
            border-radius:10px;
            cursor:pointer
            display:flex;
            justify-content:flex-start;
            align-items:center;

            .icon{
                font-size:20px;
                margin-right:5px
            }

        }
       
       
    }
    .form{
        display:flex
        .form-check{
            margin:10px 20px
        }
        .form-check-input{
           
            // height:20px;
            // width:20px;
        }
        .form-check-label{
            margin-left:4px;
            font-size:16px
        }
    }
    .proposeBox{
        padding:20px;
        border-top:1px solid #6b7fb9;
        border-bottom:1px solid #6b7fb9;
        cursor:pointer;
        &:hover{
            background:#11245d38;
        }
        h4{
            color:#4a5a87;
            font-weight:600;
            font-size:18px;
        }
        p{
            color:#6b7fb9a6;
            font-weight:300;
            font-size:14px;
            letter-spacing:1px
        }
        .voteBtn{
             background:linear-gradient(245.22deg,rgb(218,46,239),rgb(43,106,255),rgb(57,208,216)) 0% center / 400% 100%;
             border:none;
             outline:none
             border-radius:10px;
             margin:0 10px 0 0
             padding:5px 15px;
             color:${({ theme }) => theme.text7};

        }
        .communityBtn{
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
    }
}
.position-relative{
    position:relative
}
.arrow{
    color:#6b7fb9;
    position:absolute;
    top:50%;
    right:20px;
    transform:translateY(-50%)
}

${({ theme }) => theme.mediaWidth.upToExtraLarge`
width:100%;
padding:10px
`
}
${({ theme }) => theme.mediaWidth.upToMedium`
width:100%;
padding:10px;
margin-top:50px;
`
}
${({ theme }) => theme.mediaWidth.upToSmall`
width:100%;
padding:10px;
margin-top:20px;
`
}

`;