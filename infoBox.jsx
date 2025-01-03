import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({info}) {
  const INIT_URL =
    "https://images.unsplash.com/photo-1675430424253-90dd54fb980a?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  
  const HOT_URL =
  "https://images.unsplash.com/photo-1674388357673-5f9cc7c59324?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90JTIwcGxhY2V8ZW58MHx8MHx8fDA%3D ";
  const COLD_URL =
  " https://plus.unsplash.com/premium_photo-1671490808715-1135473e2ccb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29sZGVzdCUyMHBsYWNlfGVufDB8fDB8fHww";
  const RAIN_URL =
  "https://images.unsplash.com/photo-1491838592561-ab572ec2d2cb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmFpbmZ1bGwlMjB0cmVlc3xlbnwwfHwwfHx8MA%3D%3D ";



  return (
    <div className="InfoBox">
      
      <div className="cardContainer">
        <Card
          sx={{
            maxWidth: 345,
          }}
        >
          <CardMedia
            sx={{
              height: 140,
            }}
            image={
              info.humidity > 80
              ? RAIN_URL
              : info.temp > 15
              ? HOT_URL
              : COLD_URL
            }
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {" "}
              {info.city} {
                info.humidity > 80
                ? < ThunderstormIcon/>
                : info.temp > 15
                ? <  WbSunnyIcon />
                : < AcUnitIcon/>
              }
            </Typography>{" "}
            <Typography
              variant="body2"
              color="text.secondary"
              component={"span"}
            >
              <p> Temperature = {info.temp} &deg; C </p>{" "}
              <p> Humidity = {info.humidity} </p>{" "}
              <p> Min Temp = {info.tempMin} &deg; C </p>{" "}
              <p> Max Temp = {info.tempMax} &deg; C </p>{" "}
              <p>
                {" "}
                The weather can be described as <i> {info.weather} </i>and feels
                like {info.feelslike}&deg;C
              </p>
            </Typography>{" "}
          </CardContent>{" "}
        </Card>{" "}
      </div>{" "}
    </div>
  );
}


