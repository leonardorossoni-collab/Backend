function calcular(a, b, operacao) {
    return operacao(a, b);
}

console.log("Soma:");
console.log(calcular(10, 5, (a, b) => a + b));

console.log("Subtração:");
console.log(calcular(10, 5, (a, b) => a - b));

console.log("Multiplicação:");
console.log(calcular(10, 5, (a, b) => a * b));
