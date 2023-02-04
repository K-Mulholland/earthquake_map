// Step 1: Get dataset

    //visit: http://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php

    //When you click a dataset (such as "All Earthquakes from the Past 7 Days"), you will be given a JSON representation of that data. Use the URL of this JSON to pull in the data for the visualization. 
// ----------------------------------------------------------------------------

// Create the tile layer that will be the background of our map.
// var streetmap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//   attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
// });


// // Create a baseMaps object to hold the streetmap layer.
// var baseMaps = {
// "Street Map": streetmap
// };
// // var earthquakes = new L.LayerGroup();
// // // Create an overlayMaps object to hold the Earthquakes layer.
// // var overlayMaps = {
// // "Earthquakes": earthquakes
// // };

// // Create the map object with options.
// var map = L.map("map", {
// center: [40.73, -74.0059],
// zoom: 3,
// layers: [streetmap]
// });

// Create a layer control, and pass it baseMaps and overlayMaps. Add the layer control to the map.
// 

const map = L.map('map', {
  center: [40.5912574, -40.8506107],
  zoom: 2.5,
});

// Add a tile layer.

const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

// Store API endpoint as queryURL
var queryURL = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson"

// // Perform a GET request to the query URL
// d3.json(queryURL).then(function (data) {
//     // once we get a response, send the data.features object to the createFeatures function
//     createFeatures (data.features);
// });

// function createFeatures (earthquakeData) {

// // Define a function that we want to run once for each feature in the features array

// // Give each feature a popup that describes the place and time of the earthquake
//   function onEachFeature(feature, layer) {
//     layer.bindPopup(`<h3>${feature.properties.place}</h3><hr><p>${new Date(feature.properties.time)}</p>`);
//   }

// // Create a GeoJSON layer that contains the features array on the earthquakeData object
// // Run the onEachFeature function once for each piece of data in the array
//   var earthquakes = L.geoJSON(earthquakeData, {
//     onEachFeature: onEachFeature
//   });

// // Send our earthquakes layer to the createMap function/
//   createMap(earthquakes);
// }

// function createMap(earthquakes) {


// // ----------------------------------------------------------------------
// // Step 2: Import and visualize the data by doing the following:

//     //Using Leaflet, create a map that plots all the earthquakes from your dataset based on their longitude and latitude.

//     //Your data markers should reflect the magnitude of the earthquake by their size and the depth of the earthquake by color. Earthquakes with higher magnitudes should appear larger, and earthquakes with greater depth should appear darker in color.

//     // Hint: The depth of the earth can be found as the third coordinate for each earthquake.

//     //Include popups that provide additional information about the earthquake when its associated marker is clicked.

//     //Create a legend that will provide context for your map data.
// // -----------------------------------------------------------------------

//   // Create the base layers.
//   var street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//   })

//   var topo = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
//     attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
//   });

// // Create a baseMaps object
//   var baseMaps = {
//     "Street Map": street,
//     "Topographic Map": topo
//   };

// // Create an overlay object to hold our overlay
//   var overlayMaps = {
//     Earthquakes: earthquakes
//   };

// // Create our map, giving it the streetmap and earthquakes layers to display on load
//   var myMap = L.map("map", {
//     center: [
//       37.09, -95.71
//     ],
//     zoom: 5,
//     layers: [street, earthquakes]
//   });

// // Create a layer control
// // Pass it our baseMaps and overlayMaps
// // Add the layer control to the map
//   L.control.layers(baseMaps, overlayMaps, {
//     collapsed: false
//   }).addTo(myMap);

// }
