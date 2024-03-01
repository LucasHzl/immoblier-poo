/////////////////////////////////PROPERTY//////////////////////////////////////
export class BienImmobilier {
    id;
    title;
    description;
    price;
    adress;
    surface;
    picture;
    apartment;
    house;
    ground;

    constructor(id, title, description, price, adress, surface, picture, apartment, house, ground) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.price = price;
        this.adress = adress;
        this.surface = surface;
        this.picture = picture;

        /*if(apartment != null) {
           this.apartment = new Apartment (...Object.values(apartment));
        } else {
            this.apartment = null;
        }*/

        //Condition ternaire : condition ? si oui : sinon (condition sur une seule ligne)
        this.apartment = apartment != null ? new Apartment(...Object.values(apartment)) : null;
        this.house = house != null ? new House(...Object.values(house)) : null;
        this.ground = ground != null ? new Ground(...Object.values(ground)) : null;
    }

    generateAd() {
        return `<div class="ad">
                    <div class="imgDesc">
                            <img class="imgAd" src="${this.picture}"></img>
                        <div class="description">
                            <p>${this.description}</p>
                        </div>
                    </div>
                    <div class="info">
                        <div class="adTitle">
                            <h3>${this.title}</h3>
                        </div>
                        <div class="price">
                            <h4>${this.price}</h4>
                        </div>
                        <div class="surface">
                            <h5>${this.surface}m2</h5>
                        </div>
                        <div class="adress">
                            <h6>${this.adress}</h6>
                        </div>
                        ${this.apartment != null ? this.apartment.generateAd() : ""}
                        ${this.house != null ? this.house.generateAd() : ""}
                        ${this.ground != null ? this.ground.generateAd() : ""}
                    </div>
                </div>`
    }
}


////////////////////////////////APARTMENT///////////////////////////////////////
export class Apartment extends BienImmobilier {
    floor;
    elevator;
    pieces;
    box;
    parking;

    constructor(floor, elevator, pieces, box, parking) {
        super();
        this.floor = floor;
        this.elevator = elevator;
        this.pieces = pieces;
        this.box = box;
        this.parking = parking;
    }

    generateAd() {
        return `<div class="floor">
                    <p class="pFloor">Étage : ${this.floor}</p>
                </div>
                <div class="elevator">
                    <p class="pElevator">Ascenseur : ${this.elevator ? "Oui" : "Non"}</p>
                </div>
                <div class="room">
                    <p class="pRoom">Nb. de pièces : ${this.pieces}</p>
                </div>    
                <div class="box">
                    <p class="pBox">Garage : ${this.box ? "Oui" : "Non"}</p>
                </div>
                <div class="parking">
                    <p class="pParking">Parking : ${this.parking ? "Oui" : "Non"}</p>
                </div>`
    }
}


///////////////////////////////////HOUSE///////////////////////////////////////
export class House extends BienImmobilier {
    garden;
    box;
    pieces;

    constructor(garden, box, pieces) {
        super();
        this.garden = garden;
        this.box = box;
        this.pieces = pieces;
    }

    generateAd() {
        return `<div class="garden">
                    <p class="pGarden">Jardin : ${this.garden}</p>
                </div>
                <div class="box">
                <p class="pBox">Garage : ${this.box ? "Oui" : "Non"}</p>
                </div>
                <div class="room">
                    <p class="pRoom">Nb. de pièces : ${this.pieces}</p>
                </div>
                `
    }
}


//////////////////////////////////GROUND///////////////////////////////////////
export class Ground extends BienImmobilier {
    buildable;

    constructor(buildable) {
        super();
        this.buildable = buildable;
    }

    generateAd() {
        return `<div class="buildable">
                    <p class="pBuildable">Constructible : ${this.buildable ? "Oui" : "Non"}</p>
                 </div>`
    }
}