var addBoton = `<button id="closure">Click</button>`
var contenedor = document.getElementById('respuesta')

export default () => {

  contenedor.innerHTML = addBoton

  var getBoton = document.getElementById('closure')

  getBoton.addEventListener('click', () => {
    console.log('Me hicieron Click')
    setTimeout(() =>  console.log(saludar('Alex')), 2000)
  })

  function saludar(nombre) {
    function construct() {
      return 'Hola ' + nombre
    }
    return construct()
  }
}
