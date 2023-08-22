/* eslint-disable react/prop-types */
const Weather = ({ data }) => {
    return (
        <div className="weather-container">
            <div className="top-section">
                <div className="left">
                    <h2 className="city">{data.city}</h2>
                    <p className="desc">{data.weather[0].description}</p>
                </div>
                <img className="right" src={`icons/${data.weather[0].icon}.png`} alt="weather" />
            </div>
            <div className="bottom-section">
                <p className="temperature">{Math.round(data.main.temp)}°C</p>
                <div className="details">
                    <div className="row">
                        <span className="label label-details">Details</span>
                    </div>
                    <div className="row">
                        <span className="label">Feels like</span>
                        <span className="value">{Math.round(data.main.feels_like)}°C</span>
                    </div>
                    <div className="row">
                        <span className="label">Wind</span>
                        <span className="value">{data.wind.speed} m/s</span>
                    </div>
                    <div className="row">
                        <span className="label">Humidity</span>
                        <span className="value">{data.main.humidity} %</span>
                    </div>
                    <div className="row">
                        <span className="label">Pressure</span>
                        <span className="value">{data.main.pressure} hPa</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Weather
