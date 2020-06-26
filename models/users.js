var DataTypes = require('sequelize/lib/data-types');

module.exports = (sequelize, type) => {
    return sequelize.define('user', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        username: type.STRING,
        password: type.STRING(150),
        firstname: type.STRING,
        lastname: type.STRING,
        email: type.STRING,
        phone_number: type.STRING,
        role: {
            type: DataTypes.STRING,
            defaultValue: "user"
        }


    })
}