/* Planned orbital missions */

const url = "https://api.spacexdata.com/v4/launches/upcoming";
const issProperties = document.querySelector(".results");

async function getPlannedOrbitalMissions() {
    try {
            const response = await fetch(url);
            const results = await response.json();
            console.log(results);
            issProperties.innerHTML = "";
        for (let i = 0; i < results.length; i++) {
            let details = results[i].details;
            if(details  == null) {
                details = "More details coming later!";
            }
            issProperties.innerHTML +=
                `<div class="result">
                <h2>Name: ${results[i].name}</h2>
                <p>Date: ${results[i].date_utc}<p> 
                <p>Details: ${details}<p>
                </div>`;
        }
    } catch (error) {
        issProperties.innerHTML = displayError("An error occured! " + error);
    }
}

getPlannedOrbitalMissions();

/* Images */
function showImage() {
	const cardimg = document.querySelector(".cardimg");
	const images = cardimg.querySelectorAll("img");
	for (img of images) {
		img.style.display = "none";
	}
	let numResults = images.length;
	let index = Math.floor(Math.random() * numResults);
	images[index].style.display = "inline";
}
showImage();
setInterval(showImage, 3000);

