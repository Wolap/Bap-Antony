import { PrismaClient } from '@prisma/client'
import jwt from 'jsonwebtoken'

const prisma = new PrismaClient()

// get profile with the like of the user
const getProfile = async (req, res) => {
    const token = req.headers["x-access-token"]
    const decodedToken = jwt.decode(token, "nodejsisawesome")

    if (!token) {
        return res.json({ error: "No token provided!" })
    }

    const user = await prisma.user.findUnique({
        where: {
            id: decodedToken.id
        },
        include: {
            likes: true
        }
    }) .then(user => {
        res.json(user)
    })
    .catch(error => {
        res.json(error)
    })
}

const updateProfile = async (req, res) => {
    const token = req.headers["x-access-token"]
    const decodedToken = jwt.decode(token, "nodejsisawesome")

    if (!token) {
        return res.json({ error: "No token provided!" })
    }

    const user = await prisma.user.update({
        where: {
            id: decodedToken.id
        },
        data: {
            ...req.body
        }
    }) .then(user => {
        res.json(user)
    })
    .catch(error => {
        res.json(error)
    })
}

export { getProfile, updateProfile }