var express = require('express');
var router = express.Router();
var query = require('../component/mysql')

/* GET users listing. */
router.get('/', function (req, res, next) {
    let querystr = req.query;
    let index = querystr.index;
    let size = querystr.size;

    query("select * from user limit " + index + "," + size, function (err, rows, fields) {
        res.send(rows);
    });

});

module.exports = router;
