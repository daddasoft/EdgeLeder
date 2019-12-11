function initMap() {
    // Your location
    var loc = {
        lat: 42.361145,
        lng: -71.057083
    };
    // Centered map on location
    var map = new google.maps.Map(document.querySelector('.map'), {
        zoom: 14,
        center: loc
    });
    // The marker, positioned at location
    var marker = new google.maps.Marker({
        position: loc,
        map: map
    });
}