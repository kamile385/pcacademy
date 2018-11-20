"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var paskola_1 = require("./paskola");
var Busto_paskola = /** @class */ (function (_super) {
    __extends(Busto_paskola, _super);
    function Busto_paskola(paskolos_dydis, terminas, alga, kiek_vaiku) {
        var _this = _super.call(this, paskolos_dydis, terminas) || this;
        _this.alga = alga;
        _this.kiek_vaiku = kiek_vaiku;
        return _this;
    }
    Busto_paskola.prototype.paskolosDydis = function () {
        // let paskola: number; 
        // let palukanos: number = 2;
        // let ivestaReiksme = (<HTMLInputElement>document.getElementById("terminas")).value;
        var dydis = parseFloat(document.getElementById("dydis").value);
        var terminas = parseFloat(document.getElementById("terminas").value) * 12;
        var palukanos = 2 / 1200;
        var atsakymas = parseFloat(document.getElementById("atsakymas").value);
        atsakymas = dydis * palukanos / (1 - (Math.pow(1 / (1 + palukanos), terminas)));
        return atsakymas;
    };
    return Busto_paskola;
}(paskola_1["default"]));
exports["default"] = Busto_paskola;
