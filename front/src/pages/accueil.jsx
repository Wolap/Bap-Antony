import { useState } from "react";
import styles from "../styles/accueil.module.css";

const Accueil = () => {
    return (
        <>
            <div className={styles.containerTitle}>
                <div className={styles.containerTitleFilter}>
                    <h1 className={styles.title}>
                        Vous aussi, décidez pour Anthony ?
                    </h1>
                    <div className={styles.containerButton}>
                        <button className={styles.buttonIdee}>
                            Voir les idées
                        </button>
                        <button className={styles.buttonDecouvrir}>
                            Je découvre
                        </button>
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
                <h2>Le budget participatif c’est quoi ?</h2>
                <p>
                    Le budget participatif permet aux habitants de décider
                    comment dépenser une partie de l`argent public. Ils
                    proposent des idées, votent pour leurs préférées, et les
                    projets les plus populaires sont financés et réalisés par la
                    municipalité. Cela donne aux citoyens un pouvoir direct sur
                    l`amélioration de leur quartier.
                </p>
                <img
                    src="./src/assets/illustrationAccueil_question.png"
                    alt=""
                />
            </div>

            <div className={styles.fullWidth}>
                <img
                    className={styles.trait2}
                    src="./src/assets/traitAccueil2.png"
                    alt=""
                />
            </div>

            <div className={styles.participer}>
                <h2> Comment participer ?</h2>
                <p>
                    - Proposez des idées: Tout le monde peut suggérer des
                    projets pour leur quartier. <br />
                    - Votez pour vos favoris: Choisissez les projets que vous
                    préférez. <br />
                    - Les projets gagnants sont réalisés: Ceux avec le plus de
                    votes reçoivent le financement et sont concrétisés. <br />-
                    Faites une différence dans votre quartier: Contribuez à
                    façonner votre communauté et à améliorer votre
                    environnement.
                </p>
                <img src="./src/assets/maison_accueil.png" alt="" />
            </div>

            <div className={styles.fullWidth}>
                <img
                    className={styles.trait3}
                    src="./src/assets/traitAccueil3.png"
                    alt=""
                />
                <button className={styles.bouttonVoirPlus}>Voir plus</button>
            </div>
            <section className={styles.contentIdee}>
                <div className={styles.idee}>
                    <h2 className={styles.ideeTitle}>
                        Vous avez des idées pour Anthony ?
                    </h2>
                    <div className={styles.selecteur}>
                        <div className={styles.ideeTheme}>
                            <label>J`ai une idée pour</label>
                            <select name="ideeTheme" id="choixTheme">
                                <option value="base">
                                    Choisissez un thème
                                </option>
                                <option value="1">Culture</option>
                                <option value="2">Sport</option>
                                <option value="3">Environnement</option>
                            </select>
                        </div>
                        <div className={styles.ideeLieu}>
                            <label>Dans </label>
                            <input type="text" placeholder="Indiquez le lieu" />
                        </div>
                    </div>
                    <button>Je dépose mon idée</button>
                    <img
                        src="./src/assets/illustrationAccueil_idee.png"
                        alt=""
                    />
                </div>
            </section>

            <section className={styles.containerCards}>
                <h2 className={styles.containerCardsTitle}>Les projet soumis </h2>

                <div className={styles.cards}>
                    <div className={styles.card}>
                        <img
                            className={styles.cardImg}
                            src="./src/assets/image_card1.png"
                            alt=""
                        />
                        <h3>Titre</h3>
                        <div className={styles.like}>
                            <img src="./src/assets/like.png" alt="" />
                            <p>123</p>
                        </div>
                        <button>Je découvre </button>
                    </div>
                    <div className={styles.card}>
                        <img
                            className={styles.cardImg}
                            src="./src/assets/image_card2.png"
                            alt=""
                        />
                        <h3>Titre</h3>
                        <div className={styles.like}>
                            <img src="./src/assets/like.png" alt="" />
                            <p>123</p>
                        </div>
                        <button>Je découvre </button>
                    </div>
                    <div className={styles.card}>
                        <img
                            className={styles.cardImg}
                            src="./src/assets/image_card3.png"
                            alt=""
                        />
                        <h3>Titre</h3>
                        <div className={styles.like}>
                            <img src="./src/assets/like.png" alt="" />
                            <p>123</p>
                        </div>
                        <button>Je découvre </button>
                    </div>

                </div>

                <button>Voir tous les projets</button>
                <img
                    className={styles.Image}
                    src="./src/assets/illustrationAccueil_tache2.png"
                    alt=""
                />
            </section>

            <section className={styles.containerDiscours}>
                <h2>La démocratie participative au cœur de notre action.</h2>
                <div className={styles.discours}>
                    <p>
                        En incluant les habitants toujours davantage dans la vie
                        locale, la Ville mobilise l’intelligence collective pour
                        répondre aux préoccupations de ses citoyens. Dans le
                        cadre du Budget Participatif de 2023, vous avez élu de
                        nouveaux projets. Vous pourrez suivre l’avancement de
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
                        Outil de dialogue et d’échange, cette plateforme vous
                        permet de contribuer facilement à l’avenir de votre
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
