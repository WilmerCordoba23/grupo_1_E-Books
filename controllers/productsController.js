const productos=[{
    id:1,
    nombredelplato:"Carpaccio fresco",
    descripción:"Entrada Carpaccio de salmón con cítricos",
    precio:"U$S 65.50",
    imagen:"Carpaccio-de-salmon.jpg"
}
];

const productscontroller={
    index:(req,res)=>{
        
        res.render("index")
    },
    productDetail:(req,res)=>{
        
        res.render("productDetail")
    },
    productCart:(req,res)=>{
        
        res.render("productCart")
    },
    productRegister:(req,res)=>{
        res.render("productRegister")
    },
    productModify:(req,res)=>{
        res.render("productModify")
    }




};

module.exports=productscontroller;

