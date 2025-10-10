// ISS (Space Station) Location
async function issLocation() {
    const issLocationUrl = "http://api.open-notify.org/iss-now.json";
    try {
        const issLocationResponse = await fetch(issLocationUrl);
        if (!issLocationResponse.ok) {
            throw new Error("Sorry. We can't locate the ISS.")
        }
        const issLocationData = await issLocationResponse.json();
        console.log(issLocationData);
        return issLocationData;
    } catch (error) {
        console.error("An error has occurred: ", error);
    }
}

issLocation();

// Astronauts currently in space
async function peopleInSpace() {
    const peopleInSpaceUrl = "http://api.open-notify.org/astros.json";
    try {
        const peopleInSpaceResponse = await fetch(peopleInSpaceUrl);
        if (!peopleInSpaceResponse.ok) {
            throw new Error("Sorry. We can't locate the Astronauts.");
        }
        const peopleInSpaceData = await peopleInSpaceResponse.json();
        console.log(peopleInSpaceData);
        return peopleInSpaceData;
    } catch (error) {
        console.error("An error has occurred: ", error);
    }
}

peopleInSpace();

//Moon Phases - coming soon
// DATE AND TIME
const timestamp = Math.floor(Date.now() / 1000);
const currentDate = new Date().toJSON().slice(0, 10);
const midpointOfEastCoastCoords = "36.5,-76.0";
const moonEmojiMap = {

    "New Moon": "🌑",
    "Waxing Crescent": "🌒",
    "First Quarter": "🌓",
    "Waxing Gibbous": "🌔",
    "Full Moon": "🌕",
    "Waning Gibbous": "🌖",
    "Last Quarter": "🌗",
    "Waning Crescent": "🌘"
};

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
        const currentPhase = data.properties.data.curphase;
        const illumination = data.properties.data.fracillum;
        const emoji = moonEmojiMap[currentPhase] || "🌙";

    } catch (error) {
        console.error("An error has occurred: ", error);
    }
}

moonPhases();


