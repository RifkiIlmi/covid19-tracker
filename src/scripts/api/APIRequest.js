import {
    baseUrl,
    detailDataGlobal,
    detailDataId,
    totalDataId
} from '../../constanta.js';
import Axios from 'axios';
import { renderGlobalLists, renderIndoLists, addLatestUpWo, addLatestUpI, itemListW, itemListId, showSpinner } from "../action/action.js";

const baseCountries = Axios.get(`${baseUrl}/countries`)
const baseProvinsi = Axios.get(`${totalDataId}/provinsi`)

const baseOne = Axios.get(`${baseUrl}`)
const baseTwo = Axios.get(`${totalDataId}`)

// const worldData = Axios.get(detailDataGlobal)
// const idData = Axios.get(detailDataId)

export const affectedCovid = async () => {
    Axios
    .all([baseCountries,baseProvinsi])
    .then(
        Axios.spread((...responses) => {
            const responseOne = responses[0];
            const responseTwo = responses[1];

            // use/access the results
            // console.log(responseOne, responseTwo);
            renderGlobalLists({value:responseOne.data.countries.length},'Affected Countries','#4E7BFB')
            renderIndoLists({value:responseTwo.data.data.length},'Provinsi Terkena','#4E7BFB')
        })
    )
    .catch(error => {
        console.log(error)
    })
}

export const confirmedCovid = async () => {
    Axios
    .all([baseOne,baseTwo])
    .then(
        Axios.spread((...responses) => {
            const responseOne = responses[0];
            const responseTwo = responses[1];

            // use/access the results
            // console.log(responseTwo.data.jumlahKasus);
            renderGlobalLists(responseOne.data.confirmed,'WorldWide Confirmed','#F8BD46')
            renderIndoLists({value:responseTwo.data.jumlahKasus},'Terkonfirmasi','#F8BD46')
        })
    )
    .catch(error => {
        console.log(error)
    })
}

export const recoveredCovid = async () => {
    Axios
    .all([baseOne,baseTwo])
    .then(
        Axios.spread((...responses) => {
            const responseOne = responses[0];
            const responseTwo = responses[1];

            // use/access the results
            // console.log(responseOne,responseTwo);
            renderGlobalLists(responseOne.data.recovered,'WorldWide Recovered','#65B96E')
            renderIndoLists({value:responseTwo.data.sembuh},'Sembuh','#65B96E')
        })
    )
    .catch(error => {
        console.log(error)
    })
}

export const deathsCovid = async () => {
    Axios
    .all([baseOne,baseTwo])
    .then(
        Axios.spread((...responses) => {
            const responseOne = responses[0];
            const responseTwo = responses[1];

            // use/access the results
            // console.log(responseOne,responseTwo);
            renderGlobalLists(responseOne.data.deaths,'WorldWide Deaths','#EA4E62')
            renderIndoLists({value:responseTwo.data.meninggal},'Meninggal','#EA4E62')
        })
    )
    .catch(error => {
        console.log(error)
    })
}

export const latestUpdateWorld = () => {
    Axios.get(`${baseUrl}`)
    .then(response => {
        // console.log(response.data.lastUpdate)
        addLatestUpWo(response.data.lastUpdate)
    })
    .catch(error => {
        console.log(error)
    })
}

export const latestUpdateI = () => {
    Axios.get(`${baseUrl}`)
    .then(response => {
        // console.log(response.data.lastUpdate)
        addLatestUpI(response.data.lastUpdate)
    })
    .catch(error => {
        console.log(error)
    })
}

export const dataListsW = async () => {
    showSpinner(true)
    Axios.get(detailDataGlobal)
    .then(responses => {
            // use/access the results
            // console.log(responseTwo.data);
            itemListW(responses.data)
            showSpinner(false)
        })
    .catch(error => {
        console.log(error)
    })
}

export const dataListsI = async () => {
    showSpinner(true)
    Axios.get(detailDataId)
    .then(responses => {
            itemListId(responses.data.data)
            showSpinner(false)
        })
    .catch(error => {
        console.log(error)
    })
}
