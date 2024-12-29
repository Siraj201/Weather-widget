import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./Infobox.css";
 export default function InfoBox({info}){
    const INIT_URL="https://media.istockphoto.com/id/1989960032/photo/beach-house-terrace-at-summer-sunset.webp?a=1&b=1&s=612x612&w=0&k=20&c=QZWKhRLXgJkuItTreBlIIF7nCaN96cPez7urXucqFqE=";
    let COLD_URL="https://media.istockphoto.com/id/532959840/photo/gulmarg-high-peaks.webp?a=1&b=1&s=612x612&w=0&k=20&c=s5lbs26Hlh5-6R19NOUiDKi7IJdlZZYa3vSHMHuqR3A=";
    let HOT_URL="https://media.istockphoto.com/id/1322096928/photo/hot-summer-sunlight-rays-pouring-through-human-hand-hand-covering-sun-light-heat-temperature.webp?a=1&b=1&s=612x612&w=0&k=20&c=FJXHh8eOCvGTfyDBbKMgWWtE966qr3w5-rWvz7e0cO4=";
    let RAIN_URL="https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=sw_CRZcGopaGHDWqtT1M8y64k5uCcq-nro55Bw3YzyQ=";
    
    return(
        <div className="InfoBox">
        <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity > 80 ? RAIN_URL : info.temp >80 ?HOT_URL : COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}{info.humidity > 80 ? <ThunderstormIcon/> :info.temp >15 ? <WbSunnyIcon/> :<AcUnitIcon/>}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
         <p>Temperature={info.temp}&deg;C</p>
         <p>Humidity={info.humidity}</p>
         <p>Min temperature={info.tempMin}&deg;C</p>
         <p>Max Temperature={info.tempMax}&deg;C</p>
         <p>the weather can be described as <i>{info.weather[0].description}</i> and feels like {info.feelsLike}&deg;C </p>
        </Typography>
      </CardContent>
    </Card>
        </div>
        </div>
    )
 }
