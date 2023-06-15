const {Router} = require('express');
const { check } = require('express-validator');

const { validarCampos } = require('../middlewares/validar_campos');
const {
    roleValido, 
    existEmail, 
    existUserById 
} = require('../helpers/db_validators');
const { 
    usersGet,
    usersPost, 
    usersPut, 
    usersDelete, 
    usersPatch 
} = require('../controller/users_controller');

const router = Router();

router.get( '/', usersGet );

router.post( '/',[
    check( 'name', 'El nombre es obligatorio' ).not().isEmpty(),
    check( 'lastname', 'El apellido es obligatorio' ).not().isEmpty(),
    check( 'email', 'El correo no es válido' ).isEmail(),
    check( 'email').custom( existEmail ),
    check( 'password', 'La contraseña debe terner minimo 6 letras' ).isLength({ min : 6 }),
    // check( 'role', 'No es un rol válido' ).isIn( ['ADMIN_ROLE', 'USER_ROLE'] ),
    check( 'role' ).custom( roleValido ),
    validarCampos
], usersPost );

router.put( '/:id', [
    check('id', 'No es un ID valido').isMongoId(),
    check('id').custom( existUserById ),
    check( 'role' ).custom( roleValido ),
    validarCampos
], usersPut );

router.delete( '/', usersDelete );

router.patch( '/', usersPatch );

module.exports = router