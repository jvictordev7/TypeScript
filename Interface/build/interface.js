"use strict";
// let loja: object;
const BurguerK = {
    nome: "Burguer K",
    endereco: "Rua logo ali",
    status: true,
};
// console.log(BurguerK);
function novaLoja({ nome, endereco, status }) {
    console.log(`Loja ${nome} criada com sucesso!`);
    console.log(`Endereço da loja ${endereco}`);
    console.log(`Status da loja: ${status}`);
    console.log("===============");
}
novaLoja({ nome: "Red Buruger", endereco: "Rua ali na esquina", status: false });
novaLoja({ nome: "Subway", endereco: "Rua dez", status: true });
