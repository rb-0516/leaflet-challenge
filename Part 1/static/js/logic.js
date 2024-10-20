function createMap(earthquakes) {

  // Create the tile layer that will be the background of our map.
  let streetmap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

  // Create a baseMaps object to hold the streetmap layer.
  let baseMaps = {
    "Street Map": streetmap
};

  // Create an overlayMaps object to hold the b layer.
  let overlayMaps = {
    "Earthquakes": earthquakes
};
  
  // Create the map object with options.
  let map = L.map("map", {
        center: [0, 0],
        zoom: 3,
        layers: [streetmap, earthquakes]
});

// Create a layer control, and pass it baseMaps and overlayMaps. Add the layer control to the map.
      L.control.layers(baseMaps, overlayMaps, {
        collapsed: false
      }).addTo(map);

  // Add the legend to the map
  createLegend().addTo(map);
}

    function createMarkers(response) {
      let features = response.features;
      let quakeMarkers = [];
  
      for (let index = 0; index < features.length; index++) {
          let feature = features[index];
          let coordinates = feature.geometry.coordinates;
          let longitude = coordinates[0];
          let latitude = coordinates[1];
          let depth = coordinates[2];
          let magnitude = feature.properties.mag;
  
          let quakeMarker = L.circleMarker([latitude, longitude], {
              radius: magnitude * 3,
              fillColor: getColor(depth),
              color: "#000",
              weight: 1,
              opacity: 1,
              fillOpacity: 0.8
          }).bindPopup(`
              <h3>${feature.properties.place}</h3>
              <hr>
              <p>
                  Latitude: ${latitude.toFixed(4)}<br>
                  Longitude: ${longitude.toFixed(4)}<br>
                  Depth: ${depth} km<br>
                  Magnitude: ${magnitude}
              </p>
          `);
  
          quakeMarkers.push(quakeMarker);
      }
  
      createMap(L.layerGroup(quakeMarkers));
  }

//Color Depth
function getColor(depth) {
  return depth > 90 ? '#800026' :
         depth > 70 ? '#BD0026' :
         depth > 50 ? '#E31A1C' :
         depth > 30 ? '#FC4E2A' :
         depth > 10 ? '#FD8D3C' :
                      '#FFEDA0';
}
// Create Legend
function createLegend() {
  let legend = L.control({position: 'bottomright'});

  legend.onAdd = function (map) {
      let div = L.DomUtil.create('div', 'info legend'),
          depths = [-10, 10, 30, 50, 70, 90],
          labels = [];

      // loop through our density intervals and generate a label with a colored square for each interval
      for (let i = 0; i < depths.length; i++) {
          div.innerHTML +=
              '<i style="background:' + getColor(depths[i] + 1) + '"></i> ' +
              depths[i] + (depths[i + 1] ? '&ndash;' + depths[i + 1] + ' km<br>' : '+ km');
      }

      return div;
  };

  return legend;
}

// Perform an API call to the GeoJSON API to get the earthquake information. Call createMarkers when it completes.
d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson").then(createMarkers);
