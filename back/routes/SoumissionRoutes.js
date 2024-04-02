import express from 'express'
import { getSoumissions, getSoumission, createSoumission, updateSoumission, deleteSoumission, likeSoumission, dislikeSoumission } from '../controllers/SoumissionController.js'

const router = express.Router()

router.get('/', getSoumissions)
router.get('/:id', getSoumission)
router.post('/', createSoumission)
router.put('/:id', updateSoumission)
router.delete('/:id', deleteSoumission)

router.post('/:id/like', likeSoumission)
router.delete('/:id/like', dislikeSoumission)

export default router