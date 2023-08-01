import express from 'express'
const router=express.Router()
//import controller file
import scholar from '../controllers/homeController.js'


router.get('/',scholar.homeController)
router.post('/',scholar.homeController)

//export file
export default router