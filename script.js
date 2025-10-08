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