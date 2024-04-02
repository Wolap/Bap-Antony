import { useState, useEffect } from 'react'
import styles from '../styles/accueil.module.css'
import { Buffer } from 'buffer'

import ProjectCardAccueil from '../components/projectCardAccueil'

const Accueil = () => {
    const [categorie, setTheme] = useState('');
    const [lieu, setLieu] = useState('');
    const [mostLiked, setMostLiked] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/soumissions")
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }   
                return response.json();
            })
            .then((payload) => {
                const parsedData = payload.map((item) => {
                    if (item.image.data.length === 0) {
                        return { ...item, image: undefined };
                    }

                    const base64Image = Buffer.from(item.image.data).toString('base64');
                    return {
                        ...item,
                        image: `data:image/jpeg;base64,${base64Image}`,
                    };
                });

                // projets dans l'ordre décroissant des likes
                parsedData.sort((a, b) => b.likes - a.likes);

                // prendre les 3 premiers projets
                const topThree = parsedData.slice(0, 3);

                setMostLiked(topThree);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <>
            <div className={styles.containerTitle}>
                <div className={styles.containerTitleFilter}>
                    <h1 className={styles.title}>
                        Vous aussi, décidez pour Anthony !
                    </h1>
                    <div className={styles.containerButton}>
                            <a className={styles.buttonIdee} href="projets-soumis">Voir les idées</a>
                            <a className={styles.buttonDecouvrir} href="faq">Je découvre</a>
                    </div>
                </div>
            </div>

            <div className={styles.fullWidth}>
                <img
                    className={styles.trait1}
                    src="./src/assets/traitAccueil1.png"
                    alt=""
                />
            </div>

            <div className={styles.budgetParticipatif}>
                <div>
                <img
                    src="./src/assets/illustrationAccueil_question.png"
                    alt=""
                />
                <h2>Le budget participatif c&apos;est quoi ?</h2>
                <p>
                    Le budget participatif permet aux habitants de décider
                    comment dépenser une partie de l&apos;argent public. Ils
                    proposent des idées, votent pour leurs préférées, et les
                    projets les plus populaires sont financés et réalisés par la
                    municipalité. Cela donne aux citoyens un pouvoir direct sur
                    l&apos;amélioration de leur quartier.
                </p>
                </div>
            </div>

            <div className={styles.fullWidth}>
                <img
                    className={styles.trait2}
                    src="./src/assets/traitAccueil2.png"
                    alt=""
                />
            </div>

            <div className={styles.participer}>
                <div className={styles.participerText}>
                    <h2> Comment participer ?</h2>
                    <ul>
                        <li>Proposez des idées: Tout le monde peut suggérer des projets pour leur quartier.</li>
                        <li>Votez pour vos favoris: Choisissez les projets que vous préférez.</li>
                        <li>Les projets gagnants sont réalisés: Ceux avec le plus de votes reçoivent le inancement et sont concrétisés.</li>
                        <li>Faites une différence dans votre quartier: Contribuez à façonner votre communauté et à améliorer votre environnement.</li>
                    </ul>
                </div>
                <img src="./src/assets/maison_accueil.png" alt="" />
            </div>

            <div className={styles.fullWidth}>
                <img
                    className={styles.trait3}
                    src="./src/assets/traitAccueil3.png"
                    alt=""
                />
                <a className={styles.bouttonVoirPlus} href="faq">Voir plus</a>
            </div>
            <section className={styles.contentIdee}>
                <div className={styles.idee}>
                    <h2 className={styles.ideeTitle}>
                        Vous avez des idées pour Anthony ?
                    </h2>
                    <div className={styles.selecteur}>
                        <div className={styles.ideeTheme}>
                            <label>J&apos;ai une idée pour</label>
                            <select name="ideeTheme" id="choixTheme" value={categorie} onChange={(e) => setTheme(e.target.value)}>
                                <option value="Autre">
                                    Choisissez un thème
                                </option>
                                <option value="Ecologie et environnement">Ecologie et environnement</option>
                                <option value="Sport">Sport</option>
                                <option value="Solidarité et inclusion">Solidarité et inclusion</option>
                                <option value="Mobilité">Mobilité</option>
                                <option value="Culture">Culture</option>
                                <option value="Santé">Santé</option>
                                <option value="Education">Education</option>
                                <option value="Autre">Autre</option>
                            </select>
                        </div>
                        <div className={styles.ideeLieu}>
                            <label>Dans </label>
                            <input type="text" placeholder="Indiquez le lieu" value={lieu} onChange={(e) => setLieu(e.target.value)} />
                        </div>
                    </div>
                    <a href={`formulaire-soumission-projet?categorie=${categorie}&lieu=${lieu}`}>Je dépose mon idée</a>
                    <img
                        src="./src/assets/illustrationAccueil_idee.png"
                        alt=""
                    />
                </div>
            </section>

            <section className={styles.containerCards}>
                <h2 className={styles.containerCardsTitle}>Les projet soumis </h2>

                <div className={styles.containerLiked}>
                    <div className={styles.projects}>
                        {mostLiked.map((item) => (
                            <ProjectCardAccueil key={item.id} item={item} />
                        ))}
                    </div>
                </div>

                <a className={styles.bouttonVoirProjets} href="projets-soumis">Voir tous les projets</a>

            </section>

            <section className={styles.containerDiscours}>
                <h2>La démocratie participative au cœur de notre action.</h2>
                <div className={styles.discours}>
                    <p>
                        En incluant les habitants toujours davantage dans la vie
                        locale, la Ville mobilise l&apos;intelligence collective pour
                        répondre aux préoccupations de ses citoyens. Dans le
                        cadre du Budget Participatif de 2023, vous avez élu de
                        nouveaux projets. Vous pourrez suivre l&apos;avancement de
                        leur réalisation dès cette année grâce à cette
                        plateforme.
                        <br />
                        <br />
                        Par ailleurs, en continuité de la consultation sur le
                        réaménagement du parc Heller, un comité de suivi citoyen
                        sera mis en place. Tous les Antoniens pourront déposer
                        leur candidature, ensuite un tirage au sort sera
                        effectué.
                        <br />
                        <br />
                        Outil de dialogue et d&apos;échange, cette plateforme vous
                        permet de contribuer facilement à l&apos;avenir de votre
                        commune en proposant des projets ou en votant pour les
                        initiatives qui vous semblent les plus pertinentes. Elle
                        vous permet de vous exprimer, de manière sécurisée et
                        conviviale.
                        <br />
                        <br />
                        <br />
                        <span> À vos idées !</span>
                    </p>
                    <img src="./src/assets/portrait.png" alt="" />
                </div>
            </section>

            <div className={styles.fullWidth}>
                <img
                    className={styles.taches3}
                    src="./src/assets/illustrationAccueil_tache3.png"
                    alt=""
                />
                <img
                    className={styles.trait4}
                    src="./src/assets/traitAccueil4.png"
                    alt=""
                />
            </div>
        </>
    );
};


export default Accueil;
