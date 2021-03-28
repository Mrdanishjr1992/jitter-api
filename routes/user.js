const router = require('express').Router();
const controllers = require('../controllers');
const auth = require('../middleware/auth');

// User Create
router.post('/', controllers.user.create);

// User login
router.post('/login', controllers.user.login);

// User get
router.post('/profile', controllers.user.show);

// User Update
router.put('/update', controllers.user.update);

// User Delete
router.delete('/delete', controllers.user.destroy);

// User Verify
router.post('/verify', controllers.user.verify);

module.exports = router;
