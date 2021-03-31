const router = require('express').Router();
const controllers = require('../controllers');
const auth = require('../middleware/auth');

// User Create
router.post('/', controllers.user.create);

// User login
router.post('/login', controllers.user.login);

// User get
router.post('/profile', auth, controllers.user.show);

// User Update
router.put('/update', auth, controllers.user.update);

// User Delete
router.delete('/delete', auth, controllers.user.destroy);

// User Verify
router.post('/verify', auth, controllers.user.verify);

module.exports = router;
