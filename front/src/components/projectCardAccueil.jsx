/* eslint-disable react/prop-types */
import styles from "../styles/projectCardAccueil.module.css";
import defaultProjectImage from '../assets/bgForm.png';
import { useState } from "react";

const ProjectCard = (props) => {
    const { item } = props;
    const [likes, setLikes] = useState(item.likes);

    const userId = localStorage.getItem('userId') ?? null;

    const handleLike = () => {
        // check if the user has already liked the project
        const hasLiked = likes.some((like) => like.userId == userId);
        
        if (hasLiked) {
            // remove like
            fetch(`http://localhost:3000/soumissions/${item.id}/like`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': localStorage.getItem('token'),
                },
            })
                .then((response) => {
                    if (!response.ok) {
                        return alert('Error liking project');
                    }
                    setLikes(likes.filter((like) => like.userId != userId));
                })
        } else {
            // add like
            fetch(`http://localhost:3000/soumissions/${item.id}/like`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': localStorage.getItem('token'),
                },
            })
            .then((response) => {
                if (!response.ok) {
                    return alert('Error liking project');
                }
                setLikes([...likes, { userId }]);
            })
        }
    }

    return (
        <div className={styles.card}>
            <img
                className={styles.image}
                src={item.image ?? defaultProjectImage}
                alt=""
            />
            <h2 className={styles.titleProject}> {item.nomProjet} </h2>
            <div className={styles.containerLike}>
                <button
                    className={styles.buttonLike}
                    onClick={userId ? handleLike : () => alert('You must be logged in to like a project')}
                > <img src="/src/assets/likeProjet.png" alt="" />
                </button>
                <span className={styles.likeCount}>
                    {likes.length}
                </span>
            </div>
            <button className={styles.btnDiscover}> Je découvre </button>
        </div>
    );
};

export default ProjectCard;