const mongoose=require('mongoose')

const loanSchema=new mongoose.Schema({
    loanNo: String,
    loanType: String,
    borrower: String,
    borrowerAddress: String,
    coBorrower1Name: String,
    coBorrower1Address: String,
    currentDPO: Number,
    sanctionAmount: String,
    region: String,
})

const loanModel=mongoose.model('Loan',loanSchema)

module.exports=loanModel