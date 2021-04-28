const btnMaisConselho = document.querySelector('.mais-conselho')
let containerAdvice = document.querySelector('.content-advice p')
let containerImg = document.querySelector('.img-bode')


const gerarFrase = async() => {
    const dados = await fetch('https://api.adviceslip.com/advice')
    const frase = await dados.json()
    createPage(frase.slip.advice)
};


function NumImagem() {
    return Math.floor(Math.random() * 4)
};


function createPage(advice) {
    containerImg.style.backgroundImage = `url(/assets/bode${NumImagem()}.jpeg)`
    containerAdvice.textContent = `"${advice}"`
};

window.addEventListener('load', gerarFrase);
btnMaisConselho.addEventListener('click', gerarFrase)