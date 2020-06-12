const Sequelize = require('sequelize');
const ProductsModel = require('./models/products');
const UserModel = require('./models/users');
const OrdersModel = require('./models/orders');
const RolesModel = require('./models/role');
const sequelize = new Sequelize('MdiKEBfMi3', 'MdiKEBfMi3', 'S7DpOe8iXM', {
    host: 'remotemysql.com',
    dialect: 'mysql'
});



const Products = ProductsModel(sequelize, Sequelize);
const Users = UserModel(sequelize, Sequelize);
const Orders = OrdersModel(sequelize, Sequelize);
// const Roles = RolesModel(sequelize, Sequelize);


// //relations between 

// Roles.hasMany(Users, { foreignKey: 'roleId', sourceKey: 'id' });
// Users.belongsTo(Roles, { foreignKey: 'roleId', sourceKey: 'id' });


// relacion uno uno usuario rol


sequelize.sync({ force: false })
    .then(() => {
        console.log('Synced tables')

    })



module.exports = {
    Products,
    Users,
    Orders
    // Roles
}