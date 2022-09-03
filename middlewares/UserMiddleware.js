const {check}=require('express-validator');

const validaciones={
    Register:[
        check('nombre')
        .notEmpty().withMessage('DEBES INGRESAR TU NOMBRE.').bail()
        .isLength({min:2}).withMessage("EL NOMBRE DEBE TENER AL MENOS 2 CARACTERES."),
        
        check('apellido')
        .notEmpty().withMessage('DEBES INGRESAR TU APELLIDO.').bail()
        .isLength({min:2}).withMessage("EL APELLIDO DEBE TENER AL MENOS 2 CARACTERES."),
        
        check('usuario')
        .notEmpty().withMessage('DEBES INGRESAR TU EMAIL.').bail()
        .isEmail().withMessage('DEBES INGRESAR UN EMAIL VALIDO.'),
        
        check('password')
        .notEmpty().withMessage('DEBES INGRESAR UNA CONTRASEÑA').bail()
        .isLength({min:6}).withMessage("LA CONTRASEÑA DEBE TENER AL MENOS 6 CARACTERES."),
    
        check('verificaPassword')
        .notEmpty().withMessage('DEBES INGRESAR DE NUEVO TU CONTRASEÑA').bail()
        .isLength({min:6}).withMessage("LA CONTRAEÑA DEBE TENER AL MENOS 6 CARACTERES."),
    
    ], 
    Login:[
    
        check('usuario')
        .notEmpty().withMessage('DEBES INGRESAR TU EMAIL.').bail()
        .isEmail().withMessage('DEBES INGRESAR UN EMAIL VALIDO.'),
        
        check('password')
        .notEmpty().withMessage('DEBES INGRESAR UNA CONTRASEÑA').bail()
        .isLength({min:6}).withMessage("LA CONTRASEÑA DEBE TENER AL MENOS 6 CARACTERES.")
        
    ]
}
module.exports = validaciones;