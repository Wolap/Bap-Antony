import { PrismaClient } from '@prisma/client'
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient()

const getSoumissions = async (req, res) => {
    try {
        const soumissions = await prisma.soumissionProjets.findMany({
            include: {
                likes: true,
            }
        });
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
            include: {
                likes: true,
            }
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

    const { nomProjet, description, categorie, budget, lieu, image } = req.body;
    if (!nomProjet || !description || !categorie || !budget || !lieu) {
        return res.status(400).json({ error: "Missing required fields in request body!" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        
        // Utiliser Prisma pour créer une nouvelle entrée dans la base de données
        const newSoumission = await prisma.soumissionProjets.create({
            data: {
                nomProjet,
                description,
                categorie,
                budget,
                lieu,
                image: image || undefined,
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

const likeSoumission = async (req, res) => {
    const { id } = req.params;
    const token = req.headers["x-access-token"];

    if (!token) {
        return res.status(403).json({ error: "No token provided!" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Vérifier si la soumission existe
        const soumission = await prisma.soumissionProjets.findUnique({
            where: { id: parseInt(id) },
        });
        if (!soumission) return res.status(404).json({ error: 'Soumission not found' });

        // Vérifier si l'utilisateur existe
        const user = await prisma.user.findUnique({
            where: { id: Number(decoded.id) },
        });
        if (!user) return res.status(404).json({ error: 'User not found' });

        // Ajouter un like à la soumission
        const like = await prisma.like.create({
            data: {
                user: { connect: { id: Number(decoded.id) } },
                soumissionProjets: { connect: { id: parseInt(id) } },
            },
        });

        res.status(204).end();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const dislikeSoumission = async (req, res) => {
    const { id } = req.params;
    const token = req.headers["x-access-token"];

    if (!token) {
        return res.status(403).json({ error: "No token provided!" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Vérifier si la soumission existe
        const soumission = await prisma.soumissionProjets.findUnique({
            where: { id: parseInt(id) },
        });
        if (!soumission) return res.status(404).json({ error: 'Soumission not found' });

        // Vérifier si l'utilisateur existe
        const user = await prisma.user.findUnique({
            where: { id: Number(decoded.id) },
        });
        if (!user) return res.status(404).json({ error: 'User not found' });

        // Supprimer le like de la soumission
        await prisma.like.deleteMany({
            where: {
                userId: Number(decoded.id),
                soumissionProjetsId: parseInt(id),
            },
        });

        res.status(204).end();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// get number of like 
const getLikes = async (req, res) => {
    const { id } = req.params;
    try {
        const likes = await prisma.like.findMany({
            where: { soumissionProjetsId: parseInt(id) },
        });
        res.json(likes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


export { getSoumissions, getSoumission, createSoumission, updateSoumission, deleteSoumission, likeSoumission, dislikeSoumission, getLikes };