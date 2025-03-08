let nunaFabloIndekso = 0;
let numeroEkzercaro = document.getElementById('numeroEkzercaro')
let vortoj = []
function sxangxiFablon(n) {
    nunaFabloIndekso = n;
    fabloTeksto = fabloj[nunaFabloIndekso];
    vortoj = fabloTeksto.split(" ");
    renderiFablon();
    indekso = -1
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

let klarigoTxt = ""
function sercxi() {
    klarigoTxt = ""
    // console.log("Indekso minuskla", vortoj[indekso].toLowerCase());
    // console.log("Indekso", vortoj[indekso]);
    // console.log(typeof vortObjekto[vortoj[indekso].toLowerCase()]);
    // console.log("Objekto+Indekso minuskla", vortObjekto[vortoj[indekso].toLowerCase()]);
    
    let vorto = vortoj[indekso].toLowerCase();
    console.log(vorto);
    if (vorto.endsWith(".")) {
        vorto = vorto.slice(0, -1);
    }
    if (vorto.endsWith("?")) {
        vorto = vorto.slice(0, -1);
    }
    if (vorto.endsWith(",")) {
        vorto = vorto.slice(0, -1);
    }
    if (vorto.endsWith("n")) {
        if (vorto === "jen") {
            //nenio
        } else {
            vorto = vorto.slice(0, -1);
            klarigoTxt = "n"
        }
    }
    if (vorto.endsWith("o") && vorto.length > 3) {
        klarigoTxt = "o"
    }
    if (vorto.endsWith("a") && vorto.length > 3) {
        klarigoTxt = "a"
    }
    if (vorto.endsWith("oj")) {
        vorto = vorto.slice(0, -2) + "o";
        klarigoTxt = "o"
    }
    if (vorto.endsWith("aj")) {
        if (vorto.length > 3) {
            vorto = vorto.slice(0, -2) + "a";
            klarigoTxt = "a"
        }
    }
    if (vorto.endsWith("as")) {
        vorto = vorto.slice(0, -2) + "i";
        klarigoTxt = "as"
    }
    if (vorto.endsWith("is")) {
        vorto = vorto.slice(0, -2) + "i";
    }
    console.log(klarigoTxt);
    console.log(vorto);

    const rezultoDiv = document.getElementById("rezulto");
    const klarigoDiv = document.getElementById("klarigo");
    if (vortObjekto[vorto.toLowerCase()]) {
        rezultoDiv.textContent = vortObjekto[vorto.toLowerCase()];
        klarigoDiv.textContent = vortObjekto[klarigoTxt]
        console.log("1");
        console.log("1",vortObjekto[klarigoTxt]);
    } else {
        rezultoDiv.textContent = "Ne trovita > " + vortoj[indekso].toLowerCase();
        console.log("2");
    }
}

sxangxiFablon(0) 