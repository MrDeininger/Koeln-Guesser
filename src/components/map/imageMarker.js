import React, { useEffect, useState } from 'react';
import { Marker } from 'react-leaflet';
import ImageContext from '../../contexts/imageContext';
import L from 'leaflet';
import GameContext from '../../contexts/gameContext';

function ImageMarker() {
    const { imageInfo, setImage } = React.useContext(ImageContext);
    const [markerPosition, setMarkerPosition] = useState(null);
    const { gameInfo } = React.useContext(GameContext);
    
    const icon = L.divIcon({
        className: 'custom-icon', // Optional, you can use this class to style your icon in CSS
        html: '<span style="line-height: 0.5; font-size: 24px; color: black;">X</span>', // HTML for the icon
    });

    // useEffect hook to update the Marker position whenever the imageInfo changes
    useEffect(() => {
        // This code will run whenever `imageInfo` changes
        if ( gameInfo && gameInfo.eingeloggt ) {
            setMarkerPosition([imageInfo[1], imageInfo[2]]);
        }
        if ( gameInfo && !gameInfo.eingeloggt ) {
            setMarkerPosition(null);
        }
        if ( !gameInfo ) {
            setMarkerPosition(null);
        }

    }, [gameInfo]); // The array of dependencies for the useEffect hook. Whenever any of these change, the effect will run again.

    return markerPosition  === null ? null : <Marker position={markerPosition} icon={icon} />;
}

export default ImageMarker;