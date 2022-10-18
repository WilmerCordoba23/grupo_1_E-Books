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
const morgan = require('morgan');
const cors = require('cors');

app.use(cors())

app.use(morgan('dev'));

app.use(express.urlencoded({ extended: false }));

app.use(methodOverride("_method"));

app.set('view engine',"ejs");

app.use(session({secret: "E-books"}));

app.use(cookieparser());

app.listen(process.env.PORT || 4000,()=>
console.log("Servidor 4000 encendido"));

app.use(express.static('./public'));

//productos

app.use('/',products);

//usuarios
app.use('/',usuarios);

//api usuario
app.use('/api',usuariosApi);

//api productos
app.use('/api',productosApi);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
  });
  
  // error handler
  app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.render('error', { msg: '500 - Ha ocurrido un error interno'});
  });


