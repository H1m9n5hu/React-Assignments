import axios from 'axios';
import React, { useState } from 'react';
import Humidity from '../Components/humidity.png';
import Wind from '../Components/wind.png';
import Search from '../Components/search.png';
import Weather from '../Components/weather-app.png';

const WeatherAPI = () => {
    const [city, setCity] = useState('');
    const [cityName, setCityName] = useState('');
    const [temp, setTemp] = useState('');
    const [humidity, setHumidity] = useState('');
    const [windSpeed, setWindSpeed] = useState('');

    const inputHandler = (e) => {
        setCity(e.target.value);
    }

    const apiURL = `https://api.weatherapi.com/v1/current.json?key=da0ee7e6f8d84e21b2e94542231409&q=${city}`;

    const getProducts = async (url) => {
        try {
            const res = await axios.get(url);
            const data = res.data;
            setCityName(data.location.name);
            setTemp(data.current.temp_c);
            setHumidity(data.current.humidity);
            setWindSpeed(data.current.wind_kph);
        } catch (error) {
            console.error('Error fetching data:', error);
            alert("City name not found, Please try again!")
        }
        
    }

    const buttonHandler = () => {
        getProducts(apiURL);
        document.querySelector(".weather").style.display = "block";
    };

    return (
        <div className="app">
            <h2>Weather API</h2>
            <div className="weather-app">
                <input type="text" id="input-box" onChange={inputHandler} value={city} placeholder="Enter city name" spellCheck="false" />
                <button type='button' onClick={buttonHandler}><img src={Search} alt='Search Icon' /></button>
            </div>
            <div className="weather">
                <img src={Weather} className="weather-icon" alt='Weather Icon' />
                <h1 className="temp">{temp}°C</h1>
                
                <h2 className="city">{cityName}</h2>
                <div className="details">
                    <div className="col">
                        <img src={Humidity} alt='Humidity Icon' />
                        <div>
                            <p className="humidity">{humidity}%</p>
                            <p>Humidity</p>
                        </div>
                    </div>
                    <div className="col">
                        <img src={Wind} alt='Wind Icon' />
                        <div>
                            <p className="wind">{windSpeed} km/h</p>
                            <p>Wind Speed</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WeatherAPI;
