import { useState } from 'react';
import styles from '../styles/Form.module.css';
import Navbar from '../components/navbar.jsx';

function Form() {
    const [nom, setNom] = useState('');
    const [description, setDescription] = useState('');
    const [img, setImg] = useState(null);
    const [budget, setBudget] = useState('');
    const [lieu, setLieu] = useState('');
    const [categorie, setCategorie] = useState('');

    function handleClick (){
        fetch('http://localhost:3000', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nom: nom,
                description: description,
                img: img,
                budget: budget,
                lieu: lieu,
                categorie: categorie,
            }),
        })
    }

  return (
    <>
        <Navbar/>
        <div className={styles.formcontainer}>
            <h1>Proposez un projet</h1>
            <form action="" className={styles.form}>
                <section className={styles.title}>
                    <span>1</span>
                    <h2>Proposez un projet</h2>
                </section>
                <div className={styles.formcard}>
                    <section>
                        <div className={styles.formgroup}>
                            <label htmlFor="nom">
                                <span>Nom du projet</span>
                                <input type="text" id="nom" name="nom" placeholder="Nom du projet" value={nom} onChange={(e) => setNom(e.target.value)}/>
                            </label>
                        </div>
                        <div className={styles.formgroup}>
                            <label htmlFor="description">
                                <span>Description du projet</span>
                                <textarea id={styles.description} name="description" placeholder="Description du projet" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                            </label>
                        </div>
                        <div className={styles.formgroup}>
                            <label htmlFor="img">
                                <input type="file" id={styles.img} name="img" accept="image/*" onChange={(e) => { setImg(e.target.files[0]); }}></input>
                            </label>
                            {img && <p></p>}
                        </div>
                    </section>
                    <section>
                        <div className={styles.formgroup}>
                            <label htmlFor="budget">
                                <span>Budget du projet</span>
                                <select id="budget" name="budget" value={budget} onChange={(e) => setBudget(e.target.value)}>
                                    <option value="0-100">0 - 100€</option>
                                    <option value="100-1000">100€ - 1.000€</option>
                                    <option value="1000-5000">1.000€ - 5.000€</option>
                                    <option value="5000-10000">5.000€ - 10.000€</option>
                                    <option value="10000-50000">10.000€ - 50.000€</option>
                                    <option value="50000-100000">50.000€ - 100.000€</option>
                                    <option value="100000+">100.000€ +</option>
                                    <option value="jsp">Je ne sais pas</option>
                                </select>
                            </label>
                        </div>
                        <div className={styles.formgroup}>
                            <label htmlFor="lieu">
                                <span>Lieu du projet (ne pas mettre le zip code ainsi que la ville)</span>
                                <input id="lieu" name="lieu" placeholder="Lieu du projet" value={lieu} onChange={(e) => setLieu(e.target.value)}></input>
                            </label>
                        </div>
                        <div className={styles.formgroup}>
                            <label htmlFor="categorie">
                                <span>Catégorie du projet</span>
                                <select id="categorie" name="categorie" value={categorie} onChange={(e) => setCategorie(e.target.value)}>
                                    <option value="ecologie">Ecologie et environnement</option>
                                    <option value="sport">Sport</option>
                                    <option value="solidarite">Solidarité et inclusion</option>
                                    <option value="mobilite">Mobilité</option>
                                    <option value="culture">Culture</option>
                                    <option value="sante">Santé</option>
                                    <option value="education">Education</option>
                                    <option value="autre">Autre</option>
                                </select>
                            </label>
                        </div>
                    </section>
                </div>
                <button type="submit" onClick={handleClick} id={styles.formbtn}>Confirmer</button>
            </form>
        </div>
    </>
  );
}

export default Form;