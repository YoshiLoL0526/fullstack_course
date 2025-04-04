import { useState, useEffect } from 'react';
import weatherService from '../services/weatherService';

const CountryDetail = ({ country }) => {
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        weatherService.getWeather(country.capital[0]).then(response => {
            if (!response) {
                console.error("Weather data not available.");
                return;
            }
            setWeather(response.data);
        }).catch(error => {
            console.error("Error fetching weather data:", error);
        });
    }, [country.capital]);

    const kelvinToCelsius = (kelvin) => {
        return Math.round(kelvin - 273.15);
    }

    return (
        <div>
            <h2>{country.name.common}</h2>
            <p>Capital: {country.capital[0]}</p>
            <p>Area: {country.area}</p>
            <h3>Languages:</h3>
            <ul>
                {Object.values(country.languages).map(language => (
                    <li key={language}>{language}</li>
                ))}
            </ul>
            <img src={country.flags.png} alt={`Flag of ${country.name.common}`} />
            <h3>Weather in {country.capital}</h3>
            {weather ? (
                <div>
                    <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt='Weather of city' />
                    <p>Temperature: {kelvinToCelsius(weather.main.temp)} °C</p>
                    <p>Wind: {weather.wind.speed} m/s</p>
                    <p>Humidity: {weather.main.humidity} %</p>
                </div>
            ) : (
                <p>Loading weather data...</p>
            )}
        </div>
    );
}

export default CountryDetail;