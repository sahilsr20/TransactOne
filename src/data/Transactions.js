import * as TransactionsAbi from "../../artifacts/contracts/Transaction.sol"
import { ethers } from "ethers";


class Transactions {
    transactionsAbi;

    constructor(){
        this.transactionsAbi = ethers.getDefaultProvider();
    }

    async init(){

    }
}

export default Transactions