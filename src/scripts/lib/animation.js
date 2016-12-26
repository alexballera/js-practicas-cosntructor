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
  boxLeft.style.backgroundColor = 'blue'
  boxLeft.style.marginBottom = '700px'

  leftSection.appendChild(boxLeft)

  var boxRigth = document.createElement('div')
  boxRigth.setAttribute('id', 'boxRigth')
  boxRigth.setAttribute('class', 'boxRigth')
  boxRigth.style.backgroundColor = 'red'
  boxRigth.style.marginBottom = '700px'

  rigthSection.appendChild(boxRigth)

  function doSomething(scroll_pos) {
    if (scroll_pos >= 100) {
      boxLeft.classList.add('moveToRigth')
      boxRigth.classList.add('moveToLeft')
    } else {
      boxLeft.classList.remove('moveToRigth')
      boxRigth.classList.remove('moveToLeft')
    }
    if (scroll_pos >= 400) {
      boxLeft.classList.remove('moveToRigth')
      boxRigth.classList.remove('moveToLeft')
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
