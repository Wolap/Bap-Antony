import { useState, useEffect } from 'react'
import styles from '../styles/accueil.module.css'
import { Buffer } from 'buffer';

import ProjectCard from '../components/projectCard'

const Accueil = () => {

    const [mostLiked, setMostLiked] = useState([]);

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

                // projets dans l'ordre décroissant des likes
                parsedData.sort((a, b) => b.likes - a.likes);

                // prendre les 3 premiers projets
                const topThree = parsedData.slice(0, 3);

                setMostLiked(topThree);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <>
            <div className={styles.container}>
                <h1>Projets les plus aimés</h1>
                <div className={styles.projects}>
                    {mostLiked.map((item) => (
                        <ProjectCard key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Accueil;
