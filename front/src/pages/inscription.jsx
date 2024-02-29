import { useState } from "react";
import styles from "../styles/Inscription.module.css";

const inscription = () => {
    const [infoPerso, setInfoPerso] = useState({
        nom: "",
        prenom: "",
        email: "",
        password: "",
    });

    return (
        <div className={styles.content}>
            <h2>Inscription</h2>
            <form>
                <div>
                    <label className={styles.nom}>Nom :</label>
                    <input
                        type="text"
                        value={infoPerso.nom}
                        onChange={(e) =>
                            setInfoPerso({ ...infoPerso, nom: e.target.value })
                        }
                    />
                </div>
                <div>
                    <label>Prénom :</label>
                    <input
                        type="text"
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
                <button type="submit" className={styles.buttonInscrire}>
                    S&apos;inscrire
                </button>
                <button type="submit" className={styles.buttonConnexion}>
                    Se connecter
                </button>
            </form>
        </div>
    );
};

export default inscription;
