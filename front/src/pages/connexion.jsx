import { useState } from "react";
import styles from "../styles/Connexion.module.css";

export default function Connexion() {
    const [infoPerso, setInfoPerso] = useState({
        email: "",
        password: "",
    });

    return (
        <div className={styles.content}>
            <div className={styles.connexion}>
                <h2 className={styles.title}>Connexion !</h2>
                <form className={styles.formulaire}>
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
                        Connexion
                    </button>
                    <button type="submit" className={styles.buttonConnexion}>
                        Inscription
                    </button>
                </form>
            </div>
            <div className={styles.txt}>
                <h3 className={styles.subTitle}>Content de vous revoir !</h3>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
        </div>
    );
}
