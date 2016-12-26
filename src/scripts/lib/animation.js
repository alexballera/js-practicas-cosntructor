var respuesta = document.getElementById('respuesta')
var scrollVertical = 0;
var ticking = false;

export default () => {

  var div = document.createElement('div')
  div.setAttribute('id', 'innerBox')
  div.setAttribute('class', 'innerBox')
  div.style.width = '50px'
  div.style.height = '50px'
  div.style.backgroundColor = 'blue'
  div.style.position = 'relative'
  div.style.left = '-200px'

  respuesta.appendChild(div)

  function doSomething(scroll_pos) {
    if (scroll_pos >= 100) {
      div.classList.add('animacion')
    } else {
      div.classList.remove('animacion')
    }
  }

  window.addEventListener('scroll', function(e) {
    scrollVertical = window.scrollY
    // document.title = scrollVertical
      if (!ticking) {
        window.requestAnimationFrame(function() {
          doSomething(scrollVertical)
          ticking = false;
        })
      }
      ticking = true;
  })
}
