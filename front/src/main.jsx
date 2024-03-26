import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import ProjetSoumis from "./pages/projetSoumis.jsx";
// import Form from './pages/form.jsx'
import Inscription from "./pages/inscription.jsx";
import Connexion from "./pages/connexion.jsx";
import "./index.module.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/root",
        element: <Root />,
    },
    {
        path: "/projet-soumis",
        element: <ProjetSoumis />,
    },
    // {
    //     path: "/formulaire-soumission-projet",
    //     element: <Form />,
    // },
    {
        path: "/inscription",
        element: <Inscription />,
    },
    {
        path: "/connexion",
        element: <Connexion />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
