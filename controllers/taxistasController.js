const Taxistas = require('../models/Taxistas.js');

// Muestra todos los cursos
exports.mostrarTaxistas = async (req, res, next) => {
    try {
        // obtener todos los cursos
        const taxistas = await Taxistas.find({});
        res.json(taxistas);
    } catch (error) {
        console.log(error);
        next();
    }
};

// Muestra un curso en especifico por su ID
exports.mostrarTaxista = async (req, res, next) => {
    const taxista = await Taxistas.findById(req.params.idTaxista);

    if(!taxista) {
        res.json({mensaje : 'Ese Curso no existe'});
        return next();
    }

    // Mostrar el curso
    res.json(taxista);
};


// agrega un nuevo ingrediente
exports.nuevoTaxista = async (req, res, next) => {
    const taxista = new Taxistas(req.body);
    try {
        // almacenar el registro
        await taxista.save();
        res.json({ mensaje : 'Se agrego una nueva taxista' });
    } catch (error) {
        // si hay un error, console.log y next
        res.send(error);
        next();
    }
};

// Actualiza un curso via id
exports.actualizarTaxista = async (req, res, next) => {
    try {
        console.log("datos", req.body);
        const taxista = await Taxistas.findOneAndUpdate(
            { _id : req.body.id }, 
            req.body,
 
            //Opciones, devolver el nuevo objeto modificado
            {new : true}
        );
        res.json(taxista);
    } catch (error) {
        res.send(error);
        next();
    }
};

// Elimina un curso via ID
exports.eliminarTaxista = async (req, res, next) => {
    try {
        await Taxistas.findByIdAndDelete({ _id : req.params.idTaxista });
        res.json({mensaje : 'La taxista se ha eliminado'});
    } catch (error) {
        console.log(error);
        next();
    }
};

