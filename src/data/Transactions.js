import * as TransactionsAbi from "../../artifacts/contracts/Transaction.sol/Transactions.json"
import { ethers } from "ethers";
import { Observable,BehaviorSubject} from "rxjs";
import { distinctUntilChanged ,pipe} from "rxjs";
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

export async function getAllTransactions(){
    const currentSigner = getCurrentSigner();
    const transactionsAbi = new ethers.Contract(contractAddress, TransactionsAbi.abi,currentSigner);
    const signedAbi = transactionsAbi.connect(currentSigner);

    const transactionData = await signedAbi.getAllTransactions();

    observable.next(transactionData);
}

export async function  addTransaction(address,amount,data,key){
    const currentSigner = getCurrentSigner();

    const tx = await currentSigner.sendTransaction({
        to:address,
        value:ethers.utils.parseEther(amount)
    })
    const transactionsAbi = new ethers.Contract(contractAddress, TransactionsAbi.abi,currentSigner);
    const signedAbi = transactionsAbi.connect(currentSigner);

    await signedAbi.addToBlockchain(address,amount,data,key);

    const transactionData = await signedAbi.getAllTransactions();

    window.transactionData = transactionData;
    observable.next(transactionData);
}

export let observable = new BehaviorSubject([]);
