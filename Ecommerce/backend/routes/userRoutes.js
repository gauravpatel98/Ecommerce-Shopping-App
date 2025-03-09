
import express from 'express';
import userController from '../controllers/userControllers.js'
import middleware from '../middleware/auth.js'

const router = express.Router()


router.post('/register', userController.register)

router.post('/login', userController.login)

router.get('/getUserInfo',middleware.auth, userController.getUserInfo)   //protected route

export default router;