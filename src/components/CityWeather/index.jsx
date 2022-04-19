import "./styles.css";

// const kelvinToCels = (temp) => {
//     return (temp -273.15).toFixed(0);
// }

const wordsToUpper = (string) => {
    return string.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
}
export const CityWeather = ({img, city, temp, weather}) => (
    <div className="cityWeatherWrapper">
        <img src={img} alt="Wheather Icon"></img>
        <h2>{city}</h2>
        <h3>{temp}°C</h3>
        <p>{wordsToUpper(weather)}</p>
    </div>
);