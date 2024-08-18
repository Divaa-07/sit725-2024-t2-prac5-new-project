// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController'); // Ensure this path is correct

router.get('/', userController.getUsers);
router.get('/users/:id', userController.getUser);
router.post('/users', userController.createUser);

module.exports = router;

