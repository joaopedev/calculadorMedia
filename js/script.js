const form = document.querySelector(`.form`);


form.addEventListener("submit", function (event) {
    event.preventDefault();

const notaPrimeiroInput = Number(document.querySelector(`.inputprimeirobimestre`).value) ;
const notaSegundoInput = Number(document.querySelector(`.inputsegundobimestre`).value) ;
const notaTerceiroInput = Number(document.querySelector(`.inputterceirobimestre`).value) ;
const notaQuartoInput = Number(document.querySelector(`.inputquartobimestre`).value) ;

const notaFinal = (notaPrimeiroInput + notaSegundoInput + notaTerceiroInput + notaQuartoInput) / 4

const msg = `Sua media é: ${notaFinal}`
exibir(msg);

})

function criarParagro() {
    const paragrafo = document.createElement(`p`);
    return paragrafo
}

function exibir(media) {
    
    const div = document.querySelector(`.resultado`);
    const p = criarParagro();

    p.innerHTML = media;
    div.appendChild(p);
}