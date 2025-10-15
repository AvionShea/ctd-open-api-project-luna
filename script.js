const issElement = document.getElementById("iss");
const moonPhaseElement = document.getElementById("moon");
const issBtn = document.getElementById("iss-crew-btn");
const moonBtn = document.getElementById("moon-phases-btn");

//Only shows ISS/Astronauts on Page load
window.onload = function () {
    moonPhaseElement.classList.add("hidden");
    issBtn.classList.add("active");
    issLocation();
    peopleInSpace();
};

const issPositionCard = document.getElementById("iss-position");
const peopleInSpaceCard = document.getElementById("space-people");
const moonPhaseCard = document.getElementById("moon-data");



// API CALLS

// ISS (Space Station) Location
async function issLocation() {
    const issLocationUrl = "https://corsproxy.io/?http://api.open-notify.org/iss-now.json";
    try {
        const issLocationResponse = await fetch(issLocationUrl);
        if (!issLocationResponse.ok) {
            throw new Error("Sorry. We can't locate the ISS.")
        }
        const issLocationData = await issLocationResponse.json();
        //console.log(issLocationData);
        //return issLocationData;
        //console.log(issLocationData.iss_position.latitude);
        //console.log(issLocationData.iss_position.longitude);
        let issLatitude = issLocationData.iss_position.latitude;
        let issLongitude = issLocationData.iss_position.longitude;

        let formattedLat;
        let formattedLon;

        if (issLatitude > 0) {
            formattedLat = `${issLatitude}°N`;
            //console.log(`${issLatitude}°N`);
        } else {
            formattedLat = `${Math.abs(issLatitude)}°S`;
            //console.log(`${issLatitude}°S`);
        }

        if (issLongitude > 0) {
            formattedLon = `${issLongitude}°E`;
            //console.log(`${issLongitude}°E`);
        } else {
            formattedLon = `${Math.abs(issLongitude)}°W`;
            //console.log(`${issLongitude}°W`);
        }

        issPositionCard.innerHTML = `
    <div class="label">🛰️ ISS POSITION</div>
    <div class="coordinates">${formattedLat}</div>
    <div class="coordinates">${formattedLon}</div>
    <div class="label">Orbiting Earth</div>
`;

    } catch (error) {
        console.error("An error has occurred: ", error);
        issPositionCard.innerHTML = `
    <div class="label">An error has occurred. Unable to fetch data.</div>
`;
    }
}



// Astronauts currently in space
async function peopleInSpace() {
    const peopleInSpaceUrl = "https://corsproxy.io/?http://api.open-notify.org/astros.json";
    try {
        const peopleInSpaceResponse = await fetch(peopleInSpaceUrl);
        if (!peopleInSpaceResponse.ok) {
            throw new Error("Sorry. We can't locate the Astronauts.");
        }
        const peopleInSpaceData = await peopleInSpaceResponse.json();
        //console.log(peopleInSpaceData);
        //return peopleInSpaceData;

        const numOfPeopleInSpace = peopleInSpaceData.number;
        //console.log(numOfPeopleInSpace);

        const namesOfPeopleInSpace = peopleInSpaceData.people;
        //console.log(namesOfPeopleInSpace);

        //Creating List of Names
        let astronautListHtml = "";

        namesOfPeopleInSpace.forEach((person) => {
            astronautListHtml += `<li>${person.name} - 🚀${person.craft}</li>`;
        })

        peopleInSpaceCard.innerHTML = `
    <div class="label">👨‍🚀 PEOPLE IN SPACE</div>
    <div class="astronaut-count">${numOfPeopleInSpace} astronauts in space!</div>
    <ul class="astronaut-list">${astronautListHtml}</ul>
`;
    } catch (error) {
        console.error("An error has occurred: ", error);
        peopleInSpaceCard.innerHTML = `
    <div class="label">An error has occurred. Unable to fetch data.</div>
`;
    }
}

//peopleInSpace();

//Moon Phases
// DATE AND TIME
const timestamp = Math.floor(Date.now() / 1000);
const currentDate = new Date().toJSON().slice(0, 10);
const midpointOfEastCoastCoords = "36.5,-76.0";
/*const moonEmojiMap = {

    "New Moon": "🌑",
    "Waxing Crescent": "🌒",
    "First Quarter": "🌓",
    "Waxing Gibbous": "🌔",
    "Full Moon": "🌕",
    "Waning Gibbous": "🌖",
    "Last Quarter": "🌗",
    "Waning Crescent": "🌘"
};*/

async function moonPhases() {
    const moonPhasesUrl = `https://aa.usno.navy.mil/api/rstt/oneday?date=${currentDate}&coords=${midpointOfEastCoastCoords}`;
    try {
        const moonPhasesResponse = await fetch(moonPhasesUrl);
        if (!moonPhasesResponse.ok) {
            throw new Error("Sorry. We couldn't locate the moon.");
        }
        const moonPhasesData = await moonPhasesResponse.json();
        console.log(moonPhasesData);
        return moonPhasesData;
        // const currentPhase = data.properties.data.curphase;
        // const illumination = data.properties.data.fracillum;
        // const emoji = moonEmojiMap[currentPhase] || "🌙";

    } catch (error) {
        console.error("An error has occurred: ", error);
    }
}

//moonPhases();

//Makes ISS Button and Section Visible/Active
issBtn.addEventListener("click", () => {
    issElement.classList.remove("hidden");
    moonPhaseElement.classList.add("hidden");
    moonBtn.classList.remove("active");

    issBtn.classList.add("active");

    issLocation();
    peopleInSpace();

});

//Makes Moon Phases Button and Section Visible/Active
moonBtn.addEventListener("click", () => {
    moonPhaseElement.classList.remove("hidden");
    issElement.classList.add("hidden");
    issBtn.classList.remove("active");

    moonBtn.classList.add("active");
    //moonPhases();
});

