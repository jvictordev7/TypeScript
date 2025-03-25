"use strict";
// Tuplas não possui no JS e sim apenas no TS
// Tuplas são arrays com tipos definidos
let aluno; // Precisa seguir a mesma ordem passada na declaração
aluno = ['João', 10, 'Matemática'];
aluno.push('Aprovado', 8.5); // Não é possível adicionar um valor que não foi definido na tupla
// console.log(aluno);
let statusPedidos;
statusPedidos = ['Pedido 1', 'Em andamento', 'João'];
console.log(statusPedidos); // ['Pedido 1', 'Em andamento', 'João']
