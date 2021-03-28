const router = require('express').Router();
const controllers = require('../controllers');
const auth = require('../middleware/auth');

// Chat Index
router.get('/index', controllers.chat.show);

// Chat Create
router.post('/', controllers.chat.create);

// Chat Read
router.get('/:id', controllers.chat.show);

// Chat Update
router.put('/:id', controllers.chat.update);

// Chat Delete
router.delete('/:id', controllers.chat.destroy);

module.exports = router;
