import React from "react"
import App from "./components/App";
import ErrorPage from "./components/ErrorPage";
import ClothesList from "./components/ClothesList";
import AddClothesForm from "./components/AddClothesForm";
import ClothesCard from "./components/ClothesCard";

const routes = [
    {
        path: "/",
        element: <App/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "/",
                element: <ClothesList/>
            },
            {
                path: "/",
                element: <AddClothesForm/>
            },
            {
                path: "/clothes/:id",
                element: <ClothesCard/>
            }
        ]
    }
];
export default routes;
