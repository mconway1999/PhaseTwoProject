import { Link } from "react-router-dom";
import Stock from "./Stock";

function ClothesCard({cloth}){

    return (
        <div className="clothes" >
        <li>
           <br/>
           <br/>
           <img className = 'resize-image' src = {cloth.image} alt = {cloth.type}></img> 
           <br/>
           <br/>
           <Link className ='link-style' to={`/details/${cloth.id}`}>Click Here for Details</Link>
            <br/>
            <br/>
            <br/>
           <Stock id={cloth.id} inStock={cloth.displayStock}/>
        </li>
        </div>
    )
}
export default ClothesCard;