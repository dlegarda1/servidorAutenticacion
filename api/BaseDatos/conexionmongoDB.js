const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const connectDB = async () => {
    //vamos a cargar la variable de entorno de conexion a mongoDB
     const MongoDB=process.env.MONGO_URI||'mongodb://localhost:27017/BaseUserName';
     console.log("ruta de variable de entorno: "+process.env.MONGO_URI);
     console.log("ruta conexion: "+MongoDB);
    try {
        await mongoose.connect(MongoDB)
            .then(() => console.log('Conexión a MongoDB establecida'))            
    }
    catch(err) {
        console.error('Error al conectar a MongoDB:', err);
    }
}

module.exports = connectDB;