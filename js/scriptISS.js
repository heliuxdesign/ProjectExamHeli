/* ISS current location */
var issLocationMap = L.map('issMap').setView([0, 0], 2);

var myIcon = L.icon({
    iconUrl: 'images/iss.png', 
    iconSize: [40, 25],
    iconAnchor: [20, 13],
});

const markerISS = L.marker([0, 0], {icon: myIcon}).addTo(issLocationMap);

const attribution = 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
const tile_url = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
const tiles = L.tileLayer(tile_url, { attribution });
tiles.addTo(issLocationMap);

const ISSError = document.getElementById("ISSp");

const url = "http://api.open-notify.org/iss-now.json";

let interval = null;

async function getISSCurrentLocation() {
    try {
        const response = await fetch(url);

        const resultsISS = await response.json();

        markerISS.setLatLng([resultsISS.iss_position.latitude, resultsISS.iss_position.longitude]);
        issLocationMap.setView([resultsISS.iss_position.latitude, resultsISS.iss_position.longitude], 2);

        document.getElementById("lat").textContent = resultsISS.iss_position.latitude;
        document.getElementById("long").textContent = resultsISS.iss_position.longitude;
    } catch (error) {
        ISSError.innerHTML = displayError("An error occured! " + error);
        clearInterval(interval);
    }    
}

getISSCurrentLocation();

interval = setInterval(getISSCurrentLocation, 3000);

