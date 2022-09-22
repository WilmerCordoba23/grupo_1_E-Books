module.exports = (sequelize, dataTypes) => {
    let alias = 'productformat'; // esto debería estar en singular
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        product_id:{
            type: dataTypes.BIGINT(10).UNSIGNED,
            allowNull: false
        },
        format_id:{
            type: dataTypes.BIGINT(10).UNSIGNED,
            allowNull: false
        }
    };
    let config = {
        tableName: 'product_format',
        timestamps: false
    }
    const productformat = sequelize.define(alias,cols,config);

    /* productformat.associate = function (models) {
        productformat.belongsTo(models.format, { 
            as: "format",
            foreignKey: "format_id"
        })
        productformat.belongsTo(models.product, { 
            as: "product",
            foreignKey: "product_id"
        })
    } */

    return productformat
};