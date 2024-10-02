import ClothesCard from "./ClothesCard";
import { useOutletContext } from "react-router-dom";

function ClothesList (){

const {clothes} =  useOutletContext()


const clothesComponents = clothes.map (cloth => {
    return (
        <ClothesCard key = {cloth.id} cloth={cloth}/>
    )
})
    return( 
        <ul>{clothesComponents}</ul>
)}

export default ClothesList;