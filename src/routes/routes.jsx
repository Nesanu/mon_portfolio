import {createBrowserRouter} from "react-router-dom";
import projetLoader from "./loader/projetLoader.jsx";
import ProjetsPage from "../views/projets/ProjetsPage";
import ProjetPage from "../views/projets/projet/ProjetPage";
import Home from "../views/home/Home.jsx";
import Layout from "../core/layout/Layout.jsx";
import Contact from "../views/contact/Contact.jsx";
import About from "../views/about/About.jsx";
import ErrorPage from "../views/errors/Error-page";


export const routes = createBrowserRouter([
    {
        path: "/",
        element: (
            <Layout>
                <Home/>
            </Layout>
        )
    },
    {
        path: "/about",
        element: (
            <Layout>
                <About/>
            </Layout>
        )
    },
    {
        path: "/contact",
        element: (
            <Layout>
                <Contact/>
            </Layout>
        )
    },
    {
        path: "/projets",
        element: (
            <Layout>
                <ProjetsPage/>
            </Layout>
        )
    },
    {
        path: "/projets/:id",
        element: (
            <Layout>
                <ProjetPage/>
            </Layout>
        ),
        errorElement: (
            <Layout>
                <p>Error 403 Page Projet introuvable</p>
                {/*// TODO Crée une page spécifique d'erreur quand un ID de projet est introuvable*/}
            </Layout>
        ),
        loader: projetLoader,
        // errorElement: (
        //     <Layout>
        //         <ErrorPage />
        //     </Layout>
        // )
    },
    {
        path: "*", //Crée une page spécifique d'erreur un url est introuvable
        element: (
            <Layout>
                <p>Error 404 introuvable</p>
                {/*
                // TODO PRINCIPALE - Crée une page spécifique d'erreur un url est introuvable
                // */}
            </Layout>
        ),
        errorElement: (
            <Layout>
                <ErrorPage />
            </Layout>
        )
    }
])



//Exemple de route pour un logement
// {
//     path: "logement/:id",
//     element: (
//         <Layout>
//             <Logement />
//         </Layout>
//     ),
//     loader: logementLoader,
//     errorElement: (
//         <Layout>
//             <ErrorPage />
//         </Layout>
//     ),
// },