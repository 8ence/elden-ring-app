import logo from './logo.svg'
import './App.css'
import { Npcs } from './npcs/Npcs'
import { Locations } from './locations/Locations'
import { Menu } from './menu/Menu'
import { useState } from 'react'

function App() {
    const [openMenu, setOpenMenu] = useState(false)
    const [openNpcs, setOpenNpcs] = useState(true)
    const [openWeapons, setOpenWeapons] = useState(false)
    const [openLocations, setOpenLocations] = useState(false)
    return (
        <div className="App">
            <Menu
                openMenu={openMenu}
                setOpenMenu={setOpenMenu}
                openNpcs={openNpcs}
                setOpenNpcs={setOpenNpcs}
                openWeapons={openWeapons}
                setOpenWeapons={setOpenWeapons}
                openLocations={openLocations}
                setOpenLocations={setOpenLocations}
            />
            {openNpcs && <Npcs />}
            {openLocations && <Locations />}
        </div>
    )
}

export default App
