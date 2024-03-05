export const getCurrentPosition = async (): Promise<google.maps.LatLngLiteral> => {
  return new Promise((resolve, reject) => {
    try {
      navigator.geolocation.getCurrentPosition(function (position) {
        const { latitude: lat, longitude: lng } = position.coords;
        resolve({
          lat,
          lng,
        });
      });
    } catch (err) {
      reject(err);
    }
  });
};
