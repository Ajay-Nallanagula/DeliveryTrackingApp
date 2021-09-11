import React from 'react';
import GoogleMapReact from 'google-map-react';
//import Marker from './Marker'
import { renderPolylines, retrieveQueryString } from './Macathon.utils'
import { markers } from './const/la_center'

const MacathonLoc = (props) => {
    const address = retrieveQueryString(window.location.hash)
    return (
        <div>
            <GoogleMapReact
                bootstrapURLKeys={{
                    key: "AIzaSyBTgqg6opbfQkEAH5r3mWut4yPYSblSCBk",
                    language: 'en'
                }}
                defaultCenter={props.center}
                defaultZoom={props.zoom}
                yesIWantToUseGoogleMapApiInternals
                style={{ width: "100%", height: "500" }}
                onGoogleApiLoaded={({ map, maps }) => renderPolylines(map, maps, { ...props, address })}
            >

            </GoogleMapReact>

            {/* Use as a child of GoogleMapReact
                //In case if you need customized marker we can explore this code 
                {props.markers?.map((cordinate) => <Marker {...cordinate} />)} 
                */}
        </div>
    )
};

MacathonLoc.defaultProps = {
    center: { lat: 17.385044, lng: 78.486671 },
    zoom: 7,
    markers: markers
}

export default MacathonLoc;