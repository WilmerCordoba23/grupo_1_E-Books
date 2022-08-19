module.exports = (sequelize, dataTypes) => {
    let alias = 'genre'; // esto debería estar en singular
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
        tableName: 'genres',
        timestamps: false
    }
    const genre = sequelize.define(alias,cols,config);

    genre.associate = function(models) {
        genre.hasMany(models.product, { 
            as: "product",
            foreignKey: "genre_id"
        })
    }

    return genre
};