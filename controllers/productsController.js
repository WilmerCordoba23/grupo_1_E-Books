const { name } = require('ejs');
const { format } = require('mysql2');
const db = require('../database/models');
const product = require('../database/models/product');
const { search } = require('./productosController');
const sequelize = db.sequelize;
const Op = sequelize.Op;
const { validationResult } = require('express-validator');
const { Association } = require('sequelize');

const aleatorio = (array) => {
    array.sort(()=> Math.random() - 0.5);
}

const productscontroller = {
    index: (req, res) => {
        db.product.findAll({include: {
            all: true,
            nested: true
        }})
            .then(product => {
                
                res.render('index', {product})
                //console.log(product)
            })
            
    },
    list: (req, res) => { //listar todos los productos, no funcional
        db.product.findAll()
            .then(product => {
                res.render('productList.ejs', {product})
            })
    },
    productDetail: (req, res) => {
        db.product.findByPk(
            req.params.id,{
                include : [{
                    all: true,
                    nested: true}] })
        
            .then(product => {
                res.render('productDetail.ejs', {product});
                console.log(product)
            });
    },
    productCart:(req,res)=>{
        
        db.product.findAll({
            include : [{
                all: true,
                nested: true}] })
        .then(products=>{
            aleatorio(products);
            res.render("productCart",{products})
            console.log(products);
        })
        
    },
    Createproducts: (req,res) =>{ /* Guardado min 31:50  sino funciona es probable que sea porque en el playground tiene el function*/
    let genres =db.genre.findAll();
    let categorys=db.category.findAll();
    let products=db.product.findAll({include: { all: true,nested: true}});     
    console.log(products)
    let imagen = "";
    let errors=validationResult(req)
        

    if(!errors.isEmpty()){
        Promise.all([genres, categorys, products])
    .then(([genre, category, product]) => {
        res.render("productRegister",{errors:errors.array(), old:req.body,product,genre,category})    
    })  
    }
    else
    {
        
        if (req.file != undefined) {
            imagen=req.file.filename;
        }
        console.log(imagen)
        db.product.create({
                title: req.body.name,
                description: req.body.description,
                image: imagen,
                genre_id: req.body.gender,
                category_id: req.body.category,
                /* format_id: req.body.format, */
                price: req.body.price
            })
            res.redirect('/')  
            console.log({
                title: req.body.name,
                description: req.body.description,
                image: imagen,
                genre_id: req.body.gender,
                category_id: req.body.category,
                /* format_id: req.body.format, */
                price: req.body.price
            })
    }
    
    },
    productRegister(req, res){
        let genres =db.genre.findAll();
        let categorys=db.category.findAll();
        let products=db.product.findAll({include: { all: true,nested: true}});
        
             
        Promise.all([genres, categorys, products])
        .then(([genre, category, product]) => {
            res.render('productRegister.ejs', {product,genre,category})
        })  
    },
    productModify(req, res){
        let genres =db.genre.findAll();
        let categorys=db.category.findAll();
        let products=db.product.findByPk(req.params.id);
        
             
        Promise.all([genres, categorys, products])
        .then(([genre, category, product]) => {
            res.render('productModify.ejs', {product,genre,category})
        })  
           
    },
    modify: (req,res) =>{ 
        let errors=validationResult(req)

        //cambiar imagenes, si no se envia la imagen sigue siendo la pasada
        let imagen =req.body.imagereserva;
        if (req.file != undefined) {
            imagen=req.file.filename;
        }

        if(!errors.isEmpty()){
            db.product.findByPk(req.params.id,{include: {
                all: true,
                nested: true
            }})
        .then(product => {
            res.render('productModify.ejs', {product,errors:errors.array(), old:req.body})
            console.log(product);
        })   
        }
        else
        {
            db.product.update({
                title: req.body.name,
                description: req.body.description,
                image: imagen,
                gender_id: req.body.gender,
                category_id: req.body.category,
                format_id: req.body.format,
                price: req.body.price 
                //no he implementado el genre_id porque no esta en la vista del formulario
            },{
                where: {
                    id: req.params.id
                }
            })
            .then(product => {
                res.render('productRegister.ejs', {product})
            })
            res.redirect('/')
        }
        
    },
    destroy: (req,res) =>{
        db.product.destroy({
            where: {
                id: req.params.id
            }
        })
        res.redirect('/')
    },
    search: (req, res) => { 
        const Sequelize = require("sequelize");
        const Op = Sequelize.Op;
        const { search } =  req.query.keywords;
        db.product.findAll({
            where: {
                title: { [Op.like]: `%${req.query.keywords}%` },
                
              }
          })
          .then(product => { 
            res.render('results.ejs', {product})
            console.log(`req.query.keywords`)
            });
    },
    gender: (req, res) => { 
        db.product.findAll({
            where: {
                genre_id: req.params.id
            }
        })
            .then(product => {
                res.render('resultsgender.ejs', { product })
            })
    },
    
    
            



}
module.exports = productscontroller;