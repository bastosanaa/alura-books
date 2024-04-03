let livros = []
const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
getBuscarLivrosDaAPI()

const elementoParaInserirLivros = document.getElementById('livros')
const elementoComValorTotalDeLivrosDisponiveis = document.getElementById('valor_total_livros_disponiveis')

async function getBuscarLivrosDaAPI() {
    const res = await fetch(endpointDaAPI)
    livros = await res.json()
    let livrosComDesconto = aplicarDescontoNosLivros(livros)
    exibirOsLivrosNaTela(livrosComDesconto)
}

//utilizando método forEach
function exibirOsLivrosNaTela(listaDeLivros){
    elementoParaInserirLivros.innerHTML = ''
    listaDeLivros.forEach(livro => {
        let disponibilidade = livro.quantidade > 0 ? 'livro__imagens' : 'livro__imagens indisponivel'
        elementoParaInserirLivros.innerHTML += 
        `
        <div class="livro">
            <img class="${disponibilidade}" src="${livro.imagem}" alt="${livro.alt}" />
            <h2 class="livro__titulo">
                ${livro.titulo}
            </h2>
            <p class="livro__descricao">${livro.autor}</p>
            <p class="livro__preco" id="preco">${livro.preco.toFixed(2)}</p>
            <div class="tags">
                <span class="tag">${livro.categoria}</span>
            </div>
        </div>
        `
    })
}
