import Paskola from "./paskola";

export default class Busto_paskola extends Paskola{
    alga: HTMLInputElement;
    kiek_vaiku: HTMLInputElement;

    constructor(paskolos_dydis: HTMLInputElement, terminas: HTMLInputElement, alga: HTMLInputElement, kiek_vaiku: HTMLInputElement){
        super(paskolos_dydis, terminas);
        this.alga = alga;
        this.kiek_vaiku = kiek_vaiku;

        // let btn = document.getElementById("button");
        // btn.addEventListener("click", (e:Event) => this.paskolosDydis());
    }

    paskolosDydis(paskolos_dydis, terminas, alga, kiek_vaiku){
        // let paskola: number; 
        // let palukanos: number = 2;
        // let ivestaReiksme = (<HTMLInputElement>document.getElementById("terminas")).value;

        // paskolos_dydis = (<HTMLInputElement>document.getElementById("dydis")).value;
        // terminas = parseFloat((<HTMLInputElement>document.getElementById("terminas")).value) * 12;
        terminas = terminas * 12;
        let palukanos: number = 2 / 1200;

        let atsakymas: number = parseFloat((<HTMLInputElement>document.getElementById("atsakymas")).value);    
        atsakymas = paskolos_dydis * palukanos / (1 - (Math.pow(1/(1 + palukanos), terminas)));

        return atsakymas;
    }
}