export default abstract class Paskola{
    paskolos_dydis: number;
    terminas: number;
    alga: number;
    kiek_vaiku: number;

    constructor(paskolos_dydis: number, terminas: number, alga: number, kiek_vaiku: number){
        this.paskolos_dydis = paskolos_dydis;
        this.terminas = terminas;
        this.alga = alga;
        this.kiek_vaiku = kiek_vaiku;
    }

    paskolosDydis(): number {
        
    }
}