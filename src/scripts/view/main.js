import {
    affectedCovid,
    confirmedCovid,
    deathsCovid,
    recoveredCovid,
    latestUpdateWorld,
    latestUpdateI,
    dataListsI,
    dataListsW
} from "../api/APIRequest.js";

function main() {
    document.addEventListener("DOMContentLoaded", () => {
        affectedCovid()
        confirmedCovid()
        recoveredCovid()
        deathsCovid()
        latestUpdateWorld()
        latestUpdateI()
        dataListsW()
        dataListsI()
    });
}

export default main;