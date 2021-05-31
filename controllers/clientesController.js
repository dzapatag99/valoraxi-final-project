const Clientes = require('../models/Clientes');

// Muestra todos los cursos
exports.mostrarClientes = async (req, res, next) => {
    try {
        // obtener todos los cursos
        const clientes = await Clientes.find({});
        res.json(clientes);
    } catch (error) {
        console.log(error);
        next();
    }
};

// Muestra un curso en especifico por su ID
exports.mostrarCliente = async (req, res, next) => {
    const cliente = await Clientes.findById(req.params.idCliente);

    if(!cliente) {
        res.json({mensaje : 'Ese Curso no existe'});
        return next();
    }

    // Mostrar el curso
    res.json(cliente);
};


// agrega un nuevo ingrediente
exports.nuevoCliente = async (req, res, next) => {
    const cliente = new Clientes(req.body);
    try {
        // almacenar el registro
        await cliente.save();
        res.json({ mensaje : 'Se agrego una nueva cliente' });
    } catch (error) {
        // si hay un error, console.log y next
        res.send(error);
        next();
    }
};

// Actualiza un curso via id
exports.actualizarCliente = async (req, res, next) => {
    try {
        console.log("datos", req.body);
        const cliente = await Clientes.findOneAndUpdate(
            { _id : req.body.id }, 
            {
                nombreTaxista:req.body.nombreTaxista,
                nombreCliente:req.body.nombreCliente,
                lugarRecogida:req.body.lugarRecogida,
                lugarDestino:req.body.lugarDestino,
                cliente:req.body.cliente,
                estrellas:req.body.estrellas,
            }, 
            //Opciones, devolver el nuevo objeto modificado
            {new : true}
        );
        res.json(cliente);
    } catch (error) {
        res.send(error);
        next();
    }
};

// Elimina un curso via ID
exports.eliminarCliente = async (req, res, next) => {
    try {
        await Clientes.findByIdAndDelete({ _id : req.params.idCliente });
        res.json({mensaje : 'La cliente se ha eliminado'});
    } catch (error) {
        console.log(error);
        next();
    }
};