import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import OpenAcct from "./pages/OpenAcct";
import ContactUs from './pages/ContactUs';
import BOD from "./pages/BOD"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "Open-Account",
    element: <OpenAcct />,
  },
  {
    path: "contact-us",
    element: <ContactUs />,
  },
  {
    path: "leadership",
    element: <BOD />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    
  </React.StrictMode>
);


