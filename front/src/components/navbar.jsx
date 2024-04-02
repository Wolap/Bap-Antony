import { useState, useEffect } from "react";
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
            <Link to="/">Accueil</Link>
        </li>
        <li>
            <Link to="/projets-soumis">Projets</Link>
        </li>
        <li>
            <Link to="/formulaire-soumission-projet">Soumissions Projets</Link>
        </li>
        <li>
            <Link to="/faq">F.A.Q</Link>
        </li>
    </ul>
);

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

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

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            setIsLoggedIn(true);
        }
    }, []);

    return (
        <div className={styles.navbar}>
            <div className={styles.btnHome}>
                <Link to="/">
                    <img src="./src/assets/Logo.svg" alt="" />
                </Link>
            </div>

            {!isMobile && <MenuNormal />}

            <div className={styles.connecter}>
                {/* Condition pour afficher "Profil" au lieu de "Se connecter" si l'utilisateur est connecté */}
                {isLoggedIn ? (
                    <button className={styles.connexion}>
                        <Link to="/profil">Profil</Link>
                    </button>
                ) : (
                    <button className={styles.connexion}>
                        <Link to="/connexion">Se connecter</Link>
                    </button>
                )}
            </div>

            <MenuBurger isOpen={isOpen} toggleMenu={toggleMenu} />

            {isOpen && (
                <div className={`${styles.menu} ${isOpen ? "open" : ""}`}>
                    <h2 className={styles.burgerTitle}>
                        Paramètres et activité
                    </h2>

                    <h3 className={styles.burgerSubtitle}>Votre compte</h3>

                    <div className={styles.bouttonCompte}>
                        <button>
                            <Link to="/inscription">S&apos;inscrire</Link>
                        </button>
                        <button>
                            <Link to="/connexion">Se connecter</Link>
                        </button>
                    </div>

                    <hr />

                    <div className={styles.budget}>
                        <h3 className={styles.budgetSubtitle}>
                            Budget participatif 2025
                        </h3>
                        <button className={styles.budgetProjet}>
                            <Link to="/projets-soumis">Voir les projets</Link>
                        </button>
                        <button className={styles.budgetProjet}>
                            <Link to="/formulaire-soumission-projet">
                                Soumettre un projet
                            </Link>
                        </button>
                        <button className={styles.budgetProjet}>
                            <Link to="/faq">F.A.Q</Link>
                        </button>
                        <button className={styles.deconnexion}>
                            <a href="">Déconnexion</a>
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
