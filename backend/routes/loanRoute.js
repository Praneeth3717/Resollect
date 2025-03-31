const express=require('express')
const {ReadLoans,ReadLoan,GetLoansbyType,GetLoansbyRegion,SortedLoans,PreSarfaesi,NPA}=require('../controllers/loanController')

const loanRouter=express.Router()

loanRouter.get('/readloans',ReadLoans)
loanRouter.get('/readloan/:loanNo',ReadLoan)
loanRouter.get('/getloansbytype/:loanType',GetLoansbyType)
loanRouter.get('/getloansbyregion/:region',GetLoansbyRegion)
loanRouter.get('/sortedloans',SortedLoans)
loanRouter.get('/presarfaesi',PreSarfaesi)
loanRouter.get('/npa',NPA)


module.exports=loanRouter