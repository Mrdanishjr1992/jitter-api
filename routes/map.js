const router = require('express').Router();
const controllers = require('../controllers');

// map index
router.get('/:id/all', controllers.map.index);

// map Create
router.post('/', controllers.map.create);

// map get
router.get('/:id/show', controllers.map.show);

// map Update
router.put('/:id', controllers.map.update);

// map Delete
router.delete('/:id', controllers.map.destroy);

module.exports = router;
