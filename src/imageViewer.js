import React, { useContext } from 'react';
import ImageContext from './imageContext';
function ImageDisplay() {
    const { imageURL } = useContext(ImageContext);

    return (
        <div id='imageContainer' >
            {imageURL ? (
                <img id = 'image' src={imageURL} alt="OpenStreetCam" />
            ) : (
                <p>Image Loading...</p>
            )}
        </div>
    );
}

export default ImageDisplay;