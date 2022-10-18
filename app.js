const express = require('express');
const app = express();
const products=require('./routers/products');
const usuarios=require('./routers/users');
const usuariosApi=require('./routers/Api/users');
const productosApi=require('./routers/Api/products');
const path = require('path');
const methodOverride =  require('method-override'); 
const session = require('express-session');
const cookieparser = require('cookie-parser');
const morgan = require('morgan')

//Cors Configuration - Start
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Credentials", true)
    res.header("Access-Control-Allow-Headers","Origin, X-Requested, Content-Type, Accept Authorization")
    res.header("Access-Control-Allow-Methods","POST, PUT, PATCH, GET, DELETE")
      
    next()
  })
  //Cors Configuration - End

app.use(morgan('dev'));

app.use(express.urlencoded({ extended: false }));

app.use(methodOverride("_method"));

app.set('view engine',"ejs");

app.use(session({secret: "E-books"}));

app.use(cookieparser());

app.listen(process.env.PORT || 3000,()=>
console.log("Servidor 3000 encendido"));

app.use(express.static('./public'));

//productos

app.use('/',products);

//usuarios
app.use('/',usuarios);

//api usuario
app.use('/api',usuariosApi);

//api productos
app.use('/api',productosApi);



