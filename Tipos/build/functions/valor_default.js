"use strict";
// COMO DEIXAE UM VALOR POR DEFAULT EM UMA FUNÇÃO
function cadastro(email, senha, nome = "Aluno", idade) {
    let data = { email, senha, nome, idade };
    console.log(data);
}
// cadastro("teste@teste.com ", "123456 ", "João ", 25)
function cadastroLoja(nome, email, status = false) {
    console.log("Status atual: ", status);
    return status;
}
cadastroLoja("Burguer King ", "bk@teste.com", true);
