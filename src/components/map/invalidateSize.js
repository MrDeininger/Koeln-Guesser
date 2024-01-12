import React, { Component, useEffect } from 'react';
import { useMap } from 'react-leaflet';


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
    }, []);

    return null;
}

export default InvalidateSizeComponent;