

// COMO DEIXAE UM VALOR POR DEFAULT EM UMA FUNÇÃO

function cadastro (email: string, senha: string, nome = "Aluno", idade?: number):void {

    let data = {email, senha, nome , idade}
    console.log(data)
}

// cadastro("teste@teste.com ", "123456 ", "João ", 25)

function cadastroLoja(nome: string, email: string,  status = false ):boolean {

    console.log("Status atual: ", status)

    return status;
}

cadastroLoja("Burguer King ", "bk@teste.com", true);