export default () => {
  var boton = document.getElementById('btn')
  boton.addEventListener('click', () => {
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
