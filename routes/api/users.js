const router = require('express').Router();
const bcrypt = require('bcryptjs');
const { Users } = require('../../db');
const { check, validationResult } = require('express-validator');
const moment = require('moment');
const jwt = require('jwt-simple');

router.get('/', async(req, res) => {
    const users = await Users.findAll();
    res.json(users);
});

router.post('/register', [
    check('username', 'Please enter your name').not().isEmpty(),
    check('password', 'Please enter your password').not().isEmpty(),
    check('firstname', 'Please enter your first name').not().isEmpty(),
    check('lastname', 'Please enter your lastname').not().isEmpty(),
    check('email', 'Please enter your email').isEmail(),
    check('phone_number', 'Please enter your phone number').not().isEmpty()

], async(req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ error: errors.array() })
    }

    req.body.password = bcrypt.hashSync(req.body.password, 10);
    const user = await Users.create(req.body);
    res.json(user);

});



router.post('/login', async(req, res) => {
    const user = await Users.findOne({ where: { email: req.body.email } });
    if (user) {
        const match = bcrypt.compareSync(req.body.password, user.password);
        if (match) {
            res.json({ success: createToken(user) });
        } else {
            res.json({ error: 'Incorrect password, try again' });
        }

    } else {
        res.json({ error: 'Please enter a valid e-mail address' });
    }
});


const createToken = (user) => {
    const payload = {
        userId: user.id,
        createdAt: moment().unix(),
        expiredAt: moment().add(10, 'minutes').unix()

    }
    return jwt.encode(payload, 'Justin es de Piscis')

}

module.exports = router;