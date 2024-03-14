import { useState } from 'react'
import styles from '../styles/navbar.module.css';

const Navbar = () => {
    
    
    return (
        <div className={styles.navbar}>
            <div>
                <a href=""><img src="" alt="" /></a>
            </div>
            <ul>
                <li><a href="">Accueil</a></li>
                <li><a href="">Projets</a></li>
                <li><a href="">Soumissions Projets</a></li>
            </ul>
            <div>
                <img src="" alt="" />
            </div>
        </div>
    )
}

export default Navbar