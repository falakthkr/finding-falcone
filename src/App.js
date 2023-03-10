import './App.css';
import { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import { getPlanetsDetails } from "./api/planets/actions";
import { getVehiclesDetails } from "./api/vehicles/actions";
import { getToken, findResponse } from "./api/find/actions";

const App = () => {

  const dispatch = useDispatch();
  const [planets, setPlanets] = useState([])
  const [vehicles, setVehicles] = useState([])
  const [token, setToken] = useState('')

  const getPlanetsData = () => {
    dispatch(getPlanetsDetails()).then((res) => {
      setPlanets(res.payload.planets)
    })
  }

  const getVehiclesData = () => {
    dispatch(getVehiclesDetails()).then((res) => {
      setVehicles(res.payload.vehicles)
    })
  }

  const handleSubmit = () => {
    dispatch(getToken());
  }

  useEffect(() => {
    getPlanetsData();
    getVehiclesData();
  }, []);

  return (
    <div>
      <div style={{ display: 'flex' }} className="App">
        {[0, 1, 2, 3].map((item) => {
          return (
            <div key={item} style={{ display: 'flex', flexDirection: 'column' }}>
              <select>
                {planets.map((item) => {
                  return (
                    <option key={item.name}>{item.name}</option>
                  )
                })}
              </select>
              <div>
                {vehicles.map((item) => {
                  return (
                    <>
                      <input type="radio" id={item.speed} name="vehicle" value={item.name} />
                      <label>{item.name}</label> <br />
                    </>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
      <br />
      <button type='button' onClick={handleSubmit}>Find Falcone</button>
    </div>
  );
}

export default App;
