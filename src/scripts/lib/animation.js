var respuesta = document.getElementById('respuesta')
var scrollVertical = 0;
var ticking = false;

// http://javascript.info/tutorial/animation

export default () => {

  var leftSection = document.createElement('section')
  var rigthSection = document.createElement('section')
  respuesta.appendChild(leftSection)
  respuesta.appendChild(rigthSection)
  leftSection.setAttribute('class', 'content_left')
  rigthSection.setAttribute('class', 'content_rigth')

  var boxLeft = document.createElement('div')
  boxLeft.setAttribute('id', 'box_left')
  boxLeft.setAttribute('class', 'box_left')
  boxLeft.style.backgroundColor = 'blue'
  boxLeft.appendChild(document.createElement('h2'))
  boxLeft.querySelector('h2').innerHTML = 'Izq'

  leftSection.appendChild(boxLeft)

  leftSection.addEventListener('click', showToRigth)

  function showToRigth() {
    boxLeft.animate([
      // keyframes
      { // Desde
        opacity: 0,
        backgroundColor: 'red',
        transform: 'translateX(-300px)'
      },
      { // Hasta
        opacity: 1,
        backgroundColor: 'blue',
        transform: 'translateX(0px)'
      }
    ], {
      // timing options
      duration: 1000,
    })
  }
  function hideToLeft() {
    boxLeft.animate([
      // keyframes
      { // Desde
        opacity: 1,
        backgroundColor: 'red',
        transform: 'translateX(0px)'
      },
      { // Hasta
        opacity: 0,
        backgroundColor: 'blue',
        transform: 'translateX(-300px)'
      }
    ], {
      // timing options
      duration: 1000
    })
  }

  function hide() {
    boxLeft.style.display = 'none'
  }

  function doSomething(scroll_pos) {
    if (scroll_pos < 102) {
      boxLeft.style.display = 'none'
    } else if (scroll_pos === 102) {
      boxLeft.style.display = 'block'
      console.log(scroll_pos)
      showToRigth()
    } else if (scroll_pos === 202) {
      hideToLeft()
    // } else {
    //   boxLeft.classList.remove('slideToRigth')
    //   boxRigth.classList.remove('slideToLeft')
    // }
    // if (scroll_pos >= 400) {
    //   boxLeft.classList.remove('slideToRigth')
    //   boxRigth.classList.remove('slideToLeft')
    // }
  }

  window.addEventListener('scroll', function(e) {
    scrollVertical = window.scrollY
    document.title = scrollVertical
      if (!ticking) {
        window.requestAnimationFrame(function() {
          doSomething(scrollVertical)
          ticking = false;
        })
      }
      ticking = true;
  })

  var boxRigth = document.createElement('div')
  boxRigth.setAttribute('id', 'box_rigth')
  boxRigth.setAttribute('class', 'box_rigth')
  boxRigth.style.backgroundColor = 'red'
  boxRigth.appendChild(document.createElement('h2'))
  boxRigth.querySelector('h2').innerHTML = 'Der'

  // rigthSection.appendChild(boxRigth)

}
