const db = require('../../database/models');
const { producto } = require('../productsController');
const sequelize = db.sequelize;

        //Contador de Generos
        let Fantasia=[]
        let Economia=[]
        let Literatura=[]
        let Autoayuda=[]
        let Accion=[]
        let Liderazgo=[]
        let Ficcion=[]
        let Aventura=[]
        let Romance=[]
        let Drama=[]
        //Contador de Categorias
        let masVendidos=[]
        let novedades=[]
        let recomendados=[]

        //Idenficador de Generos y Categorias
        let genero
        let categoria

const productscontroller = {
   
   
    products:(req,res)=>{
       
        db.product.findAll()     
        .then(productDB => {

        
        let totalproduct = productDB.length;     
        let products= productDB.map(product=>{
            
                if(product.genre_id==1){
                    genero="Fantasia"
                    Fantasia.push(product.title)
                }
                if(product.genre_id==2){
                    genero="Economia"
                    Economia.push(product.title)
                }
                if(product.genre_id==3){
                    genero="Literatura"
                    Literatura.push(product.title)
                }
                if(product.genre_id==4){
                    genero="Autoayuda"
                    Autoayuda.push(product.title)
                }
                if(product.genre_id==5){
                    genero="Accion"
                    Accion.push(product.title)
                }
                if(product.genre_id==6){
                    genero="Liderazgo"
                    Liderazgo.push(product.title)
                }
                if(product.genre_id==7){
                    genero="Ficcion"
                    Ficcion.push(product.title)
                }
                if(product.genre_id==8){
                    genero="Aventura"
                    Aventura.push(product.title)
                }
                if(product.genre_id==9){
                    genero="Romance"
                    Romance.push(product.title)
                }
                if(product.genre_id==10){
                    genero="Drama"
                    Drama.push(product.title)
                }



                if(product.category_id==1){
                    categoria="Mas Vendidos"
                    masVendidos.push(product.title)
                }
                if(product.category_id==2){
                    categoria="Novedades"
                    novedades.push(product.title)
                }
                if(product.category_id==3){
                    categoria="Recomendados"
                    recomendados.push(product.title)
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
            /*for(let i=0; i<productDB.length; i++){
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
            }*/
        
        let totalcategory={
            'Mas vendidos':{
                name:masVendidos,
                count:masVendidos.length
            },
            'Novedades':{
                name:novedades,
                count:novedades.length
            },
            'Recomendados':{
                name:recomendados,
                count:recomendados.length
            }
        }

            
            let totalgender ={
                "Fantasia":{
                    name:Fantasia,
                    count:Fantasia.length
                },
                "Economia":{
                    name:Economia,
                    count:Economia.length
                },
                "Literatura":{
                    name:Literatura,
                    count:Literatura.length
                },
                "Autoayuda":{
                    name:Autoayuda,
                    count:Autoayuda.length
                },
                "Accion":{
                    name:Accion,
                    count:Accion.length
                },
                "Liderazgo":{
                    name:Liderazgo,
                    count:Liderazgo.length
                },
                "Ficcion":{
                    name:Ficcion,
                    count:Ficcion.length
                },
                "Aventura":{
                    name:Aventura,
                    count:Aventura.length
                },
                "Romance":{
                    name:Romance,
                    count:Romance.length
                },
                "Drama":{
                    name:Drama,
                    count:Drama.length    
                }
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
        .catch(errors => {
            res.status(404).json({
                "status":404,
                "msg":"error",
            })
             })
             
        },
        productsdetail:(req,res)=>{
        db.product.findOne({where:{id:req.params.id}})
        .then(productDB => {
            if(productDB.genre_id==1){
                genero="Fantasia"
            }
            if(productDB.genre_id==2){
                genero="Economia"
            }
            if(productDB.genre_id==3){
                genero="Literatura"
            }
            if(productDB.genre_id==4){
                genero="Autoayuda"
            }
            if(productDB.genre_id==5){
                genero="Accion"
            }
            if(productDB.genre_id==6){
                genero="Liderazgo"
            }
            if(productDB.genre_id==7){
                genero="Ficcion"
            }
            if(productDB.genre_id==8){
                genero="Aventura"
            }
            if(productDB.genre_id==9){
                genero="Romance"
            }
            if(productDB.genre_id==10){
                genero="Drama"
            }



            if(productDB.category_id==1){
                categoria="Mas Vendidos"
            }
            if(productDB.category_id==2){
                categoria="Novedades"
            }
            if(productDB.category_id==3){
                categoria="Recomendados"
            }
    
        
        if(productDB){
            res.status(200).json({
                id:productDB.id,
                title:productDB.title,
                description:productDB.description,
                price:productDB.price,
                categoria:{
                    'name':categoria,
                    'id':productDB.category_id},
                genero:{
                    'name':genero,
                    'id':productDB.genre_id
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