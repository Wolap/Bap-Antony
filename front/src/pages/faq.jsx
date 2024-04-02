import styles from '../styles/faq.module.css'
import { useState } from 'react'
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const Faq = () => {
    const [showAnswer, setShowAnswer] = useState([false, false]); // Initialize with the number of FAQ items

    const toggleAnswer = index => {
        setShowAnswer(showAnswer.map((item, i) => i === index ? !item : item));
    };

    return (
        <>
        <Navbar />
            <div className={styles.container1}>
                <div className={styles.explications}>
                    <h2>Le budget participatif c&apos;est quoi ?</h2>
                    <p>Depuis 2018, la Ville propose aux citoyens de s&apos;impliquer davantage dans la vie de la commune grâce au budget participatif. Ce processus démocratique permet aux Antoniens de plus de 16 ans de proposer, puis de choisir des projets d&apos;intérêt général pour la ville ou leur quartier.</p>
                    <p>Le budget participatif est un processus démocratique permettant aux citoyens de proposer, puis de choisir des projets d’intérêt général pour la ville ou leur quartier.
                        Appliqué pour la première fois en 1990 à Porto Alegre au Brésil, ce dispositif a gagné progressivement les différents pays d’Amérique latine, puis les États-unis, le Canada et enfin l’Europe. 2800 communes dans le monde l’auraient mis en œuvre à ce jour. En France, les budgets dispositifs se sont particulièrement développés à partir de 2014. Aujourd’hui, de nombreuses villes l’ont adopté, parmi lesquelles Paris, Rennes, Metz, Dijon, Grenoble, Poitiers, Montreuil, Belfort, et, dans notre département, Montrouge, Bagneux, Bourg-la-Reine et Sèvres.</p>
                </div>
                <img id={styles.guyFAQ} src="/src/assets/guyFAQ.png" alt="" />
            </div>
            <div className={styles.container2}>
                <img id={styles.assetFAQ2} src="/src/assets/AssetFAQ2.svg" alt="" />
                <img id={styles.guyFAQ2} src="/src/assets/guyFAQ2.png" alt="" />
                <div className={styles.participer}>
                    <h2>Comment participer ?</h2>
                    <p id={styles.bold}>Les finances locales peuvent représenter un sujet complexe à appréhender. Le budget participatif en fait partie : la réalisation des projets proposés par les habitants correspondent à des dépenses dites “d&apos;investissement”. L&apos;occasion d&apos;aborder quelques notions sur les procédures budgétaires des villes.</p>
                    <p>Le budget d&apos;une commune s&apos;établit sur une année civile, du 1er janvier au 31 décembre. L&apos;ensemble des opérations budgétaires de la collectivité sont inscrites dans un document : le budget primitif. Établi en toute transparence, il comprend l&apos;ensemble des dépenses et des recettes, qui doivent être à l&apos;équilibre. Contrairement à l&apos;État, une ville ne peut pas adopter un budget déficitaire. Le Conseil municipal doit voter le budget annuel chaque année avant le 15 avril. Un débat d&apos;orientation budgétaire a lieu dans les deux mois avant l&apos;adoption du budget.</p>
                </div>
            </div>
        <div className={styles.container}>
            <div className={styles.container3}>
                <img id={styles.assetFAQ} src="/src/assets/AssetFAQ.svg" alt="" />
                <div className={styles.FAQ}>
                    <h2>FAQ</h2>
                    <div className={styles.FAQcontainer} onClick={() => toggleAnswer(0)}>
                        <div className={styles.question}>
                            <h3>Lorem ipsum dolor sit amet consectetur. Aliquam quis nisl volutpat sollicitudin egestas integer et egestas. Praesent ipsum facilisi facilisis odio ac ?</h3>
                            <span>{showAnswer[0] ? '-' : '+'}</span>
                        </div>
                        {showAnswer[0] && (
                            <p>
                                Lorem ipsum dolor sit amet consectetur. Aliquam quis nisl volutpat sollicitudin egestas integer et egestas. Praesent ipsum facilisi facilisis odio ac. Nec eget nisl nunc mattis magna eu vel condimentum sit. Senectus massa nunc molestie at arcu ipsum. Nunc pretium elementum vitae tristique donec fermentum nulla vel et. Arcu faucibus tortor pellentesque arcu elementum. Semper commodo neque rutrum blandit scelerisque scelerisque at. Leo a pretium ultricies magnis
                            </p>
                        )}
                    </div>
                    <div className={styles.FAQcontainer} onClick={() => toggleAnswer(1)}>
                        <div className={styles.question}>
                            <h3>Lorem ipsum dolor sit amet consectetur. Aliquam quis nisl volutpat sollicitudin egestas integer et egestas. Praesent ipsum facilisi facilisis odio ac ?</h3>
                            <span>{showAnswer[1] ? '-' : '+'}</span>
                        </div>
                        {showAnswer[1] && (
                            <p>
                                Lorem ipsum dolor sit amet consectetur. Aliquam quis nisl volutpat sollicitudin egestas integer et egestas. Praesent ipsum facilisi facilisis odio ac. Nec eget nisl nunc mattis magna eu vel condimentum sit. Senectus massa nunc molestie at arcu ipsum. Nunc pretium elementum vitae tristique donec fermentum nulla vel et. Arcu faucibus tortor pellentesque arcu elementum. Semper commodo neque rutrum blandit scelerisque scelerisque at. Leo a pretium ultricies magnis
                            </p>
                        )}
                    </div>
                </div>
            </div>
            <a id={styles.btn} href="/">Retourner à l&apos;accueil</a>
            </div>
        <Footer />
        </>
    )
}

export default Faq