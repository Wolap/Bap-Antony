import { useState } from "react";
import styles from "../styles/Inscription.module.css";
import Navbar from "../components/navbar.jsx";

export default function Inscription() {
    const [infoPerso, setInfoPerso] = useState({
        nom: "",
        prenom: "",
        email: "",
        password: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch("http://localhost:3000/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                nom: infoPerso.nom,
                prenom: infoPerso.prenom,
                email: infoPerso.email,
                password: infoPerso.password,
            }),
        })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((error) => console.error("Error:", error));

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
                                value={infoPerso.nom}
                                onChange={(e) =>
                                    setInfoPerso({...infoPerso, nom: e.target.value,})
                                }
                            />
                        </div>
                        <div>
                            <label>Prénom :</label>
                            <input
                                type="text"
                                className={styles.input}
                                value={infoPerso.prenom}
                                onChange={(e) =>
                                    setInfoPerso({
                                        ...infoPerso,
                                        prenom: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <div>
                            <label>Email :</label>
                            <input
                                type="email"
                                className={styles.input}
                                value={infoPerso.email}
                                onChange={(e) =>
                                    setInfoPerso({
                                        ...infoPerso,
                                        email: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <div>
                            <label>Mot de passe :</label>
                            <input
                                type="password"
                                className={styles.input}
                                value={infoPerso.password}
                                onChange={(e) =>
                                    setInfoPerso({
                                        ...infoPerso,
                                        password: e.target.value,
                                    })
                                }
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
