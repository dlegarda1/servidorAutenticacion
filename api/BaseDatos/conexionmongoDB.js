const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://diegotecnoacademia:anaisabel2719@basedatos.6l7ekgh.mongodb.net/?retryWrites=true&w=majority&appName=BaseDatos")
            .then(() => console.log('Conexión a MongoDB establecida'))            
    }
    catch(err) {
        console.error('Error al conectar a MongoDB:', err);
    }
}

module.exports = connectDB;