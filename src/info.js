import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ScoreDisplay from "./components/ScoreDisplay";


import "./css/info.css";

function Info() {
  const [info, setInfo] = useState("");
  const [loadJoke, setLoadJoke] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(true);
  

  useEffect(() => {
    const storedInfo = JSON.parse(localStorage.getItem("info"));
    console.log(storedInfo);
    if (buttonClicked) {
      fetch("https://witzapi.de/api/joke")
        .then((response) => response.json())
        .then((data) => {
          const joke = data[0].text;

          setInfo([joke, ...info]);
          setLoadJoke(!loadJoke);
          localStorage.setItem("info", JSON.stringify(info));
        });
      setButtonClicked(false);
    }
  }, [buttonClicked]);

  return (
    <div className="infoContainer">
        <h1>Witzegenerator</h1>
      <div className="jokeDiv">
        {info
          ? info.map((joke) => {
              return <p className="jokeContainer">{joke}</p>;
            })
          : ""}
      </div>
      <div className="buttonContainer">
        <button
          onClick={() => setButtonClicked(true)}
          className="btn btn-primary"
          id="jokeButton"
        >
          neuer Witz
        </button>
        <Link to="/home" id="homebutton" className="btn btn-primary">
          Home
        </Link>
        <ScoreDisplay />
      </div>
    </div>
  );
}

export default Info;