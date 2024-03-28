import { useEffect, useState } from "react";
import {Buffer} from 'buffer';  
import styles from "../styles/projetSoumis.module.css";
import Navbar from "../components/navbar.jsx";

import defaultProjectImage from '../assets/bgForm.png';

export default function Soumission() {

    const [infoProjet, setInfoProjet] = useState([]);
    const [likesByProject, setLikesByProject] = useState({});
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        // récup likes du localStorage au premier rendu
        const likesDictionary = localStorage.getItem('likesByProject');
        if (likesDictionary) {
            setLikesByProject(JSON.parse(likesDictionary));
        }
    }, []);

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

    function likeProject(projectId) {
        const key = projectId.toString();
        const userId = localStorage.getItem('userId');
    
        // vérif' si utilisateur connecté
        if (!userId) {
            return false;
        }
    
        // maj likes
        // méthode de useState, prend fonction en argument
        setLikesByProject(prevLikes => {
            // copie de l'ancienne valeur
            const updatedLikes = { ...prevLikes };
            
            // Vérifier si le projet existe dans le dictionnaire
            if (!updatedLikes[key]) {
                // Si le projet n'existe pas, créer un nouveau dictionnaire avec l'utilisateur
                return { ...updatedLikes, [key]: { [userId]: true } };
            } else {
                // Si le projet existe déjà
                if (updatedLikes[key][userId]) {
                    // Si l'utilisateur a déjà aimé, supprimer le like
                    const { [userId]: deletedValue, ...remainingLikes } = updatedLikes[key];
                    return { ...updatedLikes, [key]: remainingLikes };
                } else {
                    // Si l'utilisateur n'a pas aimé, ajouter le like
                    return { ...updatedLikes, [key]: { ...updatedLikes[key], [userId]: true } };
                }
            }
        });
        
        return true;
    }

    // Récupérer le nombre de likes
    function getLikesCount(projectId) {
        const key = projectId.toString();
        return likesByProject[key] ? Object.keys(likesByProject[key]).length : 0;
    }

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
                    {infoProjet.filter(item => (selectedCategory === 'all' || item.categorie === selectedCategory) && item.nomProjet.toLowerCase().includes(searchTerm.toLowerCase())).reverse().map((item, index) => (
                        <div key={index} className={styles.card}>
                            <img
                                className={styles.image}
                                src={item.image ?? defaultProjectImage}
                                alt=""
                            />
                            <h2 className={styles.titleProject}> {item.nomProjet} </h2>
                            <h3 className={styles.lieu}> {item.lieu} </h3>
                            <p className={styles.description}> {item.description} </p>
                            <h3 className={styles.budget}> Budget : {item.budget} </h3>
                            <p className={styles.categorie}> {item.categorie} </p>
                            <div>
                                <button
                                    className={styles.likeButton}
                                    onClick={() => likeProject(item.id)}
                                >
                                    Like
                                </button>
                                <span className={styles.likeCount}>
                                    {getLikesCount(item.id)}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}