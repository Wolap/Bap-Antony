import { useState } from 'react'
import styles from '../styles/navbar.module.css';

const Navbar = () => {
    
    
    return (
        <div className={styles.navbar}>
            <div className={styles.btnHome}>
                <a href=""><img src="" alt="" /></a>
            </div>
            <ul>
                <li><a href="">Accueil</a></li>
                <li><a href="">Projets</a></li>
                <li><a href="">Soumissions Projets</a></li>
            </ul>
            <div className={styles.btnProfil}>
                <a href=""><img src="" alt="" /></a>
            </div>
        </div>
    )
}

export default Navbar