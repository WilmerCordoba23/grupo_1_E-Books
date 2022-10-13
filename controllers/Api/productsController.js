const db = require('../../database/models');
const { producto } = require('../productsController');
const sequelize = db.sequelize;

const productscontroller = {
   
   
    products:(req,res)=>{
       
        db.product.findAll()     
        .then(productDB => {
        //Contador de Generos
        let countFantasia=0
        let countEconomia=0
        let countLiteratura=0
        let countAutoayuda=0
        let countAccion=0
        let countLiderazgo=0
        let countFiccion=0
        let countAventura=0
        let countRomance=0
        let countDrama=0
        //Contador de Categorias
        let masVendidos=0
        let novedades=0
        let recomendados=0
        //Idenficador de Generos y Categorias
        let genero
        let categoria
        
        let totalproduct = productDB.length;     
        let products= productDB.map(product=>{
            
                if(product.genre_id==1){
                    genero="Fantasia"
                }
                if(product.genre_id==2){
                    genero="Economia"
                }
                if(product.genre_id==3){
                    genero="Literatura"
                }
                if(product.genre_id==4){
                    genero="Autoayuda"
                }
                if(product.genre_id==5){
                    genero="Accion"
                }
                if(product.genre_id==6){
                    genero="Liderazgo"
                }
                if(product.genre_id==7){
                    genero="Ficcion"
                }
                if(product.genre_id==8){
                    genero="Aventura"
                }
                if(product.genre_id==9){
                    genero="Romance"
                }
                if(product.genre_id==10){
                    genero="Drama"
                }



                if(product.category_id==1){
                    categoria="Mas Vendidos"
                }
                if(product.category_id==2){
                    categoria="Novedades"
                }
                if(product.category_id==3){
                    categoria="Recomendados"
                }
        


            return{
                id:product.id,
                name:product.title,
                description:product.description,
                categoria:{
                    'name':categoria,
                    'id':product.category_id},
                genero:{
                    'name':genero,
                    'id':product.genre_id
                },
                detail:`https://grupo-1-e-books.herokuapp.com/api/products/${product.id}`
            }
        });
            for(let i=0; i<productDB.length; i++){
                if(productDB[i].genre_id==1){
                    countFantasia++
                }
                if(productDB[i].genre_id==2){
                    countEconomia++
                }
                if(productDB[i].genre_id==3){
                    countLiteratura++
                }
                if(productDB[i].genre_id==4){
                    countAutoayuda++
                }
                if(productDB[i].genre_id==5){
                    countAccion++
                }
                if(productDB[i].genre_id==6){
                    countLiderazgo++
                }
                if(productDB[i].genre_id==7){
                    countFiccion++
                }
                if(productDB[i].genre_id==8){
                    countAventura++
                }
                if(productDB[i].genre_id==9){
                    countRomance++
                }
                if(productDB[i].genre_id==10){
                    countDrama++
                }
            }

            for(let i=0; i<productDB.length; i++){
                if(productDB[i].category_id==1){
                    masVendidos++
                }
                if(productDB[i].category_id==2){
                    novedades++
                }
                if(productDB[i].category_id==3){
                    recomendados++
                }
            }
        
        let totalcategory={
            'Mas vendidos':masVendidos,
            'Novedades':novedades,
            'Recomendados':recomendados
        }

            
            let totalgender ={
                "Fantasia":countFantasia,
                "Economia":countEconomia,
                "Literatura":countLiteratura,
                "Autoayuda":countAutoayuda,
                "Accion":countAccion,
                "Liderazgo":countLiderazgo,
                "Ficcion":countFiccion,
                "Aventura":countAventura,
                "Romance":countRomance,
                "Drama":countDrama
            }




        if(productDB){
            //console.log(productDB)

            res.status(200).json({
                "count":totalproduct,
                "countByGender":totalgender,
                "countByCategory":totalcategory,
                "products":products,
                "status":200,
                "msg":"ok",
                "endpoint":"/api/products"
            })
        }
        })                
        /*.catch(errors => {
            res.status(404).json({
                "status":404,
                "msg":"error",
            })
             })*/
             
        },
        productsdetail:(req,res)=>{
        db.product.findOne({where:{id:req.params.id}})
        .then(productDB => {
        
        if(productDB){
            res.status(200).json({
                id:productDB.id,
                title:productDB.title,
                description:productDB.description,
                price:productDB.price,
                categoria:{
                    'name':categoria,
                    'id':product.category_id},
                genero:{
                    'name':genero,
                    'id':product.genre_id
                },
                image:`https://grupo-1-e-books.herokuapp.com/images/products/${productDB.image}`,
                "status":200,
                "msg":"ok",
                "endpoint":`/api/products/${productDB.id}`
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

module.exports = productscontroller;