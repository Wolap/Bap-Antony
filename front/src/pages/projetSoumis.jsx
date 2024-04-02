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
            <Navbar />
            <div className={styles.content}>
                <div className={styles.containerTitle}>
                    <h1 className={styles.title}>
                        Les projets soumis par vous
                    </h1>
                </div>
                <img
                    className={styles.imageTrait}
                    src="./src/assets/trait_soumission.png"
                    alt=""
                />
                <img
                    className={styles.imageTache1}
                    src="./src/assets/tache_1.png"
                    alt=""
                />
                <div className={styles.contentSoumission}>
                    <h2 className={styles.subTitle}>
                        Proposez nous vos projets
                    </h2>
                    <p className={styles.textSoumission}>
                    Pour la 4ème édition du budget participatif antonien, 13 projets ont été élus. Découvrez-les dès maintenant ci-dessous !
Cette année, une enveloppe de 600 000€ a été affectée au dispositif. Antony consacre 9,7€ par habitant au budget participatif, contre 6,5€ en moyenne en France. 13 projets ont été élus par les 1477 habitants qui ont participé au vote. Sur cette page, vous trouverez toutes les informations concernant la démarche : règlement, calendrier, projets proposés par les habitants et le suivi des réalisations.
                    </p>
                    <a className={styles.buttonSoumission} href="formulaire-soumission-projet">Je depose mon idée</a>
                </div>

                <img
                    className={styles.imageTache2}
                    src="./src/assets/tache_2.png"
                    alt=""
                />

                <img
                    className={styles.imageTache3}
                    src="./src/assets/tache_3.png"
                    alt=""
                />

                <div className={styles.searchFilterBar}>
                    <input
                        type="text"
                        className={styles.search}
                        value={searchTerm}
                        onChange={handleSearchChange}
                        placeholder="Chercher"
                    />
                    <div className={styles.filter}>
                        <select name="filtre" id="filtre">
                            <option value="recent">Le plus récent</option>
                            <option value="ancien">Le plus ancien</option>
                            <option value="like">Le plus aimé</option>
                        </select>
                        <select
                            value={selectedCategory}
                            onChange={handleCategoryChange}
                        >
                            <option value="all">Toutes les catégories</option>
                            <option value="Ecologie et environnement">
                                Ecologie et environnement
                            </option>
                            <option value="Sport">Sport</option>
                            <option value="Solidarité et inclusion">
                                Solidarité et inclusion
                            </option>
                            <option value="Mobilité">Mobilité</option>
                            <option value="Culture">Culture</option>
                            <option value="Santé">Santé</option>
                            <option value="Education">Education</option>
                            <option value="Autre">Autre</option>
                        </select>
                    </div>
                </div>

                <div className={styles.flex}>
                    {infoProjet.filter(item => (selectedCategory === 'all' || item.categorie === selectedCategory) && item.nomProjet.toLowerCase().includes(searchTerm.toLowerCase())).map((item, index) => (
                        <ProjectCard key={index} item={item} />
                    ))}
                </div>
            </div>
        </>
    );
}