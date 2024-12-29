import SearchBox from "./SearchBox";
import InfoBox from "./Infobox";
import { useState } from "react";
export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo]=useState({
        city:"wonderland",
        feelsLike:24.84,
        temp:25.05,
        tempMin:25.05,
        tempMax:25.05,
        humidity:47,
        weather:"haze"
    });
    let updateInfo=(newInfo)=>{
       setWeatherInfo(newInfo);
    }
    return(
            <div style={{textAlign:"center"}}>
            <h2>wheather app</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}