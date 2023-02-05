// function createMap(earthquakes) {

// Create the tile layer that will be the background of our map.
var streetmap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});


// Create a baseMaps object to hold the streetmap layer.
var baseMaps = {
  "Street Map": streetmap,

};
let earthquakes =new L.LayerGroup();

let tectonic_plates =new L.LayerGroup();

// Create an overlayMaps object to hold the earthquakes layer.
var overlayMaps = {
  "Earthquakes": earthquakes,
  "Tectonic Plates": tectonic_plates
};

// Create the map object with options.
var map = L.map("map-id", {
  center: [40.73, -74.0059],
  zoom: 3,
  layers: [streetmap, earthquakes]
});

// Create a layer control, and pass it baseMaps and overlayMaps. Add the layer control to the map.
L.control.layers(baseMaps, overlayMaps, {
  collapsed: false
}).addTo(map);
// }

// function createMarkers(response) {

//   // Pull the "stations" property from response.data.
//   var stations = response.data.stations;

//   // Initialize an array to hold bike markers.
//   var bikeMarkers = [];

//   // Loop through the stations array.
//   for (var index = 0; index < stations.length; index++) {
//     var station = stations[index];

//     // For each station, create a marker, and bind a popup with the station's name.
//     var bikeMarker = L.marker([station.lat, station.lon])
//       .bindPopup("<h3>" + station.name + "<h3><h3>Capacity: " + station.capacity + "</h3>");

//     // Add the marker to the bikeMarkers array.
//     bikeMarkers.push(bikeMarker);
//   }

//   // Create a layer group that's made from the bike markers array, and pass it to the createMap function.
//   createMap(L.layerGroup(bikeMarkers));
// }


// Perform an API call to the Citi Bike API to get the station information. Call createMarkers when it completes.
d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson").then(function(data){

//function for style
function style(feature){
  return {
    fillColor: color(feature.properties.mag),
    radius: radius(feature.properties.mag)
  };
}

//function for color
function color(depth){
  if (depth>90){
    return "red";
  }
  if (depth>70){
    return "re";
  }  if (depth>50){
    return "re";
  }  if (depth>30){
    return "re";
  }  if (depth>10){
    return "";
  }
  return "#98ee00";
}
// function for radius
function radius(magnitude){
  if (magnitude===0){
    return 1;
  }
  return magnitude * 4;
}

//geoJson layer that pulls all of the functions in
L.geoJson(data,{
  pointToLayer:function(feature,latlng){
    //console.log(data);

    return L.circleMarker(latlng);
    
  },
  style: style,
  onEachFeature: function(feature, layer) {
		layer.bindPopup("Magnitude: "+feature.properties.mag+
    "<br>Depth: "+
    feature.geometry.coordinates[2]+
    "<br>Location; "+feature.properties.place);
    //add time above by looking at cosole.log properties
	},
}).addTo(earthquakes);
earthquakes.addTo(map);

});

// Legend
var legend = L.control({position: 'bottomright'});

legend.onAdd = function (map) {

    var div = L.DomUtil.create('div', 'info legend'),
        grades = [-10, 10, 30, 50, 70, 90],
        labels = ["#98ee00","#98ee00","#98ee00","#98ee00","#98ee00","#98ee00"];

    // loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
            '<i style="background:' + labels[i] + '"></i> ' +
            grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
    }

    return div;
};

legend.addTo(map);

d3.json("https://raw.githubusercontent.com/fraxen/tectonicplates/master/GeoJSON/PB2002_boundaries.json").then(function(data){
  L.geoJson(data, {
    color: "red"
  }).addTo(tectonic_plates);
  tectonic_plates.addTo(map);
});