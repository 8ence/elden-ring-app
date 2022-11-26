import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button'
import './Menu.css'

export const Menu = ({
    openMenu,
    openNpcs,
    openWeapons,
    openLocations,
    setOpenMenu,
    setOpenNpcs,
    setOpenWeapons,
    setOpenLocations,
}) => {
    // const [openMenu, setOpenMenu] = useState(false)
    // const [openNpcs, setOpenNpcs] = useState(true)
    // const [openWeapons, setOpenWeapons] = useState(false)
    // const [openLocations, setOpenLocations] = useState(false)

    return (
        <div className="menu-container">
            <Button onClick={() => setOpenMenu(!openMenu)}>Menu</Button>
            {openMenu && (
                <div className="menu-items">
                    <div
                        className="menu-item"
                        onClick={() => {
                            setOpenNpcs(!openNpcs)
                            setOpenWeapons(false)
                            setOpenLocations(false)
                        }}
                    >
                        <h3>NPC's</h3>
                    </div>
                    <div
                        className="menu-item"
                        onClick={() => {
                            setOpenWeapons(!openWeapons)
                            setOpenNpcs(false)
                            setOpenLocations(false)
                        }}
                    >
                        <h3>Weapons</h3>
                    </div>
                    <div
                        className="menu-item"
                        onClick={() => {
                            setOpenLocations(!openLocations)
                            setOpenNpcs(false)
                            setOpenWeapons(false)
                        }}
                    >
                        <h3>Locations</h3>
                    </div>
                </div>
            )}
        </div>
    )
}
