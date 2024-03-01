//Importation de la classe BienImmobilier (seule necessaire ici)
import { BienImmobilier } from "./BienImmobilier.js";


//Tableau d'objets écrit à la main
let ads = [
    {
        id : 1,
        title : "Humble demeure",
        description : "Proche de toutes les commodité, humble demeure au charme certain. Nombreuses pièces disponibles afin de satisfaire toute réception. Chauffage inclus dans les charges collectives.",
        price : 1929000,
        adress : "Vizille 38220",
        surface : 870,
        picture : "./assets/vizilleCastle.jpg",
        apartment : null,
        house : {
            garden : true,
            box : false,
            pieces : 56,
        },
        ground : null,
    },
    
    {
        id : 2,
        title : "Villa moderne",
        description : "Maison d’architecte des années 70’s, dôté de tout le confort moderne ainsi que d’une patogeoire privée. Parfait pour les aficionados de la symétrie, ce bien saura vous combler par ses courbes voluptueuses.",
        price : 770000,
        adress : "Froges 38190",
        surface : 320,
        picture : "./assets/villa.jpeg",
        apartment : null,
        house : {
            garden : true,
            box : true,
            pieces : 12,
        },
        ground : null,
    },

    {
        id : 3,
        title : "Appartement vintage",
        description : "Nid douillet, idéal pour jeune couple de cadres dynamiques. En plein centre de la vivante ville de Saint-Etienne. Entre terre et goudron, laissez-vous séduire par ce bien aux toutes qualités.",
        price : 280000,
        adress : "Saint-Etienne 42000",
        surface : 200,
        picture : "./assets/apartment.jpg",
        apartment : {
            floor : 7,
            elevator : true,
            pieces : 4,
            box : true,
            parking : true,
        },
        house : null,
        ground : null,
    },
    
    {
        id : 4,
        title : "Terrain vague",
        description : "Terrain vague proche de la capitale. Nombreuses possibilités de construction car placé hors zone PPRI. Entretien des espaces verts à reprendre.",
        price : 3000,
        adress : "Versailles 78646",
        surface : 9230,
        picture : "./assets/versaillesCastle.jpg",
        apartment : null,
        house : null,
        ground : {
            buildable : true,
        },
    },
]


function devMode() {
    if(localStorage.getItem("properties") != null) {
        return;
    }
    localStorage.setItem("properties", JSON.stringify(ads));
}

devMode();


//Déclaration d'un tableau vide qui va accueillir toutes les instances
let items = [];

let filteredItems = [];

let submitedFilter = document.getElementById("submitFilter");
submitedFilter.addEventListener("click", filterItems);

function filterItems() {
    let typeFilter = document.getElementById("typeFilter").value;

    filteredItems = [];
    items.forEach(property => {
        if(typeFilter == "all") {
            filteredItems.push(property);
        } else if(typeFilter == "apartment" && property.apartment != null) {
            filteredItems.push(property);
        } else if(typeFilter == "house" && property.house != null) {
            filteredItems.push(property);
        } else if(typeFilter == "ground" && property.ground != null) {
            filteredItems.push(property);
        }
    });

    loadAds();
}

//On récupère le local storage et on instancie chaque objet
function getAllItems() {
    let ls = localStorage.getItem("properties");
    ls = JSON.parse(ls);
    ls.forEach(property => {
        items.push(new BienImmobilier(...Object.values(property)));
    });
}

getAllItems();


//On génère les annonces.
function loadAds() {
    let adsContainer = document.getElementById("metaAds");
    adsContainer.innerHTML = "";
    filteredItems.forEach(property => {
        let ad = property.generateAd();
        adsContainer.innerHTML += ad;
    });
}

filterItems();







