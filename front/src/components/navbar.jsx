import { useState } from "react";
import styles from "../styles/navbar.module.css";

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.btnHome}>
                <a href="">
                    <img src="./src/assets/Logo.svg" alt="" />
                </a>
            </div>
            <ul>
                <li>
                    <a href="">Accueil</a>
                </li>
                <li>
                    <a href="">Projets</a>
                </li>
                <li>
                    <a href="">Soumissions Projets</a>
                </li>
            </ul>
            <div className={styles.connecter}>
                <img
                    className={styles.img}
                     src="./src/assets/recherche.svg"
                    alt=""
                />
                <button className={styles.connexion}>Se connecter</button>
            </div>
        </div>
    );
};

export default Navbar;
