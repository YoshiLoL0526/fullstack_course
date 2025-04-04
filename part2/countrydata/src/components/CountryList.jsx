import { useEffect, useState } from 'react'
import countryService from '../services/countryService'
import CountryDetail from './CountryDetail'
import CountryListItem from './CountryListItem'

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
            {filteredCountries.length > 10 ? (
                <p>Too many matches, specify another filter</p>
            ) : filteredCountries.length === 1 ? (
                <CountryDetail country={filteredCountries[0]} />
            ) : (
                filteredCountries.map(country => (
                    <CountryListItem key={country.name.common} country={country} />
                ))
            )}
        </div>
    )
}

export default CountryList;