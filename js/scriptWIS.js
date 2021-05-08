/* Who`s in space */

const url = "http://api.open-notify.org/astros.json";

const resultsContainer = document.querySelector(".results");
const peopleCountContainer = document.querySelector(".countPeople");

async function getPeopleInSpace() {
    try {
        const response = await fetch(url);
        const results = await response.json();

        const facts = results.people;
        resultsContainer.innerHTML = "";
        const num_people = facts.length;
        peopleCountContainer.innerHTML += `<h2>Number of people in space: ${num_people}<h2>`
        for(let i = 0; i <facts.length; i++) {
            resultsContainer.innerHTML += 
            `<div class="result">`+
            `   <p>Name: ${facts[i].name}</p>`+
            `   <p>Craft: ${facts[i].craft}</p>`+
            `</div>`;
        } 
    } catch (error) {
        resultsContainer.innerHTML = displayError("An error occured! " + error);
    }
}

getPeopleInSpace();

/* Images*/
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




