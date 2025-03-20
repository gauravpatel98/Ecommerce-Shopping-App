import express from 'express'
import middleware from '../middleware/auth.js'
import brandControllers from '../controllers/brandControllers.js';
import uploads from '../middleware/multer.js';


const router = express.Router();

router.post('/addBrand', middleware.auth, uploads.single("brand_image"), brandControllers.addBrand) 
router.get('/getAllBrand', brandControllers.getAllBrand) 
router.delete('/deleteBrand/:id', middleware.auth, brandControllers.deleteBrand) 
router.put('/updateBrand/:id', middleware.auth, brandControllers.updateBrand) 


export default router;