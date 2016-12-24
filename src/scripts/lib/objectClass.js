export default () => {

  // https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Classes

  class Human{
    constructor(nombre,apellido) {
      this.nombre = nombre
      this.apellido = apellido
    }

    // Métodos en Construccion de Objetos con Clases ES
    full_name(){
      return this.nombre +' '+ this.apellido
    }
  }

  // Herencia con extends
  class Tutor extends Human {
    constructor(nombre,apellido,materia) {
      super(nombre,apellido)
      this.materia = materia
    }
  }

  var alex = new Tutor('Alex', 'Ballera', 'Física')
  console.log('El tutor ' + alex.full_name() + ' imparte la materia ' + alex.materia)

  var jose = new Tutor('José')
  console.log(jose.full_name())
}
