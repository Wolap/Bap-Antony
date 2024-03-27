import { useEffect, useState } from "react";
import styles from "../styles/projetSoumis.module.css";
import Navbar from "../components/navbar.jsx";

export default function Soumission() {

    const [infoProjet, setInfoProjet] = useState([]);
    const [likesByProject, setLikesByProject] = useState({});

    useEffect(() => {
        // récup likes du localStorage au premier rendu
        const likesDictionary = localStorage.getItem('likesByProject');
        if (likesDictionary) {
            setLikesByProject(JSON.parse(likesDictionary));
        }
    }, []);

    useEffect(() => {
        fetch("http://localhost:3000/precedent")
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }   
                return response.json();
            })
            .then((dataa) => {
                setInfoProjet(dataa);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

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
                    <div className={styles.flex}>
                        {infoProjet.map((item, index) => (
                            <div key={index} className={styles.card}>
                                <img
                                    className={styles.image}
                                    src="../assets/exemple.png"
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