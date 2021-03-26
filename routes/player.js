const router = require('express').Router();
const controllers = require('../controllers');
const auth = require('../middleware/auth');

// player index
router.get('/:userId', controllers.player.index);

// player Create
router.post('/', controllers.player.create);

// player get
router.get('/:id/load', auth, controllers.player.show);

// player Update
router.put('/:id', auth, controllers.player.update);

// player Delete
router.delete('/:id/delete', controllers.player.destroy);

module.exports = router;
