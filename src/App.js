import "./App.css";
import { CitySelect } from "./components/CitySelect";
import { CityWeather } from "./components/CityWeather";
import { Header } from "./components/Header";
import { useState } from "react";

function App() {
  const apiKey = process.env.REACT_APP_API_KEY;
  const lang = "it";

  const [city, setCity] = useState("Benvenuto!");
  const [temp, setTemp] = useState("--");
  const [weather, setWeather] = useState("Seleziona una città");
  const [img, setImg] = useState(
    "https://openweathermap.org/img/wn/11d@2x.png"
  );

  const update = async (value = "Palermo") => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${value}&units=metric&appid=${apiKey}&lang=${lang}`;
    const response = await fetch(url);
    const data = await response.json();

    setImg(`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
    setCity(data.name);
    setWeather(data.weather[0].description);
    setTemp(data.main.temp);
  };

  return (
    <div className="App">
      <Header />
      <div className="cardWrapper">
        <CitySelect notify={update} />
        <CityWeather img={img} city={city} weather={weather} temp={temp} />
      </div>
      <p className="attribute">
          Credits of Ester Seidita <br/>Edgemony Coding Bootcamp
      </p>
    </div>
  );
}

export default App;
