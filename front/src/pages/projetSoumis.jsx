import { useState } from "react";
import styles from "../styles/projetSoumis.module.css";

export default function Soumission() {
    const [infoNom, setInfoNom] = useState({
        nom: "Parc de la paix",
    });

    const [infoLieu, setInfoLieu] = useState({
        lieu: "34 rue de la paix, 75000 Paris",
    });

    const [infoDescription, setInfoDescription] = useState({
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo.",
    });

    const [infoBudget, setInfoBudget] = useState({
        budget: "3499-4999 €",
    });

    const [infoCatgorie, setInfoCategorie] = useState({
        categorie: "Environnement",
    });

    return (
        <div>
            <h1 className={styles.title}>Projet Soumis </h1>
            <div className={styles.flex}>
                <div className={styles.card}>
                    <img
                        className={styles.image}
                        src="../assets/exemple.png"
                        alt=""
                    />
                    <h2 className={styles.titleProject}> {infoNom.nom} </h2>
                    <h3 className={styles.lieu}> {infoLieu.lieu} </h3>
                    <p className={styles.description}>
                        {infoDescription.description}
                    </p>
                    <h3 className={styles.budget}>
                        Budget : {infoBudget.budget}
                    </h3>
                    <p className={styles.categorie}>
                        Catégorie : {infoCatgorie.categorie}
                    </p>
                </div>
                <div className={styles.card}>
                    <img
                        className={styles.image}
                        src="../assets/exemple.png"
                        alt=""
                    />
                    <h2 className={styles.titleProject}> {infoNom.nom} </h2>
                    <h3 className={styles.lieu}> {infoLieu.lieu} </h3>
                    <p className={styles.description}>
                        {infoDescription.description}
                    </p>
                    <h3 className={styles.budget}> {infoBudget.budget} </h3>
                    <p className={styles.categorie}>
                        Catégorie : {infoCatgorie.categorie}
                    </p>
                </div>
                <div className={styles.card}>
                    <img
                        className={styles.image}
                        src="../assets/exemple.png"
                        alt=""
                    />
                    <h2 className={styles.titleProject}> {infoNom.nom} </h2>
                    <h3 className={styles.lieu}> {infoLieu.lieu} </h3>
                    <p className={styles.description}>
                        {infoDescription.description}
                    </p>
                    <h3 className={styles.budget}> {infoBudget.budget} </h3>
                    <p className={styles.categorie}>
                        Catégorie : {infoCatgorie.categorie}
                    </p>
                </div>
                <div className={styles.card}>
                    <img
                        className={styles.image}
                        src="../assets/exemple.png"
                        alt=""
                    />
                    <h2 className={styles.titleProject}> {infoNom.nom} </h2>
                    <h3 className={styles.lieu}> {infoLieu.lieu} </h3>
                    <p className={styles.description}>
                        {infoDescription.description}
                    </p>
                    <h3 className={styles.budget}> {infoBudget.budget} </h3>
                    <p className={styles.categorie}>
                        Catégorie : {infoCatgorie.categorie}
                    </p>
                </div>
                <div className={styles.card}>
                    <img
                        className={styles.image}
                        src="../assets/exemple.png"
                        alt=""
                    />
                    <h2 className={styles.titleProject}> {infoNom.nom} </h2>
                    <h3 className={styles.lieu}> {infoLieu.lieu} </h3>
                    <p className={styles.description}>
                        {infoDescription.description}
                    </p>
                    <h3 className={styles.budget}> {infoBudget.budget} </h3>
                    <p className={styles.categorie}>
                        Catégorie : {infoCatgorie.categorie}
                    </p>
                </div>
            </div>
        </div>
    );
}
