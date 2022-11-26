import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import Button from '@mui/material/Button'
import './Location.css'

export const Locations = () => {
    const [locations, setLocations] = useState()

    useEffect(() => {
        fetch('https://eldenring.fanapis.com/api/locations?limit=177')
            .then((response) => response.json())
            .then((result) => setLocations(result.data))
    }, [])

    return (
        <div>
            <div className="location-container">
                {locations !== undefined ? (
                    locations.map((location, index) => (
                        <div className="location-card" key={index}>
                            <img src={location.image} alt="" />
                            <h2>{location.name}</h2>
                            <h3>{location.region}</h3>
                        </div>
                    ))
                ) : (
                    <div>
                        <p>BETÖLTÉS</p>
                    </div>
                )}
            </div>
        </div>
    )
}
