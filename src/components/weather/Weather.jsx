const Weather = () => {
    return (
        <div className="weather-container">
            <div className="top-section">
                <div className="left">
                    <h2 className="city">Belgium</h2>
                    <p className="desc">Sunny</p>
                </div>
                <img className="right" src="icons/01d.png" alt="weather" />
            </div>
            <div className="bottom-section">
                <p className="temperature">14°C</p>
                <div className="details">
                    <div className="row">
                        <span className="label label-details">Details</span>
                    </div>
                    <div className="row">
                        <span className="label">Feels like</span>
                        <span className="value">32°C</span>
                    </div>
                    <div className="row">
                        <span className="label">Wind</span>
                        <span className="value">2 m/s</span>
                    </div>
                    <div className="row">
                        <span className="label">Humidity</span>
                        <span className="value">23 %</span>
                    </div>
                    <div className="row">
                        <span className="label">Pressure</span>
                        <span className="value">15 hPa</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Weather
