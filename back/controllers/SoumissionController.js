import { PrismaClient } from '@prisma/client'
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient()

const getSoumissions = async (req, res) => {
    try {
        const soumissions = await prisma.soumissionProjets.findMany();
        res.json(soumissions);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const getSoumission = async (req, res) => {
    const { id } = req.params;
    try {
        const soumission = await prisma.soumissionProjets.findUnique({
            where: { id: parseInt(id) },
        });
        if (!soumission) return res.status(404).json({ error: 'Soumission not found' });
        res.json(soumission);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const createSoumission = async (req, res) => {
    const token = req.headers["x-access-token"];
    if (!token) {
        return res.status(403).json({ error: "No token provided!" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const newSoumission = await prisma.soumissionProjets.create({
            data: {
                nomProjet: req.body.nomProjet,
                description: req.body.description,
                categorie: req.body.categorie,
                budget: req.body.budget,
                lieu: req.body.lieu,
                image: req.body.image,
                userId: Number(decoded.id)
            },
        });
        res.json(newSoumission);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const updateSoumission = async (req, res) => {
    const { id } = req.params;
    try {
        const soumission = await prisma.soumissionProjets.findUnique({
            where: { id: parseInt(id) },
        });
        if (!soumission) return res.status(404).json({ error: 'Soumission not found' });
        const updatedSoumission = await prisma.soumissionProjets.update({
            where: { id: parseInt(id) },
            data: {
                nomProjet: req.body.nomProjet,
                description: req.body.description,
                categorie: req.body.categorie,
                budget: req.body.budget,
                lieu: req.body.lieu,
                image: req.body.image,
                userId: req.body.userId
            }
        });
        res.json(updatedSoumission);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const deleteSoumission = async (req, res) => {
    const { id } = req.params;
    try {
        const soumission = await prisma.soumissionProjets.findUnique({
            where: { id: parseInt(id) },
        });
        if (!soumission) return res.status(404).json({ error: 'Soumission not found' });
        await prisma.soumissionProjets.delete({
            where: { id: parseInt(id) },
        });
        res.json({ message: 'Soumission deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export { getSoumissions, getSoumission, createSoumission, updateSoumission, deleteSoumission }