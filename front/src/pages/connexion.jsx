import { useState } from "react";
import styles from "../styles/Connexion.module.css";

export default function Connexion() {
    const [infoPerso, setInfoPerso] = useState({
        email: "",
        password: "",
    });

    return (
        <div className={styles.content}>
            <img
                className={styles.img}
                src="./src/assets/illustration_connexion.png"
                alt=""
            />
            <div className={styles.connexion}>
                <h2 className={styles.title}>Connexion</h2>
                <form className={styles.formulaire}>
                    <div>
                        <label>Email :</label>
                        <input
                            type="email"
                            className={styles.input}
                            placeholder="exemple@gmail.com"
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
                            placeholder="••••••••"
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
        </div>
    );
}
