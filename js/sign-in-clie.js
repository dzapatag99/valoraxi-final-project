const name1 = document.querySelector("#nameu")
const pw = document.querySelector("#pw")
const btnLogin = document.querySelector("#btnSign-in")
const btnRegister = document.querySelector("#btnRegister")
const btnLogOut = document.querySelector("#btnLogOut")
const dominioAPIclientes = "http://localhost:5000/Clientes";

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
        insertarCliente()
    });

    btnLogin.addEventListener("click", (e) => {
        e.preventDefault()
        logIn()
        store()

    });
}
function store() {
    localStorage.setItem('name1', name1.value);
    localStorage.setItem('pw', pw.value);
}

function logIn() {
    let userName = document.getElementById('userName').value;
    let userPw = document.getElementById('userPw').value;

    fetch(dominioAPIclientes)
        .then(res=>res.json())
        .then(data=>{
            let loged = false;
            data.forEach(client => {
                if (userName == client.username && userPw == client.password) {      
                    loged = true;
            
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

function insertarCliente() {
    let clientData = {
        "username": document.querySelector("#nameu").value,
        "password": document.querySelector("#pw").value,
        "name": document.querySelector("#nameClient").value
    };
    console.log(clientData)

    fetch(dominioAPIclientes, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(clientData)
    })
        .then(response => {
            response.json();
        })
        .then(response => console.log(response))
        .catch(error => error);

}
