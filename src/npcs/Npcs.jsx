import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import Button from '@mui/material/Button'
import './Npcs.css'
import '../fonts/MantiniaRegular.ttf'

export const Npcs = () => {
    const [npcs, setNpcs] = useState()
    const [npcName, setNpcName] = useState()
    const [npcNameUpdate, setNpcNameUpdate] = useState()
    const [npcModal, setNpcModal] = useState()
    const [autoComplete, setAutoComplete] = useState()

    //Find All Npc
    useEffect(() => {
        fetch('https://eldenring.fanapis.com/api/npcs?limit=100', {})
            .then((response) => response.json())
            .then((npc) => setNpcs(npc.data))
    }, [])

    //Find Npc from Name
    useEffect(() => {
        if (npcName !== '') {
            fetch(`https://eldenring.fanapis.com/api/npcs?name=${npcName}`)
                .then((response) => response.json())
                .then((npcData) => setNpcModal(npcData.data))
        }
    }, [npcName])

    // Search with AutoComplete
    useEffect(() => {
        fetch('https://eldenring.fanapis.com/api/npcs?limit=100')
            .then((response) => response.json())
            .then((result) => setAutoComplete(result.data.map((npc, i) => npc.name)))
    }, [])

    const searchNpc = () => {
        setNpcName(npcNameUpdate)
    }

    return (
        <div>
            <div>
                <div className="search-container">
                    <Autocomplete
                        id="combo-box-demo"
                        options={autoComplete}
                        className="search-input"
                        inputValue={npcName}
                        onInputChange={(event, newInputValue) => {
                            setNpcNameUpdate(newInputValue)
                        }}
                        renderInput={(params) => (
                            <TextField {...params} label="Click to search NPC's" />
                        )}
                    />
                    <Button variant="contained" onClick={searchNpc}>
                        Search
                    </Button>
                </div>
            </div>
            <div>
                {npcModal &&
                    npcModal.map((modalNpc, index) => (
                        <div className="npc-modal-container">
                            <div className="npc-modal" key={index}>
                                <Button
                                    className="close-button"
                                    onClick={() => {
                                        setNpcModal()
                                    }}
                                >
                                    X
                                </Button>
                                <img src={modalNpc.image} alt="" />
                                <div className="npc-description">
                                    <h2>{modalNpc.name}</h2>
                                    <h3>{modalNpc.location}</h3>
                                    <p>{modalNpc.quote}</p>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
            <div className="npc-container">
                {npcs !== undefined ? (
                    npcs.map((npc, index) => (
                        <div className="npc-card" key={index}>
                            <img src={npc.image} alt="" />
                            <h2>{npc.name}</h2>
                            <h3>{npc.location}</h3>
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
