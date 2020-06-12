const router = require('express').Router();



const { Roles } = require('../../db');


router.get('/', async(req, res) => {
    const roles = await Roles.findAll();
    res.json(roles);
});

router.post('/', async(req, res) => {
    const roles = await Roles.create(req.body);
    res.json(roles);
});



module.exports = router;