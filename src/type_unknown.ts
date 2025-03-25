

// Tipo desconhecido => quando você não sabe o tipo que vai receber


let total: unknown;

total = 100;

total = '200';

total = {
    total: 150
}

let idPedido: any = 123
let totalPedido: unknown = 15;

let entregador: number = idPedido;

// VALOR DO TIPO unknown só podem ser atribuidos ao tipo unknown ou any
let totalEntrega: unknown = totalPedido;

console.log(entregador);
