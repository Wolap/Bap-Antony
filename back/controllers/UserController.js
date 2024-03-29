import { PrismaClient } from '@prisma/client'
import jwt from 'jsonwebtoken'

const prisma = new PrismaClient()

const getProfile = async (req, res) => {
    const token = req.headers["x-access-token"]
    const decodedToken = jwt.decode(token, "nodejsisawesome")

    if (!token) {
        return res.json({ error: "No token provided!" })
    }

    const user = await prisma.user.findUnique({
        where: {
            id: decodedToken.id
        }
    }) .then(user => {
        res.json(user)
    })
    .catch(error => {
        res.json(error)
    })
}

export { getProfile }