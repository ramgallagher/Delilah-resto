const Sequelize = require('sequelize');
const ProductsModel = require('./models/products');
const UserModel = require('./models/users');
const OrdersModel = require('./models/orders');
// const OrderedProductsModel = require('./models/ordered_products');
const sequelize = new Sequelize('MdiKEBfMi3', 'MdiKEBfMi3', 'S7DpOe8iXM', {
    host: 'remotemysql.com',
    dialect: 'mysql'
});



const Products = ProductsModel(sequelize, Sequelize);
const Users = UserModel(sequelize, Sequelize);
const Orders = OrdersModel(sequelize, Sequelize);
// const OrderedProducts = OrderedProductsModel(sequelize, Sequelize);
// const Roles = RolesModel(sequelize, Sequelize);


// //relations between orders and users table

Users.hasMany(Orders);
Orders.belongsTo(Users);

Products.belongsToMany(Orders, { through: 'orderedProducts', foreignKey: 'productId' });
Orders.belongsToMany(Products, { through: 'orderedProducts', foreignKey: 'orderId' });



sequelize.sync({ force: false })
    .then(() => {
        console.log('Synced tables')

    })



module.exports = {
    Products,
    Users,
    Orders,
    // OrderedProducts
    // Roles
}