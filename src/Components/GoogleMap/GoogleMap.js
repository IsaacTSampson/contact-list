import { GOOGLE_KEY } from '../../_misc/constants';
import { Marker } from './Marker';

import GoogleMapReact from 'google-map-react';






const GoogleMap = props => {
    const lat = props.lat;
    const lng = props.lng;
    const size = props.size;

    const markerProps = {
        userLetter: props.userLetter,
        markerColour: props.markerColour
    }






    return(
        <div style={{ height: size, width: size}}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: GOOGLE_KEY}}
          defaultCenter={{lat: lat, lng: lng}}
          fullscreenControl={false}
          defaultZoom={11}
          options={{fullscreenControl: false}}
        >
            <Marker
                lat={lat}
                lng={lng}
                props={markerProps}
            />
        </GoogleMapReact>
      </div>
    );
}

export default GoogleMap;