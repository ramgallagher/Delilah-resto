const jwt = require('jwt-simple');
const moment = require('moment');

const checkToken = (req, res, next) => {

    if (!req.headers['user-token']) {
        return res.json({ error: 'You need to put user-token on headers' })
    }

    const userToken = req.headers['user-token'];
    let payload = {};

    try {
        payload = jwt.decode(userToken, 'Justin es de Piscis');
    } catch (err) {
        return res.json({ error: 'Incorrect token' });
    }
    if (payload.expiredAt < moment().unix()) {
        return res.json({ error: 'Token expired' });
    }


    req.userId = payload.userId;
    req.hasRole = payload.hasrole;

    console.log(payload);



    next();
}


const hasRole = (req, res, next) => {

    if (req.hasRole == 'admin') {
        return next();
    } else
        res.sendStatus(403);

}

module.exports = {
    checkToken: checkToken,
    hasRole: hasRole,
}