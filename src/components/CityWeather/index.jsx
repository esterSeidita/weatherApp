import "./styles.css";

const kelvinToCels = (temp) => {
    return (temp -273.15).toFixed(2);
}
export const CityWeather = ({img, city, temp, weather}) => (
    <div className="cityWeatherWrapper">
        <img src={img} alt="Wheather Icon"></img>
        <h2>{city}</h2>
        <h3>{kelvinToCels(temp)}°C</h3>
        <p>{weather}</p>
    </div>
);