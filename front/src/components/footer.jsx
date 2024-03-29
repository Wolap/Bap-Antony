import { useState } from 'react'
import styles from '../styles/footer.module.css';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <ul className={styles.footerList}>
                <li><a href="">Conditions générales</a></li>
                <li><a href="">Politique de confidentialité</a></li>
                <li><a href="">Politique de cookies</a></li>
                <li><a href="">Standards d&apos;accéssibilité</a></li>
                <li><a href="">Paramètre des cookies</a></li>
                <li><a href="">Plan du site</a></li>
            </ul>
            <div className={styles.socmed}>
                <a href="https://www.instagram.com/antony.92160/"><img src="/src/assets/insta.png" alt="" /></a>
                <a href="https://twitter.com/VilleAntony"><img src="/src/assets/twitter.png" alt="" /></a>
                <a href="https://www.youtube.com/user/VilleAntony"><img src="/src/assets/youtube.png" alt="" /></a>
            </div>
        </div>
    )
}

export default Footer