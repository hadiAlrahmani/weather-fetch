import './App.css'
import { useState } from 'react'
import * as weatherServices from  './services/weatherServices'
import WeatherSearch from './components/weatherSearch'

const App = () => {
  const [weather, setWeather] = useState({})
  const [loading, setLoading] = useState(true)


const fetchData = async (formData) => {
  // console.log(formData)

  const data = await weatherServices.show(formData)
  setWeather(data)
  console.log('Data:', data);
  setLoading(false)
}

return (
  <>
    <h1>Weather API</h1>
    {/* <button onClick={fetchData}>Fetch Weather Data</button> */}
    <WeatherSearch  fetchData={fetchData}/>
    <hr />
    {loading ? ('Loading...') : (
            <div>
              <h3>{weather.location?.name}</h3>
              <img src={weather.current?.condition.icon} alt="" />
            </div>
    )}


  </>
)
}


export default App