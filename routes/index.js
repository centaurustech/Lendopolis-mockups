var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'Express' });
});

/* GET about/intColl page. */
router.get('/about/intelligence-collective', function(req, res, next) {
	res.render('about/intelligence-collective', { title: 'L\'intelligence collective' });
});

/* GET test page. */
router.get('/test', function(req, res, next) {
	res.render('test', { title: 'Test' });
});

module.exports = router;
