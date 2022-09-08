import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props){
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          {" "}
          last updated:
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.desciption}</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <div className="clearfix weather-temperature">
            <img
              src={props.data.imgUrl}
              alt={props.data.desciption}
              className="float-left"
            />
            <div className="float-left">
              <strong>{Math.round(props.data.temperature)}</strong>
              <span className="units">
                <button>°C</button>│<button>°F</button>
              </span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind}km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}