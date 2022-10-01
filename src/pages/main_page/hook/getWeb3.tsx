import Web3 from "web3";
import {ethAddress,ethAbi} from "./config";
export const web3 = new Web3(Web3.givenProvider);

export const exchangeContract = new web3.eth.Contract(ethAbi, ethAddress);
declare let window: any;
 
export async function SwitchBNB(){
    const chainId:any = 97;
      return new Promise((resolve, reject) => {
      if (window.ethereum) {
        try {
           window.ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [{
            chainId:  web3.utils.toHex(chainId),
            chainName: 'Binance Smart Chain',
            nativeCurrency: {
                name: 'Binance Coin',
                symbol: 'BNB',
                decimals: 18
            },
            rpcUrls: ['https://data-seed-prebsc-1-s1.binance.org:8545/'],
            blockExplorerUrls: ['https://testnet.bscscan.com']
            }]
          });
        
        } catch (error) {
          console.error(error);
        }
      } 
    });
    
      
      
    }

    export async function connectWallet() {
        SwitchBNB(); 
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

      export async function voting(user:any, title:any, content:any, choiceData:any, start:any, end:any) {
        console.log(user,title,content,choiceData,start,end,"ergbrtfbjhgvb")
        
        exchangeContract.methods.setData(title, content, choiceData, start, end).send({
            value: 0,
            from: user,
          }).then((d:any) => {
            console.log(d);
          })
      
        console.log("Voting...")
      };


      export function allData() {
        return new Promise(async (resolve, reject) => {
          try {
          
            const allData = await exchangeContract.methods.AllData().call()
              resolve({
                allData,
              })
      
          } catch (err) {
           
            reject({
                err
            })
            console.error(err, "!errororororo");
          }
        })
      }

      