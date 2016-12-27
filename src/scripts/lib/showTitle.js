var respuesta = document.getElementById('respuesta')
var scrollVertical = 0;
var ticking = false;

export default () => {

  var section = document.createElement('section')
  respuesta.appendChild(section)
  section.setAttribute('class', 'content-left')

  var container_title = document.createElement('div')
  container_title.setAttribute('id', 'container_title')
  container_title.setAttribute('class', 'container_title')
  container_title.appendChild(document.createElement('h2'))
  container_title.querySelector('h2').innerHTML = 'Izq'

  section.appendChild(container_title)

  function animation(scroll_pos) {
    if (scroll_pos >= 100) {
      container_title.classList.add('slideToDown')
    } else {
      container_title.classList.remove('slideToDown')
    }
    if (scroll_pos >= 400) {
      container_title.classList.remove('slideToDown')
    }
  }

  window.addEventListener('scroll', function(e) {
    scrollVertical = window.scrollY
    // document.title = scrollVertical
      if (!ticking) {
        window.requestAnimationFrame(function() {
          animation(scrollVertical)
          ticking = false;
        })
      }
      ticking = true;
  })
}
