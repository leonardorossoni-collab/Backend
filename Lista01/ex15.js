let produtos = [
    { id: 1, nome: "Mouse", preco: 80 },
    { id: 2, nome: "Teclado", preco: 120 },
    { id: 3, nome: "Monitor", preco: 900 },
    { id: 4, nome: "Fone", preco: 150 },
    { id: 5, nome: "Webcam", preco: 200 }
];

// a)
let produto = produtos.find(produto => produto.id == 3);
console.log("Produto de ID 3:");
console.log(produto);

// b)
let caros = produtos.filter(produto => produto.preco > 100);
console.log("Produtos acima de R$100:");
console.log(caros);

// c)
let nomes = produtos.map(produto => produto.nome);
console.log("Nomes dos produtos:");
console.log(nomes);

// d)
console.log("Lista de produtos:");
produtos.forEach(produto => {
    console.log(`ID: ${produto.id} | Nome: ${produto.nome} | Preço: R$ ${produto.preco}`);
});
