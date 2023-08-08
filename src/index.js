import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import OpenAcct from "./pages/OpenAcct";
import ContactUs from './pages/ContactUs';
import BOD from "./pages/BOD"
import AboutUs from './pages/AboutUs';
import Downloads from './pages/Downloads';
import SecuritiesTrading from './pages/SecuritiesTrading';
import InvestmentBanking from './pages/InvestmentBanking';
import AssetManagement from './pages/AssetManagement';
import Trusteeship from './pages/Trusteeship'
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
  {
    path: "about-us",
    element: <AboutUs />,
  },
  {
    path: "downloads",
    element: <Downloads />,
  },
  {
    path: "security-trading",
    element: <SecuritiesTrading/>,
  },
  {
    path: "investment-banking",
    element: <InvestmentBanking/>,
  },
  {
    path: "asset-management",
    element: <AssetManagement/>,
  },
  {
    path: "trusteeship",
    element: <Trusteeship/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    
  </React.StrictMode>
);


