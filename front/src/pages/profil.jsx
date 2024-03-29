import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import {Buffer} from 'buffer';  
import styles from '../styles/profil.module.css';

import Navbar from '../components/navbar';
import Footer from '../components/footer';
import ProjectCard from '../components/projectCard';

const Profil = () => {

    const [infoUser, setInfoUser] = useState([]);
    const [infoProjet, setInfoProjet] = useState([]); 
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');

    // fetch user info
    useEffect(() => {    
        // vérif' si utilisateur connecté
        if (!token) {
            console.log('no token')
            return;
        }
        
        fetchUserData();
        
    }, []);

    const fetchUserData = () => {

        fetch('http://localhost:3000/user', {
            headers: {
                'x-access-token': token 
            }
        })
        .then(response => response.json())
        .then(data => {
            setInfoUser(data)
            console.log("data", data)
        }
        );     
    }

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
                setInfoProjet(parsedData);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <>
            <Navbar />
            <section className={styles.containerInfo}>
                <div className={styles.informations}>
                    <h2>Informations</h2>
                    <div>
                        <div className={styles.flexInfos}>
                            <p>Nom : {infoUser.nom}</p>
                            <button>Modifier</button>
                        </div>
                        <div className={styles.flexInfos}>
                            <p>Prénom : {infoUser.prenom}</p>
                            <button>Modifier</button>
                        </div>
                        <div className={styles.flexInfos}>
                            <p>Adresse mail : {infoUser.mail}</p>
                            <button>Modifier</button>
                        </div>
                    </div>

                    <div>
                        <img src="./src/assets/tache_profil.png" alt="" />
                    </div>

                    <div>
                        <img src="" alt="" />
                    </div>
                </div>

            </section>

            <section>
                <div>
                    <h2>Mes projets</h2>
                    {infoProjet.filter(item => item.userId == userId).map((item, index) => (
                        
                        <ProjectCard key={index} item={item} />
                    ))}
                </div>

                <div>
                    <h2>Mes coups de coeurs</h2>                    
                    
                    {infoProjet.filter(item => item.likes.some((like) => like.userId == userId)).map((item, index) => (
                        <ProjectCard key={index} item={item} />
                    ))}
                    
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Profil