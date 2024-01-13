import React, { Component, useEffect, useState } from "react";
import { useContext } from "react";

import ScoreContext from "../contexts/scoreContext";
import GameContext from "../contexts/gameContext";
import "../css/highscores.css";

function ScoreDisplay() {
  const { setScoreInfo, scoreInfo } = useContext(ScoreContext);
  const { gameInfo } = useContext(GameContext);

  const [isScoreVisible, setIsScoreVisible] = React.useState(false);

  useEffect(() => {
    const storedScoreInfo = JSON.parse(localStorage.getItem("scoreInfo"));

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

  return isScoreVisible ? (
    <div id="scoreWindow">
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

      <h1 style={{color:"black"}}>Highscores</h1>
      <div id="scoreContainer">
        {scoreInfo ? (
          [...scoreInfo]
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
                   {i+1}. {!score.name ? "Anonym" : score.name}: {score.score}
                  </div>
                </p>
              );
            })
        ) : (
          <p>Score Pending...</p>
        )}
      </div>
    </div>
  ) : null;
}

export default ScoreDisplay;
