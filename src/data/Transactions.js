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


class Transactions {
    transactionsAbi;
    observable;
    constructor(){
        this.transactionsAbi = new ethers.Contract(contractAddress, TransactionsAbi.abi);
        this.init();
    }
    async addTransaction(address,amount,data,key){
        const blockChainAddress = ethers.utils.getAddress(address);
        const currentSigner = getCurrentSigner();
        const signedAbi = this.transactionsAbi.connect(currentSigner);
        signedAbi.addToBlockchain(blockChainAddress.address,amount,data,key);
    }
    async init(){
        // Connect to the network
        this.observable =  new Observable(subscriber=>{
            setInterval(
                ()=>{
                    this.transactionsAbi.getAllTransactions()
                    .then(
                        (val)=>{
                            console.log(val);
                        subscriber.next(val);
                        }).catch((val=>{
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