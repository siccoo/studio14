import React from 'react';

export const WeatherDay = ({min, max, weatherType, weatherKey}) => {
  return (
    <div>
        <div>
            <img alt={weatherType} src={`https://developer.accuweather.com/sites/default/files/${weatherKey}-s.png`} />
        </div>
        <div>Temp: {min} / {max}</div>
    </div>
  )
};
