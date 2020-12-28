import * as React from 'react';
import { useContext, useState, useEffect }from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import { Context } from '../context/context';
import styled from 'styled-components';
import colors from '../meta/colors';
import key from '../meta/key';
import cities from '../meta/cities';

const mapStyles = {
  width: '550px',
  height: '600px'
};

const MapContainer = (props) => {
  const cont = useContext(Context);

  return (
    <Map
      google={props.google}
      zoom={14}
      style={mapStyles}
      initialCenter={{
          lat: cities.filter((i) => i.name === cont.selectedCity).length === 0 ? 0 : cities.filter((i) => i.name === cont.selectedCity)[0].lat,
          lng: cities.filter((i) => i.name === cont.selectedCity).length === 0 ? 0 : cities.filter((i) => i.name === cont.selectedCity)[0].lng
        }}
    />
  );
}

export default GoogleApiWrapper({
  apiKey: key
})(MapContainer);