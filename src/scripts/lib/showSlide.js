var respuesta = document.getElementById('respuesta')
var scrollVertical = 0;
var ticking = false;

export default () => {

  var leftSection = document.createElement('section')
  var rigthSection = document.createElement('section')
  respuesta.appendChild(leftSection)
  respuesta.appendChild(rigthSection)
  leftSection.setAttribute('class', 'content-left')
  rigthSection.setAttribute('class', 'content-rigth')

  var boxLeft = document.createElement('div')
  boxLeft.setAttribute('id', 'boxLeft')
  boxLeft.setAttribute('class', 'boxLeft')
  // boxLeft.style.backgroundColor = 'blue'
  boxLeft.appendChild(document.createElement('h2'))
  boxLeft.querySelector('h2').innerHTML = 'Izq'

  leftSection.appendChild(boxLeft)

  var boxRigth = document.createElement('div')
  boxRigth.setAttribute('id', 'boxRigth')
  boxRigth.setAttribute('class', 'boxRigth')
  // boxRigth.style.backgroundColor = 'red'
  boxRigth.appendChild(document.createElement('h2'))
  boxRigth.querySelector('h2').innerHTML = 'Der'

  rigthSection.appendChild(boxRigth)

  function animation(scroll_pos) {
    if (scroll_pos >= 100) {
      boxLeft.classList.add('slideToRigth')
      boxRigth.classList.add('slideToLeft')
    } else {
      boxLeft.classList.remove('slideToRigth')
      boxRigth.classList.remove('slideToLeft')
    }
    if (scroll_pos >= 400) {
      boxLeft.classList.remove('slideToRigth')
      boxRigth.classList.remove('slideToLeft')
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
