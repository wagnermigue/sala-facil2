// Supondo que você tenha uma tabela com o id 'minhaTabela'
let minhaTabela = document.getElementById('minhaTabela');

// Adicione um evento de clique à tabela para capturar as alterações
minhaTabela.addEventListener('click', function(event) {
    let elementoClicado = event.target;

    // Verifique se o clique foi em uma célula (td)
    if (elementoClicado.tagName === 'TD') {
        // Obtenha o valor da célula clicada
        let novoValor = prompt('Digite o novo valor:', elementoClicado.innerText);

        // Atualize o valor da célula
        elementoClicado.innerText = novoValor;

        // Obtenha as linhas da tabela
        let linhasTabela = minhaTabela.getElementsByTagName('tr');

        // Crie uma matriz para armazenar os dados da tabela
        let dadosTabela = [];

        // Itere sobre as linhas da tabela
        for (let i = 0; i < linhasTabela.length; i++) {
            let colunas = linhasTabela[i].getElementsByTagName('td');
            let rowData = [];

            // Itere sobre as colunas da linha
            for (let j = 0; j < colunas.length; j++) {
                rowData.push(colunas[j].innerText);
            }

            // Adicione a linha à matriz de dados
            dadosTabela.push(rowData);
        }

        // Armazene os dados da tabela localmente
        localStorage.setItem('dadosTabela', JSON.stringify(dadosTabela));
    }
});

// Recupere os dados da tabela ao carregar a página
window.onload = function() {
    let dadosSalvos = localStorage.getItem('dadosTabela');

    if (dadosSalvos) {
        dadosSalvos = JSON.parse(dadosSalvos);

        // Itere sobre os dados e atualize a tabela
        for (let i = 0; i < dadosSalvos.length; i++) {
            for (let j = 0; j < dadosSalvos[i].length; j++) {
                minhaTabela.rows[i].cells[j].innerText = dadosSalvos[i][j];
            }
        }
    }
};