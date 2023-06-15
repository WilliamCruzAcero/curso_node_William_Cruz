const mongoose = require('mongoose');

const conectDB = async () => {
    try {
        await mongoose.connect( process.env.MONGO_DB, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // useCreateIndex: true,
            // useFindAndModify: false,
            serverSelectionTimeoutMS: 60 * 1000,
        })
        console.log('Base de datos conectada');
    } catch (error) {
        console.log(error);
        throw new Error('Error en la conexion a la base de datos');
    }
}

module.exports = {
    conectDB
}