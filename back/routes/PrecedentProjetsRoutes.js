import express from 'express'
import { getPrecedentProjets, getPrecedentProjet, createPrecedentProjet, updatePrecedentProjet, deletePrecedentProjet } from '../controllers/PrecedentProjetsController.js'

const router = express.Router()

router.get('/', getPrecedentProjets)
router.get('/:id', getPrecedentProjet)
router.post('/', createPrecedentProjet)
router.put('/:id', updatePrecedentProjet)
router.delete('/:id', deletePrecedentProjet)

export default router