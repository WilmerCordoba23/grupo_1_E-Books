const { name } = require('ejs');
const { format } = require('mysql2');
const db = require('../database/models');
const product = require('../database/models/product');
const { search } = require('./productosController');
const sequelize = db.sequelize;
const Op = sequelize.Op;
const { validationResult } = require('express-validator');

//falta arreglar el problema de las imagenes

const productscontroller = {
    index: (req, res) => {
        db.product.findAll()
            .then(product => {
                
                res.render('index', {product})
            })
            //console.Console.log(product)
    },
    list: (req, res) => { //listar todos los productos, no funcional
        db.product.findAll()
            .then(product => {
                res.render('productList.ejs', {product})
            })
    },
    productDetail: (req, res) => {
        db.product.findByPk(req.params.id)
        
            .then(product => {
                res.render('productDetail.ejs', {product});
            });
    },
    Createproducts: (req,res) =>{ /* Guardado min 31:50  sino funciona es probable que sea porque en el playground tiene el function*/
    let imagen = "";
    let errors=validationResult(req)
        

    if(!errors.isEmpty()){
        res.render("productRegister",{errors:errors.array(), old:req.body})    
    }
    else
    {
        if (req.file != undefined) {
            imagen=req.file.filename;
        }
        console.log(req.body.filename)
        db.product.create({
                title: req.body.name,
                description: req.body.description,
                image: imagen,
                genre_id: req.body.gender,
                category_id: req.body.category,
                format_id: req.body.format,
                price: req.body.price
            })
            res.redirect('/')  
    }
    
    },
    productRegister(req, res){
        db.product.findAll({includes:[{associacion:'category'},{associacion:'genre'},{associacion:'productformat'}]})
        .then(product => {
            res.render('productRegister.ejs', {product})
            console.log(product)
        })       
    },
    productModify(req, res){

        db.product.findByPk(req.params.id)
        .then(product => {
            res.render('productModify.ejs', {product})
            console.log(product)
        })       
    },
    modify: (req,res) =>{ 
        let errors=validationResult(req)
        let params=req.params.id;
        if(!errors.isEmpty()){
            db.product.findByPk(req.params.id)
        .then(product => {
            res.render('productModify.ejs', {product,errors:errors.array(), old:req.body})
        })   
        }
        else
        {
            db.product.update({
                title: req.body.name,
                description: req.body.description,
                image: req.body.image,
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