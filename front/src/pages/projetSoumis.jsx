import { useEffect, useState } from "react";
import { Buffer } from "buffer";  
import styles from "../styles/projetSoumis.module.css";
import Navbar from "../components/navbar.jsx";
import ProjectCard from "../components/projectCard.jsx";

export default function Soumission() {

    const [infoProjet, setInfoProjet] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        console.log('infoProjet', infoProjet);
    }, [infoProjet]);

    useEffect(() => {
        fetch("http://localhost:3000/soumissions")
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }   
                return response.json();
            })
            .then((payload) => {
                const parsedData = payload.map((item) => {
                    if (item.image.data.length === 0) {
                        return { ...item, image: undefined };
                    }

                    const base64Image = Buffer.from(item.image.data).toString('base64');
                    return {
                        ...item,
                        image: `data:image/jpeg;base64,${base64Image}`,
                    };
                });

                setInfoProjet(parsedData);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <>
            <Navbar/>
            <div>
                <h1 className={styles.title}>Projet Soumis </h1>
                <input type="text" value={searchTerm} onChange={handleSearchChange} placeholder="Chercher" />
                <select value={selectedCategory} onChange={handleCategoryChange}>
                    <option value="all">Toutes les catégories</option>
                    <option value="Ecologie et environnement">Ecologie et environnement</option>
                    <option value="Sport">Sport</option>
                    <option value="Solidarité et inclusion">Solidarité et inclusion</option>
                    <option value="Mobilité">Mobilité</option>
                    <option value="Culture">Culture</option>
                    <option value="Santé">Santé</option>
                    <option value="Education">Education</option>
                    <option value="Autre">Autre</option>
                </select>
                <div className={styles.flex}>
                    {infoProjet.filter(item => (selectedCategory === 'all' || item.categorie === selectedCategory) && item.nomProjet.toLowerCase().includes(searchTerm.toLowerCase())).map((item, index) => (
                        <ProjectCard key={index} item={item} />
                    ))}
                </div>
            </div>
        </>
    );
}