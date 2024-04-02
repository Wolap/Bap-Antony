import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/navbar.module.css";

const MenuBurger = ({ isOpen, toggleMenu }) => (
    <button
        className={`${styles.burger} ${isOpen ? styles.open : ""}`}
        onClick={toggleMenu}
    >
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
    </button>
);

const MenuNormal = () => (
    <ul className={styles.menu}>
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
);

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        function handleResize() {
            setIsMobile(window.innerWidth < 768);
        }
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={styles.navbar}>
            <div className={styles.btnHome}>
                <Link to="/">
                    <img src="./src/assets/Logo.svg" alt="" />
                </Link>
            </div>

            <li>
                <Link to="/">Accueil</Link>
            </li>
            <li>
                <Link to="/projets-soumis">Projets</Link>
            </li>
            <li>
                <Link to="/formulaire-soumission-projet">
                    Soumissions Projets
                </Link>
            </li>

            {!isMobile && <MenuNormal />}

            <div className={styles.connecter}>
                <button className={styles.connexion}>
                    <Link to="/connexion">Se connecter</Link>
                </button>
            </div>

            <MenuBurger isOpen={isOpen} toggleMenu={toggleMenu} />

            {isOpen && (
                <div className={`${styles.menu} ${isOpen ? "open" : ""}`}>
                    <h2 className={styles.burgerTitle}>
                        Paramètres et activité
                    </h2>

                    <h3 className={styles.burgerSubtitle}>Votre compte</h3>

                    <div className={styles.bouttonCompte}>
                        <button> S&apos;inscrire</button>
                        <button>Se connecter</button>
                    </div>

                    <hr />

                    <div className={styles.budget}>
                        <h3 className={styles.budgetSubtitle}>
                            Budget participatif 2025
                        </h3>
                        <button className={styles.budgetProjet}>
                            Voir les projets
                        </button>
                        <button className={styles.budgetProjet}>
                            Soumettre un projet
                        </button>
                        <button className={styles.deconnexion}>
                            Déconnexion
                        </button>
                    </div>
                    <img
                        className={styles.image}
                        src="./src/assets/illustration_burger.png"
                        alt=""
                    />
                </div>
            )}
        </div>
    );
};

export default Navbar;
