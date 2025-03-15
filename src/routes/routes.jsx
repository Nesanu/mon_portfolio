import {createBrowserRouter} from "react-router-dom";
import projetLoader from "./loader/projetLoader.jsx";
import ProjetsPage from "../views/projets/ProjetsPage";
import Home from "../views/home/Home.jsx";
import Layout from "../core/layout/Layout.jsx";
import Contact from "../views/contact/Contact.jsx";
import About from "../views/about/About.jsx";
import ErrorPage from "../views/errors/Error-page";
import ProjetPage from "../views/projets/projet/ProjetPage.jsx";


export const routes = createBrowserRouter([
    {
        path: "/", //Crée une page d'accueil
        element: (
            <Layout>
                <Home/>
            </Layout>
        )
    },
    {
        path: "/about", //Crée une page à propos
        element: (
            <Layout>
                <About/>
            </Layout>
        )
    },
    {
        path: "/contact", //Crée une page de contact
        element: (
            <Layout>
                <Contact/>
            </Layout>
        )
    },
    {
        path: "/projets", //Crée une page pour afficher tous les projets
        element: (
            <Layout>
                <ProjetsPage/>
            </Layout>
        )
    },
    {
        path: "/projets/:id",//Crée une page spécifique pour chaque projet
        element: (
            <Layout>
                <ProjetPage/>
            </Layout>
        ),
        loader: projetLoader,
        errorElement: ( //Crée une page spécifique d'erreur si le projet n'existe pas
            <Layout>
                <ErrorPage context="Le projet que vous rechercher n'existe pas"/> 
            </Layout>
        )
    },
    {
        path: "*", //Crée une page spécifique d'erreur quand un url est introuvable
        element: (
            <Layout>
                <ErrorPage />
            </Layout>
        ),
    }
])


