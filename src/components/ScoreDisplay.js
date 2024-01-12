import React, { Component, useEffect, useState } from "react";
import { useContext } from "react";

import ScoreContext from "../contexts/scoreContext";
import GameContext from "../contexts/gameContext";

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
      } 
      else {
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
    <div
      id="scoreContainer"
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        width: "70%",
        height: "70%",
        textAlign: "center",
        fontSize: "24px",
        transform: "translate(-50%, -50%)",
        zIndex: 1,
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
        backgroundColor: "black",
        padding: "20px",
        overflowY: "scroll",
        border: "2px solid white",
        borderRadius: "10px",
      }}
    >
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

      <h1>Highscores</h1>
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
                {score.name}: {score.score}
              </p>
            );
          })
      ) : (
        <p>Score Pending...</p>
      )}
    </div>
  ) : null;
}

export default ScoreDisplay;
