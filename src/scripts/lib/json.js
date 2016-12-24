export default () => {
  var alumno = {
    nombre: 'Alexander',
    apellido: 'Ballera',
    curso: 'Finanzas',
    ciudad: 'Caracas',
    introduccion: function() {
      console.log('Bienvenido ' + this.nombre + ' ' + this.apellido)
    }
  }
  console.log(alumno.nombre)
  console.log(alumno['apellido'])
  console.log(alumno.introduccion())
}
