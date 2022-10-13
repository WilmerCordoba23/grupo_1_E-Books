//modulos, multer, controladores
const express = require('express');
const router=express.Router();
const usersController=require('../../controllers/Api/usersController');

//rutas
router.get('/users',usersController.users);
router.get('/user/:id',usersController.usersdetail);




module.exports = router;