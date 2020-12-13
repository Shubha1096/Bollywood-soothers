import React, { useState } from "react";
import "./styles.css";

const itemsDB = {
  "Classical": [
    { songname: "Garaj Garaj Jugalbandi", album: "Bandish bandit" },
    { songname: "Albela Sajan", album: "Bajirao Mastani" },
    { songname: "O rangrez", album: "Bhaag Milkha Bhaag" },
    { songname: "Piya", album: "Tanu Weds Manu" },
    { songname: "Aoge jab tum", album: "Jab we met" }
  ],

  Sufi: [
    { songname: "Khwaja mere Khawaja", album: "Jodha akbar" },
    { songname: "Bhar do Jholi meri", album: "Bajrangi bhaijaan" },
    { songname: "Kun faya kun", album: "Rockstar" },
    { songname: "Noor e khuda 🍚", album: "My name is khan" },
    { songname: "Teri Deewani ", album: "Kailasa" },
    { songname: "Iktara", album: "Wake up sid" }
  ],

  "90's": [
    { songname: "Jaadu teri nazara", album: "darr" },
    { songname: "Tuje dekha to", album: "DDLJ" },
    { songname: "Ek ladki ko dekha", album: "1942 A love story" },
    { songname: "Kuch Kuch hota hai", album: "Kuch Kuch hota hai" },
    { songname: "dekha hai pehli baar ", album: "Criminal" },
    { songname: "mein koi aisa geet", album: "mein anari tu khiladi" }
  ]
};

const listofitems = Object.keys(itemsDB);

console.log(listofitems);

export default function App() {
  const [item, setitem] = useState("Classical");

  function onClickHandler(item) {
    setitem(item);
  }
  return (
    <div className="App">
      <h1 className="head" > 🎼 Bollywood Soothers 🎼 </h1>
      <h2 style={{ fontSize: "smaller" }}>
      🎸 Check out the songs based on your favourite Musical genres 🎸
      </h2>
      <div>
        {listofitems.map((item) => (
          <button className="geners-button" onClick={() => onClickHandler(item)}>{item}</button>
        ))}
      </div>
      <div className="lists">
        <ul className="generslist"> {itemsDB[item].map((item) => (
            <li className="songlist" songlistkey={item.songname}>
              <div style={{ fontSize: "larger" }}> {item.songname} </div>
              <div style={{ fontSize: "smaller" }}> {item.album} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
