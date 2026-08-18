const cadastro = [];

function adicionarPessoa(nome, idade) {
  cadastro.push({
    nome,
    idade
  });

  console.log(`${nome} foi cadastrado com sucesso!`);
}

function listarPessoas() {
  console.log("\n=== PESSOAS CADASTRADAS ===");

  cadastro.forEach((pessoa, index) => {
    console.log(
      `${index + 1}. ${pessoa.nome} - ${pessoa.idade} anos`
    );
  });
}

// adicionando pessoas
adicionarPessoa("trump", 18);
adicionarPessoa("jeafrey", 31);
adicionarPessoa("putin", 16);

// mostrando lista
listarPessoas();
