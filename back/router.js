import express from 'express'
import AuthRoutes from './routes/AuthRoutes.js'
import UserRoutes from './routes/UserRoutes.js'
import SoumissionProjets from './routes/SoumissionRoutes.js'
import PrecedentProjets from './routes/PrecedentProjetsRoutes.js'

const router = express.Router()

router.use('/auth', AuthRoutes)
router.use('/user', UserRoutes)
router.use('/soumissions', SoumissionProjets)
router.use('/precedent', PrecedentProjets)

export default router