var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'AwesomeTube' });
});


router.get('/video/:videoId', function(req, res, next) {
  res.render('video', { title: 'AwesomeTube', videoId: req.params.videoId });
});


module.exports = router;
