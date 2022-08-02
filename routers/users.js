const express = require('express');
const multer=require('multer');
const path = require('path');
const router=express.Router();
const {check}=require('express-validator');
const usersController=require('../controllers/usersController');

//const adminMiddleware=require('../middlewares/adminMiddleware');//para que solo los administradores puedan acceder a las rutas


const storage = multer.diskStorage({ 
	destination: function (req, file, cb) { 
	   cb(null, './public/images/users'); 
	}, 
	filename: function (req, file, cb) { 
       console.log(file)
	   cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`);  } 
  })

  const uploadFile = multer({ storage : storage});
  

  validateRegister=[
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

]

validateLogin=[

	check('usuario')
	.notEmpty().withMessage('DEBES INGRESAR TU EMAIL.').bail()
	.isEmail().withMessage('DEBES INGRESAR UN EMAIL VALIDO.'),
    
	check('password')
	.notEmpty().withMessage('DEBES INGRESAR UNA CONTRASEÑA').bail()
	.isLength({min:6}).withMessage("LA CONTRASEÑA DEBE TENER AL MENOS 6 CARACTERES.")
	
]



router.get('/login',usersController.login);
router.get('/register',usersController.register);
router.get('/usuario',usersController.usuario);
router.post('/users',uploadFile.single('image'),validateRegister,usersController.CreateUsers);
router.post('/loginUsers',validateLogin,usersController.CheckUsers);

//validateLogin
//validateRegister

module.exports = router;