module.exports = (sequelize, dataTypes) => {
    let alias = 'user'; // esto debería estar en singular
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        first_name:{
            type: dataTypes.STRING(50),
            allowNull: false
        },
        last_name:{
            type: dataTypes.STRING(50),
            allowNull: false
        },
        email:{
            type: dataTypes.STRING(50),
            allowNull: false
        },
        password:{
            type: dataTypes.STRING(100),
            allowNull: false
        },
        image:{
            type: dataTypes.STRING(50),
            allowNull: false
        }
    };
    let config = {
        tableName: 'user',
        timestamps: false
    }
    const user = sequelize.define(alias,cols,config);

    return user
};