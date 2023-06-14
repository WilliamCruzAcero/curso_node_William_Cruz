const { response, request } = require('express');

const User = require('../models/user')

const usersGet =  ( req, res = response) => {
    
    res.json({
        msg:'get API - controller :)'
    });
}

const usersPost = async ( req = request, res = response) => {

    const {name, lastname, email, password, role} = req.body
    const user = new User({name, lastname, email, password, role});

    await user.save();

    res.json({
        user
    });
}

const usersPut =  ( req = request, res = response) => {
    const { id } = req.params
    res.json({
        msg:'put API - controller :)',
        id
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