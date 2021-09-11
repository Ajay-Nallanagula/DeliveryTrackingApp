const animateCircle = (line) => {
    let count = 0;
    window.setInterval(() => {
        count = (count + 1) % 200;
        const icons = line.get("icons");
        icons[0].offset = count / 2 + "%";
        line.set("icons", icons);
    }, 800);
}

const markersList = (maps, map, props) => {
    const contentString = `<div><h3>Additional,Helpful Info about place </h3><strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, assumenda?</strong></div>`
    const infowindow = new maps.InfoWindow({
        content: contentString,
    });
    const markersArr = props.markers?.map((cordinate) => {
        const marker = new maps.Marker({
            position: { lat: cordinate.lat, lng: cordinate.lng },
            map,
            title: cordinate.text
        })

        marker.addListener("click", () => {
            infowindow.open({
                anchor: marker,
                map,
                shouldFocus: false,
            });
        });

        return marker
    })
    return markersArr
}

const fitBounds = (map, maps, props) => {
    let bounds = new maps.LatLngBounds()
    for (let marker of props.markers) {
        bounds.extend(
            new maps.LatLng(marker.lat, marker.lng)
        )
    }
    map.fitBounds(bounds)
    return markersList(maps, map, props)
}

const geodesicPolylineSetMap = (maps, map, props, lineSymbol) => {
    let geodesicPolyline = new maps.Polyline({
        path: props.markers,
        geodesic: true,
        strokeColor: '#00a1e1',
        strokeOpacity: 1.0,
        strokeWeight: 4,
        icons: [
            {
                icon: lineSymbol,
                offset: "100%",
            },
        ]
    })

    geodesicPolyline.setMap(map)
    animateCircle(geodesicPolyline);
    fitBounds(map, maps, props)
}

const nonGeodesicPolylineSetMap = (maps, map, props, lineSymbol) => {
    /** Example of rendering non geodesic polyline (straight line) */
    let nonGeodesicPolyline = new maps.Polyline({
        path: props.markers,
        geodesic: false,
        strokeColor: '#e4e4e4',
        strokeOpacity: 0.7,
        strokeWeight: 3,
        icons: [
            {
                icon: lineSymbol,
                offset: "100%",
            },
        ]
    })
    nonGeodesicPolyline.setMap(map)
    animateCircle(nonGeodesicPolyline);
}

const formatAddressesPlotMap = (maps, map, lineSymbol, props) => {
    const addrArr = Object.values(props.address)
    const markers = []
    for (let i = 0; i < addrArr.length; i++) {
        const geocoder = new maps.Geocoder()
        const address = addrArr[i];
        geocoder.geocode({ address }, function (results, status) {
            if (status === 'OK') {
                const marker = {
                    key: i,
                    text: address,
                    lat: results[0].geometry.location.lat(),
                    lng: results[0].geometry.location.lng()
                }
                markers.push(marker)
                if (markers.length === addrArr.length) {
                    return geodesicPolylineSetMap(maps, map, { ...props, markers }, lineSymbol)
                }
            } else {
                alert('Geocode was not successful for the following reason: ' + status);
            }
        })
    }
}

export const renderPolylines = (map, maps, props) => {
    const lineSymbol = {
        path: maps.SymbolPath.CIRCLE,
        scale: 6,
        strokeColor: "#FF0000",
    };
    const results = formatAddressesPlotMap(maps, map, lineSymbol, props)
    return results
}

export const retrieveQueryString = (qryStr) => {
    const hashSubstr = qryStr.substr(1)
    const addrJson = decodeURIComponent(hashSubstr.split('?')[1])
    return JSON.parse(addrJson)
}