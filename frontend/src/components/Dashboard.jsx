import React from 'react';

const Dashboard = () => {
  const functions = [
    {
      name: 'Portfolio',
      property: 'Displays the portfolio page which contains all the loan data.',
      status: 'Working',
    },
    {
      name: 'Loan Listing',
      property: 'Displays a list of all loans with relevant details.',
      status: 'Working',
    },
    {
      name: 'Loan Filtering',
      property: 'Allows filtering loans by type (Pre-Sarfaesi, NPA, etc.).',
      status: 'Working',
    },
    {
      name: 'Loan Sorting',
      property: 'Sorts loans by sanction amount.',
      status: 'Working',
    },
    {
      name: 'Project Description',
      property: 'Displays the project description page.',
      status: 'Working'
    },
    {
      name: 'Loan Search',
      property: 'Searches loans by loan number and Loan Type.',
      status: 'Working',
    },
    {
      name: 'CRUD Operations',
      property: 'Allows creating, reading, updating, and deleting loan records.',
      status: 'Planned',
    },
    {
      name: 'User Authentication',
      property: 'Secures loan data with user-specific access control.',
      status: 'Planned',
    },
    {
      name: 'Responsive Design',
      property: 'Adapts the UI to various screen sizes and devices.',
      status: 'Planned',
    }
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>
      <p className="mb-4">This dashboard provides an overview of the project's functionality and current status.</p>
      <h2 className="text-xl font-semibold mb-2">Functionality Status:</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="text-left">
              <th className="border-b border-gray-300 px-4 py-2">Function Name</th>
              <th className="border-b border-gray-300 px-4 py-2">Property</th>
              <th className="border-b border-gray-300 px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {functions.map((func) => (
              <tr key={func.name} className="hover:bg-gray-50">
                <td className="border-b border-gray-300 px-4 py-2">{func.name}</td>
                <td className="border-b border-gray-300 px-4 py-2">{func.property}</td>
                <td className="border-b border-gray-300 px-4 py-2">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      func.status === 'Working' ? 'bg-green-200 text-green-800' : 'bg-yellow-200 text-yellow-800'
                    }`}>
                    {func.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-6 p-4 bg-gray-100 rounded-md">
        <p className="text-sm text-gray-700">
          <strong>Note:</strong> Due to the project utilizing a free-tier MongoDB Atlas instance and a free deployment on render.com, data retrieval may exhibit slower performance. 
          Expect potential delays when loading data-intensive sections of the application.
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
