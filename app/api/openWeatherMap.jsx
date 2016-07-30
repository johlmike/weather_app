import axios from 'axios';

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=a3878d00b2453d7fbd3b9da905085bc3&units=metric';

module.exports = {
    getTemp: function(cityName) {
        let encodedLocation = encodeURIComponent(cityName);
        let requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

        return axios.get(requestUrl).then(function(res) {
            if( res.data.cod && res.data.message ){ //something is wrong
                throw new Error(res.data.message);
            } else {
                let data = {
                    degree: res.data.main.temp,
                    cityName: res.data.name
                };
                return data;
            }
        }, function(res) {
            throw new Error(res.data.message);
        });
    }
};
