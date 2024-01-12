import { useContext, useEffect } from 'react';
import ImageContext from "./imageContext";

function OpenStreetCam() {
   
    const { setImageURL } = useContext(ImageContext);

        console.log("OpenStreetCam");

        fetch(
            "https://api.openstreetcam.org/2.0/photo/?lat=50.9413&lng=6.9573&radius=500"
        )
            .then((response) => {
                console.log("Status:", response.status);
                return response.json();
            })
            .then((data) => {
                const firstPhoto = data.result.data[0];
                console.log("First photo:", firstPhoto.fileurlProc);
                setImageURL(firstPhoto.fileurlProc);
            })
            .catch((error) => {
                console.error("Error:", error);
            });

    return null; // or return your JSX here
}

export default OpenStreetCam;