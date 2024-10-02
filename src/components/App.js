import '../App.css';
import {useEffect, useState} from 'react'
import Header from './Header';
import NavBar from './NavBar';
import { Outlet } from "react-router-dom";

function App() {

const [clothes,setClothes] = useState ([])

console.log (clothes)

useEffect(() => {
  fetch('http://localhost:4000/clothes')
  .then(response => response.json())
  .then(clothesData => setClothes(clothesData))
}, []);

  function addClothes(newClothes) {
    fetch('http://localhost:4000/clothes',{
      method: "POST",
      headers: {
      "Content-Type": "application/json"
    },
      body: JSON.stringify({...newClothes})
    }
    )
    .then(response => response.json())
    .then(newClothesData => setClothes([...clothes, newClothesData]))
  }
  
  return (
    <div className="App">
      <NavBar/>
      <Header/>
      <Outlet context={
            {
                clothes : clothes,
                addClothes: addClothes,
            }
        }/>
    </div>
  );
}

export default App;
