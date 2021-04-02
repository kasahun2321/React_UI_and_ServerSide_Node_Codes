const express = require('express');
const router = express.Router();
const middleware = require('../middleware/authorization');
const jwtManager = require('../jwt/jwtManager');
const { ObjectID } = require('bson');


//User login
router.post('/login', (req, res) => {
    req.db.collection('student')
        .findOne({ 'username': req.body.username })
        .then(data => {
            if (data) {
                console.log(data)
                const payload = {};
                payload.name =data.name;
                payload.username = data.username;
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

    req.db.collection('student').findOne({ 'username': req.body.username })
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
//////////////////////////CRUD For USER account////////////////////////////// 
//add student into database
//http://localhost:5000/students  method:POST
router.post('/', function (req, res, next) {

  req.db.collection('student')
    .findOne({ id: req.body.id })
    .then(document => {
      if (!document) {
        req.db.collection('student').findOne({ email: req.body.email })
          .then(data => { })
        req.db.collection('student').
          insertOne(req.body)
          .then(data => {
            console.log("added successfully")
            res.json({ status: "added succesfully" });
          })
          .catch(err => {
            res.json({ status: 'faild to add' })
          })

      }
      else {
        res.json({ status: "ID already exists" })
      }

    }).catch(err => { res.json("faild to check the database") })


});


/* GET student listing. */
//http://localhost:5000/students  method:GET
router.get('/', function (req, res, next) {
  req.db.collection('student')
    .find().toArray()
    .then(data => {
      console.log("mesage test")
      res.json(data);
    })
    .catch(err => {
      res.json({ status: 'faild to laod' })
    })

});
//get single user from the listing
//http://localhost:5000/students/:id  method:GET
router.get('/:id', function (req, res, next) {
  let query = req.params.id
  req.db.collection('student')
    .findOne({ id: query })
    .then(data => {
      console.log("mesage test")
      res.json(data);
    })
    .catch(err => {
      res.json({ status: 'faild to laod' })
    })

});


//http://localhost:5000/students/:id  method : PUT
router.put('/:id', function (req, res, next) {
  let query = req.params.id
  req.db.collection('student')
    .update({ id: query }, {
      $set: {
        id: req.body.id,
        title: req.body.title,
        author: req.body.author,
        quantity: req.db.quantity
      }
    })
    .then(data => {
      console.log("mesage test")
      res.json(data);
    })
    .catch(err => {
      res.json({ status: 'faild to laod' })
    })

});
//http://localhost:5000/students  method DELETE
router.delete('/:id', function (req, res, next) {
  console.log(req.params.id)
  req.db.collection('student')
    .removeOne({ id: req.params.id })
    .then(data => {
      console.log("mesage test")
      res.json({ status: "successully deleted" });
    })
    .catch(err => {
      res.json({ status: 'faild to delete' })
    })
});

router.delete('/', function (req, res, next) {
  console.log(req.params.id)
  req.db.collection('student')
    .remove()
    .then(data => {
      console.log("mesage test")
      res.json({ status: "successully deleted alll" });
    })
    .catch(err => {
      res.json({ status: 'faild to delete' })
    })
});
module.exports = router;

