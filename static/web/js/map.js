document.addEventListener('DOMContentLoaded', function () {
    var map = L.map('map').setView([20, 0], 2); // Set the initial view

    // Add a base map layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    // Define your predefined countries and their coordinates
    var countries = {
        'India': [20.5937, 78.9629],
        'Singapore': [1.3521, 103.8198],
        // Add more countries as needed
    };

    // Loop through the countries and add markers
    for (var country in countries) {
        var coordinates = countries[country];
        L.circleMarker(coordinates, { color: 'purple', radius: 8 }).addTo(map);
    }

    // Load GeoJSON data for country borders
    fetch('/static/web/data/map.geojson')
        .then(response => response.json())
        .then(data => {
            // Add GeoJSON layer and style countries
            L.geoJSON(data, {
                style: {
                    fillColor: 'purple', // Fill color for countries
                    fillOpacity: 0.5,    // Opacity of fill color
                    color: 'black',      // Border color
                    weight: 1            // Border weight
                }
            }).addTo(map);
        });
});
