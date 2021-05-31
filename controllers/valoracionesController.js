const Valoraciones = require('../models/Valoraciones');

// Muestra todos los cursos
exports.mostrarValoraciones = async (req, res, next) => {
    try {
        // obtener todos los cursos
        const valoraciones = await Valoraciones.find({});
        res.json(valoraciones);
    } catch (error) {
        console.log(error);
        next();
    }
};

// Muestra un curso en especifico por su ID
exports.mostrarValoraciones = async (req, res, next) => {
    const valoracion = await Valoraciones.findById(req.params.idValoracion);

    if(!valoracion) {
        res.json({mensaje : 'Ese Curso no existe'});
        return next();
    }

    // Mostrar el curso
    res.json(valoracion);
};


// agrega un nuevo ingrediente
exports.nuevoValoracion = async (req, res, next) => {
    const valoracion = new Valoraciones(req.body);
    try {
        // almacenar el registro
        await valoracion.save();
        res.json({ mensaje : 'Se agrego una nueva valoracion' });
    } catch (error) {
        // si hay un error, console.log y next
        res.send(error);
        next();
    }
};

// Actualiza un curso via id
exports.actualizarValoracion = async (req, res, next) => {
    try {
        console.log("datos", req.body);
        const valoracion = await Valoraciones.findOneAndUpdate(
            { _id : req.body.id }, 
            {
                nombreTaxista:req.body.nombreTaxista,
                nombreCliente:req.body.nombreCliente,
                lugarRecogida:req.body.lugarRecogida,
                lugarDestino:req.body.lugarDestino,
                valoracion:req.body.valoracion,
                estrellas:req.body.estrellas,
            }, 
            //Opciones, devolver el nuevo objeto modificado
            {new : true}
        );
        res.json(valoracion);
    } catch (error) {
        res.send(error);
        next();
    }
};

// Elimina un curso via ID
exports.eliminarValoracion = async (req, res, next) => {
    try {
        await Valoraciones.findByIdAndDelete({ _id : req.params.idValoracion });
        res.json({mensaje : 'La valoracion se ha eliminado'});
    } catch (error) {
        console.log(error);
        next();
    }
};
