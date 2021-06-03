const dominioAPIclientes = "http://localhost:5000/Clientes";
const dominioAPItaxistas = "http://localhost:5000/Taxistas";
const dominioAPIvaloraciones = "http://localhost:5000/Valoraciones";
const btnValoracion = document.querySelector("#btnValoracion");

init();

console.log(btnValoracion)

function init(){
    getDinamicTax();
    getDinamicClients();
    btnValoracion.addEventListener('click', () =>{
        insertarValoracion();
        Swal.fire({
            position: "center-center",
            icon: "success",
            title: "Se ha añadido correctamente la valoracion!!",
            showConfirmButton: false,
            timer: 3500,
        });
    })
    getValoraciones();
}



function getDinamicTax(){
    fetch(dominioAPItaxistas)
    .then(result => result.json())
    .then(data =>{
        let taxName = document.querySelector("#taxName");
        data.forEach( tax =>{
            taxName.innerHTML+=`
            <option value="${tax.conductor}">${tax.conductor}</option>
            `
        })
    })
}

function getDinamicClients(){
    fetch(dominioAPIclientes)
    .then(result => result.json())
    .then(data =>{
        let cliName = document.querySelector("#cliName");
        data.forEach( clie =>{
            cliName.innerHTML+=`
            <option value="${clie.name}">${clie.name}</option>
            `
        })
    })
}

function insertarValoracion() {
    let valoracionData = {
        "nombreTaxista": document.querySelector("#taxName").value,
        "nombreCliente": document.querySelector("#cliName").value,
        "lugarRecogida": document.querySelector("#fromSite").value,
        "lugarDestino": document.querySelector("#toSite").value,
        "valoracion": document.querySelector("#clieValoration").value,
        "estrellas": document.querySelector("#stars").value,
    };
    console.log(valoracionData)

    fetch(dominioAPIvaloraciones, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(valoracionData)
    })
        .then(response => {
            response.json();
        })
        .then(response => console.log(response))
        .catch(error => console.log(error));

}

function getValoraciones(){
    fetch(dominioAPIvaloraciones)
    .then(result => result.json())
    .then(data =>{
        let contenidoValoraciones = document.querySelector("#contenido-valoracion")
        data.forEach( valoraciones =>{
            contenidoValoraciones.innerHTML+=`
            <div class="card text-white bg-dark mb-3 m-2" style="max-width: 18rem;">
                <div class="card-header">Taxista: ${valoraciones.nombreTaxista}</div>
                <div class="card-body">
                    <h5 class="card-title">Cliente: ${valoraciones.nombreCliente}</h5>
                    <p class="card-text">Recogida: ${valoraciones.lugarRecogida}</p>
                    <p class="card-text">Destino: ${valoraciones.lugarDestino}</p>
                    <p class="card-text">valoracion: ${valoraciones.valoracion}</p>
                </div>
            </div>
            `
        })
    })
}