import axios from 'axios';

export const API_URL = 'https://resollect-backend-tipr.onrender.com';

const api = axios.create({
    baseURL: `${API_URL}`,
});


export const GetLoans = async () => {
    try {
        const res = await api.get('/loan/readloans')
        return res.data.loans; 
    } catch (error) {
        console.error('Error fetching loans:', error);
        throw error; 
    }
};

export const GetLoan = async (loanNo) => {
    try {
        const res = await api.get(`/loan/readloan/${loanNo}`);
        return [res.data.loan]; 
    } catch (error) {
        console.error('Error fetching loan:', error);
        throw error;
    }
};

export const GetLoansByType = async (loanType) => {
    try {
        const res = await api.get(`/loan/getloansbytype/${loanType}`);
        return res.data.loans; 
    } catch (error) {
        console.error('Error fetching loans by type:', error);
        throw error;
    }
};

export const GetSortedLoans = async () => {
    try {
        const res = await api.get('/loan/sortedloans');
        return res.data.loans; 
    } catch (error) {
        console.error('Error fetching sorted loans:', error);
        throw error;
    }
};

export const GetPreSarfaesiLoans = async () => {
    try {
        const res = await api.get('/loan/presarfaesi');
        return res.data.loans;
    } catch (error) {
        console.error('Error fetching Pre-Sarfaesi loans:', error);
        throw error;
    }
};

export const GetNpaLoans = async () => {
    try {
        const res = await api.get('/loan/npa');
        return res.data.loans; 
    } catch (error) {
        console.error('Error fetching NPA loans:', error);
        throw error;
    }
};
