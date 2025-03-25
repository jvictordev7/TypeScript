"use strict";
// Tipo desconhecido => quando você não sabe o tipo que vai receber
let total;
total = 100;
total = '200';
total = {
    total: 150
};
let idPedido = 123;
let totalPedido = 15;
let entregador = idPedido;
// VALOR DO TIPO unknown só podem ser atribuidos ao tipo unknown ou any
let totalEntrega = totalPedido;
console.log(entregador);
