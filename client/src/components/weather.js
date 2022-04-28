import WeatherForm from "./weatherform";
import Forecast from "./forecast";
import { useState } from "react";


const Weather = () =>{

    const [forecast, setForecast] = useState(null);


    const getWeather = (e) =>{
        e.preventDefault();
        let city = e.target.elements.city.value;
        console.log(city);
        // add to request body
        fetch(`/api/weather?city=${city}`, {
            method: "get",
            headers: {"Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
            setForecast(data);
            console.log(data);
        })
        .catch((err) => console.error(`Error: ${err}`));
    }

    return(
        <div>
         <h2>Current Weather</h2>
        <WeatherForm getWeather={getWeather} />
        <Forecast forecast={forecast} />
        </div>
    )

}

export default Weather;