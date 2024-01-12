import React, { useContext } from 'react';
import ImageContext from '../contexts/imageContext';
function ImageDisplay() {
    const { imageInfo } = useContext(ImageContext);
    

    return (
        <div id='imageContainer' >
            {imageInfo ? (
                <img id = 'image' src={imageInfo[0]} alt='Fetching failed: Reload' />
            ) : (
                <p>Image Loading...</p>
            )}
        </div>
    );
}

export default ImageDisplay;