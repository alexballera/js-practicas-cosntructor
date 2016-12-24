export default () => {
  function Tutor(nombre,apellido) {
    this.nombre = nombre;
    this.saludar = () => console.log('Hola a todos soy ' + this.nombre)
    if(typeof apellido !== 'undefined'){
      this.nombre_completo = nombre + ' ' + apellido
    }
  }
  var alex = new Tutor('Alex', 'Ballera')
  alex.saludar()

  console.log('Nombre completo: ' + alex.nombre_completo)

  var jose = new Tutor('José')
  jose.saludar()
}
