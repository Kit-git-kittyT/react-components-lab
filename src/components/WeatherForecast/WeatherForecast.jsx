import './WeatherForecast.css'
import WeatherIcon from './WeatherIcon'
import WeatherData from './WeatherData'

const WeatherForecast= ({weather})=>{
    return (
    <>
        <div className="weather">
        <h2>Day of the Week {weather.day} </h2>
        <img src= {weather.img} alt= {weather.altImg} />
        <p><span>conditions: </span>{weather.conditions}</p>
        <p><span>time: </span>{weather.time}</p>
      </div>
      <WeatherIcon />
      <WeatherData />
    </>
    )
}
export default WeatherForecast
