import React, { useState } from 'react'
import { apiKey } from '../../constants/constants';
import styles from "./styles.module.css"

export const LocationSearch = ({
    onCityFound
}) => {
    // const [cities, setCities] = useState("");
    const [zipCode, setZipCode] = useState("");

    // const getLocation = (city) => {
    //     console.log(city)
    //     const url = `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${apiKey}&q=${city}`
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(res => res.find(
    //             l => l.Country.ID === "NG",
    //             l => l.Country.ID === "NG",
    //             l => l.Country.ID === "" 
    //         ))
    //         .then(res => onCityFound({
    //             name: res.LocalizedName,
    //             key: res.Key,
    //             state: res.AdministrativeArea.ID,
    //         }));
    // }

    const getLocation = (zip) => {
        console.log(zip)
        const url = `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${apiKey}&q=${zip}`
        fetch(url)
            .then(res => res.json())
            .then(res => res.find(
                l => l.Country.ID === "NG",
            ))
            .then(res => {
                onCityFound({
                    name: res.LocalizedName,
                    key: res.Key,
                    state: res.AdministrativeArea.ID,
                });
                setZipCode("")
            });
    }
    return (
        <div className={styles.main}>
            {/* <input
            placeholder='City, Zip Code'
                value={cities}
                onChange={e => setCities(e.target.value)}
            /> */}
            <input
                placeholder='City, Zip Code'
                value={zipCode}
                onChange={e => setZipCode(e.target.value)}
            />
            <button onClick={() => getLocation(zipCode)}>Search</button>
        </div>
    )
}