const fs = require('fs');
const path = require('path');

const usersFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

function admin(req,res,next){
    if(req.session.user.Admin==true){
        next();
    }else{
        res.send("No tienes permisos para acceder a esta pagina")
    }
}
module.exports=admin;