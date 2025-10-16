var paragrafo = document.querySelector('p')
var cursor = document.querySelector('.cursor')
var texto = paragrafo.innerHTML
var index = 0

const escrever = () => {
  paragrafo.innerHTML = paragrafo.innerHTML.replace('|', '')

  if (texto.length > index) {
    if (index == 0){
      paragrafo.innerHTML = texto.charAt(index) 
    } else {
      paragrafo.innerHTML += texto.charAt(index) 
    }

    paragrafo.innerHTML += '|'

    index++
    setTimeout(escrever, 110)

  } else {
    // Apagar o texto após 5 segundos
    setTimeout(apagarTexto, 5000)
  }
}

const apagarTexto = () => {
  var intervaloApagar = setInterval(() => {
    if (paragrafo.innerHTML.length > 0) {
      paragrafo.innerHTML = paragrafo.innerHTML.slice(0, -1)
    } else {
      clearInterval(intervaloApagar)
      // Reiniciar a digitação após 3 segundos
      setTimeout(() => {
        index = 0
        escrever()
      }, 3000)
    }
  }, 50)
}

// Iniciar a função de escrita
escrever()
