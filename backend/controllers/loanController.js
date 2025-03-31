const loanModel=require('../models/loanModel')

const ReadLoans=async(req,res)=>{
    try {
        const loans=await loanModel.find({})
        res.json({success:true,loans:loans})
    } catch (error) {
        res.status(500).json({success:false,message:"Failed to fetch Loans",error: error.message });
    }
}

const ReadLoan=async(req,res)=>{
    try {
        const loan=await loanModel.findOne({loanNo:req.params.loanNo})
        res.json({success:true,loan:loan})
    } catch (error) {
        res.status(500).json({success:false,message:"Failed to fetch Loan",error: error.message });
    }
}

const GetLoansbyType=async(req,res)=>{
    try {
        const loans=await loanModel.find({loanType:req.params.loanType})
        res.json({success:true,loans:loans})
    } catch (error) {
        res.status(500).json({success:false,message:"Failed to fetch Loans by Type",error: error.message });
    }
}

const GetLoansbyRegion=async(req,res)=>{
    try{
        const loans=await loanModel.find({loanType:req.params.region})
        res.json({success:true,loans:loans})
    }
    catch(error){
        res.status(500).json({success:false,message:"Failed to fetch Loans by Region",error: error.message });
    }
}

const SortedLoans=async(req,res)=>{
    try {
        const loans = await loanModel.find({}).sort({ sanctionAmount: -1 });
        res.json({success:true,loans:loans})
    } catch (error) {
        res.status(500).json({success:false,message:"Failed to fetch Loans",error: error.message });
    }
}

const PreSarfaesi=async(req,res)=>{
    try {
        const loans=await loanModel.find({currentDPO:{$lt:90}})
        res.json({success:true,loans:loans})
    } catch (error) {
        res.status(500).json({success:false,message:"Failed to fetch Loans",error: error.message });
    }
}

const NPA=async(req,res)=>{
    try {
        const loans=await loanModel.find({currentDPO:{$gte:90}})
        res.json({success:true,loans:loans})
    } catch (error) {
        res.status(500).json({success:false,message:"Failed to fetch Loans",error: error.message });
    }
}

module.exports={ReadLoans,ReadLoan,GetLoansbyType,GetLoansbyRegion,SortedLoans,PreSarfaesi,NPA}