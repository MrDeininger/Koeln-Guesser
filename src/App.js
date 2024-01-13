import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home';
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
      <Router>
        <Routes>
          <Route path="/koeln-guesser/" element={<Home />} />
          <Route path="/koeln-guesser/home" element={<Home />} />
          <Route path="/koeln-guesser/game" element={<Game />} />
          <Route path="/koeln-guesser/info" element={<Info />} />
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