const dominioAPIclientes = "http://localhost:5000/Clientes";
const dominioAPItaxistas = "http://localhost:5000/Taxistas";

init()

function init(){
    getDinamicTax();
    getDinamicClients()
}

function getDinamicTax(){
    fetch(dominioAPItaxistas)
    .then(result => result.json())
    .then(data =>{
        console.log(data)
        let taxName = document.querySelector("#taxName");
        data.forEach( tax =>{
            taxName.innerHTML+=`
            <option value="${tax._id}">${tax.conductor}</option>
            `
        })
    })
}

function getDinamicClients(){
    fetch(dominioAPIclientes)
    .then(result => result.json())
    .then(data =>{
        console.log(data)
        let cliName = document.querySelector("#cliName");
        data.forEach( clie =>{
            cliName.innerHTML+=`
            <option value="${clie._id}">${clie.name}</option>
            `
        })
    })
}