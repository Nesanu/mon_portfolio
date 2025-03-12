import ReactDOM from 'react-dom/client';
import {RouterProvider} from "react-router-dom";
import {routes} from "./routes/routes.jsx";
import {StrictMode} from "react";
import './styles/index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <StrictMode>
            <RouterProvider router={routes} />
    </StrictMode>
);
