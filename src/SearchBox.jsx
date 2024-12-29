import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { useState } from "react";
export default function SearchBox({updateInfo}){
    let [city,setCity]=useState("");
    let [error,setError]=useState(false);
    let API_URL="https://api.openweathermap.org/data/2.5/weather";
    let API_KEY="1483bedd2e040218d22c294e586e399b";
    let getWeatherInfo = async () => {
        try {
          let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
          let jsonResponse = await response.json();
            let result = {
              city: city,
              temp: jsonResponse.main.temp,
              tempMin: jsonResponse.main.temp_min,
              tempMax: jsonResponse.main.temp_max,
              humidity: jsonResponse.main.humidity,
              feelsLike: jsonResponse.main.feels_like,
              weather: jsonResponse.weather[0].description,
             } // Fixed property name
            console.log(result);
            return result;
      }catch(err){
        throw err;
      }
    }
      
   let handleChange=(evt)=>{
    setCity(evt.target.value)
   }
   let handleSubmit=async(evt)=>{
    try{
   evt.preventDefault();
   console.log(city);
//    setCity("");
   let newInfo=await getWeatherInfo();
   updateInfo(newInfo);
   } catch(err){
    setError(true);
   }
}
   return(
       <div className="SearchBox">
        <form onSubmit={handleSubmit}>
            <TextField id="city" label="city name" variant="outlined" required value={city} onChange={handleChange} style={{color:"pink"}}/>
            <br /><br />
            <Button variant="contained" type="submit">Search</Button>
            {error && <p style={{color:"red"}}>No such place exists</p>}
        </form>
       </div>
   )
}