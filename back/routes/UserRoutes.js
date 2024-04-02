import express from 'express'
import { getProfile, updateProfile } from '../controllers/UserController.js'

const router = express.Router()

router.get('/', getProfile)
router.put('/', updateProfile)

export default router