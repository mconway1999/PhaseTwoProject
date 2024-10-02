import React from "react";
import {useState} from 'react'


function Stock ({id, inStock}){
const [displayStock, setDisplayStock] = useState(inStock);


function handleClick(){
    fetch(`http://localhost:4000/clothes/${id}`,{
    method: "PATCH",
    headers: {
    "Content-Type" : "application/json",
    },
    body: JSON.stringify ({
        displayStock:!displayStock,
    }),
})
    .then ((response)=>response.json())
    .then ((data)=> setDisplayStock(data.displayStock));
    
}

    return (
        <div>
        <img></img>
        <button className='btn' onClick={handleClick}>{displayStock ? "In stock":  "Out of Stock"}</button>
        <br/>
        <br/>
        </div>
    )

}
  
export default Stock;