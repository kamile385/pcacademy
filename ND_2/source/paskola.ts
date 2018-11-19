export default abstract class Paskola{
    paskolos_dydis: number;
    terminas: number;

    constructor(paskolos_dydis: number, terminas: number){
        this.paskolos_dydis = paskolos_dydis;
        this.terminas = terminas;
    }

    paskolosDydis(): void {
        console.log(`${this.paskolosDydis}`);
    }
}