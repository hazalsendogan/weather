import { createContext,useEffect,useState } from "react";

const WeatherContext = createContext();

export const WeatherProvider = ({children}) => {

    const [city, setCity] = useState("Ankara");
    const [weather, setWeather] = useState([]);
    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=d4eba4bb3a2cd6ed0bb563ded94832da&unit=standard`)
        .then(res => res.json())
        .then(data => setWeather(data))
    }, [weather,city]);
    
    const values = {city,setCity,weather};

 
    return <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
}

export default WeatherContext;