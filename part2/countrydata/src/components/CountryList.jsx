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
        }).catch(error => {
            console.log("Error fetching countries:", error)
            setCountries([])
        })
    }, [filter])

    return (
        <div>
            {countries.length > 10 ? (
                <p>Too many matches, specify another filter</p>
            ) : countries.length === 1 ? (
                <CountryDetail country={countries[0]} />
            ) : (
                countries.map(country => (
                    <CountryListItem key={country.name.common} country={country} />
                ))
            )}
        </div>
    )
}

export default CountryList;