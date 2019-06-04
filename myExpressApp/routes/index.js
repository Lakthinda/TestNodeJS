var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hello ExpressJS' });
});

router.get('/test',function(req,res,next){
  console.log('This is just a test method..');
  next();
}, function (req,res,next){
  //res.send('I dont know what Im doing 2..');
  next();
}, function (req,res){
  res.json('test JSON');
});
module.exports = router;