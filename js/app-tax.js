const dominioAPI = "http://localhost:5000/Taxistas";
const dominioAPIvaloraciones = "http://localhost:5000/Valoraciones";
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
            <p class="card-text">Estrellas: ${getStars(taxista.conductor)}
            </p>
          </div>
          `
        }
      });
    });
}

function getStars(taxista){
  fetch(dominioAPIvaloraciones)
    .then(result => result.json())
    .then(data => {
        let count = 0;
        let avg = 0;
        let estrellas = data.filter( usuario => usuario.nombreTaxista == taxista);
        if(estrellas.length > 0){
          estrellas.forEach(element =>{
            count += element.estrellas;
          })
          avg = count / estrellas.length;
          
        }else{
          return "No tiene valoracion"
        }
        console.log(avg)
        
    });
    

}

function pintarEstrellas(){

}