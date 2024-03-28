import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import styles from '../styles/profil.module.css';

import Navbar from '../components/navbar';
import Footer from '../components/footer';

const Profil = () => {

    const [infoUser, setInfoUser] = useState([]);
    const [likesByProject, setLikesByProject] = useState({});
    const token = localStorage.getItem('token');

    useEffect(() => {
        // récup likes du localStorage au premier rendu
        const likesDictionary = localStorage.getItem('likesByProject');
        if (likesDictionary) {
            setLikesByProject(JSON.parse(likesDictionary));
        }
    }, []);

    // test du chat 
    useEffect(() => {    
        console.log('token', token);
        console.log('useEffect running')
        // vérif' si utilisateur connecté
        if (!token) {
            console.log('no token')
            return;
        }
        
        fetchUserData();
        
    }, []);

    const fetchUserData = () => {
        console.log('fetchUserData running')

        fetch('http://localhost:3000/user', {
            headers: {
                'x-access-token': token 
            }
        })
        .then(response => response.json())
        .then(data => {
            setInfoUser({data})
            console.log('data : ',data)
        }
        );
        
    }


    return (
        <>
            <Navbar />
            <section>
                <h2>Informations</h2>
                <div>
                    
                    <div>
                        <p>Nom : {infoUser.nom}</p>
                        <button>Modifier</button>
                    </div>
                    <div>
                        <p>Prénom : {infoUser.prenom}</p>
                        <button>Modifier</button>
                    </div>
                    <div>
                        <p>Adresse mail : {infoUser.mail}</p>
                        <button>Modifier</button>
                    </div>
                </div>
            </section>

            <section>
                <div>
                    <h2>Mes projets</h2>
                </div>

                <div>
                    <h2>Mes coups de coeurs</h2>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Profil