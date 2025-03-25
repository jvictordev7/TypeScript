

interface CadastroProps{
    nome?: string;
    email: string;
    status: boolean;

}

const novoUsuario: CadastroProps = {
    email: "teste@teste.com",
    status: true,
}

// console.log(novoUsuario);

function novoUser (propriedades: CadastroProps) {
    console.log(propriedades.email)
}


novoUser({  email: "teste@tes.com", status: true })