/*
    OBJETIVO - Quando clicarmos no botão temos que mostrar a imagem de fundo correspondente.
    
    - PASSO 1 - Dar um jeito de pegar o elemento do html dos botões

    - PASSO 2 - Dar um jeito de identificar o clique do usuário nos botões.

    - PASSO 3 - Desmarcar o botão selecionado anterio.

    - PASSO 4 - Marcar o botão clicado como se estivesse selecionada.

    - PASSO 5 - Esconder a imagem de fundo anterior.

    - PASSO 6 - Fazer aparecer a imagem de fundo correspondente ao botão clicado.

*/
// - PASSO 1 - Dar um jeito de pegar o elemento do html dos botões
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem')
// - PASSO 2 - Dar um jeito de identificar o clique do usuário nos botões.
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        // - PASSO 3 - Desmarcar o botão selecionado anterio.
        desativareAtivarBotãoSelecionado();

        // - PASSO 4 - Marcar o botão clicado como se estivesse selecionada.
        botao.classList.add('selecionado');

        // - PASSO 5 - Esconder a imagem de fundo anterior.
        esconderImagem();
        
        // - PASSO 6 - Fazer aparecer a imagem de fundo correspondente ao botão clicado.
        ativaImagemDeAcordocomBotoes(indice);
    })
})

function ativaImagemDeAcordocomBotoes(indice) {
    imagens[indice].classList.add('ativa');
}

function esconderImagem() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativareAtivarBotãoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}
