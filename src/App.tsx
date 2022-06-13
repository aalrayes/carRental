import "./App.css";
import { useEffect, useState } from "react";
import CarList from "./components/CarList";
import CarDetails from "./components/CarDetails";

function App() {
  let [cars, setCars] = useState<any[]>([]);
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

  const handleCarDetails = (id: number): any => {
    return cars.filter((car) => car.id == id);
  };

  return (
    <div className=" mx-auto min-h-screen max-w-7xl">
      <CarList cars={cars} handleCarDetails={handleCarDetails} />
      <CarDetails />
    </div>
  );
}

export default App;
