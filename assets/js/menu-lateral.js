const botaoMenu = document.querySelector('.cabecalho__botao')
const menuLateral = document.querySelector('.navegacao')

botaoMenu.addEventListener('click', () => {
    menuLateral.classList.toggle('navegacao--ativo')
})