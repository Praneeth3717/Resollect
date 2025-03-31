import React from 'react';

const Projectdesc = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Loan Management Project</h1>
      <p className="mb-4">
        I developed a full-stack (MERN) loan management project inspired by the Resollect page, leveraging modern web technologies for seamless data handling and a responsive user experience.
      </p>

      <h2 className="text-xl font-semibold mb-2">Tech Stack:</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Frontend: React, Tailwind CSS</li>
        <li>Backend: Node.js, Express.js</li>
        <li>Database: MongoDB</li>
        <li>State Management & Data Fetching: Axios, React Query</li>
      </ul>

      <h2 className="text-xl font-semibold mb-2">Key Features:</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Loan Management: Effortlessly view, filter, and sort loans, including Pre-Sarfaesi and NPA loans, with sanction amount-based sorting.</li>
        <li>Responsive UI: A sleek, user-friendly interface built with Tailwind CSS.</li>
        <li>Optimized Data Fetching: Axios for API requests and React Query for efficient data caching and synchronization.</li>
        <li>Backend Integration: A robust REST API powered by Express.js and MongoDB for smooth data operations.</li>
      </ul>

      <h2 className="text-xl font-semibold mb-2">Planned Enhancements (If Time permits):</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Implement real-time loan search by loan number or region.</li>
        <li>Introduce authentication for user-specific loan data.</li>
        <li>Optimize performance for handling large datasets more efficiently.</li>
        <li>CRUD Operations: Enable users to Create, Read, Update, and Delete loan records for better management.</li>
        <li>Enhanced Mobile Responsiveness: Further refine UI for an optimal experience on various screen sizes and devices.</li>
      </ul>
    </div>
  );
};

export default Projectdesc;