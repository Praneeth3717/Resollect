import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faSort,faSearch } from '@fortawesome/free-solid-svg-icons';
import Filter from './Filter';
import { useQuery } from '@tanstack/react-query';
import {GetLoans,GetPreSarfaesiLoans,GetNpaLoans,GetSortedLoans, GetLoan,GetLoansByType} from '../api/loanApi';

const Portfolio = () => {
  const [selectedLoans, setSelectedLoans] = useState([]);
  const [FilterOpen, setFilterOpen] = useState(false);
  const [filterType, setFilterType] = useState('all');
  const [loanId,setLoanId]=useState("")
  const [loanType,setloanType]=useState("")


  const handleCheckboxChange = (loanNo) => {
    if (selectedLoans.includes(loanNo)) {
      setSelectedLoans(selectedLoans.filter((selectedLoan) => selectedLoan !== loanNo));
    } else {
      setSelectedLoans([...selectedLoans, loanNo]);
    }
  };

  const handleOpenFilter = () => {
    setFilterOpen(true);
  };

  const handleCloseFilter = () => {
    setFilterOpen(false);
  };

  const { data: loans = [], isLoading, isError } = useQuery({
    queryKey: ['loans', filterType],
    queryFn: async () => {
      switch (filterType) {
        case 'pre-sarfaesi':
          return await GetPreSarfaesiLoans();
        case 'npa':
          return await GetNpaLoans();
        case 'sorted':
          return await GetSortedLoans();
        case 'loanId':
          return await GetLoan(loanId);
        case 'loanType':
          return await GetLoansByType(loanType);
        default:
          return await GetLoans();
      }
    },
    staleTime:5*60*1000
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error fetching loans!</p>;

  return (
    <div className="container mx-auto p-2 text-xs relative">
      <div className="flex flex-col mb-2 space-y-2">
        <h1 className="text-2xl">Portfolio</h1>
        <div className="flex flex-wrap space-x-2">
          <button onClick={() => setFilterType('all')} className="border-gray-300 border text-gray-700 px-4 py-1 rounded-md mb-2">
            All
          </button>
          <button onClick={() => setFilterType('pre-sarfaesi')} className="border-gray-300 border text-gray-700 px-2 py-0.5 rounded-md mb-2">
            Pre Sarfaesi
          </button>
          <button onClick={() => setFilterType('npa')} className="border-gray-300 border text-gray-700 px-2 py-0.5 rounded-md mb-2">
            NPA
          </button>
          <button className="border-gray-300 border text-gray-700 px-2 py-0.5 rounded-md mb-2">13(3) Responses</button>
          <button className="border-gray-300 border text-gray-700 px-2 py-0.5 rounded-md mb-2">Symbolic Possession</button>
          <button className="border-gray-300 border text-gray-700 px-2 py-0.5 rounded-md mb-2">DM Order</button>
          <button className="border-gray-300 border text-gray-700 px-2 py-0.5 rounded-md mb-2">Physical Possessions</button>
          <button className="border-gray-300 border text-gray-700 px-2 py-0.5 rounded-md mb-2">Auctions</button>
        </div>
        <div className="flex flex-col md:flex-row justify-between">
        <div className="flex items-center">
            <input onChange={(e)=>setLoanId(e.target.value)} type="text" placeholder="Search Loan Number" className="border border-gray-300 rounded-l-md px-4 py-2 mb-2 md:mb-0" />
            <button onClick={() => setFilterType('loanId')} className="text-black px-2 py-2 rounded-r-md border border-gray-300 mb-2 md:mb-0">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
          <div className="flex items-center">
            <input onChange={(e)=>setloanType(e.target.value)} type="text" placeholder="Search Loan Type" className="border border-gray-300 rounded-l-md px-4 py-2 mb-2 md:mb-0" />
            <button onClick={()=>setFilterType('loanType')} className="text-black px-2 py-2 rounded-r-md border border-gray-300 mb-2 md:mb-0">
              <FontAwesomeIcon icon={faSearch} />
            </button>
            <button className="text-black px-4 py-2 ml-2 rounded-md border border-gray-300" onClick={handleOpenFilter}>
              <FontAwesomeIcon icon={faFilter} className="px-2" /> More Filters
            </button>
          </div>
        </div>
      </div>
      <div className="mb-3 mt-6 border border-gray-300 py-3">
        <p className="mx-5">{selectedLoans.length} loans selected</p>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="text-left">
              <th className="border-b border-gray-300 px-4 py-2 w-12 text-gray-400"></th>
              <th className="border-b border-gray-300 px-4 py-2 text-gray-400">Loan No</th>
              <th className="border-b border-gray-300 px-4 py-2 text-gray-400">Loan Type</th>
              <th className="border-b border-gray-300 px-4 py-2 text-gray-400">Borrower</th>
              <th className="border-b border-gray-300 px-4 py-2 text-gray-400">Borrower Address</th>
              <th className="border-b border-gray-300 px-4 py-2 text-gray-400">Co Borrower 1 Name</th>
              <th className="border-b border-gray-300 px-4 py-2 text-gray-400">Co Borrower 1 Address</th>
              <th className="border-b border-gray-300 px-4 py-2 text-gray-400">Current DPO</th>
              <th className="border-b border-gray-300 px-4 py-2 text-gray-400">
                Sanction Amount <FontAwesomeIcon onClick={() => setFilterType('sorted')} icon={faSort} className="px-2 text-black" />
              </th>
              <th className="border-b border-gray-300 px-4 py-2 text-gray-400">Region</th>
            </tr>
          </thead>
          <tbody>
            {(loans ?? []).map((loan) => (
              <tr key={loan.loanNo} className="hover:bg-gray-50 text-gray-700">
                <td className="border-b border-gray-300 px-4 py-2 text-center">
                  <input type="checkbox" checked={selectedLoans.includes(loan.loanNo)} onChange={() => handleCheckboxChange(loan.loanNo)} />
                </td>
                <td className="border-b border-gray-300 px-4 py-2 text-black">{loan.loanNo}</td>
                <td className="border-b border-gray-300 px-4 py-2 text-black">{loan.loanType}</td>
                <td className="border-b border-gray-300 px-4 py-2 text-black">{loan.borrower}</td>
                <td className="border-b border-gray-300 px-4 py-2 text-black">{loan.borrowerAddress}</td>
                <td className="border-b border-gray-300 px-4 py-2 text-black">{loan.coBorrower1Name}</td>
                <td className="border-b border-gray-300 px-4 py-2 text-black">{loan.coBorrower1Address}</td>
                <td className="border-b border-gray-300 px-4 py-2 text-center text-black">{loan.currentDPO}</td>
                <td className="border-b border-gray-300 px-4 py-2 text-black">{loan.sanctionAmount}</td>
                <td className="border-b border-gray-300 px-4 py-2 text-black">{loan.region}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {FilterOpen && (
        <>
          <div className="fixed inset-0 bg-black opacity-50 z-40"></div>
          <Filter onClose={handleCloseFilter} />
        </>
      )}
    </div>
  );
};

export default Portfolio;