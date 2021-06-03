const name1 = document.querySelector("#nameu")
const pw = document.querySelector("#pw")
const btnLogin = document.querySelector("#btnSign-in")
const btnRegister = document.querySelector("#btnRegister")
const btnLogOut = document.querySelector("#btnLogOut")
const dominioAPItaxistas = "http://localhost:5000/Taxistas";

eventSignInListeners()

function eventSignInListeners() {
    btnRegister.addEventListener("click", (e) => {
        e.preventDefault()
        Swal.fire({
            position: "center-center",
            icon: "success",
            title: `You are registered like: " ${name1.value} " and your password is: " ${pw.value} ", now you can login`,
            showConfirmButton: false,
            timer: 3500,
        });
        insertarTaxista();
    });

    btnLogin.addEventListener("click", (e) => {
        e.preventDefault()
        logIn()

    });
}
function store(user, password) {
    localStorage.setItem('name1', user);
    localStorage.setItem('pw', password);
}

function logIn() {
    let userName = document.getElementById('userName').value;
    let userPw = document.getElementById('userPw').value;

    fetch(dominioAPItaxistas)
        .then(res=>res.json())
        .then(data=>{
            let loged = false;
            data.forEach(tax => {
                if (userName == tax.username && userPw == tax.password) {      
                    loged = true;
                    store(tax.username, tax.password);
                }
            });
            if (loged == true){
                alert("You are loged");
                window.location.href="./index.html";
            }else{
                Swal.fire({
                    position: "center-center",
                    icon: "error",
                    title: `ERROR, INCORRECT USER OR PASSWORD`,
                    showConfirmButton: false,
                    timer: 3500,
                  });
            }
        })
    
}

function insertarTaxista() {
    let taxData = {
        "idCoche": document.querySelector("#numCoche").value,
        "username": document.querySelector("#nameu").value,
        "password": document.querySelector("#pw").value,
        "conductor": document.querySelector("#driver").value,
        "añoRegistro": document.querySelector("#registerDate").value,
        "DNI": document.querySelector("#dni").value,
        "img": "./img/tax5.jpg",
        "sitioFrecuentado": document.querySelector("#frecuentedSite").value
    };

   fetch(dominioAPItaxistas, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },

        body: JSON.stringify(taxData)
    })
        .then(response => {
            response.json();
        })
        .then(response => console.log(response))
        .catch(error => error);
        
}

