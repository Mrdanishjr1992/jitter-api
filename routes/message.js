const router = require('express').Router();
const controllers = require('../controllers');
const auth = require('../middleware/auth');

// Messsage index
router.get('/index', controllers.message.index);

// Messsage Create
router.post('/', controllers.message.create);

// Messsage Read
router.get('/:id', controllers.message.show);

// Messsage Update
router.put('/:id', controllers.message.update);

// Messsage Delete
router.delete('/:id', controllers.message.destroy);

module.exports = router;
