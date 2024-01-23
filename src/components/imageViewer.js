import React, { useContext, useState } from 'react';
import ImageContext from '../contexts/imageContext';
import OpenStreetCam from './openstreetcam';
function ImageDisplay( { reset } ) {
    const { imageInfo } = useContext(ImageContext);
    

    return (
        <div id='imageContainer' >
            {imageInfo ? (
                <img 
                    id='image' 
                    src={imageInfo[0]} 
                    onLoad={() => console.log('Image loaded successfully')}
                    onError={() => {
                        console.log('Image loading failed. Trying again...');
                        reset();
                    }
                    }
                />
            ) : (
                <p>Image Loading...</p>
            )}
        </div>
    );
}

export default ImageDisplay;