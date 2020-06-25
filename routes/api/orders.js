const router = require('express').Router();
const middleware = require('../middlewares');

const { Orders, Products } = require('../../db');


router.get('/', middleware.checkToken, middleware.hasRole, async(req, res) => {
    const orders = await Orders.findAll();
    res.json(orders);
});

router.post('/', middleware.checkToken, middleware.hasRole, async(req, res) => {

    const postProduct = req.body.productId;
    const postOrder = req.body;
    postOrder.userId = req.userId;
    const postOrders = await Orders.create(postOrder).then(
        (order) => {
            postProduct.forEach(async element => {
                const prod = await Products.findOne({
                    where: { id: element }
                })
                prod.addOrder(order);
            });
        }
    )
    res.status(200).json("Order created");

});

router.put('/:ordersId', middleware.checkToken, middleware.hasRole, async(req, res) => {
    await Orders.update(req.body, {
        where: { id: req.params.ordersId }
    }).then(() => {
        res.status(200).json("Order modified");
    }).catch(() => {
        res.status(400).json("Cannot modify order");
    })
});

router.delete('/:orderId', middleware.checkToken, middleware.hasRole, async(req, res) => {
    await Orders.destroy({
        where: { id: req.params.orderId }
    }).then(() => {
        res.status(200).json("Order deleted");
    }).catch(() => {
        res.status(400).json("Cannot delete order");
    })
});


module.exports = router;