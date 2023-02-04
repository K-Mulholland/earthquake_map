console.log("part 1 initiated"); 

// // Create the tile layer that will be the background of our map.
// var streetmap = L.tileLayer(
//     "https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png'",
//     {
//       attribution:
//         'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
//     });

// // Create the map with our layers.
// var map = L.map("map", {
//     center: [40.73, -94.0059],
//     zoom: 3,
//     layers: [streetmap]
//   });
  
// let baseMaps={
//     "Street Map": streetmap
// };

// let earthquakes = new L.LayerGroup();

// let overLays={
//   "Earthquakes": earthquakes
// }
//   // Add our "streetmap" tile layer to the map.
// L.control.layers(baseMaps, overLays).addTo(map);

// Creating our initial map object:
// We set the longitude, latitude, and starting zoom level.
// This gets inserted into the div with an id of "map".
var myMap = L.map("map", {
  center: [45.52, -122.67],
  zoom: 13
});

// Adding a tile layer (the background map image) to our map:
// We use the addTo() method to add objects to our map.
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

