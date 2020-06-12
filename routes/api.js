const router = require('express').Router();

const apiProductsRouter = require('./api/products');
const apiUsersRouter = require('./api/users');
const apiRolesRouter = require('./api/roles');


router.use('/products', apiProductsRouter);
router.use('/users', apiUsersRouter);
router.use('/roles', apiRolesRouter);

module.exports = router;