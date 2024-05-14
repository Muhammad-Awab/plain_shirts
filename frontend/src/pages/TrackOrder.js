import React, { useEffect, useState } from 'react';
import { GoogleMap, useJsApiLoader, Marker, DirectionsRenderer } from '@react-google-maps/api';
import { useParams } from 'react-router-dom';

const containerStyle = {
  width: '100%',
  minHeight: '70vh',
  height: '100%'
};

const center = {
  lat: 33.713672,
  lng: 73.025331
};

function TrackOrder() {
  const { id } = useParams();
  const [directionResponse, setDirectionResponse] = useState(null);
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_API_KEY
  });

  useEffect(() => {
    const calculateRoute = async () => {
      if (!window.google || !window.google.maps || !window.google.maps.DirectionsService) {
        console.error('Google Maps not loaded');
        return;
      }

      const directionService = new window.google.maps.DirectionsService();
      const results = await directionService.route({
        origin: { lat: 33.713672, lng: 73.025331 }, // From coordinates
        destination: { lat: 33.564634, lng: 72.972139 }, // To coordinates
        travelMode: window.google.maps.TravelMode.DRIVING
      });
      setDirectionResponse(results);
    };

    calculateRoute();
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={12}
    >
      <Marker position={center} />
      {directionResponse && <DirectionsRenderer directions={directionResponse} />}
    </GoogleMap>
  ) : <h3 style={{ textAlign: 'center' }}>Loading Map...</h3>;
}

export default TrackOrder;
