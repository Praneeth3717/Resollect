import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Sidebar from "./components/Sidebar";
import Projectdesc from "./components/Projectdesc";
import Dashboard from "./components/Dashboard";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const queryClient = new QueryClient();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="h-screen flex">
          <Sidebar isSidebarOpen={isSidebarOpen} />
          <div className="flex flex-col flex-1">
            <Navbar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
            <div className="ml-0 md:ml-60 mt-16 h-[calc(100vh-64px)] overflow-y-auto p-4">
              <Routes>
                <Route path="/" element={<Dashboard/>}/>
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/project-description" element={<Projectdesc />} />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;


