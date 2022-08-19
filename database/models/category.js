module.exports = (sequelize, dataTypes) => {
    let alias = 'category'; // esto debería estar en singular
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
        tableName: 'category',
        timestamps: false
    }
    const category = sequelize.define(alias,cols,config);

    category.associate = function(models) {
        category.hasMany(models.product, {
            as: "category", // El nombre del modelo pero en plural
            foreignKey: "category_id"
        })
    }

    return category
};