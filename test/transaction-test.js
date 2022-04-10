const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Transaction", function () {
  it("Should return the correct length of current transactions", async function () {
    const Transactions = await ethers.getContractFactory("Transactions");
    const signers = await ethers.getSigners();
    const transaction = await Transactions.deploy();
    await transaction.deployed();


    let currentTransactions = await transaction.getAllTransactions();
    let currentTransactionCount = await transaction.getTransactionCount();

    expect(currentTransactions.length==currentTransactionCount).to.equal(true);
  });

  it("Should add transaction to blockchain",async function() {
    const Transactions = await ethers.getContractFactory("Transactions");
    const signers = await ethers.getSigners();
    const transaction = await Transactions.deploy();
    await transaction.deployed();


    let currentTransactions = await transaction.getAllTransactions();
    let currentTransactionCount = await transaction.getTransactionCount();
    expect(currentTransactions.length==currentTransactionCount).to.equal(true);

    await transaction.connect(signers[0]).addToBlockchain(signers[1].address,100,"Test Word","KeyWord");
    currentTransactions = await transaction.getAllTransactions();
    currentTransactionCount = await transaction.getTransactionCount();

    expect(currentTransactions.length==currentTransactionCount).to.equal(true);

  });
});
