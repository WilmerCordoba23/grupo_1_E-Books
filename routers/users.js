//modulos, multer, controladores
const express = require('express');
const router=express.Router();
const validaciones=require("../middlewares/UserMiddleware");
const Multer=require("../middlewares/MulteruserMiddlewares");
const usersController=require('../controllers/usersController');

//rutas
router.get('/login',usersController.login);
router.get('/register',usersController.register);
router.get('/usuario',usersController.usuario);
router.post('/users',Multer/* ,validaciones.Register */,usersController.CreateUsers);
router.post('/loginUsers',validaciones.Login,usersController.CheckUsers);
router.post('/logOut', usersController.logOut)



module.exports = router;