import * as TransactionsAbi from "../../artifacts/contracts/Transaction.sol/Transactions.json"
import { ethers } from "ethers";
import { Observable} from "rxjs";


const contractAddress ="0x5FbDB2315678afecb367f032d93F642f64180aa3";


export function getCurrentSigner() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    return signer;
}

//Checks if the metamask wallet is unlocked
export async function isWalletUnlocked() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    let unlocked;

    try {
        const accounts = await provider.listAccounts();

        unlocked = accounts.length > 0;
    } catch (e) {
        unlocked = false;
    }

    return unlocked;
}


export async function  addTransaction(address,amount,data,key){
    const currentSigner = getCurrentSigner();
    const transactionsAbi = new ethers.Contract(contractAddress, TransactionsAbi.abi,currentSigner);
    const signedAbi = transactionsAbi.connect(currentSigner);
    
    signedAbi
    .addToBlockchain(address,amount,data,key)
    .catch((val)=>{
        console.log(val);
    });
}

class Transactions {
    observable;
    constructor(){
        this.init();
    }
   
    async init(){
        this.observable =  new Observable(subscriber=>{
            setInterval(
                ()=>{

                    //getting signer and  initiaziling the transactionAbi
                    const currentSigner = getCurrentSigner();
                    const transactionsAbi = new ethers.Contract(contractAddress, TransactionsAbi.abi,currentSigner);

                    //fetching all the transactions array 
                    transactionsAbi
                    .connect(currentSigner)
                    .getAllTransactions()
                    .then(
                        (val)=>{
                        subscriber.next(val);
                        }).catch((val=>{
                            console.log(val);
                        }))
                },100);
        })
    }

    get Observable(){
        const observable = this.observable;
        return observable;
    }
}

export default Transactions