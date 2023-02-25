const db = require('../../database/models');
const { producto } = require('../productsController');
const sequelize = db.sequelize;



const productscontroller = {


    products: async (req, res) => {
        //Contador de Generos
        let countFantasia = 0; let countEconomia = 0; let countLiteratura = 0; let countAutoayuda = 0;
        let countAccion = 0; let countLiderazgo = 0; let countFiccion = 0; let countAventura = 0;
        let countRomance = 0; let countDrama = 0;
        //Contador de Categorias
        let countmasVendidos = 0; let countnovedades = 0; let countrecomendados = 0;
        //Idenficador de Generos y Categorias
        let genero; let categoria;
         

        try {
            await db.product.findAll({ include: { all: true, nested: true } })
                .then(productDB => {


                    let totalproduct = productDB.length;
                    let products = productDB.map(product => {

                        if (product.genre_id == 1) {
                            genero = "Fantasia"
                        }
                        if (product.genre_id == 2) {
                            genero = "Economia"
                        }
                        if (product.genre_id == 3) {
                            genero = "Literatura"
                        }
                        if (product.genre_id == 4) {
                            genero = "Autoayuda"
                        }
                        if (product.genre_id == 5) {
                            genero = "Accion"
                        }
                        if (product.genre_id == 6) {
                            genero = "Liderazgo"
                        }
                        if (product.genre_id == 7) {
                            genero = "Ficcion"
                        }
                        if (product.genre_id == 8) {
                            genero = "Aventura"
                        }
                        if (product.genre_id == 9) {
                            genero = "Romance"
                        }
                        if (product.genre_id == 10) {
                            genero = "Drama"
                        }
                        if (product.category_id == 1) {
                            categoria = "Mas Vendidos"
                        }
                        if (product.category_id == 2) {
                            categoria = "Novedades"
                        }
                        if (product.category_id == 3) {
                            categoria = "Recomendados"
                        }

                        return {
                            id: product.id,
                            name: product.title,
                            description: product.description,
                            price: product.price,
                            image: product.image,
                            categoria: {
                                'name': categoria,
                                'id': product.category_id
                            },
                            genero: {
                                'name': genero,
                                'id': product.genre_id
                            },
                            detail: `https://e-books.onrender.com/api/products/${product.id}`
                        }
                    });
                    for (let i = 0; i < productDB.length; i++) {
                        if (productDB[i].genre_id == 1) {
                            countFantasia++
                        }
                        if (productDB[i].genre_id == 2) {
                            countEconomia++
                        }
                        if (productDB[i].genre_id == 3) {
                            countLiteratura++
                        }
                        if (productDB[i].genre_id == 4) {
                            countAutoayuda++
                        }
                        if (productDB[i].genre_id == 5) {
                            countAccion++
                        }
                        if (productDB[i].genre_id == 6) {
                            countLiderazgo++
                        }
                        if (productDB[i].genre_id == 7) {
                            countFiccion++
                        }
                        if (productDB[i].genre_id == 8) {
                            countAventura++
                        }
                        if (productDB[i].genre_id == 9) {
                            countRomance++
                        }
                        if (productDB[i].genre_id == 10) {
                            countDrama++
                        }
                    }

                    for (let i = 0; i < productDB.length; i++) {
                        if (productDB[i].category_id == 1) {
                            countmasVendidos++
                        }
                        if (productDB[i].category_id == 2) {
                            countnovedades++
                        }
                        if (productDB[i].category_id == 3) {
                            countrecomendados++
                        }
                    }

                    let totalcategory = {
                        Masvendidos: { name: "Mas vendidos", total: countmasVendidos },
                        Novedades: { name: "Novedades", total: countnovedades },
                        Recomendados: { name: "Recomendados", total: countrecomendados }

                    }


                    let totalgender = {
                        Fantasia: { name: "Fantasia", total: countFantasia },
                        Economia: { name: "Economia", total: countEconomia },
                        Literatura: { name: "Literatura", total: countLiteratura },
                        Autoayuda: { name: "Autoayuda", total: countAutoayuda },
                        Accion: { name: "Accion", total: countAccion },
                        Liderazgo: { name: "Liderazgo", total: countLiderazgo },
                        Ficcion: { name: "Ficcion", total: countFiccion },
                        Aventura: { name: "Aventura", total: countAventura },
                        Romance: { name: "Romance", total: countRomance },
                        Drama: { name: "Drama", total: countDrama }
                    }




                    if (productDB) {
                        //console.log(productDB)

                        res.status(200).json({
                            "count": totalproduct,
                            "countByGender": totalgender,
                            "countByCategory": totalcategory,
                            "products": products,
                            "status": 200,
                            "msg": "ok",
                            "endpoint": "/api/products"
                        })
                    }
                })
        } catch (error) {
            //console.log(error);
            res.status(500).json({ 'msg': '500 - Ha ocurrido un error interno' });

        }

    },
    productsdetail: async (req, res) => {
        try {
            await db.product.findOne({ include: { all: true, nested: true }, where: { id: req.params.id } })
                .then(productDB => {

                    if (productDB) {
                        res.status(200).json({
                            id: productDB.id,
                            title: productDB.title,
                            description: productDB.description,
                            price: productDB.price,
                            categoria: {
                                'name': productDB.category.name,
                                'id': productDB.category.id
                            },
                            genero: {
                                'name': productDB.genre.name,
                                'id': productDB.genre.id
                            },
                            image: `https://e-books.onrender.com/images/products/${productDB.image}`,
                            "status": 200,
                            "msg": "ok",
                            "endpoint": `/api/products/${productDB.id}`
                        })
                    }
                })
                .catch(errors => {
                    res.status(404).json({
                        "status": 404,
                        "msg": "error",
                    })
                })
        } catch (error) {
            //console.log(error);
            res.status(500).json({ 'msg': '500 - Ha ocurrido un error interno' });

        }
    }
}

module.exports = productscontroller;