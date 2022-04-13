import * as TransactionsAbi from "../../artifacts/contracts/Transaction.sol/Transactions.json"
import { ethers } from "ethers";
import { Observable, Subscriber} from "rxjs";


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

let data=[];
export let observable = new Observable(subscriber=>{

   let id = setInterval(()=>{

        const currentSigner = getCurrentSigner();
        const transactionsAbi = new ethers.Contract(contractAddress, TransactionsAbi.abi,currentSigner);
        const signedAbi = transactionsAbi.connect(currentSigner);

        signedAbi
        .getAllTransactions()
        .then((val=>{
            if(data!=val)
            {
                data = val;
                subscriber.next(data);
            }
        }))
        .catch((error)=>{
            console.log(error);
        })
    },100);

    return function unsubscribe(){
        clearInterval(id);
    }
});

export const transactionsStore = {
    state:[],
    subscribe : setstate =>{
        observable.subscribe({
            next : val=>{
                if(val!=transactionsStore.state){
                    setstate(val);
                    transactionsStore.state=val;
                }
            }
        })
    }
}
