var form = `
<div class="close"></div>
<form action="" id="form">
  <input type="email" placeholder="Correo" name="email[]">
</form>
<button type="button" name="button" id="button">Agregar más correo</button>
`,
contenedor = document.getElementById('respuesta')

export default () => {
  contenedor.innerHTML = form

  bind_close()

  $('#button').addEventListener('click', () => {
    var input = document.createElement('input')
    input.setAttribute('type', 'email')
    input.setAttribute('placeholder', 'Correo')
    input.setAttribute('name', 'email[]')

    $('#form').appendChild(input)

    my_alert('Se agregó un nuevo campo')
  })

  function bind_close() {
    var elements = document.querySelectorAll('.close')
    for (var i = elements.length -1; i >= 0; i--) {
      var el = elements[i]
      el.addEventListener('click', function() {
        this.parentNode.style.display = 'none'
      })
    }
  }

  function my_alert(msg) {
    var div = document.createElement('div')
    div.setAttribute('class', 'alert')
    div.innerHTML = msg

    var close = document.createElement('span')
    close.style.float = 'right'
    close.innerHTML = 'X'
    close.setAttribute('class', 'close')

    div.appendChild(close)

    $('#respuesta').insertBefore(div,$('#respuesta').firstChild)

    bind_close()

  }

  // Función que nos permite seleccionar elementos como JQuery
  function $(selector){
    return document.querySelector(selector)
  }
}
