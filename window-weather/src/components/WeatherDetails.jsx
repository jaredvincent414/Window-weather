import '../styles/WeatherDetails.css'
function WeatherDetails({weatherData}) {
    
    return (
        <div className="weaather-details">
            <h3>Weather Details</h3>
            <div className="detail-item">
                <span>Cloudy</span>
                <span>{weatherData.clouds.all}%</span>
            </div>
            <div className="detail-item">
                <span>Humidity</span>
                <span>{weatherData.main.humidity}%</span>
            </div>
            <div className="detail-item">
                <span>wind</span>
                <span>{Math.round(weatherData.wind.speed * 3.6)}Km/h</span>
            </div>
            <div className="detail-item">
                <span>Feels Like</span>
                <span>{Math.round(weatherData.main.feels_like)}°C</span>
            </div>
            <div className="detail-item">
                <span>Pressure</span>
                <span>{weatherData.main.pressure}hpa</span>
            </div>
            <div className="detail-item">
                <span>Visibility</span>
                <span>{weatherData.visibility/1000}Km</span>
            </div>
            
            
        </div>
    );
}

export default WeatherDetails;