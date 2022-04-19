import "./styles.css";
const data = ["Milano", "Roma", "Palermo", "Trieste", "Domodossola"];

export const CitySelect = ({notify}) => {

    const cityChange = (e) => {
        const value = e.target.value;
        notify(value);
    }

    return(
        <div className="citySelectorWrapper">
            <select onChange={cityChange}>
                {data.map((city, index) => (<option>{city}</option>))}
            </select>
        </div>
    );
}