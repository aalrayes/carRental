import "./App.css";
import { useEffect } from "react";

import CarList from "./components/CarList";
import { Routes, Route } from "react-router-dom";
import NotFound from "./components/layout/NotFound";
import CarDetails from "./components/CarDetails";
import Booking from "./components/Booking";
import { QueryClient, QueryClientProvider } from "react-query";
function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Ejaro";
  }, []);
  const queryClient = new QueryClient();
  return (
    <div className=" mx-auto min-h-screen max-w-7xl">
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<CarList />} />
          <Route path="/cars/:id" element={<CarDetails />} />
          <Route path="/cars/:id/book" element={<Booking />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </QueryClientProvider>
    </div>
  );
}
export default App;
