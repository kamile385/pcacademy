"use strict";
exports.__esModule = true;
var busto_paskola_1 = require("./busto_paskola");
var dydis = parseFloat(document.getElementById("dydis").value);
var terminas = parseFloat(document.getElementById("terminas").value) * 12;
var palukanos = 2 / 1200;
var atsakymas = parseFloat(document.getElementById("atsakymas").value);
var busto_paskola = new busto_paskola_1["default"](dydis, terminas, 3, 2);
busto_paskola.paskolosDydis();
