import { useState, useEffect } from 'react';
import { Buffer } from 'buffer';  
import styles from '../styles/profil.module.css';

import Navbar from '../components/navbar';
import Footer from '../components/footer';
import defaultProjectImage from '../assets/bgForm.png';

const Profil = () => {
    const [infoUser, setInfoUser] = useState([]);
    const [infoProjet, setInfoProjet] = useState([]); 
    const [editableField, setEditableField] = useState(null);
    const [editedValue, setEditedValue] = useState('');
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');

    // Fetch user info
    useEffect(() => {    
        // Verify if user is connected
        if (!token) {
            console.log('No token');
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
            setInfoUser(data);
            console.log("Data", data);
        });     
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

    const handleEdit = (field) => {
        setEditableField(field);
        setEditedValue(infoUser[field]);
    };

    const handleChange = (event) => {
        setEditedValue(event.target.value);
    };

    const handleSave = () => {
        // Call API to save edited value to the database
        // For simplicity, let's assume you have an API endpoint to update user info
        fetch('http://localhost:3000/user', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': token 
            },
            body: JSON.stringify({ [editableField]: editedValue })
        })
        .then(response => {
            if (response.ok) {
                // Update local state with new value
                setInfoUser(prevState => ({ ...prevState, [editableField]: editedValue }));
                setEditableField(null);
                setEditedValue('');
            } else {
                throw new Error('Failed to update user info');
            }
        })
        .catch(error => {
            console.error('Error updating user info:', error);
        });
    };

    return (
        <>
            <Navbar />
            <section className={styles.containerInfo}>
                <div className={styles.content}>
                    <div className={styles.informations}>
                        <h2>Informations</h2>

                        <div className={styles.textes}>

                            <div className={styles.flexInfos}>
                                <p> <span>Nom :</span> {editableField === 'nom' ?
                                    <input type="text" value={editedValue} onChange={handleChange} /> :
                                    infoUser.nom
                                }</p>
                                <button onClick={() => handleEdit('nom')}>Modifier</button>
                            </div>

                            <div className={styles.flexInfos}>
                                <p> <span>Prénom :</span> {editableField === 'prenom' ?
                                    <input type="text" value={editedValue} onChange={handleChange} /> :
                                    infoUser.prenom
                                }</p>
                                <button onClick={() => handleEdit('prenom')}>Modifier</button>
                            </div>

                            <div className={styles.flexInfos}>
                                <p> <span>Age :</span> {editableField === 'age' ?
                                    <input type="text" value={editedValue} onChange={handleChange} /> :
                                    infoUser.age
                                } ans</p>
                                <button onClick={() => handleEdit('age')}>Modifier</button>
                            </div>

                            <div className={styles.flexInfos}>
                                <p> <span>Adresse mail :</span> {editableField === 'mail' ?
                                    <input type="text" value={editedValue} onChange={handleChange} /> :
                                    infoUser.mail
                                }</p>
                                <button onClick={() => handleEdit('mail')}>Modifier</button>
                            </div>
                        </div>
                        <div className={styles.containerBtn}>
                            {editableField && (
                                <button className={styles.btnRegister} onClick={handleSave}>Enregistrer</button>
                            )}
                        </div>
                    </div>

                    <div className={styles.images}>
                        <div className={styles.imgTache}>
                            <img src="./src/assets/tache_profil.png" alt="" />
                        </div>

                        <div className={styles.imgEcrivain}>
                            <img src="./src/assets/illustration_ simple_ecrivain.png" alt="" />
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.containerProjects}>
                <div className={styles.userProjects}>
                    <h2>Mes projets</h2>

                    {infoProjet.filter(item => item.userId == userId).map((item, index) => (
                        <div className={styles.cardProject} key={index}>
                            <div className={styles.projectImg}>
                                <img 
                                    src={item.image ?? defaultProjectImage}
                                    alt="" 
                                />
                            </div>
                            <div className={styles.projectText}>
                                <p> {item.nomProjet} </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles.userProjects} >

                    <div className={styles.titleProject}>
                        <h2>Mes coups de coeurs</h2>                    
                        <img src="./src/assets/coeur_v2.png" alt="" />
                    </div>
                    
                    {infoProjet.filter(item => item.likes.some((like) => like.userId == userId)).map((item, index) => (
                        <div className={styles.cardProject} key={index}>
                            <div className={styles.projectImg}>
                                <img 
                                    src={item.image ?? defaultProjectImage}
                                    alt="" 
                                />
                            </div>
                            <div className={styles.projectText}>
                                <p> {item.nomProjet} </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Profil;
