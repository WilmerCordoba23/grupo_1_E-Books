const fs=require('fs');

const fileContents = fs.readFileSync('./data/products.json', 'utf8')
const products = JSON.parse(fileContents)

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

   




};

module.exports=productscontroller;

