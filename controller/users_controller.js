const { response, request } = require('express');
const bcrypt = require('bcryptjs');

const User = require('../models/user');

const usersGet = async ( req, res = response) => {
    
    const { limit = 5, desde = 0 } = req.query;
    const query = {state: true};

    const [ total, users ] = await Promise.all([
        User.countDocuments( query ),
        User.find( query )
        .skip( Number( desde ) )
        .limit( Number( limit ) )
    ])

    res.json({
        total,
        users
    });
}

const usersPost = async ( req = request, res = response) => {

    const {name, lastname, email, password, role} = req.body
    const user = new User({name, lastname, email, password, role});

    
    // encriptar password
    const salt = bcrypt.genSaltSync(10);
    user.password = bcrypt.hashSync( password, salt);

    await user.save();

    res.json({
        msg: `Usuario ${name} ${lastname}, creado con exito`,
    });
}

const usersPut = async ( req = request, res = response) => {
    const { id } = req.params;
    const {_id, password, google, email, ...resto} = req.body;

    if ( password ) {
        // encriptar password
        const salt = bcrypt.genSaltSync(10);
        resto.password = bcrypt.hashSync( password, salt)  
    }

    const user = await User.findByIdAndUpdate( id, resto)

    res.json({
        user
    });
}

const usersPatch =  ( req, res = response) => {
    
    res.json({
        msg:'patch API - controller :)'
    });
}

const usersDelete =  ( req, res = response) => {
    
    res.json({
        msg:'delete API - controller :)'
    });
}

module.exports = {
    usersGet,
    usersPost,
    usersPut,
    usersPatch,
    usersDelete,
}