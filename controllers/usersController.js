const usuarios=[{
    id:1,
    nombredelplato:"Carpaccio fresco",
    descripción:"Entrada Carpaccio de salmón con cítricos",
    precio:"U$S 65.50",
    imagen:"Carpaccio-de-salmon.jpg"
}
];

const usersController={
    login:(req,res)=>{
        res.render("login")
    },
    register:(req,res)=>{
        res.render("register") 
    }

};

module.exports=usersController;
