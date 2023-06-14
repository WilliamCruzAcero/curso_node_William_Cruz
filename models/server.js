const express = require('express');
const cors = require('cors');

const {conectDB} = require('../conectDB/conectDB');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT || 8000;
        this.users = '/users';

        // conectar base de datos
        this.conectarDB();

        // middlewares
        this.middlewares();
        this.routes();
    }

    async conectarDB() {
       await conectDB(); 
    }

    middlewares() {
        // cors
        this.app.use( cors() );
        // Lectura y paseo del body
        this.app.use( express.json() );
        // Directorio publico
        this.app.use( express.static('public') );
    }

    routes() {
        this.app.use( this.users, require('../routes/user_routes'))
         
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en el puerto: ${this.port}`)
        });
    }
}

module.exports = Server;
