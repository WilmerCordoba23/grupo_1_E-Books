const db = require('../database/models');
const { search } = require('./productosController');
const sequelize = db.sequelize;
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');

const userscontroller = {
    CreateUsers: (req,res) =>{ 
        let errors=validationResult(req)
        

        if(!errors.isEmpty()){

            res.render("register",{errors:errors.array(), old:req.body})
            
        }
        else
        {
            let imagen = "";

            if (req.file != undefined) {
                imagen=req.file.filename;
            }
            db.user.create({
                
                first_name: req.body.nombre,
                last_name: req.body.apellido,
                email: req.body.usuario,
                image: imagen,//no funciona
                password: bcrypt.hashSync(req.body.password, 10),
            })
            res.redirect('/')
        }
    },

    usuario:(req,res)=>{
        if(req.session.Email == undefined){
            res.redirect('/login')
        }
        else{
            let usuario={
            Email: req.session.Email,
            nombre: req.session.Nombre,
            apellido: req.session.Apellido,
            contraseña: req.session.contraseña,
            imagen: req.session.imagen
        }
        res.render("usuario",{usuario})
        console.log(usuario)
        }
    },
    logOut:(req,res) => {
        if(req.session.Email != undefined){
             // //cookie olvidar usuario
             if(req.body.olvidar != undefined){
                res.clearCookie("usuario")
                res.clearCookie("contraseña")
               }
            req.session.Email = undefined
            res.redirect('/login')
        }
    },
    CheckUsers:(req,res)=>{
        let errors=validationResult(req)
        console.log(errors)
        //res.send({errors})
        if(errors.isEmpty()){
            db.user.findAll({
                where:{
                    email: req.body.usuario
                }
            
            }).then(user => {
                let contraseña 
                let email,usuario,apellido,password,imagen;

                   // console.log(user)
                    console.log(user)
                    user.forEach(user => {
                        //let validator=bcrypt.compareSync(req.body.password, user.password)
                        contraseña=user.password
                    });
                    
                    let validator=bcrypt.compareSync(req.body.password,contraseña)
                    console.log(validator)
                    
                    //res.send(user)
                    if(validator==true){
                        
                        user.forEach(user => {
                            email=user.email
                            usuario=user.first_name
                            apellido=user.last_name
                            password=user.password
                            imagen=user.image

                        });
                        //session
                            req.session.Email = email
                            req.session.Nombre = usuario
                            req.session.Apellido = apellido
                            req.session.contraseña = password
                            req.session.imagen = imagen
                            //cookie recordar usuario
                            if(req.body.recordame != undefined){
                                res.cookie("usuario",email,{maxAge:100000})
                                res.cookie("contraseña",req.body.password,{maxAge:100000})  
                           }
                        res.redirect('/usuario')
                           //console.log
                        
                    }
                    if (validator==false){
                        let incorrecto ="Su correo o contraseña es incorrecto";

                       res.render("login",{errors:errors.array(), old:req.body,incorrecto})
                    }
                   
        }).catch(errors => {
            res.render("login")
            console.log(errors)

            })

        }
        if(!errors.isEmpty()){
            let incorrecto
            res.render("login",{errors:errors.array(), old:req.body,incorrecto})
        }       
        

    },
    register:(req,res)=>{
        res.render("register") 
    },
    createImage:(req,res)=>{
        res.render("createImage")
    },
    login:(req,res)=>{
        let incorrecto
        if(req.session.Email == undefined){
            res.render("login",{incorrecto})
        }
        if(req.session.Email != undefined){
            res.redirect("/usuario")
        }
        if(req.cookies.contraseña != undefined && req.cookies.usuario != undefined){
            console.log(req.cookies.contraseña)
            console.log(req.cookies.usuario)
        } 
    },

}

module.exports = userscontroller;