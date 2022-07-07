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

router.get('/productDetail',productscontroller.productDetail);

router.get('/productCart',productscontroller.productCart);

router.get('/productRegister',productscontroller.productRegister);
router.post('/products',uploadFile.single('image'),productscontroller.Createproducts);

router.get('/productModify',productscontroller.productModify);


module.exports = router;