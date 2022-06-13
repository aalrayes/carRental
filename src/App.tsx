import "./App.css";
import { useEffect, useState, useContext } from "react";
import CarList from "./components/CarList";
import CarContext from "./context/CarContext";
import { Routes, Route } from "react-router-dom";
import NotFound from "./components/layout/NotFound";
import CarDetails from "./components/CarDetails";
function App() {
  const [cars, setCars] = useState<any[]>([]);
  useEffect(() => {
    async function getCars() {
      fetch("http://localhost:8080/cars/index")
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          setCars(() => {
            return res;
          });
        });
    }
    getCars();
  }, []);

  return (
    <CarContext.Provider
      value={{
        getCar(id) {
          return cars.filter((car) => car.id == id);
        },
      }}
    >
      <div className=" mx-auto min-h-screen max-w-7xl">
        <Routes>
          <Route path="/" element={<CarList cars={cars} />} />
          <Route path="/car/:id" element={<CarDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </CarContext.Provider>
  );
}
export default App;
