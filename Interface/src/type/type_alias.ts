

type Uuid = number | string | null;

function acessar (Uuid: Uuid, nome: string) {
    console.log(`Acessando ${nome} com id ${Uuid}`);
}

function logUuid (Uuid: Uuid) {
    console.log(`O UUID informado é: ${Uuid}`);
}

// acessar("123", "Jogo");

// acessar(123, "Jogo");

// logUuid("123");

type Moedas = "OURO" | "PRATA" | "BRONZE";

function adicionarMoeda (moeda: Moedas) {
    console.log(`Adicionando moeda de ${moeda}`);
}

adicionarMoeda("PRATA");