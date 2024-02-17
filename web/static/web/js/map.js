document.addEventListener('DOMContentLoaded', function () {
    var map = L.map('map').setView([0, 0], 2); // Set the initial view

    // Add a base map layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    // Define your predefined countries and their coordinates
    var countries = {
        'India': [20.5937, 78.9629],
        'Country2': [latitude2, longitude2],
        // Add more countries as needed
    };

    // Loop through the countries and add markers
    for (var country in countries) {
        var coordinates = countries[country];
        L.circleMarker(coordinates, { color: 'purple', radius: 8 }).addTo(map);
    }
});
