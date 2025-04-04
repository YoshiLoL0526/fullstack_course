import { useState } from "react";
import CountryDetail from "./CountryDetail";

const CountryListItem = ({ country }) => {
    const [showDetail, setShowDetail] = useState(false)

    const onClick = () => {
        setShowDetail(!showDetail)
    }

    return (
        (!showDetail) ? (
            <div>
                <h3>{country.name.common}</h3>
                <button onClick={onClick}>Show</button>
            </div>
        ) : (
            <div>
                <h3>{country.name.common}</h3>
                <button onClick={onClick}>Hide</button>
                <CountryDetail country={country} />
            </div>
        )
    )
}

export default CountryListItem;