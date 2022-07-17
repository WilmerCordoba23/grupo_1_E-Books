const express = require('express');
const app = express();
const products=require('./routers/products');
const usuarios=require('./routers/users');
const fs=require('fs');

app.set('view engine',"ejs");

app.listen(process.env.PORT || 3000,()=>
console.log("Servidor encendido"));

app.use(express.static('./public'));

//productos


app.get('/',products);
app.get('/productDetail/:id',products);
app.get('/productCart',products);
app.get('/productRegister',products);
app.get('/productModify',products);


//usuarios
app.get('/login',usuarios);
app.get('/register',usuarios);
