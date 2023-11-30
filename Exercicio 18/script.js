var medidaHTML = document.getElementById('medida')
var tempHTML = document.getElementById('temp')

function calcular() {
  var medida = medidaHTML.value
  var temp = parseFloat(tempHTML.value)

  switch (medida) {
    case 'C':
    case 'c':
      var resultadoFahren = 1.8 * temp + 32

      document.getElementById('textotempe').innerHTML =
        'Digite a temperatura em Celsius.'
      document.getElementById('resultado').innerHTML =
        resultadoFahren.toFixed(2)
      document.getElementById('nometemperatura').innerHTML =
        'Temperatura equivalente em Fahrenheit:'
      break

    case 'F':
    case 'f':
      var resultadoCelsius = ((temp - 32) * 5) / 9

      document.getElementById('textotempe').innerHTML =
        'Digite a temperatura em Fahrenheit.'
      document.getElementById('resultado').innerHTML =
        resultadoCelsius.toFixed(2)
      document.getElementById('nometemperatura').innerHTML =
        'Temperatura equivalente em Celsius:'
      break
    default:
      alert('Digite C ou F para calcular.')
      break
  }
}
