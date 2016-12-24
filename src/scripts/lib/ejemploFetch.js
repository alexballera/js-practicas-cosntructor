var respuestaHTML = document.querySelector('#respuesta'),
template = '';
export default () => {

  // Ejemplo AJAX con Fetch
  fetch('http://jsonplaceholder.typicode.com/photos')
  .then((response) => {
    return response.json()
  })
  .then((albums) => {
    albums.forEach( elem => {
      template +=
        `<a href="${elem.url}">
          <img src="${elem.thumbnailUrl}"/>
        </a>`
    })
    respuestaHTML.innerHTML = template
  })
}
