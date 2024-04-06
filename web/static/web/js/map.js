document.addEventListener('DOMContentLoaded', function () {
    var map = L.map('map').setView([20.5937, 78.9629], 2); // Set the initial view

    // Add a base map layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    // Define your predefined countries and their coordinates
    var countries = {
        'India': [20.5937, 78.9629],
        'Singapore': [1.3521, 103.8198],
        'Brunei': [4.5353, 114.7277],
        'France': [46.603354, 1.888334],
        'UnitedKingdom': [55.3781, -3.4360],
        'UnitedStates': [37.0902, -95.7129],
        'Switzerland': [46.8182, 8.2275],
        'Australia': [-25.2744, 133.7751],
        'HongKong': [22.3193, 114.1694],
        'Canada': [56.1304, -106.3468],
        'Qatar': [25.3548, 51.1839]
    };
    

    // Loop through the countries and add markers
    for (var country in countries) {
        var coordinates = countries[country];
        L.circleMarker(coordinates, { color: 'purple', radius: 10 }).addTo(map);
    }
});

