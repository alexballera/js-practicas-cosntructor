// var respuestaHTML = document.querySelector('#respuesta'),
// template = '';
export default () => {

  // Ejemplo AJAX con Fetch
  // fetch('http://jsonplaceholder.typicode.com/photos')
  // .then((response) => {
  //   return response.json()
  // })
  // .then((albums) => {
  //   albums.forEach( elem => {
  //     template +=
  //       `<a href="${elem.url}">
  //         <img src="${elem.thumbnailUrl}"/>
  //       </a>`
  //   })
  //   respuestaHTML.innerHTML = template
  // })

  const getData = () => {
    let respuestaHTML = document.querySelector('#respuesta');
    let template = document.createDocumentFragment();

    respuestaHTML.classList.add('fetch')

    fetch('http://jsonplaceholder.typicode.com/photos?_page=1')
    .then((response) => {
      return response.json()
    })
    .then((albums) => {
      albums.forEach(function (elem) {

        let link = document.createElement("a");
        let href = document.createAttribute("href")
        href.value = elem.url;
        link.setAttributeNode(href);

        let image = document.createElement("img");
        let src = document.createAttribute("src");
        src.value = elem.thumbnailUrl;
        image.setAttributeNode(src);
        link.appendChild(image);

        // let div = document.createElement("div");
        // let text = document.createTextNode(elem.title);
        // div.appendChild(text);

        // let br = document.createElement("br");
        // link.append(br);
        // link.append(div);

        template.appendChild(link);

      })
      respuestaHTML.appendChild(template);
    })
  }
  getData()
}
