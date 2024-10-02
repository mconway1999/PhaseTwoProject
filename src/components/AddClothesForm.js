import { useState } from "react";
import { useOutletContext } from "react-router-dom";

function AddClothesForm (){

  const {addClothes} = useOutletContext()


    const [formData, setFormData] = useState({
        type: "",
        image: "",
        price: ""
      });

      function addingFormData(event){
        setFormData({...formData, [event.target.name]: event.target.value})
      }
    
      function handleSubmit(event){
        event.preventDefault();
        
        const newClothes = {
            ...formData
          };

      addClothes(newClothes);

    setFormData({
        type: "",
        image: "",
        price: ""
    });
        }

    return (
        <div className = 'add_clothes_form'>
        
          <h2 className = 'style-form'>Post Your Clothes</h2>
          <form onSubmit={handleSubmit}>
            <input onChange={addingFormData} className= "input" type="text" name="type" placeholder="Insert Clothing Type" value= {formData.type} required/>
            <input onChange={addingFormData} className= "input" type="text" name="image" placeholder="Insert Clothing Image"value= {formData.image} required/>
            <input onChange={addingFormData} className= "input" type="text" name="price" placeholder="Insert Clothing Price"value= {formData.price} required/>
            <button className='btn' type="submit">Post</button>
            <br/>
            <br/>
            <br/>
            <br/>
          </form>
        </div>
      );
    }


export default AddClothesForm;