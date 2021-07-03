export type Geopoint = {
  latitude: number;
  longitude: number;
};

export function getDistanceFromLatLonInKm(
  position1: Geopoint,
  position2: Geopoint
) {
  // console.log(position2);
  // console.log(position1);
  var deg2rad = function (deg: number) {
      return deg * (Math.PI / 180);
    },
    R = 6371,
    dLat = deg2rad(position2.latitude - position1.latitude),
    dLng = deg2rad(position2.longitude - position1.longitude),
    a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(position1.latitude)) *
        Math.cos(deg2rad(position1.latitude)) *
        Math.sin(dLng / 2) *
        Math.sin(dLng / 2),
    c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distanceInMeters = R * c * 1000;

  if (distanceInMeters > 1000) {
    return (distanceInMeters / 1000).toFixed(2) + " km";
  } else if (distanceInMeters < 1000) {
    return distanceInMeters.toFixed(2) + " m";
  } else if (distanceInMeters < 50) {
    return "Menos de 50 m";
  } else {
    return "Muito próximo";
  }
}
