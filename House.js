import { BienImmobilier } from "./BienImmobilier.js";

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
                <div class="box"></div>
                <p class="pBox">Garage : ${this.box ? "Oui" : "Non"}</p>
                </div>
                <div class="room">
                    <p class="pRoom">Nb. de pièces : ${this.pieces}</p>
                </div>
                `
    }
    
}