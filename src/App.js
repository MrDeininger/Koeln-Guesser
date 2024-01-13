import React, { useState } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';import Home from './home';
import Game from './game';
import Info from './info';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import ImageContext from './contexts/imageContext';
import GameInfoContext from './contexts/gameContext';
import ScoreContext from './contexts/scoreContext';
import 'leaflet/dist/leaflet.css';
import MapCoordinatesContext from './contexts/mapContext';


function App() {
  const [imageInfo, setImageInfo] = useState(null);
  const [coordinates, setCoordinates] = useState(null);
  const [gameInfo, setGameInfo] = useState(null);
  const [scoreInfo, setScoreInfo] = useState(null);

  return (
    <ScoreContext.Provider value={{scoreInfo, setScoreInfo}}>
    <GameInfoContext.Provider value={{gameInfo, setGameInfo}}>
    <MapCoordinatesContext.Provider value={{coordinates, setCoordinates}}>
    <ImageContext.Provider value={{ imageInfo, setImageInfo }}>
      
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/game" element={<Game />} />
          <Route path="/info" element={<Info />} />
        </Routes>
      </Router>

    </ImageContext.Provider>
    </MapCoordinatesContext.Provider>
    </GameInfoContext.Provider>
    </ScoreContext.Provider>
    
  );
}
//blablabla
export default App;