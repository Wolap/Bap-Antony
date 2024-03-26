import { useState } from "react";
import styles from "../styles/Inscription.module.css";
import Navbar from "../components/navbar.jsx";

export default function Inscription() {
    

    const [nom , setNom] = useState('');
    const [prenom , setPrenom] = useState('');
    const [mail , setMail] = useState('');
    const [password , setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch("http://localhost:3000/auth/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({nom, prenom, mail, password}),
        })
        .then((res) => res.json())
        .then((data) => console.log(data))
    };

    return (
        <>
            <Navbar />
            <div className={styles.content}>
                <div className={styles.inscription}>
                    <h2 className={styles.title}>Inscription !</h2>
                    <form className={styles.formulaire} onSubmit={handleSubmit}>
                        <div>
                            <label className={styles.nom}>Nom :</label>
                            <input
                                type="text"
                                className={styles.input}
                                value={nom}
                                onChange={(e) => setNom(e.target.value)}
                            />
                        </div>
                        <div>
                            <label>Prénom :</label>
                            <input
                                type="text"
                                className={styles.input}
                                value={prenom}
                                onChange={(e) => setPrenom(e.target.value)}
                            />
                        </div>
                        <div>
                            <label>Email :</label>
                            <input
                                type="email"
                                className={styles.input}
                                value={mail}
                                onChange={(e) => setMail(e.target.value)}
                            />
                        </div>
                        <div>
                            <label>Mot de passe :</label>
                            <input
                                type="password"
                                className={styles.input}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button type="submit" className={styles.buttonInscrire}>
                            Inscription
                        </button>
                        <a> Vous connecter </a>
                    </form>
                </div>
                <div className={styles.txt}>
                    <h3 className={styles.subTitle}>Content de vous voir !</h3>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
        </>
    );
}
