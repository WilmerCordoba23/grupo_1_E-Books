module.exports = (sequelize, dataTypes) => {
    let alias = 'format'; // esto debería estar en singular
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        name:{
            type: dataTypes.STRING(20),
            allowNull: false
        }
    };
    let config = {
        tableName: 'format',
        timestamps: false
    }
    const format = sequelize.define(alias,cols,config);

    format.associate = function (models) {
        format.hasMany(models.productformat, { 
            as: "productformat",
            foreignKey: "format_id"
        })
    }

    return format
};