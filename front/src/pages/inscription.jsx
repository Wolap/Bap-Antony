import { useState } from "react";
import styles from "../styles/Inscription.module.css";
import Navbar from "../components/navbar.jsx";

export default function Inscription() {
    

    const [nom , setNom] = useState('');
    const [prenom , setPrenom] = useState('');
    const [age, setAge] = useState('');
    const [mail , setMail] = useState('');
    const [password , setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch("http://localhost:3000/auth/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({nom, prenom, age, mail, password}),
        })
        .then((res) => {
            if (!res.ok) {
                throw res;
            }
            return res.json();
        })
        .then((data) => console.log(data))
        .catch((err) => {
            err.json().then((errorMessage) => {
                setErrorMessage(errorMessage.error);
            });
        });
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
                                required
                            />
                        </div>
                        <div>
                            <label>Prénom :</label>
                            <input
                                type="text"
                                className={styles.input}
                                value={prenom}
                                onChange={(e) => setPrenom(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label>Age :</label>
                            <input
                                type="text"
                                className={styles.input}
                                value={age}
                                onChange={(e) => setAge(e.target.value)}
                                required
                            />
                            {errorMessage && <p>{errorMessage}</p>}
                        </div>
                        <div>
                            <label>Email :</label>
                            <input
                                type="email"
                                className={styles.input}
                                value={mail}
                                onChange={(e) => setMail(e.target.value)}
                                required
                            />
                            {errorMessage && <p>{errorMessage}</p>}
                        </div>
                        <div>
                            <label>Mot de passe :</label>
                            <input
                                type="password"
                                className={styles.input}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
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
