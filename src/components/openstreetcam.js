import { useContext, useEffect } from "react";
import ImageContext from "../contexts/imageContext";
import ScoreContext from "../contexts/scoreContext";


function OpenStreetCam({ reset }) {
  const { imageInfo, setImageInfo } = useContext(ImageContext);
  const { scoreInfo } = useContext(ScoreContext);

  const getRandomCoordinates = () => {
    // Define the latitude and longitude boundaries of the rectangle
    const latMin = 50.89588741;
    const latMax = 50.99128564;
    const lngMin = 6.87332153;
    const lngMax = 7.02060699;

    // Generate a random latitude and longitude within the rectangle
    const lat = Math.random() * (latMax - latMin) + latMin;
    const lng = Math.random() * (lngMax - lngMin) + lngMin;

    return [lat, lng];
  };

  const fetchImageUrl = () => {
    const latlng = getRandomCoordinates();
    fetch(
      `https://api.openstreetcam.org/2.0/photo/?lat=${latlng[0]}&lng=${latlng[1]}&radius=500`
    )
      .then((response) => {
        if (!response.ok) throw new Error("No image found");
        return response.json();
      })
      .then((data) => {
        if (data.result) {
          let numberOfImages = data.result.data.length;
          if (numberOfImages > 0) {
            const randomIndex = Math.floor(
              Math.random() * (numberOfImages - 1)
            );
            const randomPhoto = data.result.data[randomIndex];
            setImageInfo([
              randomPhoto.fileurlProc,
              randomPhoto.lat,
              randomPhoto.lng,
            ]);
          }
        }
        else {
          fetchImageUrl();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    // Define the latitude and longitude boundaries of the rectangle
    console.log("Fetching OpenStreetCam image...");
    fetchImageUrl();
  }, [reset]); // Only run this code when the scoreInfo changes
  return null; // or return your JSX here
}

export default OpenStreetCam;
