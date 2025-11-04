const WeatherIcon= ({weather})=>{

  console.log(weather)
    return (
    <>
        <div className="weather">
        <h2>Weather</h2>
        <img src={weather.img} alt={weather.imgAlt} />
      </div>
    </>
    )
};
export default WeatherIcon