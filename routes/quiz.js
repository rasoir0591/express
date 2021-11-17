var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.render('Quiz', { title: 'Quiz' });
});

module.exports = router;
