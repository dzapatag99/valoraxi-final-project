const dominioAPItaxistas = "http://localhost:5000/Taxistas";

init();
function init(){
    comprobarTaxistas()
}

function comprobarTaxistas() {
    fetch(dominioAPItaxistas)
        .then(result => result.json())
        .then(data => {
            const storedName = localStorage.getItem('name1');
            let navbar = document.querySelector('#navbar');
            data.forEach(tax => {
                if (storedName == tax.username) {

                    navbar.innerHTML = "";
                    navbar.innerHTML = `
                        <nav class="navbar navbar-expand-lg navbar-light bg-transparent position-relative w-100" id="navbar">
                            <div class="container">
                            <a class="navbar-brand fw-bold" href="index.html">Valoraxi PMI<span class="text-primary">.</span></a>
                            <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <i class="fas fa-bars lead text-dark"></i>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li class="nav-item d-flex">
                                    <a class="nav-link align-self-center text-dark" aria-current="page" href="taxistas.html">Taxistas</a>
                                </li>
                                <li class="nav-item d-flex">
                                    <a class="nav-link align-self-center text-dark" href="valoraciones.html">Valoraciones</a>
                                </li>
                                <li class="nav-item me-2">
                                    <a class="btn btn-light" href="sign-in-clie.html">Accede como Cliente</a>
                                </li>
                                <li class="nav-item">
                                    <a class="btn btn-warning" href="sign-in-tax.html">${tax.username} <button type="button" class="btn btn-danger bi bi-box-arrow-left" onClick="logOut()"><i class="fas fa-sign-out-alt"></i></button></a>
                                </li>
                                </ul>
                            </div>
                            </div>
                        </nav>`
                }

            });
            


        });
}

function logOut() {
    localStorage.removeItem('name1');
    localStorage.removeItem('pw');
    location.reload();
    window.location.href = "./sign-in-clie.html";
}