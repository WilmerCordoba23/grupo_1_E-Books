const {check}=require('express-validator');

const validaciones={
    validacion:[
        check('name')
        .notEmpty().withMessage('DEBES INGRESAR EL NOMBRE DEL PRODUCTO.').bail()
        .isLength({min:2}).withMessage("EL NOMBRE DEL PRODUCTO DEBE TENER AL MENOS 2 CARACTERES."),
        
        check('description')
        .notEmpty().withMessage('DEBES INGRESAR LA DESCRIPCION DEL PRODUCTO.').bail()
        .isLength({min:2}).withMessage("LA DESCRIPCION DEBE TENER AL MENOS 2 CARACTERES."),
        
        check('price')
        .notEmpty().withMessage('DEBES INGRESAR EL PRECIO DEL PRODUCTO.')
    
    ]
}
module.exports = validaciones;