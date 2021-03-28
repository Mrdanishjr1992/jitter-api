const router = require('express').Router();
const controllers = require('../controllers');
const auth = require('../middleware/auth');

// Group index
router.get('/index', controllers.group.index);

// Group Create
router.post('/', controllers.group.create);

// Group Read
router.get('/:id', controllers.group.show);

// Group Update
router.put('/:id', controllers.group.update);

// Group Delete
router.delete('/:id', controllers.group.destroy);

module.exports = router;
