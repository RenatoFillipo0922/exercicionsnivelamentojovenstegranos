var numero1HTML = document.getElementById('n1')
var numero2HTML = document.getElementById('n2')
var numero3HTML = document.getElementById('n3')
var numero4HTML = document.getElementById('n4')
var numero5HTML = document.getElementById('n5')

let numeros = []
let numerosrecebidos = []

function calcular() {
  numeros = []
  numerosrecebidos = []

  numeros.push(
    numero1HTML.value,
    numero2HTML.value,
    numero3HTML.value,
    numero4HTML.value,
    numero5HTML.value
  )

  numerosrecebidos.push(
    numero1HTML.value,
    numero2HTML.value,
    numero3HTML.value,
    numero4HTML.value,
    numero5HTML.value
  )

  numeros.sort((a, b) => a - b)

  document.getElementById('numeros').innerHTML =
    'Números Recebidos: ' + numerosrecebidos
  document.getElementById('crescente').innerHTML = numeros
}
