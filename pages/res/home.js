const estoqueProdutos = {
    porco: [
        { idProduto: 01, nomeProduto: "Costela de Porco s/pele", categoriaProduto: "Suíno", valorKg: "a" },
        { idProduto: 02, nomeProduto: "Costela de Porco c/pele", categoriaProduto: "Suíno", valorKg: "a" },
        { idProduto: 03, nomeProduto: "Pernil de Porco", categoriaProduto: "Suíno", valorKg: "14.99" },
        { idProduto: 04, nomeProduto: "Paleta de Porco c/pele ", categoriaProduto: "Suíno", valorKg: "14.99" }],
    bovino: [
        {},
        {},
        {}]
}

const seletor = document.getElementsByClassName('side-item')
seletor[0].addEventListener('click', () => {
    console.log(seletor[0].textContent = 'a')
})