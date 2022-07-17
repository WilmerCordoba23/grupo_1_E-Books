const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


const productscontroller={
    index:(req,res)=>{
        
        res.render("index", {products:products})
    },
    search: (req, res) => {
		let finalProducts = products.filter(product => product.name == req.query.keywords);
		res.render('results',{finalProducts});
	},
    gender: (req, res) => {
		let finalProducts = products.filter(product => product.gender == req.query.keywords);
		res.render('resultsgender',{finalProducts});
	},
    productDetail:(req,res)=>{
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

