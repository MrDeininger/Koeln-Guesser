import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, useMap, useMapEvents } from 'react-leaflet';
import MapCoordinatesContext from './mapctx';
import L from 'leaflet';

function ClickMarker() {
    const [position, setPosition] = useState(null);
    const map = useMapEvents({
        click: (e) => {
            setPosition(e.latlng);
            
        },
    });

    const icon = L.divIcon({
        className: 'custom-icon', // Optional, you can use this class to style your icon in CSS
        html: '<span style="font-size: 24px; color: black;">X</span>', // HTML for the icon
    });

    return position === null ? null : <Marker position={position} icon={icon} />;
}


function InvalidateSizeComponent() {
    const map = useMap();

    useEffect(() => {
        function handleTransitionEnd() {
            map.invalidateSize();
        }


        const container = map.getContainer();
        container.addEventListener('transitionend', handleTransitionEnd);

        return () => {
            container.removeEventListener('transitionend', handleTransitionEnd);
        };
    }, [map]);

    return null;
}

function MapComponent() {
    const position = [50.9413, 6.9573] // Köln Koordinaten

    return (
        <MapContainer center={position}  zoom={13}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <InvalidateSizeComponent />
            <ClickMarker />
        </MapContainer>
    );
}

export default MapComponent;