const alunos = [
    {id: 1, nome: "Andre", nota: 9.5},
    {id: 2, nome: "vitor", nota: 6.5},
    {id: 3, nome: "emanuel", nota: 8.0},
    {id: 4, nome: "leonardo", nota: 8.5},
    {id: 5, nome: "Arthur", nota: 5.0}
];

const aprovacoes = alunos.map(a => {
    return {
        nome: a.nome,
        nota: a.nota,
        situacao: a.nota >= 7 ? "Aprovado" : "Reprovado"
    };
});

console.log(aprovacoes);
