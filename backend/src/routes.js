const { Router } = require('express');

const UserController = require('./app/controllers/UserController');

const router = Router();

router.get('/user', UserController.index);
router.get('/user/:id', UserController.show);
router.delete('/user/:id', UserController.delete);
router.post('/user', UserController.store);
router.put('/user/:id', UserController.update);

module.exports = router;
