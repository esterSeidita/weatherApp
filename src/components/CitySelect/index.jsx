import "./styles.css";
const data = ["Milano", "Roma", "Trieste", "Domodossola", "Napoli", "Salerno", "Palermo"];

export const CitySelect = ({notify}) => {

    const cityChange = (e) => {
        const value = e.target.value;
        notify(value);
    }

    return(
        <div className="citySelectorWrapper">
            <select onChange={cityChange}>
                <option disabled>Seleziona una città</option>
                {data.map((city, index) => (<option id={index}>{city}</option>))}
            </select>
        </div>
    );
}