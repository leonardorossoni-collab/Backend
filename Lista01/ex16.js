let alunos = [
    { nome: "João", nota: 8 },
    { nome: "Maria", nota: 6 },
    { nome: "Pedro", nota: 9 },
    { nome: "Ana", nota: 7 },
    { nome: "Lucas", nota: 5 }
];

let boletim = alunos.map(aluno => {
    return {
        nome: aluno.nome,
        nota: aluno.nota,
        situacao: aluno.nota >= 7 ? "Aprovado" : "Reprovado"
    };
});

console.log("Boletim:");

boletim.forEach(aluno => {
    console.log(`${aluno.nome} - Nota: ${aluno.nota} - ${aluno.situacao}`);
});

let aprovados = boletim.filter(aluno => aluno.situacao == "Aprovado");

console.log(`Quantidade de aprovados: ${aprovados.length}`);

let soma = 0;

boletim.forEach(aluno => {
    soma += aluno.nota;
});

let media = soma / boletim.length;

console.log(`Média da turma: ${media}`);
