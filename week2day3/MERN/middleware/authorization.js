const jwtManager = require('../jwt/jwtManager');
const { ObjectID } = require('bson');

class Authorization {

    checkToken(req, res, next) {
        if (req.url === '/loginregister/login' || req.url === '/loginregister/signup') {
            next();
            return;
        }
        const token = req.headers.authorization;
        if (!token) {
            return res.json({ status: 'authorization_errors' });
        } else {
            const data = jwtManager.verify(token);
            if (!data) {
                return res.json({ status: 'authorization_error' });
            }
            next();
        }
    }
    checkValidInput(req, res, next) {
        const data = req.body;
        if (!data.name
            || !data.username
            || !data.password
           
        ) {
            return res.json({ status: "Required field missing" })
        }
        next()
    }
}


module.exports =new Authorization()