const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Transaction", function () {
  it("Should return the correct length of current transactions", async function () {
    const Transactions = await ethers.getContractFactory("Transactions");
    const transaction = await Transactions.deploy();
    await transaction.deployed();


    let currentTransactions = await transaction.getAllTransactions();
    let currentTransactionCount = await transaction.getTransactionCount();


    expect(currentTransactions.length==currentTransactionCount).to.equal(true);
  });
});
