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
                <img id={styles.guyFAQ} src="/src/assets/guyFAQ.png" alt="" />
                <div className={styles.explications}>
                    <h2>Le budget participatif c&apos;est quoi ?</h2>
                    <p>Lorem ipsum dolor sit amet consectetur. Aliquam quis nisl volutpat sollicitudin egestas integer et egestas. Praesent ipsum facilisi facilisis odio ac. Nec eget nisl nunc mattis magna eu vel condimentum sit. Senectus massa nunc molestie at arcu ipsum. Nunc pretium elementum vitae tristique donec fermentum nulla vel et. Arcu faucibus tortor pellentesque arcu elementum. Semper commodo neque rutrum blandit scelerisque scelerisque at. Leo a pretium ultricies magnis</p>
                    <p>Lorem ipsum dolor sit amet consectetur. Aliquam quis nisl volutpat sollicitudin egestas integer et egestas. Praesent ipsum facilisi facilisis odio ac. Nec eget nisl nunc mattis magna eu vel condimentum sit. Senectus massa nunc molestie at arcu ipsum. Nunc pretium elementum vitae tristique donec fermentum nulla vel et. Arcu faucibus tortor pellentesque arcu elementum. Semper commodo neque rutrum blandit scelerisque scelerisque at. Leo a pretium ultricies magnis</p>
                    <p>Lorem ipsum dolor sit amet consectetur. Aliquam quis nisl volutpat sollicitudin egestas integer et egestas. Praesent ipsum facilisi facilisis odio ac. Nec eget nisl nunc mattis magna eu vel condimentum sit. Senectus massa nunc molestie at arcu ipsum. Nunc pretium elementum vitae tristique donec fermentum nulla vel et. Arcu faucibus tortor pellentesque arcu elementum. Semper commodo neque rutrum blandit scelerisque scelerisque at. Leo a pretium ultricies magnis</p>
                </div>
                <img id={styles.assetFAQ} src="/src/assets/AssetFAQ.svg" alt="" />
            </div>
            <div className={styles.container2}>
                <img id={styles.assetFAQ2} src="/src/assets/AssetFAQ2.svg" alt="" />
                <img id={styles.guyFAQ2} src="/src/assets/guyFAQ2.png" alt="" />
                <div className={styles.participer}>
                    <h2>Comment participer ?</h2>
                    <p>Lorem ipsum dolor sit amet consectetur. Aliquam quis nisl volutpat sollicitudin egestas integer et egestas. Praesent ipsum facilisi facilisis odio ac. Nec eget nisl nunc mattis magna eu vel condimentum sit. Senectus massa nunc molestie at arcu ipsum. Nunc pretium elementum vitae tristique donec fermentum nulla vel et. Arcu faucibus tortor pellentesque arcu elementum. Semper commodo neque rutrum blandit scelerisque scelerisque at. Leo a pretium ultricies magnis</p>
                    <p>Lorem ipsum dolor sit amet consectetur. Aliquam quis nisl volutpat sollicitudin egestas integer et egestas. Praesent ipsum facilisi facilisis odio ac. Nec eget nisl nunc mattis magna eu vel condimentum sit. Senectus massa nunc molestie at arcu ipsum. Nunc pretium elementum vitae tristique donec fermentum nulla vel et. Arcu faucibus tortor pellentesque arcu elementum. Semper commodo neque rutrum blandit scelerisque scelerisque at. Leo a pretium ultricies magnis</p>
                </div>
            </div>

            <div className={styles.container3}>
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
                    <a href="/">Retourner à l&apos;accueil</a>
                </div>

            </div>

        <Footer />
        </>
    )
}

export default Faq