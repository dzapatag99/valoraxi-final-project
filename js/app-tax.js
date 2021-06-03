const dominioAPI = "http://localhost:5000/Taxistas";
const btnFilter = document.querySelector("#buscadorTax");

getLista();

btnFilter.addEventListener('keyup', () => getLista());

function getLista() {
  fetch(dominioAPI)
    .then(result => result.json())
    .then(data => {
      let content = document.querySelector('#contenido');
      content.innerHTML = "";
      data.forEach((taxista) => {
        if( !btnFilter || String(taxista.conductor).toLowerCase().includes(btnFilter.value) ){
        content.innerHTML += `
          <div class="card" style="width: 19rem;">
          <img src="${taxista.img}" class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title">${taxista.conductor}</h5>
            <p class="card-text">Numero de Taxista: ${taxista.idCoche}
            </p>
            <p class="card-text">Estrellas: ${getStars(taxista.nombre)}
            </p>
          </div>
          `
        }
      });
    });
}

function getStars(){

}

