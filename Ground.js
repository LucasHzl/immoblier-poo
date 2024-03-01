import { BienImmobilier } from "./BienImmobilier.js";

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