let map;
let markers = [];

function showMap() {
    const placeType = document.getElementById('placeType').value;
    if (placeType) {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                const lat = position.coords.latitude;
                const lng = position.coords.longitude;
                map = new google.maps.Map(document.getElementById('map'), {
                    center: { lat, lng },
                    zoom: 15
                });

                const request = {
                    location: { lat, lng },
                    radius: '5000',
                    type: [placeType]
                };

                const service = new google.maps.places.PlacesService(map);
                service.nearbySearch(request, (results, status) => {
                    if (status === google.maps.places.PlacesServiceStatus.OK) {
                        results.forEach(place => {
                            new google.maps.Marker({
                                position: place.geometry.location,
                                map: map,
                                title: place.name
                            });
                        });
                    }
                });

                // Adiciona um evento de clique no mapa para adicionar marcadores
                map.addListener('click', (event) => {
                    addMarker(event.latLng);
                });
            });
        } else {
            alert('Geolocalização não é suportada pelo seu navegador.');
        }
    }
}

function addMarker(location) {
    const marker = new google.maps.Marker({
        position: location,
        map: map
    });
    markers.push(marker);
}
