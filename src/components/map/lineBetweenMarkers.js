import React, { useEffect } from 'react';
import { Polyline } from 'react-leaflet';
import { useContext } from 'react';
import MapCoordinatesContext from '../../contexts/mapContext';
import ImageContext from '../../contexts/imageContext';
import GameContext from '../../contexts/gameContext';





function LineBetweenMarkers( ) {
;
    const { coordinates } = useContext(MapCoordinatesContext);
    const { imageInfo } = useContext(ImageContext);
    const { gameInfo } = useContext(GameContext);

    if(!(gameInfo && gameInfo.eingeloggt)) return null;


    const marker1Position = coordinates;
    const marker2Position = [imageInfo[1], imageInfo[2]];


    const line = [marker1Position, marker2Position];

    if(marker1Position === null || marker2Position === null) return null;

    return (
        <Polyline positions={line} color='red' />
    );
}

export default LineBetweenMarkers;