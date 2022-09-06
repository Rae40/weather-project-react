import React, {useState} from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [weatherData, setWeatherData]= useState({ready: false});
  function handleResponse (response){
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      date: "Saturday 4:00",
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      imgUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
      wind: response.data.wind.speed,
      city: response.data.main.name,
    });
    

    
  }

  if (weatherData.ready){
    return (
    <div className="Weather">
      <form className="mb-3">
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Type a city...."
              className="form-control"
              autoComplete="off"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>

      <div className="overview">
        <h1>{weatherData.city}</h1>
        <ul>
          <li>
            {" "}
            last updated:
            {weatherData.date}
          </li>
          <li className="text-capitalize">{weatherData.desciption}</li>
        </ul>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="clearfix weather-temperature">
            <img
              src={weatherData.imgUrl}
              alt={weatherData.desciption}
              className="float-left"
            />
            <div className="float-left">
              <strong>{Math.round(weatherData.temperature)}</strong>
              <span className="units">
                <button>°C</button>│<button>°F</button>
              </span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {weatherData.humidity}%</li>
            <li>Wind: {weatherData.wind}km/h</li>
          </ul>
        </div>
      </div>
    </div>
    );
  } else {

  const apiKey= "500b3e347fb42fdce954cc2ffb572cb8";
  let city = "New York";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}}&appid=${apiKey}&units=metrics`;
  axios.get(apiUrl).then(handleResponse);

  return "Loading....";
  
  
  }
}
