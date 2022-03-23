import React, { useState } from 'react'
import { apiKey } from '../../constants/constants';

export const LocationSearch = () => {
    const [cities, setCities] = useState("");

    const getLocation = () => {
        const url = `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${apiKey}&q=${cities}`
    }
  return (
    <div>
        <input 
        value={cities}
        onChange={e => setCities(e.target.value)}
        />
        <button onClick={getLocation}>Search</button>
    </div>
  )
}