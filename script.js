const carrinho = {
  nome: "Paulo",
  forma: "Dinheiro",
  Endereço: "Rua Simões Lopes",
  listaCompras: [
    { nome: "Arroz", preco: 16, quantidade: 2 },
    { nome: "Feijão", preco: 4.99, quantidade: 3 },
  ],
};
console.log(carrinho);
const quantidadeCarrinho = carrinho.listaCompras.length
console.log("Quantidade de compras: " + quantidadeCarrinho)

 const carrinhoPresente = {...carrinho}
 carrinhoPresente.nome = "Reginea", carrinhoPresente.forma =  'Cartão presente'
 console.log(carrinhoPresente)
 





   