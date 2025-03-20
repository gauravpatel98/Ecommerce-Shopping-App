import express from 'express'
import middleware from '../middleware/auth.js'
import productContorllers from '../controllers/productContorllers.js'
import uploads from '../middleware/multer.js'


const router = express.Router()

router.post('/addProduct',middleware.auth,uploads.single('product_image'),productContorllers.addProduct)
router.get('/totalProducts',productContorllers.totalProducts)
router.get('/getOneProduct/:id',productContorllers.getOneProduct)
router.get('/getAllProduct',productContorllers.getAllProduct)
router.put('/updateProduct/:id',productContorllers.updateProduct)
router.delete('/deleteProduct/:id',productContorllers.deleteProduct)
router.get('/filter/:product_name',productContorllers.filterProduct)


export default router