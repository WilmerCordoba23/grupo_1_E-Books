const {check}=require('express-validator');

const validaciones={
    validacion:[
        check('name')
        .notEmpty().withMessage('Debes ingresar el nombre del producto.').bail()
        .isLength({min:2}).withMessage("EL NOMBRE DEL PRODUCTO DEBE TENER AL MENOS 2 CARACTERES."),
        
        check('description')
        .notEmpty().withMessage('Debes ingresar la descripcion del producto.').bail()
        .isLength({min:2}).withMessage("LA DESCRIPCION DEBE TENER AL MENOS 2 CARACTERES."),
        
        check('price')
        .notEmpty().withMessage('Debes ingresar el precio del producto.'),

    ]
}
module.exports = validaciones;