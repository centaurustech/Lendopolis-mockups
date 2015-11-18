var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'Express' });
});

/* GET /transfer page. */
router.get('/transfer', function(req, res, next) {
	res.render('transfer', { title: 'Paiement par virement' });
});

/* ///////////////////////////////
//////////////////////////////////
//
//  ABOUT
//
//////////////////////////////////
/////////////////////////////// */

/* GET about/manifesto page. */
router.get('/about/manifesto', function(req, res, next) {
	res.render('about/manifesto', { title: 'Manifeste' });
});

/* GET about/collective-intelligence page. */
router.get('/about/collective-intelligence', function(req, res, next) {
	res.render('about/collective-intelligence', { title: 'L\'intelligence collective' });
});

/* GET about/statistics page. */
router.get('/about/statistics', function(req, res, next) {
	res.render('about/statistics', { title: 'Statistiques' });
});

/* GET about/team page. */
router.get('/about/team', function(req, res, next) {
	res.render('about/team', { title: 'L\'équipe' });
});

/* GET about/mentors page. */
router.get('/about/mentors', function(req, res, next) {
	res.render('about/mentors', { title: 'Mentors' });
});

/* GET about/press page. */
router.get('/about/press', function(req, res, next) {
	res.render('about/press', { title: 'Articles' });
});

/* GET about/presskit page. */
router.get('/about/presskit', function(req, res, next) {
	res.render('about/presskit', { title: 'Press kit' });
});

/* GET about/service-providers page. */
router.get('/about/service-providers', function(req, res, next) {
	res.render('about/service-providers', { title: 'Prestataires' });
});

/* GET about/contact page. */
router.get('/about/contact', function(req, res, next) {
	res.render('about/contact', { title: 'Contact' });
});

/* GET test page. */
router.get('/test', function(req, res, next) {
	res.render('test', { title: 'Test' });
});

module.exports = router;
