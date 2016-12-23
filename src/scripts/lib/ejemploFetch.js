export default () => {
  var respuestaHTML = document.querySelector('#ejemplo-fetch'),
  template = '';

  fetch('http://jsonplaceholder.typicode.com/photos')
  .then((response) => {
    return response.json()
  })
  .then((albums) => {
    albums.forEach(function (elem) {
      template +=
        `<a href="${elem.url}">
          <img src="${elem.thumbnailUrl}"/>
        </a>`
    })
    respuestaHTML.innerHTML = template
  })
}
