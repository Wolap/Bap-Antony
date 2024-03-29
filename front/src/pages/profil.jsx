import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import {Buffer} from 'buffer';  
import styles from '../styles/projetSoumis.module.css';
import stylesProjets from '../styles/projetSoumis.module.css';

import Navbar from '../components/navbar';
import Footer from '../components/footer';
import defaultProjectImage from '../assets/bgForm.png';

const Profil = () => {

    const [infoUser, setInfoUser] = useState([]);
    const [infoProjet, setInfoProjet] = useState([]); 
    const [likesByProject, setLikesByProject] = useState({});
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');

    useEffect(() => {
        // récup likes du localStorage au premier rendu
        const likesDictionary = localStorage.getItem('likesByProject');
        if (likesDictionary) {
            setLikesByProject(JSON.parse(likesDictionary));
        }
    }, []);

    // fetch user info
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
            setInfoUser(data)
            console.log('data : ',data)
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
                    console.log('payload', payload)

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

    function likeProject(projectId) {
        const key = projectId.toString();
        const userId = localStorage.getItem('userId');
    
        // vérif' si utilisateur connecté
        if (!userId) {
            return false;
        }
    
        // maj likes
        // méthode de useState, prend fonction en argument
        setLikesByProject(prevLikes => {
            // copie de l'ancienne valeur
            const updatedLikes = { ...prevLikes };
            
            // Vérifier si le projet existe dans le dictionnaire
            if (!updatedLikes[key]) {
                // Si le projet n'existe pas, créer un nouveau dictionnaire avec l'utilisateur
                return { ...updatedLikes, [key]: { [userId]: true } };
            } else {
                // Si le projet existe déjà
                if (updatedLikes[key][userId]) {
                    // Si l'utilisateur a déjà aimé, supprimer le like
                    const { [userId]: deletedValue, ...remainingLikes } = updatedLikes[key];
                    return { ...updatedLikes, [key]: remainingLikes };
                } else {
                    // Si l'utilisateur n'a pas aimé, ajouter le like
                    return { ...updatedLikes, [key]: { ...updatedLikes[key], [userId]: true } };
                }
            }
        });  
        return true;
    }

    

    // Récupérer le nombre de likes
    function getLikesCount(projectId) {
        const key = projectId.toString();
        return likesByProject[key] ? Object.keys(likesByProject[key]).length : 0;
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
                    {infoProjet.filter(item => item.userId == userId).map((item, index) => (
                        
                        <div key={index} className={stylesProjets.card}>
                            <img
                                className={stylesProjets.image}
                                src={item.image ?? defaultProjectImage}
                                alt=""
                            />
                            <h2 className={stylesProjets.titleProject}> {item.nomProjet} </h2>
                            <h3 className={stylesProjets.lieu}> {item.lieu} </h3>
                            <p className={stylesProjets.description}> {item.description} </p>
                            <h3 className={stylesProjets.budget}> Budget : {item.budget} </h3>
                            <p className={stylesProjets.categorie}> {item.categorie} </p>
                            <div>
                                <button
                                    className={stylesProjets.likeButton}
                                    onClick={() => likeProject(item.id)}
                                >
                                    Like
                                </button>
                                <span className={stylesProjets.likeCount}>
                                    {getLikesCount(item.id)}
                                </span>
                            </div>
                        </div>
                    ))}
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