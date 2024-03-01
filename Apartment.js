import { BienImmobilier } from "./BienImmobilier.js";

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