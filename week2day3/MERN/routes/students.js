var express = require('express');
var router = express.Router();
const { ObjectID } = require('bson');

//add student into database
//http://localhost:5000/students  method:POST
router.post('/', function (req, res, next) {

  req.db.collection('bookstore')
    .findOne({ id: req.body.id })
    .then(document => {
      if (!document) {
        req.db.collection('bookstore').findOne({ email: req.body.email })
          .then(data => { })
        req.db.collection('bookstore').
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


/* GET users listing. */
//http://localhost:5000/students  method:GET
router.get('/', function (req, res, next) {
  req.db.collection('bookstore')
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
  let query = new ObjectID(req.params.id)
  req.db.collection('bookstore')
    .findOne({ _id: query })
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

  req.db.collection('bookstore')
    .updateOne({ id: query },
      {
        $set: {
          major: req.body.major,
          email: req.body.email,
          fname: req.body.fname,
          lname: req.body.lname
        }
      })
    .then(data => {
      console.log("mesage test")
      res.json({ status: "successully updated" });
    })
    .catch(err => {
      res.json({ status: 'faild to update' })
    })
});
//http://localhost:5000/students  method DELETE
router.delete('/:id', function (req, res, next) {
  console.log(req.params.id)
  req.db.collection('bookstore')
    .removeOne({ id: req.params.id })
    .then(data => {
      console.log("mesage test")
      res.json({ status: "successully deleted" });
    })
    .catch(err => {
      res.json({ status: 'faild to delete' })
    })
});
module.exports = router;
