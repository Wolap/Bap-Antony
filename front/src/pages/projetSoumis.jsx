import { useState } from "react";
import Navbar from "../components/navbar";

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
                        Lorem ipsum dolor sit amet consectetur. Aliquam quis
                        nisl volutpat sollicitudin egestas integer et egestas.
                        Praesent ipsum facilisi facilisis odio ac. Nec eget nisl
                        nunc mattis magna eu vel condimentum sit. Senectus massa
                        nunc molestie at arcu ipsum. Nunc pretium elementum
                        vitae tristique donec fermentum nulla vel et. Arcu
                        faucibus tortor pellentesque arcu elementum. Semper
                        commodo neque rutrum blandit scelerisque scelerisque at.
                        Leo a pretium ultricies magnis
                    </p>
                    <button className={styles.buttonSoumission}>
                        Je depose mon idée
                    </button>
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

                <div className={styles.flex}>
                    <div className={styles.card}>
                        <img
                            className={styles.image}
                            src="./src/assets/exemple.png"
                            alt=""
                        />
                        <div>
                            <h2 className={styles.titleProject}>
                                {infoNom.nom}
                            </h2>
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
                    </div>
                    <div className={styles.card}>
                        <img
                            className={styles.image}
                            src="./src/assets/exemple.png"
                            alt=""
                        />

                        <div>
                            <h2 className={styles.titleProject}>
                                {infoNom.nom}
                            </h2>
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
                    </div>
                    <div className={styles.card}>
                        <img
                            className={styles.image}
                            src="./src/assets/exemple.png"
                            alt=""
                        />
                        <div>
                            <h2 className={styles.titleProject}>
                                {infoNom.nom}
                            </h2>
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
                    </div>
                    <div className={styles.card}>
                        <img
                            className={styles.image}
                            src="./src/assets/exemple.png"
                            alt=""
                        />
                        <div>
                            <h2 className={styles.titleProject}>
                                {infoNom.nom}
                            </h2>
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
                    </div>
                    <div className={styles.card}>
                        <img
                            className={styles.image}
                            src="./src/assets/exemple.png"
                            alt=""
                        />
                        <div>
                            <h2 className={styles.titleProject}>
                                {infoNom.nom}
                            </h2>
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
                    </div>
                    <div className={styles.card}>
                        <img
                            className={styles.image}
                            src="./src/assets/exemple.png"
                            alt=""
                        />
                        <div>
                            <h2 className={styles.titleProject}>
                                {infoNom.nom}
                            </h2>
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
                    </div>
                </div>
            </div>
        </>
    );
}
