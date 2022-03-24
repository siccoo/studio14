import React from 'react';

export const WeatherDay = ({ min, max, weatherType, weatherKey, dayOfWeek }) => {
    return (
        <>
            <div>
                <div>
                    {dayOfWeek}
                    <img alt={weatherType} src={`https://developer.accuweather.com/sites/default/files/${weatherKey}-s.png`} />
                </div>
                <div>Min: {min} Max: {max}</div>
            </div>
        </>
    )
};
