const dominioAPI = "http://localhost:5000/Taxistas";

getLista();

function getLista() {
    fetch(dominioAPI)
        .then(result => result.json())
        .then(data => {
            let content = document.querySelector('#contenido');
            content.innerHTML = "";

            data.forEach( (taxista)=>{
                content.innerHTML +=  `
          <div class="card" style="width: 19rem;">
          <img src="${taxista.img}" class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title">${taxista.conductor}</h5>
            <p class="card-text">Numero de Taxista: ${taxista.idCoche}
            </p>
            <p class="card-text">Estrellas: 
            </p>
          </div>
          `
            });
        });
}