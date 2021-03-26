const router = require('express').Router();
const controllers = require('../controllers');

// attack index
router.get('/', controllers.attack.index);

// attack Create
router.post('/', controllers.attack.create);

// attack get
router.get('/:id', controllers.attack.show);

// attack Update
router.put('/:id', controllers.attack.update);

// attack Delete
router.delete('/:id', controllers.attack.destroy);

module.exports = router;
