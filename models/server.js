const express = require('express');
const cors = require('cors');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT || 8080;
        this.users = '/users';

        // middlewares
        this.middlewares();
        this.routes();
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
