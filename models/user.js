const { Schema, model} = require('mongoose');

const UserSchema = Schema({
    name: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },

    lastname: {
        type: String,
        required: [true, 'El apellido es obligatorio']
    },
    
    email: {
        type: String,
        required: [true, 'El correo es obligatorio'],
        unique: true

    },

    password: {
        type: String,
        required: [true, 'La contraseña es obligatorio']
    },

    avatar: {
        type: String,
        
    },

    role: {
        type: String,
        required: true,
        emun: ['ADMIN_ROLE', 'USER_ROLE']
    },

    state: {
        type: Boolean,
        default: true
    },

    google:{
        type: Boolean,
        default: false
    },

});

UserSchema.methods.toJSON = function() {
    const { __v, password, ...User } = this.toObject();
    return User
}

module.exports = model( 'User', UserSchema);