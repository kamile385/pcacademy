export default abstract class Paskola{
    paskolos_dydis: HTMLInputElement;
    terminas: HTMLInputElement;

    constructor(paskolos_dydis: HTMLInputElement, terminas: HTMLInputElement){
        this.paskolos_dydis = paskolos_dydis;
        this.terminas = terminas;
    }
}