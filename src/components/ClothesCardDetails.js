import { useParams } from "react-router-dom";
import {useEffect, useState} from 'react'

function ClothesCardDetails(){  
   
const params = useParams();
console.log(params.id)

const [clothes, setClothes] = useState([]);
const [formData, setFormData] = useState({
    type: "",
    image: "",
    price: ""
});

useEffect(() => {
    fetch(`http://localhost:4000/clothes/${params.id}`)
    .then(response => {
        if(response.ok){
            response.json().then(clothesData => {
                setClothes(clothesData)
                setFormData({
                    type: clothesData.type,
                    image: clothesData.image,
                    price: clothesData.price
                })
            })
        }
    })
}, []);

    return (
    <div>
    <br/>
    <br/>
        <img className="resize-image" src = {clothes.image}/>
      <h1 className='link-style'>{clothes.price}</h1>
      <h1 className='link-style'>{clothes.type}</h1>
      <br/>
    </div>
    )
}

export default ClothesCardDetails;