let nunaFabloIndekso = 0;
let numeroEkzercaro = document.getElementById('numeroEkzercaro')
let vortoj = []
function sxangxiFablon(n) {
    nunaFabloIndekso = n;
    fabloTeksto = fabloj[nunaFabloIndekso];
    vortoj = fabloTeksto.split(" ");
    renderiFablon();
}

const fabloElemento = document.getElementById("fablo");
// const vortoj = fabloTeksto.split(" ");
let indekso = -1;

vortaro = vortaro.replace(/^([A-Za-zĈĉĜĝĤĥĴĵŜŝŬŭ]*) /gm,"$1 - $1 ");
const vortObjekto = Object.fromEntries(vortaro.split('\n').map(entry => entry.split(' - ')));
console.log(vortObjekto);

function renderiFablon() {
    fabloElemento.innerHTML = vortoj.map((vorto, i) => 
        `<span class="${i === indekso ? 'highlight' : ''}">${vorto}</span>`
    ).join(" ");
}

function emfazigiVorton(direkto) {
    indekso += direkto;
    if (indekso < 0) indekso = vortoj.length - 1;
    if (indekso >= vortoj.length) indekso = 0;
    sercxi();
    renderiFablon();
}

function sercxi() {
    // console.log("Indekso minuskla", vortoj[indekso].toLowerCase());
    // console.log("Indekso", vortoj[indekso]);
    // console.log(typeof vortObjekto[vortoj[indekso].toLowerCase()]);
    // console.log("Objekto+Indekso minuskla", vortObjekto[vortoj[indekso].toLowerCase()]);
    
    let vorto = vortoj[indekso].toLowerCase();
    if (vorto.endsWith(".")) {
        vorto = vorto.slice(0, -1);
    }
    if (vorto.endsWith(",")) {
        vorto = vorto.slice(0, -1);
    }
    if (vorto.endsWith("n")) {
        vorto = vorto.slice(0, -1);
    }
    if (vorto.endsWith("as")) {
        vorto = vorto.slice(0, -2) + "i";
    }
    if (vorto.endsWith("is")) {
        vorto = vorto.slice(0, -2) + "i";
    }
    if (vorto.endsWith("oj")) {
        vorto = vorto.slice(0, -2) + "o";
    }
    if (vorto.endsWith("aj")) {
        vorto = vorto.slice(0, -2) + "a";
    }
    console.log(vorto);

    const rezultoDiv = document.getElementById("rezulto");
    if (vortObjekto[vorto.toLowerCase()]) {
        rezultoDiv.textContent = vortObjekto[vorto.toLowerCase()];
        console.log("1");
    } else {
        rezultoDiv.textContent = "Ne trovita >" + vortoj[indekso].toLowerCase();
        console.log("2");
    }
}

sxangxiFablon(0) 