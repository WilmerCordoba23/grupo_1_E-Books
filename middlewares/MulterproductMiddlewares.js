const multer=require('multer');
const path = require('path');
const storage = multer.diskStorage({ 
	destination: function (req, file, cb) { 
	   cb(null, './public/images/products'); 
	}, 
	filename: function (req, file, cb) { 
       console.log(file)
	   cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`);  } 
  })

  const uploadFile = multer({ storage : storage});
  
 module.exports= uploadFile.single('image');