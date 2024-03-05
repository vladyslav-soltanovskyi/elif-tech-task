import { Libraries, useJsApiLoader } from "@react-google-maps/api";
import Map from "./map";
import AutoComplete from "@ui/form-elements/auto-complete/auto-complete";
import { FC, useMemo, useState } from "react";
import { useTypedSelector } from "@hooks/useTypedSelector";

const libraries: Libraries = ["places", "geocoding", "routes"];

interface IMapContainerProps {
  onChangeAddress: (address: string) => void;
  setCoordinates: (position: google.maps.LatLngLiteral) => void;
  coordinates?: google.maps.LatLngLiteral;
  addressValue: string;
  error?: string;
}

const MapContainer: FC<IMapContainerProps> = ({
  onChangeAddress,
  setCoordinates,
  coordinates,
  error,
  addressValue,
}) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script-1",
    googleMapsApiKey: import.meta.env.VITE_API_MAP_KEY,
    libraries: libraries,
  });

  const [directions, setDirections] = useState<google.maps.DirectionsResult>();
  const lat = useTypedSelector(({ cart }) => cart.cart.lat);
  const lng = useTypedSelector(({ cart }) => cart.cart.lng);
  const shopPosition = useMemo(() => ({ lat: lat!, lng: lng! }), [lat, lng]);


  const fetchDirections = (coordinates: google.maps.LatLngLiteral) => {
    if (!coordinates) return;

    const service = new google.maps.DirectionsService();
    service.route(
      {
        origin: shopPosition!,
        destination: coordinates,
        travelMode: google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === "OK" && result) {
          setDirections(result);
          onChangeAddress(result.routes[0].legs[0].end_address);
        }
      }
    );
  };

  const changeCoordinates = (coordinates: google.maps.LatLngLiteral) => {
    setCoordinates(coordinates);
    fetchDirections(coordinates);
  };

  if (!isLoaded) return <div>Loading...</div>;
  return (
    <>
      <Map
        isLoaded={isLoaded}
        coordinates={coordinates}
        changeCoordinates={changeCoordinates}
        onChangeAddress={onChangeAddress}
        directions={directions}
        shopPosition={shopPosition}
        />
      {directions && (
        <div>
          <div><strong>Duration:</strong> {directions.routes[0].legs[0].duration?.text}</div>
          <div><strong>Distance:</strong> {directions.routes[0].legs[0].distance?.text}</div>
        </div>
      )}
      <AutoComplete
        onChangeAddress={onChangeAddress}
        changeCoordinates={changeCoordinates}
        addressValue={addressValue}
        error={error}
        isLoaded={isLoaded}
      />
    </>
  );
};

export default MapContainer;
