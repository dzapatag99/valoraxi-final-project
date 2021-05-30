const express = require('express');
const router = express.Router();

const valoracionesController = require('../controllers/valoracionesController');

module.exports = function() {
     
    // Muestra todos los cursos
    router.get('/Valoraciones',valoracionesController.mostrarValoraciones);

    // muestra un Curso en especifico por su ID
    router.get('/Valoraciones/:idValoracion',  valoracionesController.mostrarValoraciones);

    // nuevo Curso
    router.post('/Valoraciones', valoracionesController.nuevoValoraciones);    

    // Actualizar Cursos
    router.put('/Valoraciones', valoracionesController.actualizarValoraciones);

    // Eliminar Cursos
    router.delete('/Valoraciones/:idValoracion', valoracionesController.eliminarValoraciones);

    return router;
};
