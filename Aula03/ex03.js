const pessoas = [
    { nome: "Leonardo", idade: 15 },
    { nome: "paulo", idade: 27 },
    { nome: "joao", idade: 19 },
    { nome: "amanda", idade: 12 }
  ];
  
  // buscar uma pessoa
  const busca = pessoas.find((pessoa) => pessoa.nome === "Leonardo");
  
  console.log("Pessoa encontrada:");
  console.log(busca);
  
  // filtrar maiores de idade
  const maiores = pessoas.filter((pessoa) => pessoa.idade >= 18);
  
  console.log("\nMaiores de idade:");
  console.log(maiores);
