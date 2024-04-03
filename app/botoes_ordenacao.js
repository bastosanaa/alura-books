// filtrando por categoria
const botoesCategoria = document.querySelectorAll('.btn')

botoesCategoria.forEach((botao) => botao.addEventListener('click', filtrarLivros))


function filtrarLivros() {
    const elementoBtnCategoria = document.getElementById(this.id)
    const categoria = elementoBtnCategoria.value
    let livrosFiltrados = categoria == 'disponivel' ? filtrarPorDisponiblidade() : filtrarPorCategoria(categoria)
    exibirOsLivrosNaTela(aplicarDescontoNosLivros(livrosFiltrados))
    if (categoria == 'disponivel'){
        const valorTotal = calcularValorTotalDeLivrosDisponiveis(aplicarDescontoNosLivros(livrosFiltrados))
        exibirValorTotalDosLivrosDisponiveis(valorTotal)
    }
}

//ordenando por preco
let botaoOrdenarPorPreco = document.getElementById('btnOrdenarPorPreco')
botaoOrdenarPorPreco.addEventListener('click', ordenarLivrosPorPreco)

function ordenarLivrosPorPreco(){
    let livrosOrdenados = aplicarDescontoNosLivros(livros.sort((a,b) => a.preco - b.preco))
    exibirOsLivrosNaTela(livrosOrdenados)
}

function filtrarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria)
}

function filtrarPorDisponiblidade() {
    return livros.filter(livro => livro.quantidade > 0)
}

function calcularValorTotalDeLivrosDisponiveis(livros){
    return livros.reduce((acc, livro) => acc + livro.preco, 0).toFixed(2)
}

function exibirValorTotalDosLivrosDisponiveis(valorTotal) {
    elementoComValorTotalDeLivrosDisponiveis.innerHTML = `
    <div class="livros__disponiveis">
    <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
    </div>
    `
}