const db = require('../../database/models');
const { usuario } = require('../usersController');
const sequelize = db.sequelize;

const userscontroller = {
   
   
    users:(req,res)=>{
       
     db.user.findAll()
     .then(userDB => {
        let totaluser = userDB.length;
        let users= userDB.map(user=>{
            return{
                id:user.id,
                first_name:user.first_name,
                last_name:user.last_name,
                email:user.email,
                detail:`https://grupo-1-e-books.herokuapp.com/api/user/${user.id}`
            }
        });

        if(userDB){
            res.status(200).json({
                "count":totaluser,
                "users":users,
                "status":200,
                "msg":"ok",
                "endpoint":"/api/users"
            })
        }
        })                
        .catch(errors => {
            res.status(404).json({
                "status":404,
                "msg":"error",
            })
             })

        },
        usersdetail:(req,res)=>{
            db.user.findOne({where:{id:req.params.id}})
     .then(userDB => {

        
        if(userDB){
            res.status(200).json({
                id:userDB.id,
                first_name:userDB.first_name,
                last_name:userDB.last_name,
                email:userDB.email,
                image:`https://grupo-1-e-books.herokuapp.com/images/users/${userDB.image}`,
                "status":200,
                "msg":"ok",
                "endpoint":`/api/users/${userDB.id}`
            })
        }
        })                
        .catch(errors => {
            res.status(404).json({
                "status":404,
                "msg":"error",
            })
             })
        }
}

module.exports = userscontroller;