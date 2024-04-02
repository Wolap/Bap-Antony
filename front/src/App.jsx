import { useState } from 'react'
import styles from './App.module.css'
import Navbar from "./components/navbar";
import Accueil from "./pages/accueil";
import Footer from "./components/footer";
import "./App.module.css";

function App() {

  return (
    <>
        <Navbar />
        <Accueil />
        <Footer />
    </>
  )
}

export default App;
