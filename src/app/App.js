import { useEffect, useState } from "react";
import { WeatherDay } from "../components/weatherDay/WeatherDay";

const App = () => {
  const [weatherInfo, setWeatherInfo] = useState()
  const locationKey = "3722_PC";
  const apikey = "NHbMOu7Wqx5FUYnlhzvmRf5lDcAqgqsF";

  useEffect(() => {
    fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/locationKey=${locationKey}?apikey=${apikey}`)
      .then(res => res.json())
      .then(res => {
        console.log(res);
        setWeatherInfo(res.DailyForecasts
          .map(df => {
            return {
              min: df.Temperature.Minimum.Value,
              max: df.Temperature.Maximum.Value,
              weatherType: df.Day.IconPhrase,
              weatherKey: df.Day.Icon,
            }
          }))
      })
  }, []);

  // useEffect(() => {
  //   console.log(weatherInfo);
  // }, [weatherInfo]);

  return (
    <div>
      {!!weatherInfo && weatherInfo.map((i, index) => (
        <div key={index}>
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
