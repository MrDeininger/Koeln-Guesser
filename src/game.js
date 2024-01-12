import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './game.css';
import ImageDisplay from './imageViewer';
import MapComponent from './mapComponent';
import MapCoordinatesContext from './mapctx';



function Game() {
    const position = useContext(MapCoordinatesContext);
    console.log(position);
    

    return (
        <div className='gameContainer'>
            <h1>KölnGuesser {position ? `Lat: ${position.lat}, Lng: ${position.lng}` : ''}</h1>
            <MapComponent />
            <ImageDisplay />
            <Link to="/home" className="buttonhome">Go to Page 1</Link>
        </div>
    );
}

export default Game;