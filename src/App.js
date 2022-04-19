import './App.css';
import {CitySelect} from './components/CitySelect';
import {CityWeather} from './components/CityWeather';
import {Header} from './components/Header';
import {useState} from "react";

const apiKey = "1d00d4c9d5554bbb1fc814776caff71d";


function App() {

  const [city, setCity] = useState("--N/A--");
  const [temp, setTemp] = useState("--N/A--");
  const [weather, setWeather] = useState("--N/A--");
  const [img, setImg] = useState("");
  const [cities, setCities] = useState([]);

  const update = async(value) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${apiKey}&lang=it`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data)
    
    setImg(`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`)
    setCity(data.name);
    setWeather(data.weather[0].main);
    setTemp(data.main.temp);
  }

  return (
    <div className="App">
      <Header/>
      <div className='cardWrapper'>
        <CitySelect  notify={update} />
        <CityWeather img={img} city={city} weather={weather} temp={temp}/>
      </div>
    </div>
  );
}

export default App;
