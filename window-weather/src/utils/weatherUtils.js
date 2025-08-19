import rainBg from '../assets/images/rain-drops.png';
import cloudyBg from '../assets/images/cloudy-1.png';
import clearBg from '../assets/images/clear-sunny-2.png';
import snowBg from '../assets/images/snowy-1.png';
import thunderstormBg from '../assets/images/thunderstorm-1.png';
import mistBg from '../assets/images/mist-1.png';


export const getWeatherBackgrounds = {
    rain: rainBg,
    clouds: cloudyBg,
    snow: snowBg,
    thunderstorm: thunderstormBg,
    drizzle: rainBg,
    mist: mistBg,
    clear: clearBg,
    default: cloudyBg
}

export const getWeatherBackground = (weatherMain) => {
    const condition = weatherMain.toLowerCase()

    if (condition.includes('rain')) return getWeatherBackgrounds.rain
    if(condition.includes('cloud')) return getWeatherBackgrounds.clouds
    if (condition.includes('clear')) return getWeatherBackgrounds.clear
    if(condition.includes('snow')) return getWeatherBackgrounds.clouds.snow
    if (condition.includes('thunderstorm')) return getWeatherBackgrounds.thunderstorm
    if(condition.includes('drizzle')) return getWeatherBackgrounds.drizzle
    if(condition.includes('mist') || condition.includes('fog')) return getWeatherBackgrounds.mist


    return getWeatherBackgrounds.default
}

export const popularCities = [
    'Nairobi',
    'London',
    'Berlin',
    'New York',
    'Barcelona',
    'Manchester',
    'Madrid'
]