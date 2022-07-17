const express = require('express');
const app = express();
const products=require('./routers/products');
const usuarios=require('./routers/users');

app.use(express.urlencoded({ extended: false }));
app.set('view engine',"ejs");

app.listen(process.env.PORT || 3000,()=>
console.log("Servidor 3000 encendido"));

app.use(express.static('./public'));

//productos


app.use('/',products);
app.use('/search',products);
app.use('/gender',products);
app.use('/productDetail/',products);
app.use('/productCart',products);
app.use('/productRegister',products);
app.use('/productModify',products);
app.post('/products',products);

//usuarios
app.use('/login',usuarios);
app.use('/register',usuarios);
