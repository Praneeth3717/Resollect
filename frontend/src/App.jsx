import "./App.css";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Sidebar from "./components/Sidebar";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="h-screen flex">
        <Sidebar />
        <div className="flex flex-col flex-1">
          <Navbar />
          <div className="ml-60 mt-16 h-[calc(100vh-64px)] overflow-y-auto p-4">
            <Portfolio/>
          </div>
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;



