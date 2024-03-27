import { useEffect, useState } from "react";
import styles from "../styles/projetSoumis.module.css";
import Navbar from "../components/navbar.jsx";

export default function Soumission() {

    const [infoProjet, setInfoProjet] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetch("http://localhost:3000/soumissions")
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
                    <option value="all">All</option>
                    <option value="ecologie">Ecologie et environnement</option>
                    <option value="sport">Sport</option>
                    <option value="solidarite">Solidarité et inclusion</option>
                    <option value="mobilite">Mobilité</option>
                    <option value="culture">Culture</option>
                    <option value="sante">Santé</option>
                    <option value="education">Education</option>
                    <option value="autre">Autre</option>
                </select>
                <div className={styles.flex}>
                    {infoProjet.filter(item => (selectedCategory === 'all' || item.categorie === selectedCategory) && item.nomProjet.toLowerCase().includes(searchTerm.toLowerCase())).map((item, index) => (
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
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}