var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'ExpressAndrew' });
});

/* GET home page. */
router.get('/index', function(req, res, next) {
    res.render('index', { title: 'ExpressAndrew' });
});

/* GET Userlist page. */
router.get('/userlist', function(req, res) {
    console.log('hello from the userlist route');
    var db = req.db;
    var collection = db.get('Usercollection');
    collection.find({},{},function(e,docs){
        res.render('userlist', {
            "userlist" : docs
        });
    });
});

module.exports = router;
