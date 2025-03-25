"use strict";
const novoUsuario = {
    email: "teste@teste.com",
    status: true,
};
// console.log(novoUsuario);
function novoUser(propriedades) {
    console.log(propriedades.email);
}
novoUser({ email: "teste@tes.com", status: true });
