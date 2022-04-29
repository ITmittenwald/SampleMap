/*  Beispiel */

let innsbruck = {
    lat: 47.267222,
    lng: 11.392778,
    title: "Innsbruck"
};

let startLayer = L.tileLayer.provider("OpenStreetMap.HOT");

let map = L.map("map", {
    center: [innsbruck.lat, innsbruck.lng],
    zoom: 12,
    layers: [
        startLayer
    ]

})

let layerControl = L.control.layers({
    "OSM": startLayer,
    "OpenTopoMap": L.tileLayer.provider("OpenTopoMap"),
    "Stadia Outdoors": L.tileLayer.provider("Stadia.Outdoors"),
    "Stamen Watercolor": L.tileLayer.provider("Stamen.Watercolor"),
    "Stamen Terrain": L.tileLayer.provider("Stamen.Terrain"),
    "Stamen schwarzweiß": L.tileLayer.provider("Stamen.TonerLite"),
    "Thunderforest SpinalMap": L.tileLayer.provider("Thunderforest.SpinalMap"),


}).addTo(map);

// Geolocation

L.geolet({
    position: 'topleft'
}).addTo(map);

//Routing Machine
L.Routing.control({
    waypoints: [
        L.latLng(47.267222, 11.392778),
        L.latLng(48.13747942571567, 11.607989447952551)
    ]
}).addTo(map);

//alt. Basemaps
//"NASA Earth at Night": L.tileLayer.provider("NASAGIBS.ViirsEarthAtNight2012"),
//"NASA Terra": L.tileLayer.provider("NASAGIBS.ModisTerraTrueColorCR"),
//"NASA Terrabands": L.tileLayer.provider("NASAGIBS.ModisTerraBands367CR"),
//"Esri WorldImagery": L.tileLayer.provider("Esri.WorldImagery"),
//"Mtb Map": L.tileLayer.provider("MtbMap"),
//        "Stamen Terrain": L.tileLayer.provider("Stamen.Terrain"),
//"Stamen schwarzweiß": L.tileLayer.provider("Stamen.TonerLite"),
// "Thunderforest SpinalMap": L.tileLayer.provider("Thunderforest.SpinalMap"),

layerControl.expand()

let sightLayer = L.featureGroup();
layerControl.addOverlay(sightLayer, "Standort");

let mrk = L.marker([innsbruck.lat, innsbruck.lng]).addTo(sightLayer);

sightLayer.addTo(map);

// Maßstab hinzufügen
L.control.scale({
    imperial: false
}).addTo(map);

L.control.fullscreen().addTo(map);

// miniMap
let miniMap = new L.Control.MiniMap(
    L.tileLayer.provider("OpenStreetMap.HOT")
).addTo(map);

// Rainviewer
L.control.rainviewer({
    position: 'bottomleft',
    nextButtonText: '>',
    playStopButtonText: 'Play/Stop',
    prevButtonText: '<',
    positionSliderLabelText: "Hour:",
    opacitySliderLabelText: "Opacity:",
    animationInterval: 500,
    opacity: 0.5
}).addTo(map);

// Print
L.control.BigImage({
    position: 'topleft'
}).addTo(map);

//Credits
L.controlCredits({
    position: 'topleft',
    image: "icons/logo.png",
    link: "http://www.robertsussbauer.com/",
    text: ""
}).addTo(map);



L.leafletControlRoutingtoaddress({
    router: 'osrm',
    token: '',
    placeholder: 'Please insert your address here.',
    errormessage: 'Address not valid.',
    distance: 'Entfernung:',
    duration: 'Fahrzeit',
    target: 'Koblenz, Rheinland-Pfalz, Deutschland',
    requesterror: '"Too Many Requests" or "Not Authorized - Invalid Token"'

}).addTo(map);


//ember
// ember-cli-build.js
let app = new EmberApp(defaults, {
    // Add options here
    fingerprint: {
        exclude: [
            'images/layers-2x.png',
            'images/layers.png',
            'images/marker-icon-2x.png',
            'images/marker-icon.png',
            'images/marker-shadow.png'
        ]
    }
});
