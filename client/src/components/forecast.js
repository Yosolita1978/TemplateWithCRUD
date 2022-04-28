const Forecast = (props) => {
    const {forecast} = props;


    return (

        <div className="weather__info">
        {!forecast ? (<h3 className="chocolate">
          {" "}
          Do you really need an excuse to have some chocolate?{" "}
        </h3>) : (
            <p>
            <span>Location:{forecast.name}</span>
            <br></br>
            <span>Temperature:{forecast.main.temp}</span>
            <br></br>
            <span>Description:{forecast.weather[0].description}</span>
            <br></br>
            <span>Feels Like:{forecast.main.feels_like}</span>
            </p>
           
        )}
        </div>

    )

}

export default Forecast;