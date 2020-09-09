import '../components/Card.js'
import $, { map } from "jquery";
import "datatables.net-bs4";
import "datatables.net-responsive-bs4"
import "datatables.net-buttons-bs4"
import "datatables.net-rowreorder-bs4"
import {separateNumber} from '../../helper/NumberFormatting.js'

const spinner = document.getElementById("spinner");

export const showSpinner = (status) =>{
    if (status == true) {
        spinner.className = "show";
    } else {
        spinner.className = spinner.className.replace("show", "");
    }

}


export const renderIndoLists = (data, title, color) => {
    const cardShowElement = document.createElement("card-show");
    const indoList = document.getElementById('indoList')
    cardShowElement.setAttribute('color',color)
    cardShowElement.data = data
    cardShowElement.title = title
    indoList.appendChild(cardShowElement);

};

export const renderGlobalLists = (data, title, color) => {
    const cardShowElement = document.createElement("card-show");
    const globalList = document.getElementById('globalList')
    cardShowElement.setAttribute('color',color)
    cardShowElement.data = data
    cardShowElement.title = title
    globalList.appendChild(cardShowElement);

}

export const addLatestUpWo = (time) => {
    let timeGMT = new Date(time).toString()
    const latestUpWo = document.getElementById('latestUpdateW')
    latestUpWo.innerHTML = `
        <p style="font-size:12px;">Last Update: <i>${timeGMT}</i></p>
    `
}

export const addLatestUpI = (time) => {
    let timeGMT = new Date(time).toString()
    const latestUpWo = document.getElementById('latestUpdateI')
    latestUpWo.innerHTML = `
        <p style="font-size:12px;">Last Update: <i>${timeGMT}</i></p>
    `
}

const dr = (death, confirm) => ((death/confirm)*100)
const rr = (cured, confirm) => ((cured/confirm)*100)
// dr(item.attributes.Death,item.attributes.Confirmed), rr(item.attributes.Recovered,item.attributes.Confirmed)
export const itemListW = (data) => {
    // console.log(data[1].attributes)
     let table = $('#tableWorld').DataTable({
            "order": [[ 1, "desc" ]],
            "language": {
                searchPlaceholder: "Cari Negara",
                search: 'Cari:',
            },
        });
        data.forEach(item => {
            // console.log(item.attributes.Country_Region)
            const country = item.attributes.Country_Region
            const confirm = separateNumber(item.attributes.Confirmed)
            const recover = separateNumber(item.attributes.Recovered)
            const deaths = separateNumber(item.attributes.Deaths)
            const active = separateNumber(item.attributes.Active)
            const deathRate = dr(item.attributes.Deaths,item.attributes.Confirmed).toFixed(2)
            const recoverRate = rr(item.attributes.Recovered,item.attributes.Confirmed).toFixed(2)

            table.row.add([country, `<i style="color:orange" class="fas fa-dot-circle"></i> `+confirm, `<i style="color:green" class="fas fa-dot-circle"></i> `+recover, `<i style="color:red" class="fas fa-dot-circle"></i> `+deaths, active, deathRate+'%', recoverRate+'%']).draw()
        });
}

export const itemListId = (data) => {
    // console.log(data[1].provinsi)
    // console.log(data[1].attributes)
    let table = $('#tableId').DataTable({  
            "order": [[ 1, "desc" ]],
            "language": {
                searchPlaceholder: "Cari Provinsi",
                search: 'Cari:',
            },
        });

        data.forEach(item => {
            // console.log(item.provinsi)
            const country = item.provinsi
            const positif = separateNumber(item.kasusPosi)
            const sembuh = separateNumber(item.kasusSemb)
            const meninggal = separateNumber(item.kasusMeni)

            table.row.add([country, `<i style="color:orange" class="fas fa-dot-circle"></i> `+positif, `<i style="color:green" class="fas fa-dot-circle"></i> `+sembuh, `<i style="color:red" class="fas fa-dot-circle"></i> `+meninggal]).draw()
        });
}
