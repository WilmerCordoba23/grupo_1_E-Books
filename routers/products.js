const express = require('express');
const router=express.Router();
const multer=require('multer');
const path = require('path');
const productscontroller=require('../controllers/productsController');

const storage = multer.diskStorage({ 
	destination: function (req, file, cb) { 
	   cb(null, './public/images/products'); 
	}, 
	filename: function (req, file, cb) { 
        console.log(file)
	   cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`);  } 
  })

  const uploadFile = multer({ storage });

router.get('/',productscontroller.index);

router.get('/search', productscontroller.search); 

router.get('/gender', productscontroller.gender); 

router.get('/productDetail/:id',productscontroller.productDetail);

router.get('/productCart',productscontroller.productCart);

router.get('/productRegister',productscontroller.productRegister);

router.post('/products',uploadFile.single('image'),productscontroller.Createproducts);

router.get('/productModify/:id',productscontroller.productModify);

router.put('/productEdit/:id', uploadFile.single('image'),productscontroller.modify); 

router.delete('/delete/:id', productscontroller.destroy); 


module.exports = router;