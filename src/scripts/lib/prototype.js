export default () => {
  function Tutor (nombre,apellido) {
    this.nombre = nombre;
    this.saludar = () => console.log('Hola a todos soy ' + this.nombre)
    if(typeof apellido !== 'undefined'){
      this.nombre_completo = nombre + ' ' + apellido
    }
  }
  var alex = new Tutor('Alex', 'Ballera')

  var jose = new Tutor('Jose')

  // Declaramos atributos y métodos del objeto

  alex.iniciar_tutorial = () => console.log('Bienvenido al Curso soy ' + alex.nombre)

  alex.edad = 45

  // Podemos crear atributos al Objeto con Prototype

  Tutor.prototype.cargo = 'Profesor'


  console.log(alex)
  console.log(jose)
  console.log(jose.saludar())
  console.log('Alex es ' + alex.cargo)
  console.log('José es ' + jose.cargo)

  alex.iniciar_tutorial()

}
