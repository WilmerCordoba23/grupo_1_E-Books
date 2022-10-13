const express = require('express');
const app = express();
const products=require('./routers/products');
const usuarios=require('./routers/users');
const usuariosApi=require('./routers/Api/users');
const path = require('path');
const methodOverride =  require('method-override'); 
const session = require('express-session');
const cookieparser = require('cookie-parser');
const morgan = require('morgan')

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




