const express = require('express');
const router = express.Router();
const middleware = require('../middleware/authorization');
const jwtManager = require('../jwt/jwtManager');
const { ObjectID } = require('bson');


//User login
router.post('/login', (req, res) => {
    req.db.collection('student')
        .findOne({ 'email': req.body.email })
        .then(data => {
            if (data) {
                console.log(data)
                const payload = {};
                payload.fname =data.fname;
                payload.email = data.email;
                const token = jwtManager.generate(payload);
                console.log(token)
                res.json({ status: 'success', result: token });
            } else {
                console.log("inside if")
                res.json({ status: 'invalid_user' });
            }
        })
        .catch(err => {
            console.log("inside catch")
            res.json({ status: 'invalid_user' });
        })

});

//User signup
//We pass the checkValidInput to verify the input.
router.post('/signup', middleware.checkValidInput, (req, res) => {

    req.db.collection('student').findOne({ 'email': req.body.email })
        .then(doc => {
            if (doc) {
                res.json({ status: 'user exists' });
            } else {
                const user = req.body;
                req.db.collection('student').insertOne(user)
                    .then(data => {
                        res.json({ status: 'success' });
                    })
                    .catch(err => {
                        res.json({ status: "fail to add user" })
                    })
            }

        })
        .catch(err => {
            res.json({ status: "fail to find user" })
        })
});


module.exports = router;

