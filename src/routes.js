import React from "react"
import App from "./components/App";
import ErrorPage from "./components/ErrorPage";
import AddClothesForm from "./components/AddClothesForm";
import ClothesCardDetails from "./components/ClothesCardDetails";
import About from "./components/About";
import ClothesList from "./components/ClothesList";

const routes = [
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <ClothesList/>,

            },
            {
             path: "/about",
             element: <About/>,
    
           },
           {
             path: "/add_clothes",
             element: <AddClothesForm />,
           
          },
          {
             path: "/details/:id",
             element: <ClothesCardDetails />,
            
         },       
         ]
        }
];

export default routes;
