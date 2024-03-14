import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.module.css";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import { Router } from 'express'
// import Root from "./routes/root.jsx";

// const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <Root />,
//     },
//     {
//         path: "/app",
//         element: <App />,
//     },
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        {/* <RouterProvider router={router} /> */}
        <App />
    </React.StrictMode>
);
