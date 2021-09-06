var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('system', { title: 'My Dashboard :: System' });
});

module.exports = router;