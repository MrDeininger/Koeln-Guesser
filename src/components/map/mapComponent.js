import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, useMap, useMapEvents } from 'react-leaflet';
import ClickMarker from './clickMarker';
import InvalidateSizeComponent from './invalidateSize';
import ImageMarker from './imageMarker';
import LineBetweenMarkers from './lineBetweenMarkers';

const positionImage = {};


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
            <ImageMarker />
            <LineBetweenMarkers />

            
        </MapContainer>
    );
}

export default MapComponent;