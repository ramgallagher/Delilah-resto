const router = require('express').Router();
const middleware = require('./middlewares');

const { Products } = require('../../db');

router.get('/', async(req, res) => {
    const products = await Products.findAll();
    res.json(products);
});

router.post('/', async(req, res) => {

    const product = await Products.create(req.body);
    res.json(product);
});

router.put('/:productId', middleware.checkToken, middleware.hasRole, async(req, res) => {
    await Products.update(req.body, {
        where: { id: req.params.productId }
    });
    res.json({ success: 'Product modified' })
});

router.delete('/:productId', middleware.checkToken, middleware.hasRole, async(req, res) => {
    await Products.destroy({
        where: { id: req.params.productId }
    });
    res.json({ success: 'Product deleted' });
});


module.exports = router;