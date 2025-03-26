

interface CursoProps{
    id: string;
    nome: string;
    preco: number;

    //Definir apenas a função e o que ela deve esperar e retornar
    promocao(preco: number): void;

}


// function mostrarPromocao(preco: number): void{
//     // console.log(`Curso: ${nome}`)
//     console.log(`Preço: ${preco}`)
//     // console.log(`ID: ${id}`)
//     // console.log("===============")
// }

interface SomaProps{
    (valor1: number, valor2: number): number;
}

let somarNumeros: SomaProps = (valor1: number, valor2: number): number => {
    console.log( 'Resultado: ', valor1 + valor2);
    return valor1 + valor2;
}

const Resultado = somarNumeros(15, 10);
console.log('Resultado da variavel: ', Resultado);