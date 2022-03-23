import React, { useState } from 'react'
import { apiKey } from '../../constants/constants';

export const LocationSearch = ({
    onCityFound
}) => {
    const [cities, setCities] = useState("");

    const getLocation = (city) => {
        console.log(city)
        const url = `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${apiKey}&q=${city}`
        fetch(url)
            .then(res => res.json())
            .then(res => res.find(l => l.Country.ID === "NG"))
            .then(res => onCityFound({
                name: res.LocalizedName,
                key: res.Key,
                state: res.AdministrativeArea.ID,
            }));
    }
    return (
        <div>
            <input
                value={cities}
                onChange={e => setCities(e.target.value)}
            />
            <button onClick={() => getLocation(cities)}>Search</button>
        </div>
    )
}