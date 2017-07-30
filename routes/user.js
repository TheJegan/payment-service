var express = require('express');
var router = express.Router();
var UserController = require('../controllers/user');

/* GET users listing. */
router.get('/', UserController.getAll);

router.get('/:id', UserController.getById);

router.post('/', UserController.create);

router.delete('/:id', UserController.delete);

module.exports = router;
