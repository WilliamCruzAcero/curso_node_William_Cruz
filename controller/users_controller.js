const { response, request } = require('express');

const usersGet =  ( req, res = response) => {
    
    res.json({
        msg:'get API - controller :)'
    });
}

const usersPost =  ( req = request, res = response) => {
    const { name, lastname } = req.body
    res.json({
        msg:'post API - controller :)',
        name,
        lastname
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