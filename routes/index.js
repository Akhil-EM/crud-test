var express = require('express');
var router = express.Router();
var { listUsers, deleteUser } = require('../util/sql-query')
    /* GET home page. */
router.get('/', function(req, res, next) {
    listUsers('')
        .then((_data) => {
            console.log(_data)
            res.render('index', { status: 'success', data: _data, title: 'student list' });
        }).catch((error) => {
            console.log('error');
            res.render('index', { status: 'error', data: { message: error }, title: 'student list' });
        })

});

// delete
router.post('/:id', (req, res) => {
    var userId = req.params.id;
    deleteUser(userId)
        .then(() => {
            res.redirect('/');
        }).catch(() => {
            console.log('error');
        })
})

//edit

router.get('/user-count', (req, res) => {
    listUsers('')
        .then((_data) => {
            res.json({
                userCount: (_data).length
            })
        }).catch((error) => {
            res.json({
                userCount: 0
            })
        })
})


module.exports = router;