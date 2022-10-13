import Web3 from "web3";
import {ethAddress,ethAbi} from "./config";
export const web3 = new Web3(Web3.givenProvider);
import toast from 'react-hot-toast';

export const exchangeContract = new web3.eth.Contract(ethAbi, ethAddress);
declare let window: any;
 
export  function SwitchANA(){
    const chainId:any = 1807;
      return new Promise(async(resolve, reject) => {
      if (window.ethereum) {
        try {
          await  window.ethereum.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: "0x70f"}],
          });
          resolve(web3);
        } catch (error) {
          if (error.code === 4902) {
        try {
           window.ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [{
            chainId:  web3.utils.toHex(chainId),
            chainName: 'Rabbit Testnet',
            nativeCurrency: {
                name: 'Rabbit',
                symbol: 'rANA',
                decimals: 18
            },
            rpcUrls: ['https://rabbit.analog-rpc.com/'],
            blockExplorerUrls: ['https://rabbit.analogscan.com']
            }]
          });
        
        } catch (error) {
          console.error(error);
        }
      } 
    }}
    });
    
      
      
    }

    export async function connectWallet() {
        SwitchANA(); 
        return new Promise((resolve, reject) => {
          if (window.ethereum) {
            try {
              window.ethereum
                .request({ method: "eth_requestAccounts" })
                .then(async function (address:any) {
                  const userAddress = address[0];
                
                   console.log("asda",userAddress);
                 
                  resolve({
                    userAddress,
                    chainId:97

                  });
                  window.ethereum.on("accountsChanged", function (accounts:any) {
                    window.location.reload();
                  });
                });
            } catch (error) {
              if (error.code === 4001) {
              }
              console.log(error);
              reject(error);
            }
          }
        });
      }
    //   function getVotingContract(web3:any, toConfig:any) {
    //     console.log(toConfig, "!!!!:::VOTING:::")
    //     return new web3.eth.Contract(VotingABI, toConfig);
    //   }

      export async function voting(user:any, title:any, content:any, choiceData:any, start:any, end:any,setNav:any) {
        console.log(user,title,content,choiceData,start,end,"ergbrtfbjhgvb")
        
        const proposal = exchangeContract.methods.setData(title, content, choiceData, start, end).send({
            value: 1000000000000000000,
            from: user,
          })
          toast
          .promise(proposal, {
            loading: "Proposal is pending....",
            success: (d) => {
              return "Proposal approved.";
            },
            error: (error) => {
              return error.message ?? "Proposal request failed.";
            },
          })
        .then((d) => {
          setNav(true)
        })
      
          
          // .then((d:any) => {
          //   console.log(d);
          // })
      
        // console.log("Voting...")
      };


      export function allData() {
        return new Promise(async (resolve, reject) => {
          try {
          
            const allData = await exchangeContract.methods.AllData().call()
              resolve({
                allData,
              })
              // console.log(allData,"allData");
              
          } catch (err) {
           
            alert(
              `Failed to load web3, accounts, or contract. Check console for details.`
            );
            console.error(err, "!errororororo");
          }
        })
      }

      export function getDataByid(key:any) {
        return new Promise(async (resolve, reject) => {
          try {
            
      
            const getData = await exchangeContract.methods.getDataByPropsalId(key).call()
      
            resolve({
              getData,
            })
      
          } catch (err) {
            alert(
              `Failed to load web3, accounts, or contract. Check console for details.`
            );
            console.error(err, "!");
          }
        })
      }

      export function modsAddress() {
        return new Promise(async (resolve, reject) => {
          try {
           
      
            const modAddress = await exchangeContract.methods
            .modsAddress()
              .call();
            resolve({
              modAddress,
            })
          } catch (err) {
            alert(
              `Failed to load web3, accounts, or contract. Check console for details.`
            );
            console.error(err, "!");
          }
        })
      };
      export function getVotingDetails(key:any) {
        return new Promise(async (resolve, reject) => {
          try {
            const getVoting = await exchangeContract.methods.GetVotingDetails(key).call()
      
            resolve({
              getVoting,
            })
      
          } catch (err) {
            alert(
              `Failed to load web3, accounts, or contract. Check console for details.`
            );
            console.error(err, "!");
          }
        })
      };
      export function toTalNumberOfVote(key:any, item:any) {
        console.log("REF:::TOTAL")
        return new Promise(async (resolve, reject) => {
          try {
            // const toConfig = await urlNetwork(networks);
            // const voting_instance = await getVotingContract(web3, toConfig)
      
            const totalVote = await exchangeContract.methods
              .TotalNumberOfVote(key, item)
              .call();
            resolve({
              totalVote,
            })
            getVotingDetails(key);
      
          } catch (err) {
            // alert(
            //   `Failed to load web3, accounts, or contract. Check console for details.`
            // );
            console.error(err, "!");
          }
        })
      }
     

      export async function  vote( key:any, user:any, selectedOption:any,setRef:any) {
        
        const getVoting = exchangeContract.methods
              .vote(key, user, selectedOption)
              .send({
                from: user,
                value: 0,
              })
              // console.log(getVoting,"getVoting")
          //     toast
          //     .promise(getVoting, {
          //       loading: "Voting is pending....",
          //       success: (d) => {
          //         return "Voting approved.";
          //       },
          //       error: (error) => {
          //         return error.message ?? "Voting request failed.";
          //       },
          //     })
          // .then((d:any) => {
          //   getVotingDetails( key);
          //  toTalNumberOfVote(key, item);
          //   console.log(d,"redfdddddd");
          // })
          toast
          .promise(getVoting, {
            loading: "Voting is pending....",
            success: (d:any) => {
              return "Voting approved.";
            },
            error: (error) => {
              return error.message ?? "Voting request failed.";
            },
          })
      .then((d:any) => {
        getVotingDetails( key);
        setRef(true)
      //  toTalNumberOfVote(key, item);
        console.log(d,"redfdddddd");
      })
        console.log("Voting...1")
      }
     

      
      