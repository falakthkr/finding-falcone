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
  const [response, setResponse] = useState(null)
  const payloadPlanets = []
  const payloadVehicles = []

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
    dispatch(getToken()).then((res) => {
      setToken(res.payload.token.token)
      getFalconeResponse(res.payload.token.token);
    })
  }

  const getFalconeResponse = (tokenData) => {
    const data = {
      token: tokenData,
      planet_names: payloadPlanets,
      vehicle_names: payloadVehicles
    }
    dispatch(findResponse(data)).then((res) => {
      setResponse(res)
      if (res.status == "success") {
        alert(`Falcone was found on planet ${res.planet_name}`)
      }
      else{
        alert("Mission Failed")
      }
    })
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
              <select onChange={(e) => payloadPlanets.push(e.target.value)}>
                {planets.map((item) => {
                  return (
                    <option key={item.name} value={item.name}>{item.name}</option>
                  )
                })}
              </select>
              <div>
                {vehicles.map((item) => {
                  return (
                    <>
                      <input onClick={() => payloadVehicles.push(item.name)} type="radio" id={item.name} name="vehicle" value={item.name} />
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
