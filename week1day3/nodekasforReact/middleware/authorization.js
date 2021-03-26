const jwtManager = require('../jwt/jwtManager');
const { ObjectID } = require('bson');


class Authorization {

    checkToken(req, res, next) {
        if (req.url === 'authenticate/login' || req.url === '/api/v1/authenticate/signup') {
            next();
            return;
        }
        const token = req.headers.authorization;
        if (!token) {
            return res.json({ status: 'authorization_error' });
        } else {
            const data = jwtManager.verify(token);
            if (!data) {
                return res.json({ status: 'authorization_error' });
            }
            next();
        }
    }
}