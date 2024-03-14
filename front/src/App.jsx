// import { useState } from "react";
import Inscription from "./pages/inscription";
import Connexion from "./pages/connexion";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import styles from "./App.module.css";

function App() {
    return (
        <div>
            <div className={styles.inscription}>
                {/* <Inscription /> */}
                <Connexion />
            </div>
        </div>
    );
}

export default App;
