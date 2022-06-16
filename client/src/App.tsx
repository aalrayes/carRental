import "./App.css";
import { useEffect, useState, useContext } from "react";
import CarList from "./components/CarList";
import CarContext from "./context/CarContext";
import { Routes, Route } from "react-router-dom";
import NotFound from "./components/layout/NotFound";
import CarDetails from "./components/CarDetails";
function App() {
  const [cars, setCars] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    async function getCars() {
      window.scrollTo(0, 0);
      setIsLoading(true);
      const res = await fetch("http://localhost:8080/cars/index");
      const data = await res.json();
      setCars(data);
      setIsLoading(false);
    }
    getCars();
  }, []);

  return (
    <CarContext.Provider
      value={{
        getCar(id) {
          let res = cars.filter((car) => {
            return car.id == id;
          });
          console.log(res);
          return res[0];
        },
      }}
    >
      <div className=" mx-auto min-h-screen max-w-7xl">
        <Routes>
          <Route
            path="/"
            element={<CarList cars={cars} isLoading={isLoading} />}
          />
          <Route path="/cars/:id" element={<CarDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </CarContext.Provider>
  );
}
export default App;
