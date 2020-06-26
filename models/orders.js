module.exports = (sequelize, type) => {
    return sequelize.define('order', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        status: type.STRING,
        description: type.STRING,
        amount: type.INTEGER,
        payment: type.STRING,
        userId: type.INTEGER

    })
}