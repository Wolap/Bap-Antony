import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import ProjetSoumis from "./pages/projetSoumis";
import Form from "./pages/Form";
import Inscription from "./pages/inscription";
import Connexion from "./pages/connexion";
import Profil from "./pages/profil";
import Faq from "./pages/faq";
import PageProjet from "./pages/pageProjet";

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
        path: "/projets-soumis",
        element: <ProjetSoumis />,
    },
    {
        path: "/projets-soumis/:id",
        element: <ProjetSoumis />,
    },
    {
        path: "/formulaire-soumission-projet",
        element: <Form />,
    },
    {
        path: "/inscription",
        element: <Inscription />,
    },
    {
        path: "/connexion",
        element: <Connexion />,
    },
    {
        path: "/pageprojet/:id",
        element: <PageProjet />,
    },
    {
        path: "/profil",
        element: <Profil />,
    },
    {
        path: "/faq",
        element: <Faq />,
    }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
