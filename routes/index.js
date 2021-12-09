var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({
    status: true,
    message: 'Better storage. Better transfers. Better internet on Phu Quoc Network'
  })
});

router.get('/ping', function(req, res, next) {
  res.json({
    status: true,
    message: 'Better storage. Better transfers. Better internet on Phu Quoc Network'
  })
});

module.exports = router;
