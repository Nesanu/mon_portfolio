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
        loader: projetLoader,
        errorElement: (
            <Layout>
                <ErrorPage context="Le projet que vous rechercher n'existe pas"/>
            </Layout>
        )
    },
    {
        path: "*", //Crée une page spécifique d'erreur un url est introuvable
        element: (
            <Layout>
                <ErrorPage />
            </Layout>
        ),
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