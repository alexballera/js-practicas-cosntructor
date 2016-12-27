var respuesta = document.getElementById('respuesta');

export default () => {

  var showTitle = () => {
    var scrollVertical = 0;
    var ticking = false;
    var section = document.createElement('section')
    respuesta.appendChild(section)
    section.setAttribute('class', 'content_section')

    var container_title = document.createElement('div')
    container_title.setAttribute('id', 'container_title')
    container_title.setAttribute('class', 'container_title')
    container_title.appendChild(document.createElement('h2'))

    section.appendChild(container_title)

    var title = container_title.querySelector('h2')
    title.innerHTML = 'Título'
    title.setAttribute('class', 'title')

    function animation(scroll_pos) {
      if (scroll_pos >= 100 && scroll_pos <= 300) {
        title.classList.add('slideToDown')
      } else {
        title.classList.remove('slideToDown')
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
  showTitle()
}
