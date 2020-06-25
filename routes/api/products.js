const router = require('express').Router();
const middleware = require('../middlewares');

const { Products } = require('../../db');

router.get('/', async(req, res) => {
    const products = await Products.findAll();
    res.json(products);
});

router.post('/', middleware.checkToken, middleware.hasRole, async(req, res) => {

    const product = await Products.create(req.body);
    res.json(product);
});

router.put('/:productId', middleware.checkToken, middleware.hasRole, async(req, res) => {
    await Products.update(req.body, {
        where: { id: req.params.productId }
    }).then(() => {
        res.status(200).json("Product modified");
    }).catch(() => {
        res.status(400).json("Cannot modify product");
    })
});

router.delete('/:productId', middleware.checkToken, middleware.hasRole, async(req, res) => {
    await Products.destroy({
        where: { id: req.params.productId }
    }).then(() => {
        res.status(200).json("Product deleted");
    }).catch(() => {
        res.status(400).json("Cannot delete product");
    })

});


module.exports = router;