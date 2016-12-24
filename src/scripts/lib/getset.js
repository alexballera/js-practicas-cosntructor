export default () =>{
  var alumno = {
    nombre_value: 'Alexander',
    apellido: 'Ballera',
    curso: 'Finanzas',
    ciudad: 'Caracas',
    // getNombre: function() {
    //   return this.nombre
    // },
    // setNombre: function(nombre) {
    //   if (nombre === '' || (typeof nombre === 'undefined')) {
    //     return
    //   }
    //   this.nombre = nombre
    // }

    // ES6 Getters y Setters:
    get nombre() {
      return this.nombre_value
    },
    set nombre(nombre) {
      if (nombre === '' || (typeof nombre === 'undefined')) {
        return
      }
      this.nombre_value = nombre
    }
  }
  // alumno.setNombre()
  // console.log(alumno.getNombre())

  // ES6
  alumno.nombre = 'Jose'
  console.log(alumno.nombre)
}
