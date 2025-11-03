const WeatherIcon= ({props})=>{
    return (
    <>
        <div className="weather">
        <h2>Weather</h2>
        <img src={props.img} alt={props.imgAlt} />
      </div>
    </>
    )
};
export default WeatherIcon