import { useEffect, useState } from "react";
import styles from "../styles/projetSoumis.module.css";

export default function Soumission() {

    const [infoProjet, setInfoProjet] = useState([]);

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

    return (
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
                        <h2 className={styles.titleProject}> Nom : {item.nomProjet} </h2>
                        <h3 className={styles.lieu}> {item.lieu} </h3>
                        <p className={styles.description}> {item.description} </p>
                        <h3 className={styles.budget}> Budget : {item.budget} </h3>
                        <p className={styles.categorie}> {item.categorie} </p>
                    </div>
                ))}  

                 
                      
            </div>
        </div>
    );
}
