const Role = require('../models/role');
const User = require('../models/user');

const roleValido =  async ( role = '') => {
    const existeRole = await Role.findOne({ role });
    if ( !existeRole ) {
        throw new Error(`El rol ${ role } no esta registrado en la DB`)
    } 
}

// validar email
// email existe
const existEmail = async ( email = '' ) => {
    const emailExiste = await User.findOne({email});
    if (emailExiste) {
        throw new Error(`El correo ${ email }, ya esta en uso`)
    }
}

const existUserById = async ( id ) => {
    const existUser = await User.findById(id);
    if ( !existUser ) {
        throw new Error(`El ID: ${ id }, no existe`)
    }
}


module.exports = {
    roleValido,
    existEmail,
    existUserById,
}