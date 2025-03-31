import React, { useState } from 'react';

const Filter = ({ onClose }) => {
  const [documentName, setDocumentName] = useState('');
  const [documentType, setDocumentType] = useState('');
  const [documentRemarks, setDocumentRemarks] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      documentName,
      documentType,
      documentRemarks,
      selectedFile,
    });
    onClose();
  };

  return (
    <div className="fixed top-0 right-0 w-full md:w-96 h-full bg-white shadow-lg p-6 z-50 transition-transform duration-300 ease-in-out transform translate-x-0">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Upload Document</h2>
        <button className="text-gray-600" onClick={onClose}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Document Name</label>
          <select value={documentName} onChange={(e) => setDocumentName(e.target.value)} className="mt-1 px-2 py-2 border block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
            <option value="">Select</option>
            <option value="ID Proof">ID Proof</option>
            <option value="Address Proof">Address Proof</option>
            <option value="Loan Agreement">Loan Agreement</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Document Type</label>
          <select value={documentType} onChange={(e) => setDocumentType(e.target.value)} className="mt-1 px-2 py-2 border block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
            <option value="">Select</option>
            <option value="PDF">PDF</option>
            <option value="Image">Image</option>
            <option value="Word">Word</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Document Remarks</label>
          <textarea value={documentRemarks} onChange={(e) => setDocumentRemarks(e.target.value)} className="mt-1 px-2 py-2 border block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Select File</label>
          <input type="file" onChange={handleFileChange} className="mt-1 block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:border-0 rounded-mdfile:text-sm file:font-semibold border border-gray-300" />
          {selectedFile && <p className="mt-2 text-sm text-gray-500">Selected file: {selectedFile.name}</p>}
        </div>
        <button type="submit" className="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Filter;