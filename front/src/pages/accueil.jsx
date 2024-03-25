import { useState } from 'react'
import styles from '../styles/accueil.module.css'

const Accueil = () => {


    return (
        <>
            <section>
                <div className={styles.banner}>
                    <img src="/src/assets/christie-greene-QZLT_ahWNQE-unsplash.jpg" alt="" />
                </div>

                <div className={styles.presentation}>
                    <div  className={styles.infos}>
                        <div>
                            <h1>Titre</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores atque, quibusdam ipsam iusto animi veniam eum soluta fuga adipisci eligendi doloribus totam deleniti id delectus, nesciunt commodi nulla, quas natus!</p>
                        </div>
                        <img src="/src/assets/christie-greene-QZLT_ahWNQE-unsplash.jpg" alt="test" />
                    </div>

                    <div className={styles.infos}>
                        <div>
                            <h1>Titre</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores atque, quibusdam ipsam iusto animi veniam eum soluta fuga adipisci eligendi doloribus totam deleniti id delectus, nesciunt commodi nulla, quas natus!</p>
                        </div>
                        <img src="/src/assets/christie-greene-QZLT_ahWNQE-unsplash.jpg" alt="test" />
                    </div>

                    <div className={styles.infos}>
                        <div>
                            <h1>Titre</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores atque, quibusdam ipsam iusto animi veniam eum soluta fuga adipisci eligendi doloribus totam deleniti id delectus, nesciunt commodi nulla, quas natus!</p>
                        </div>
                        <img src="/src/assets/christie-greene-QZLT_ahWNQE-unsplash.jpg" alt="test" />
                    </div>
                    
                </div>
            </section>
        </>
    )
}

export default Accueil