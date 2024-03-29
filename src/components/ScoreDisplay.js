import React, { Component, useEffect, useState } from "react";
import { useContext } from "react";
import { useLocation } from "react-router-dom";


import ScoreContext from "../contexts/scoreContext";
import GameContext from "../contexts/gameContext";
import "../css/highscores.css";

function ScoreDisplay() {


  const { setScoreInfo, scoreInfo } = useContext(ScoreContext);
  const { gameInfo } = useContext(GameContext);

  const [isScoreVisible, setIsScoreVisible] = React.useState(false);


  // Inside your component
  const location = useLocation();

  let scoreWindowId = '';
  if(location.pathname === '/game'){
    scoreWindowId = 'scoreWindowGame';
  }else if(location.pathname === '/info'){
    scoreWindowId = 'scoreWindowInfo';
  }else if(location.pathname === '/home'){
    scoreWindowId = 'scoreWindowHome';
  }



  useEffect(() => {
    const storedScoreInfo = JSON.parse(localStorage.getItem("scoreInfo"));
    if (!scoreInfo) {
      if (storedScoreInfo) {
        setScoreInfo(storedScoreInfo);
      } else {
        setScoreInfo([
          {
            Index: 0,
            distance: gameInfo.distance,
            score: gameInfo.score,
            name: gameInfo.name,
          },
        ]);
      }
    }
    if (gameInfo && gameInfo.eingeloggt) {
      setIsScoreVisible(true);
      if (!scoreInfo) {
        if (storedScoreInfo) {
          setScoreInfo(storedScoreInfo);
        } else {
          setScoreInfo([
            {
              Index: 0,
              distance: gameInfo.distance,
              score: gameInfo.score,
              name: gameInfo.name,
            },
          ]);
        }
      } else {
        const newScoreInfo = {
          Index: scoreInfo.length,
          distance: gameInfo.distance,
          score: gameInfo.score,
          name: gameInfo.name,
        };
        setScoreInfo([...scoreInfo, newScoreInfo]);
        localStorage.setItem(
          "scoreInfo",
          JSON.stringify([...scoreInfo, newScoreInfo])
        );
      }
    }
  }, [gameInfo]); // Run effect when gameInfo changes

  const closeScoreInfo = () => {
    setIsScoreVisible(false);
  };

  const toggleScoreInfo = () => {
    setIsScoreVisible(!isScoreVisible);
  };

  return isScoreVisible ? (
    <div className="scoreWindow" id={scoreWindowId} >
      <button
        onClick={closeScoreInfo}
        style={{
          position: "absolute",
          top: "0px",
          right: "10px",
          background: "none",
          border: "none",
          color: "white",
          fontSize: "24px",
        }}
      >
        X
      </button>

      <h1 style={{ color: "black" }}>Highscores</h1>
      <div id="scoreContainer">
        {scoreInfo?[...scoreInfo]
          .sort((a, b) => b.score - a.score)
          .map((score, i, arr) => {
            const maxIndex = Math.max(...arr.map((score) => score.Index));
            return (
              <p
                key={i}
                id="score"
                style={{ color: score.Index === maxIndex ? "red" : "white" }}
              >
                <div id="scoreEntry">
                  {i + 1}. {!score.name ? "Anonym" : score.name}: {score.score}
                </div>
              </p>
            );
          }):'noch keine Scores geladen'}
      </div>
    </div>
  ) : (
    <button onClick={toggleScoreInfo} className="scoreWindow" id={scoreWindowId} style={{height: "10vh"}} >
      <h2>
      Scores
      </h2>
    </button>
  );
}

export default ScoreDisplay;
