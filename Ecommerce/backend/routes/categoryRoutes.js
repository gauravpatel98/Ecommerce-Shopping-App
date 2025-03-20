import express  from 'express';
import categoryController from '../controllers/categoryController.js'
import middleware from '../middleware/auth.js'
import uploads  from '../middleware/multer.js';


const router = express.Router()

router.post('/addCategory',middleware.auth, uploads.single('category_image'),categoryController.addCategory)
router.get('/getAllCategory',categoryController.getAllCategory)
router.delete('/deleteCategory/:id',middleware.auth,categoryController.deleteCategory)
router.put('/updateCategory/:id',middleware.auth,categoryController.updateCategory)


export default router;