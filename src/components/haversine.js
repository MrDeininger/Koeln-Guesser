function haversine(lat1, lon1, lat2, lon2) {
    // Radius der Erde in km
    const R = 6371.0;

    // Umrechnung der Breiten- und Längengrade von Grad in Radianten
    const radLat1 = toRadians(lat1);
    const radLon1 = toRadians(lon1);
    const radLat2 = toRadians(lat2);
    const radLon2 = toRadians(lon2);

    // Differenzen der Koordinaten
    const dlat = radLat2 - radLat1;
    const dlon = radLon2 - radLon1;

    // Haversine-Formel
    const a = Math.sin(dlat / 2) ** 2 + Math.cos(radLat1) * Math.cos(radLat2) * Math.sin(dlon / 2) ** 2;
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    // Berechnung des Abstands
    const distance = R * c;

    return distance;
}

function toRadians(degrees) {
    return degrees * (Math.PI / 180);
}

export default haversine;