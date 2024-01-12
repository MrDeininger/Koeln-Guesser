import React from 'react';
import { Marker, useMapEvents } from 'react-leaflet';
import MapCoordinatesContext from '../../contexts/mapContext';
import GameContext from '../../contexts/gameContext';
import L from 'leaflet';

function ClickMarker() {
    const { coordinates, setCoordinates } = React.useContext(MapCoordinatesContext);
    const { gameInfo } = React.useContext(GameContext);

    const map = useMapEvents({
        click: (e) => {
            if(!(gameInfo && gameInfo.eingeloggt)){
                setCoordinates(e.latlng);            
            }
        },
    });

    const icon = L.divIcon({
        className: 'custom-icon', // Optional, you can use this class to style your icon in CSS
        html: '<span style="line-height: 0.5; font-size: 24px; color: black;">X</span>', // HTML for the icon
    });

    return coordinates === null ? null : <Marker position={coordinates} icon={icon} />;
}

export default ClickMarker;