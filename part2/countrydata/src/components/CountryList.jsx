import { useEffect, useState } from 'react'
import countryService from '../services/countryService'
import Country from './Country'

const CountryList = ({ filter }) => {
    const [countries, setCountries] = useState([])

    useEffect(() => {
        if (!filter) {
            setCountries([])
            return
        }

        // Fetch all countries when the component mounts
        countryService.getAll().then(initialCountries => {
            // Filter countries based on the filter
            const filteredCountries = initialCountries.filter(country =>
                country.name.common.toLowerCase().includes(filter.toLowerCase())
            )
            setCountries(filteredCountries)
        })
    }, [filter])

    const filteredCountries = countries.filter(country =>
        country.name.common.toLowerCase().includes(filter.toLowerCase())
    )

    return (
        <div>
            {filteredCountries.length >= 10 ? (
                <p>Too many matches, specify another filter</p>
            ) : filteredCountries.length === 1 ? (
                <Country country={filteredCountries[0]} />
            ) : (
                filteredCountries.map(country => (
                    <div key={country.cca3}>
                        <h3>{country.name.common}</h3>
                    </div>
                ))
            )}
        </div>
    )
}

export default CountryList;