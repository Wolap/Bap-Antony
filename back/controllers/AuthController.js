import bcrypt from 'bcrypt'
import { PrismaClient } from '@prisma/client'
import jwt from 'jsonwebtoken'

const prisma = new PrismaClient()

//Sign up
const signUp = async (req, res) => {
    const { nom, prenom, age, mail, password } = req.body

    const existingUser = await prisma.user.findUnique({
        where: {
            mail: mail
        }
    });

    if (existingUser) {
        return res.status(400).json({ error: 'Email already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    prisma.user.create({
        data: {
            nom,
            prenom,
            age,
            mail,
            password: hashedPassword
        }
    })
    .then(user => {
        const token = jwt.sign({ id: user.id, email: user.mail }, process.env.JWT_SECRET, { expiresIn: '2h' })
        res.json(token)
    })
    .catch(error => {
        res.json({ error: error.message })
    })
}

//Log in
const logIn = async (req, res) => {
    const { mail, password } = req.body

    const user = await prisma.user.findUnique({
        where: {
            mail
        }
    })

    if (!user) {
        return res.json({ error: 'User not found' })
    }

    const checkPassword = await bcrypt.compare(password, user.password)

    if (!checkPassword) {
        return res.json({ error: 'Invalid password' })
    }

    const token = jwt.sign({ id: user.id, email: user.mail }, process.env.JWT_SECRET, { expiresIn: '24h' })
    const userId = user.id

    res.json({ token, userId })
}

export { signUp, logIn }