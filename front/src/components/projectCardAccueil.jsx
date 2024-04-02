/* eslint-disable react/prop-types */
import styles from "../styles/projectCardAccueil.module.css";
import defaultProjectImage from '../assets/bgForm.png';

const ProjectCard = (props) => {
    const { item } = props;

    return (
        <div className={styles.card}>
            <img
                className={styles.image}
                src={item.image ?? defaultProjectImage}
                alt=""
            />
            <h2 className={styles.titleProject}> {item.nomProjet} </h2>
            <div className={styles.containerLike}>
                <img src="/src/assets/likeProjet.png" alt="" />
                <span className={styles.likeCount}>
                    {item.likes.length}
                </span>
            </div>
            <a className={styles.btnDiscover} href={`pageprojet/${item.id}`}>Je découvre</a>
        </div>
    );
};

export default ProjectCard;