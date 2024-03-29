import { useState, useEffect } from "react";
import styles from "../styles/pageProjet.module.css";
import Navbar from "../components/navbar.jsx";

import { Buffer } from "buffer";
import defaultProjectImage from "../assets/bgForm.png";

export default function pageProjet() {
    const [pageLink, setPageLink] = useState(window.location.href);

    const copyLink = () => {
        navigator.clipboard.writeText(pageLink);
        alert("Lien copié !");
    };
    const prefillMessageForX = () => {
        const url = encodeURIComponent(pageLink);
        const facebookShareUrl = "https://twitter.com/intent/post?url=" + url;
        window.open(facebookShareUrl, "_blank");
    };

    const shareOnFacebook = () => {
        const url = encodeURIComponent(pageLink);
        const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
        window.open(facebookShareUrl, "_blank");
    };

    const [soumission, setSoumission] = useState([]);

    const getSoumission = async (id) => {
        try {
            const response = await fetch(
                `http://localhost:3000/soumissions/${id}`
            );
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const soumission = await response.json();
            const base64Image = Buffer.from(soumission.image.data).toString(
                "base64"
            );
            setSoumission({
                ...soumission,
                image: `data:image/jpeg;base64,${base64Image}`,
            });
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    let url = window.location.href;
    let id = new URL(url).pathname.split("/").pop();

    useEffect(() => {
        getSoumission(id);
    }, [id]);

    return (
        <>
            <Navbar />
            <section>
                <h1 className={styles.title}>{soumission.nomProjet}</h1>
                <p className={styles.text}>
                    Dans le cadre du Budget Participatif
                </p>

                <div className={styles.content}>
                    <div className={styles.contentProjet}>
                        <img
                            className={styles.projetImg}
                            src={soumission.image ?? defaultProjectImage}
                            alt=""
                        />
                        <h2 className={styles.projetLieu}>
                            Lieu : <br /> {soumission.lieu}
                        </h2>
                        <h3 className={styles.projetBudget}>
                            Budget : <br /> {soumission.budget}
                        </h3>
                        <h3 className={styles.projetDescription}>
                            Description :
                        </h3>
                        <p className={styles.projetDescriptionText}>
                            {soumission.description}
                        </p>
                    </div>
                    <div className={styles.info}>
                        <div className={styles.infoLike}>
                            <img
                                className={styles.like}
                                src="/src/assets/likeProjet.png"
                                alt=""
                            />
                            <p className={styles.nbLike}>647</p>
                        </div>
                        <h2 className={styles.partager}>Partager</h2>
                        <div className={styles.partagerButton}>
                            <button
                                className={styles.partagerLien}
                                onClick={copyLink}
                            >
                                Copier le lien
                            </button>
                            <button
                                className={styles.partagerFacebook}
                                onClick={shareOnFacebook}
                            >
                                Partager sur Facebook
                            </button>
                            <button
                                className={styles.partagerX}
                                onClick={prefillMessageForX}
                            >
                                Partager sur X
                            </button>
                        </div>

                        <div>
                            <div className={styles.publier}>Publié par :</div>
                            <div className={styles.statut}>Statut :</div>
                            <div className={styles.theme}>
                                Catégorie : {soumission.categorie}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
