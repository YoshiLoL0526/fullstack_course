import { useState, useEffect } from 'react';
import weatherService from '../services/weatherService';
import { kelvinToCelsius } from '../utils/temperatureUtils';

const CountryDetail = ({ country }) => {
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        if (!country.capital || country.capital.length === 0) {
            console.log("No capital available for the country.");
            return;
        }

        weatherService.getWeather(country.capital[0]).then(response => {
            if (!response) {
                throw new Error("Weather data not available");
            }
            setWeather(response.data);
        }).catch(error => {
            console.log("Error fetching weather data:", error);
        });
    }, [country.capital]);

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