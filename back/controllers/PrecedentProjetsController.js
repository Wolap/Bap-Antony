import { PrismaClient } from '@prisma/client'
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient()

const getPrecedentProjets = async (req, res) => {
    try {
        const projets = await prisma.precedentProjets.findMany();
        res.json(projets);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const getPrecedentProjet = async (req, res) => {
    const { id } = req.params;
    try {
        const projet = await prisma.precedentProjets.findUnique({
            where: { id: parseInt(id) },
        });
        if (!projet) return res.status(404).json({ error: 'Projet not found' });
        res.json(projet);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const createPrecedentProjet = async (req, res) => {
    const token = req.headers["x-access-token"];
    if (!token) {
        return res.status(403).json({ error: "No token provided!" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const newProjet = await prisma.precedentProjets.create({
            data: {
                nomProjet: req.body.nomProjet,
                description: req.body.description,
                categorie: req.body.categorie,
                budget: req.body.budget,
                lieu: req.body.lieu,
                status: req.body.status,
                image: req.body.image,
                userId: Number(decoded.id),
            },
        });
        res.json(newProjet);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const updatePrecedentProjet = async (req, res) => {
    const { id } = req.params;
    try {
        const projet = await prisma.precedentProjets.findUnique({
            where: { id: parseInt(id) },
        });
        if (!projet) return res.status(404).json({ error: 'Projet not found' });
        const updatedProjet = await prisma.precedentProjets.update({
            where: { id: parseInt(id) },
            data: {
                nomProjet: req.body.nomProjet,
                description: req.body.description,
                categorie: req.body.categorie,
                budget: req.body.budget,
                lieu: req.body.lieu,
                status: req.body.status,
                image: req.body.image,
            }
        });
        res.json(updatedProjet);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const deletePrecedentProjet = async (req, res) => {
    const { id } = req.params;
    try {
        const projet = await prisma.precedentProjets.findUnique({
            where: { id: parseInt(id) },
        });
        if (!projet) return res.status(404).json({ error: 'Projet not found' });
        await prisma.precedentProjets.delete({
            where: { id: parseInt(id) },
        });
        res.json({ message: 'Projet deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export { getPrecedentProjets, getPrecedentProjet, createPrecedentProjet, updatePrecedentProjet, deletePrecedentProjet }