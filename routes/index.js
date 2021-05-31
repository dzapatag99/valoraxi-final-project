const express = require('express');
const router = express.Router();

const valoracionesController = require('../controllers/valoracionesController');
const taxistasController = require('../controllers/taxistasController');
const clientesController = require('../controllers/clientesController');

module.exports = function() {
     
    // Muestra todos los cursos
    router.get('/Valoraciones',valoracionesController.mostrarValoraciones);

    // muestra un Curso en especifico por su ID
    router.get('/Valoraciones/:idValoracion',  valoracionesController.mostrarValoracion);

    // nuevo Curso
    router.post('/Valoraciones', valoracionesController.nuevoValoracion);    

    // Actualizar Cursos
    router.put('/Valoraciones', valoracionesController.actualizarValoracion);

    // Eliminar Cursos
    router.delete('/Valoraciones/:idValoracion', valoracionesController.eliminarValoracion);

    //TABLA TAXISTAS

    router.get('/Taxistas', taxistasController.mostrarTaxistas);

    // muestra un Taxista en especifico por su ID
    router.get('/Taxistas/:idTaxista',  taxistasController.mostrarTaxista);

    // nuevo Taxista
    router.post('/Taxistas', taxistasController.nuevoTaxista);    

    // Actualizar Taxista
    router.put('/Taxistas', taxistasController.actualizarTaxista);

    // Eliminar Taxista
    router.delete('/Taxistas/:idTaxista', taxistasController.eliminarTaxista);

        //TABLA Clientes

        router.get('/Clientes', clientesController.mostrarClientes);

        // muestra un Cliente en especifico por su ID
        router.get('/Clientes/:idCliente',  clientesController.mostrarCliente);
    
        // nuevo Cliente
        router.post('/Clientes', clientesController.nuevoCliente);    
    
        // Actualizar Cliente
        router.put('/Clientes', clientesController.actualizarCliente);
    
        // Eliminar Cliente
        router.delete('/Clientes/:idCliente', clientesController.eliminarCliente);

    return router;
};
