const WeatherData= ({data})=>{
    return (
    <>
        <div className="weather">
        <h2>Day of the Week: {data.day} </h2>
        <p><span>conditions:{data.conditions} </span></p>
        <p><span>time: {data.time}</span></p>
      </div>
    </>
    )
};
export default WeatherData
