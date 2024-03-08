import { FC, memo, useRef } from "react";
import { DirectionsRenderer, GoogleMap, Marker } from "@react-google-maps/api";

interface IMapProps {
  isLoaded: boolean;
  coordinates?: google.maps.LatLngLiteral;
  directions?: google.maps.DirectionsResult;
  shopPosition?: google.maps.LatLngLiteral;
  onChangeAddress: (address: string) => void;
  changeCoordinates: (coordinates: google.maps.LatLngLiteral) => void;
}

const containerStyle = {
  width: "400px",
  height: "400px",
};

const defaultOptions = {
  panControl: true,
  zoomControl: true,
  clickableIcons: false,
  disableDoubleClickZoom: true,
  fullscreenControl: false,
  keyboardShortcuts: false,
  rotateControl: false,
  scaleControl: false,
  scrollwheel: false,
  streetViewControl: false,
};

const Map: FC<IMapProps> = ({
  isLoaded,
  coordinates,
  directions,
  changeCoordinates,
  shopPosition,
}) => {
  const mapRef = useRef<google.maps.Map | null>(null);

  const defautlCoordinates = { lat: 50.43117762451211, lng: 30.49929525880389 };

  const onLoad = (map: google.maps.Map) => {
    const bounds = new window.google.maps.LatLngBounds(
      coordinates ?? shopPosition ?? defautlCoordinates
    );
    map.fitBounds(bounds);

    mapRef.current = map;
  };

  const changeAddress = ({ latLng }: google.maps.MapMouseEvent) => {
    const lat = latLng!.lat();
    const lng = latLng!.lng();
    changeCoordinates({ lat, lng });
  };

  const onUnmount = () => {
    mapRef.current = null;
  };

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={coordinates ?? shopPosition ?? defautlCoordinates}
      options={defaultOptions}
      zoom={5}
      onLoad={onLoad}
      onUnmount={onUnmount}
      onDblClick={changeAddress}
    >
      {coordinates && (
        <Marker
          position={coordinates}
          icon="https://maps.gstatic.com/mapfiles/ms2/micons/rangerstation.png"
        />
      )}
      {shopPosition && (
        <Marker
          position={shopPosition}
          icon="https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
        />
      )}
      {directions && (
        <DirectionsRenderer
          directions={directions}
          options={{
            polylineOptions: {
              zIndex: 50,
              strokeColor: "#1976D2",
              strokeWeight: 5,
            },
          }}
        />
      )}
    </GoogleMap>
  ) : (
    <></>
  );
};

export default memo(Map);
