

// Type Assertions - Afirmar algum tipo.

let statusAtual: unknown = 1;

let mudaStatus: number = 0;

// Estou afirmando que statusAtual é um number.
mudaStatus = statusAtual as number;

console.log(mudaStatus); // 1