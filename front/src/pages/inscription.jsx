import { useState } from "react";
import styles from "../styles/Inscription.module.css";

export default function Inscription() {
    const [infoPerso, setInfoPerso] = useState({
        nom: "",
        prenom: "",
        email: "",
        password: "",
    });

    return (
        <div className={styles.content}>
            <div className={styles.inscription}>
                <h2 className={styles.title}>Inscription</h2>
                <form className={styles.formulaire}>
                    <div>
                        <label className={styles.nom}>Nom :</label>
                        <input
                            type="text"
                            className={styles.input}
                            placeholder="DUPONT"
                            value={infoPerso.nom}
                            onChange={(e) =>
                                setInfoPerso({
                                    ...infoPerso,
                                    nom: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div>
                        <label className={styles.prenom}>Prénom :</label>
                        <input
                            type="text"
                            className={styles.input}
                            placeholder="Jean"
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
                        <label className={styles.age}>Age :</label>
                        <input
                            type="number"
                            className={styles.input}
                            placeholder="23"
                            min="10"
                            max="150"
                            value={infoPerso.age}
                        />
                    </div>
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
                            placeholder="********"
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
                    <button type="submit" className={styles.buttonConnexion}>
                        Connexion
                    </button>
                </form>
            </div>

            <img
                className={styles.img}
                src="./src/assets/illustration_inscription.png"
                alt=""
            />
        </div>
    );
}
