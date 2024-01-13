import React from "react";
import GameContext from "../contexts/gameContext";
import { useContext } from "react";
import ImageContext from "../contexts/imageContext";

function EinloggenButton() {
  const { gameInfo, setGameInfo } = useContext(GameContext);
  const { imageInfo } = useContext(ImageContext);

  return (
    <div className="containerhome">
      <button
        onClick={() => {
          if (gameInfo && imageInfo) {
            if (!gameInfo.eingeloggt) {
              setGameInfo({
                ...gameInfo,
                eingeloggt: true,
              });
            }
          } else {
            alert("Bildkoordinaten fehlen: Neuer Versuch Auswählen");
          }
        }}
        type="button"
        className="btn btn-primary"
        id="einloggenbutton"
      >
        Einloggen
      </button>
    </div>
  );
}

export default EinloggenButton;
