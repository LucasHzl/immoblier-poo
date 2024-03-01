import { Apartment, BienImmobilier } from "./BienImmobilier.js";

//////////////////////////////GLOBAL VARIABLES//////////////////////////
let garden = document.getElementById("adFormGarden");
let buildable = document.getElementById('adFormBuildable');
let elevator = document.getElementById('adFormElevator');
let box = document.getElementById('adFormBox');
let floor = document.getElementById('adFormFloor');
let piece = document.getElementById('adFormPiece');
let price = document.getElementById('adFormPrice');
let desc = document.getElementById('adFormDesc');
let surface = document.getElementById('adFormSurface');
let location = document.getElementById('adFormLocation');
let parking = document.getElementById('adFormParking');


//input
let titleInput = document.getElementById("adFormTitleInput");
let selectType = document.getElementById("selectType");
let locationInput = document.getElementById("adFormLocationInput");
let surfaceInput = document.getElementById("adFormSurfaceInput");
let descInput = document.getElementById("adFormDescInput");
let priceInput = document.getElementById("adFormPriceInput");
let floorInput = document.getElementById("adFormFloorInput");
let selectBox = document.getElementById("selectBox");
let pieceInput = document.getElementById("adFormPieceInput");
let selectParking = document.getElementById("selectParking");
let selectElevator = document.getElementById("selectElevator");
let selectBuildable = document.getElementById("selectBuildable");
let selectGarden = document.getElementById("selectGarden");
let inputImg = document.getElementById("inputImg");
////////////////////////////////////////////////////////////////////////

function hideElements(elements) {
    elements.forEach(element => {
        element.style.display = "none";
    });
}

function displayElements(elements) {
    elements.forEach(element => {
        element.style.display = "block";
    });
}


selectType.addEventListener("change", updateForm);

function updateForm() {
    if(selectType.value == "apartment") {
        hideElements([buildable, garden]);
        displayElements([floor, elevator, parking, piece, box]);
    } else if(selectType.value == "house") {
        hideElements([floor, elevator, parking, buildable]);
        displayElements([garden, piece, box]);
    } else if(selectType.value == "ground") {
        displayElements([buildable]);
        hideElements([floor, elevator, parking, piece, box, garden]);
    } else {
        alert("Merci de saisir un type de biens");
    }
}


let submitButton = document.getElementById("submitAd");
submitButton.addEventListener("click", createElement);

function createElement() {

    let submitedObject = 
        {
            id : 0,
            title : titleInput.value,
            description : descInput.value,
            price : priceInput.value,
            adress : locationInput.value,
            surface : surfaceInput.value,
            picture : "./assets/" + inputImg.files[0].name,
            apartment : null,
            house : null,
            ground : null,
        }

        if(selectType.value == "apartment") {
            submitedObject.apartment = {
                floor : floorInput.value,
                elevator : selectElevator.value == "yes" ? true : false,
                piece : pieceInput.value,
                box : selectBox.value == "yes" ? true : false,
                parking : selectParking.value == "yes" ? true : false,
            }
        } else if(selectType.value == "house") {
            submitedObject.house = {
                garden : selectGarden.value == "yes" ? true : false,
                box : selectBox.value == "yes" ? true : false,
                piece : pieceInput.value,
            }
        } else if ( selectType.value == "ground") {
            submitedObject.ground = {
                buildable : selectBuildable.value == "yes" ? true : false,
            }
        } else {
            alert("Merci de saisir un type de biens");
            return;
        }

        if(infoChecker(submitedObject) != null) {
            alert(infoChecker(submitedObject));
            return;
        }

        let ls = localStorage.getItem("properties");
        ls = JSON.parse(ls);
        let previousId = ls[ls.length - 1].id;
        submitedObject.id = previousId + 1;
        ls.push(submitedObject);
        localStorage.setItem("properties", JSON.stringify(ls));

        window.location.replace("http://127.0.0.1:5500/index.html");
        alert("Votre annonce a bien été déposée !");

}

//Test des entrées saisies par l'utilisateur
function infoChecker(submitedObject) {
    if(submitedObject.title.length > 15 || submitedObject.title.length < 3) {
        return "le titre est trop long ou trop court";
    }

    if(submitedObject.description.length > 150 || submitedObject.description.length < 3) {
        return "la description est trop longue ou trop court";
    }

    if(submitedObject.price.length > 10 || submitedObject.price.length < 3) {
        return "Trop cher ou pas assez cher mon fils";
    }

    if(submitedObject.adress.length > 20 || submitedObject.adress.length < 3) {
        return "Adresse trop longue ou trop courte";
    }

    if(submitedObject.surface.length > 6 || submitedObject.surface.length < 1) {
        return "Surface trop grande ou trop petite";
    }

    //Test des entrées si un appartement est selected
    if(submitedObject.apartment != null) {
        if(submitedObject.apartment.floor.length > 3 || submitedObject.apartment.floor.length < 1) {
            return "Trop d'étages, ou pas assez d'étages";
        }
    }

    if(submitedObject.apartment != null) {
        if(submitedObject.apartment.piece.length > 3 || submitedObject.apartment.piece.length < 1) {
            return "Nombre de pièces trop faible ou trop élevé";
        }
    }

    //Test des entrées si une maison est selected
    if(submitedObject.house != null) {
        if(submitedObject.house.piece.length > 3 || submitedObject.house.piece.length < 1) {
            return "Nombre de pièces trop faible ou trop élevé";
        }
    }

    return null;
}