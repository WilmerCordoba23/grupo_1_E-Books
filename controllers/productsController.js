const fs=require('fs');
const fileContents = fs.readFileSync('./data/products.json', 'utf8')
const products = JSON.parse(fileContents)
const fs = require('fs');
const path = require('path');

const productscontroller={
    index:(req,res)=>{
        const fileContents = fs.readFileSync('./data/products.json', 'utf8')
        const products = JSON.parse(fileContents)
        res.render("index", {products:products})

    },
    productDetail:(req,res)=>{
    const fileContents = fs.readFileSync('./data/products.json', 'utf8')
    const products = JSON.parse(fileContents)
    let id = req.params.id
    let product = products.find(products => products.id == id)
    res.render("productDetail" ,{product:product})
    
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

