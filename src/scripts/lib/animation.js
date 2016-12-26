var respuesta = document.getElementById('respuesta')

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

  var boxRigth = document.createElement('div')
  boxRigth.setAttribute('id', 'box_rigth')
  boxRigth.setAttribute('class', 'box_rigth')
  boxRigth.style.backgroundColor = 'red'
  boxRigth.appendChild(document.createElement('h2'))
  boxRigth.querySelector('h2').innerHTML = 'Der'

  rigthSection.appendChild(boxRigth)

}
