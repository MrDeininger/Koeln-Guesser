import React, { useContext, useEffect, useState } from "react";
import "./css/game.css";
import ImageDisplay from "./components/imageViewer";
import ImageContext from "./contexts/imageContext";
import MapComponent from "./components/map/mapComponent";
import MapCoordinatesContext from "./contexts/mapContext";
import haversine from "./components/haversine";
import OpenStreetCam from "./components/openstreetcam";
import SubmitGuessButton from "./components/submitGuessButton";
import GameContext from "./contexts/gameContext";
import ScoreDisplay from "./components/ScoreDisplay";
import { Link } from "react-router-dom";
import ResetGameButton from "./components/resetGameButton";

function Game() {
  const { coordinates, setCoordinates } = React.useContext(
    MapCoordinatesContext
  );
  const { imageInfo, setImageInfo } = useContext(ImageContext);
  const { gameInfo, setGameInfo } = useContext(GameContext);
  const [reset, setReset] = useState(false);

  function resetGame() {
    setCoordinates(null);
    // lösche alle Daten aus gameInfo, außer name
    const currentGameInfo = { ...gameInfo };
    setGameInfo({ name: currentGameInfo.name });
    setImageInfo(null);
    // lade neues Bild
    setReset(!reset);
  }

  useEffect(() => {
    if (coordinates && imageInfo) {
      const newGameInfo = { ...gameInfo };
      const dist = haversine(
        coordinates.lat,
        coordinates.lng,
        imageInfo[1],
        imageInfo[2]
      );
      newGameInfo.distance = dist;
      newGameInfo.lat = coordinates.lat;
      newGameInfo.lng = coordinates.lng;
      newGameInfo.latImg = imageInfo[1];
      newGameInfo.lngImg = imageInfo[2];
      newGameInfo.score = Math.round(1000 - dist * 100);
      setGameInfo(newGameInfo);
    }
  }, [coordinates, imageInfo]); // Effekt wird nur ausgeführt, wenn sich coordinates oder imageInfo ändern

  return (
    <div className="gameContainer">
      <MapComponent />
      <ScoreDisplay />
      <ImageDisplay reset={resetGame} />

      <div id="buttonContainer">
        {coordinates ? <SubmitGuessButton /> : ""}
        <ResetGameButton resetGame={resetGame} />
        <Link
          to="/home"
          className="btn btn-primary"
          id="backtohomebutton"
          onClick={resetGame}
        >
          Home
        </Link>
      </div>
      <OpenStreetCam reset={reset} />
    </div>
  );
}

export default Game;
