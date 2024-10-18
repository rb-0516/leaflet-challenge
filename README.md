# Earthquake Visualization Map

## Description
This project is an interactive web-based visualization of global earthquake data. It uses Leaflet.js to create a map that displays earthquake locations, magnitudes, and depths from the past week. The data is sourced from the USGS Earthquake Hazards Program.

## Features
- Interactive map showing earthquake locations
- Circular markers representing earthquakes, with size indicating magnitude and color indicating depth
- Pop-up information for each earthquake showing exact location, magnitude, and depth
- Color-coded legend explaining the depth ranges
- Layer control to toggle the earthquake data on/off

## Technologies Used
- HTML/CSS
- JavaScript
- Leaflet.js for mapping
- D3.js for data loading

## Installation
1. Clone this repository: https://github.com/rb-0516/leaflet-challenge.git
2. Navigate to the project directory: cd leaflet-challenge
3. Open `index.html` in a web browser.

## Usage
- Pan and zoom the map to explore different regions
- Click on any earthquake marker to view detailed information
- Use the layer control in the top-right corner to toggle the earthquake data
- Refer to the legend in the bottom-right corner for depth information

## Data Source
This visualization uses real-time earthquake data from the USGS Earthquake Hazards Program. The data is updated every 5 minutes and includes all earthquakes of magnitude 4.5 or greater from the past week.

## Preview
![image](https://github.com/user-attachments/assets/f5c4d855-3cbe-48c4-8a2c-623f8b57a608)

## Future Improvements
- Add time-based filtering of earthquake data
- Implement clustering for better performance with large datasets
- Add additional data layers (e.g., tectonic plates)

## Contributing
Contributions to this project are welcome. Please fork the repository and submit a pull request with your changes.

## Acknowledgments
- Edx Bootcamps/Columbia College of Engineering
- USGS for providing the earthquake data
- Leaflet.js and OpenStreetMap contributors 
