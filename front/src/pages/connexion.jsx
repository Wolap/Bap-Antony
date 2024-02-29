import { useState } from "react";
import styles from "../styles/Connexion.module.css";

export default function Connexion() {
    const [infoPerso, setInfoPerso] = useState({
        email: "",
        password: "",
    });

    return (
        <div className={styles.content}>
            <h2>Connexion</h2>
            <form>
                <div>
                    <label>Email :</label>
                    <input
                        type="email"
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
                        value={infoPerso.password}
                        onChange={(e) =>
                            setInfoPerso({
                                ...infoPerso,
                                password: e.target.value,
                            })
                        }
                    />
                </div>
                <button type="submit" className={styles.buttonConnexion}>
                    Se connecter
                </button>
                <button type="submit" className={styles.buttonInscrire}>
                    S&apos;inscrire
                </button>
            </form>
        </div>
    );
}
