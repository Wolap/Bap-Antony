import { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from '../styles/navbar.module.css';

const Navbar = () => {
    
    
    return (
        <div className={styles.navbar}>
            <div className={styles.btnHome}>
                <Link to="/" ><img src="" alt="" /></Link>
            </div>
            <ul>
                <li><Link to="/">Accueil</Link></li>
                <li><Link to="/projets-soumis">Projets</Link></li>
                <li><Link to="/formulaire-soumission-projet">Soumissions Projets</Link></li>
            </ul>
            <div className={styles.btnProfil}>
                <Link to="/connexion"><img src="" alt="" /></Link>
            </div>
        </div>
    )
}

export default Navbar