const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


const productscontroller={
    index:(req,res)=>{
        
        res.render("index")
    },
    productDetail:(req,res)=>{
        
        res.render("productDetail")
    },
    productCart:(req,res)=>{
        
        res.render("productCart")
    },
    productRegister:(req,res)=>{
        res.render("productRegister")
    },
    productModify:(req,res)=>{
        res.render("productModify")
    },
    Createproducts:
    (req, res) => {
		let newProduct = {
			id: products[products.length - 1].id + 1,
			...req.body,
			image:req.file.filename,
            imagealt:req.file.originalname
		};
        products.push(newProduct)
		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '));
		res.redirect("/");
    }
};

module.exports=productscontroller;

