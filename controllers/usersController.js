const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');

const usersFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));




const usersController={
   
    login:(req,res)=>{
        res.render("login")
    },
    register:(req,res)=>{
        res.render("register") 
    },
    createImage:(req,res)=>{
        res.render("createImage")
    },
    CreateUsers:(req,res)=>{ 
        let contraseña = req.body.password;
        let total= users.length+1
        let errors=validationResult(req)
        let newUser =
        {
          Identificador: total,
            Nombre: req.body.nombre,
            Apelliddo: req.body.apellido,
            Email: req.body.usuario,
            Contraseña: 'bcrypt.hashSync(contraseña, 10)',
            Image: req.file.filename,//req.file.filename,
            Imagealt: '',//req.file.originalname,
            Admin: false
        }
        
        //res.send({errors})

        if(!errors.isEmpty()){

            res.render("register",{errors:errors.array(), old:req.body})
            
        }
        else
        {
            //let image=req.file.filename
           
            //console.log(req) //vista del request
            users.push(newUser)
            fs.writeFileSync(usersFilePath, JSON.stringify(users, null, ' '));
            res.redirect("/")

        }
        //console.log(req.file) //vista de los datos de la imagen
        //console.log(errors.array()) //vista de los errores
    },
    CheckUsers:(req,res)=>{
        let errors=validationResult(req)
        //res.send({errors})
        if(errors.isEmpty()){

            for(let i=0; i<users.length; i++)
            {
                let encriptedPassword = users[i].Contraseña;
                let contraseña = req.body.password;
                let validator= bcrypt.compareSync(contraseña, encriptedPassword)  
            
                if(users[i].Email == req.body.usuario ){

                    if(validator == true)
                    {
                        //session
                        req.session.Email=users[i].Email;
                        req.session.Nombre=users[i].Nombre;
                        req.session.Apellido=users[i].Apellido;
                        req.session.contraseña=req.body.password;
                        req.session.imagen=users[i].Imagen;
                         //cookie recordar usuario
                        if(req.body.recordame != undefined){
                         res.cookie("usuario",users[i].Email,{maxAge:100000})
                         res.cookie("contraseña",req.body.password,{maxAge:100000})  
                        }
                           
                        // //cookie olvidar usuario
                        if(req.body.olvidar == "olvidar"){
                         res.cookie("usuario",null)
                         res.cookie("contraseña",null)
                        }

                        
                       res.redirect("/usuario")

                    
                    }
                    else{
                        //return  res.send({errors:errors.array().push('contraseña incorrecta'), old:req.body})
                        return  res.render("login",{errors:errors.array(), old:req.body})
                    }
                }
            else{

            }
                     //return  res.send({errors:errors.array().push('usuario incorrecta'), old:req.body})
                        return  res.render("login",{errors:errors.array(), old:req.body})
                   
            }

            
        }   
        if(!errors.isEmpty()){

          return  res.render("login",{errors:errors.array(), old:req.body})
            
        }  
            //console.log(errors.array()) //vista de los errores

        
            console.log(req.body.usuario," ",req.body.password) //Vista de los datos ingresados
        

    },
    usuario:(req,res)=>{
        let usuario={
            Email: req.session.Email,
            nombre: req.session.Nombre,
            apellido: req.session.Apellido,
            contraseña: req.session.contraseña,
            imagen: req.session.imagen
        }
        res.render("usuario",{usuario})
    }     


}

module.exports=usersController;
