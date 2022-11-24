import React, { useEffect, useState } from "react";
import "./Npcs.css";

export const Npcs = () => {
  const [npcs, setNpcs] = useState();
  useEffect(() => {
    fetch("https://eldenring.fanapis.com/api/npcs?limit=100", {})
      .then((response) => response.json())
      .then((npc) => console.log(npc.data));
  }, []);
  return (
    <div className="npc-container">
      {npcs &&
        npcs.map((npc, index) => (
          <div className="npc-card" key={index}>
            <img src={npc.image} alt="" />
            <h2>{npc.name}</h2>
            <h3>{npc.location}</h3>
            <p>{npc.quote}</p>
          </div>
        ))}
    </div>
  );
};
