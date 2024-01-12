import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './home';
import Game from './game';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import OpenStreetCam from './openstreetcam';
import ImageContext from './imageContext';
import 'leaflet/dist/leaflet.css';
import MapCoordinatesContext from './mapctx';

function App() {
  const [imageURL, setImageURL] = useState(null);
  const [coordinates, setCoordinates] = useState(null);

  return (
    <MapCoordinatesContext.Provider value={{coordinates, setCoordinates}}>
    <ImageContext.Provider value={{ imageURL, setImageURL }}>
      <OpenStreetCam />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/game" element={<Game />} />
          <Route path="/highscores" element={<Home />} />
        </Routes>
      </Router>
    </ImageContext.Provider>
    </MapCoordinatesContext.Provider>
    
  );
}

export default App;