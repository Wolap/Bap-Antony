import { useState } from "react";
import styles from "../styles/Connexion.module.css";

export default function Connexion() {

    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch("http://localhost:3000/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({mail, password}),
        })
        .then((res) => res.json())
        .then((data) => {
            if (data.error) {
                throw new Error(data.error);
            } else {
                setMessage("Connexion réussie !");    
                localStorage.setItem('token', data.token);
                localStorage.setItem('userId', data.userId);
                console.log("data", data)
                console.log(data.token);
                console.log("user", data.userId);
            }
        })
        .catch(error => {
            console.error('Error:', error);
            setMessage("Erreur de connexion !");
        });
    };

    return (
        <div className={styles.content}>
            <img
                className={styles.img}
                src="./src/assets/illustration_connexion.png"
                alt=""
            />
            <div className={styles.connexion}>
                <h2 className={styles.title}>Connexion !</h2>
                {message && <p>{message}</p>}
                <form className={styles.formulaire} onSubmit={handleSubmit}>
                    <div>
                        <label>mail :</label>
                        <input
                            type="mail"
                            className={styles.input}
                            placeholder="exemple@gmail.com"
                            value={mail}
                            onChange={(e) => setMail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Mot de passe :</label>
                        <input
                            type="password"
                            className={styles.input}
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className={styles.buttonInscrire}>
                        Connexion
                    </button>
                    <a href="inscription"> Vous inscrire </a>
                </form>
            </div>
        </div>
    );
}
