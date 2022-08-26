const { name } = require('ejs');
const { format } = require('mysql2');
const db = require('../database/models');
const product = require('../database/models/product');
const { search } = require('./productosController');
const sequelize = db.sequelize;
const Op = sequelize.Op;

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
       db.product.create({
            title: req.body.name,
            description: req.body.description,
            image: req.body.image,
            genre_id: req.body.gender,
            category_id: req.body.category,
            format_id: req.body.format,
            price: req.body.price
        })
        res.redirect('/')
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
        db.product.update({
            title: req.body.name,
            description: req.body.description,
            image: req.body.image,
            status_id: req.body.gender,
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
    },
    destroy: (req,res) =>{
        db.product.destroy({
            where: {
                id: req.params.id
            }
        })
        res.redirect('/')
    },
    search: (req, res) => { //lo hago mas tarde
        const Sequelize = require("sequelize");
        const Op = Sequelize.Op;

        db.product.findAll({
            where: {
                title: { [Op.like]: `req.body.keywords%` },
                
              }
          })
          .then(product => { 
            res.render('results.ejs', {product})
            console.log(req.body)
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