var express = require('express')
const { body, validationResult, check, oneOf } = require('express-validator');
const { validarCampos} = require('../middlewares/validar-campos');
var user = require('../models/index')
const UsuarioController = require('../controllers/users')
const { emailExiste, existeUsuarioPorId } = require('../helpers/db-validatiors')
const bcryptjs = require('bcryptjs')

// FIXME: quemas esta usando o express-validator? 

const validateCreateUser = [
      // TODO: validacion de firstName
    check('firstName', 'Campo no puede is vacio').exists(), // todo: campo no puede is vacio
    check('firstName', 'El nombre debe de tener minimo 2 caracteres y maximo 30 caracteres ').isLength({ min: 3, max: 30 }), // todo: se valida que el nombre tenga minimo 2 caracteres y maximo 30
    check('firstName', 'No se permiten caracteres especiales ni numeros').isAlpha('es-ES', { ignore: ' ' }), // todo: no cacteres especiales latinos
    
    // TODO: validacion de lastName   
    
    check('lastName', 'Last name is required').not().isEmpty(), 
    check('lastName', 'Campo no puede is vacio').exists(), // todo: campo no puede is vacio
    check('lastName', 'El apellido debe de tener minimo 2 caracteres y maximo 30 caracteres').isLength({ min: 3, max: 30 }), // todo: se valida que el nombre tenga minimo 2 caracteres y maximo 30
    check('lastName', 'No se permiten caracteres especiales ni numeros').isAlpha('es-ES', { ignore: ' ' }), // todo: no cacteres especiales latinos
    

    //TODO: validacion de Password

    check('password', 'The password must have at least 6 characters').isLength({ min: 6 }), 
    check('password', 'The password must have at least one number').matches(/\d/),  //VALIDA QUE ALMENOS TENGA UN NUMERO
    check('password', 'The password must have at least one uppercase letter').matches(/[A-Z]/), //VALIDA QUE ALMENOS TENGA UNA LETRA MAYUSCULA
    check('password', 'Password must have at least one lowercase letter').matches(/[a-z]/), //VALIDA QUE ALMENOS TENGA UNA LETRA MINUSCULA
    check('password', 'The password must have at least one special character').matches(/[!@#$%^&*(),.?":{}|<>]/), 

    //TODO: validacion de email

    check('email', 'invalid email').isEmail(), //VALIDA QUE SEA UN EMAIL VALIDO
    check('email').custom(emailExiste), //VALIDA QUE NO EXISTA UN EMAIL IGUAL
    
   
    validarCampos  
]


module.exports = {
    validateCreateUser
}

