module.exports = (sequelize, dataTypes) => {
    let alias = 'product'; // esto debería estar en singular
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        title:{
            type: dataTypes.STRING(100),
        },
        description:{
            type: dataTypes.STRING(1000),
        },
        image:{
            type: dataTypes.STRING(20),
        },
        genre_id:{
            type: dataTypes.BIGINT(10).UNSIGNED,
            allowNull: false
        },
        category_id:{
            type: dataTypes.BIGINT(10).UNSIGNED,
            allowNull: false
        },
        price:{
            type: dataTypes.DECIMAL(10,2),
            allowNull: false
        }
    };
    let config = {
        tableName: 'product',
        timestamps: false
    }
    const product = sequelize.define(alias,cols,config);

    product.associate = function (models) {
        product.belongsTo(models.category, { 
            as: "category",
            foreignKey: "category_id"
        })
        product.belongsTo(models.genre, { 
            as: "genre",
            foreignKey: "genre_id"
        })
/*         product.hasMany(models.productformat, { 
            as: "productformat",
            foreignKey: "product_id"
        }) */
    }
   


    return product
};