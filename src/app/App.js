import { useEffect, useState } from "react";
import { WeatherDay } from "../components/weatherDay/WeatherDay";
import styles from "./styles.module.css";
import { apiKey } from "../constants/constants";

const App = () => {
  const [weatherInfo, setWeatherInfo] = useState();

  const padNum = (num) => {
    const stringNum = num + "";
    const stringLen = stringNum.length;

    if (stringLen === 1) {
      return "0" + stringNum;
    } else {
      return stringNum;
    }
  }

  const locationKey = "3722_PC";

  useEffect(() => {
    fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/locationKey=${locationKey}?apikey=${apiKey}`)
      .then(res => res.json())
      .then(res => {
        console.log(res);
        setWeatherInfo(res.DailyForecasts
          .map(df => {
            return {
              min: df.Temperature.Minimum.Value,
              max: df.Temperature.Maximum.Value,
              weatherType: df.Day.IconPhrase,
              weatherKey: padNum(df.Day.Icon),
            }
          }))
      })
  }, []);

  // useEffect(() => {
  //   console.log(weatherInfo);
  // }, [weatherInfo]);

  return (
    <div className={styles.main}>
      {!!weatherInfo && weatherInfo.map((i, index) => (
        <div className={styles.day} key={index}>
          <WeatherDay
            min={i.min}
            max={i.max}
            weatherType={i.weatherType}
            weatherKey={i.weatherKey}
          />
        </div>
      ))}
    </div>
  );
}

export default App;
