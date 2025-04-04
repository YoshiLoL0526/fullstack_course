import axios from "axios";

const baseUrl = import.meta.env.VITE_OPENWEATHER_API_URL;
const ApiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;

const getWeather = (city) => {
    return axios.get(baseUrl, {
        params: {
            q: city,
            appid: ApiKey
        },
    });
}

export default { getWeather };
