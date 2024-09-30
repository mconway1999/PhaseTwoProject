import '../App.css';
import {useEffect, useState} from 'react'
import Header from './Header';
import NavBar from './NavBar';
import ClothesList from './ClothesList';

function App() {

const [clothes,setClothes] = useState ([])

useEffect(() => {
  fetch('http://localhost:4000/clothes')
  .then(response => response.json())
  .then(clothesData => setClothes(clothesData))
}, []);

  return (
    <div className="App">
      <Header/>
      <NavBar/>
      <ClothesList/>
    </div>
  );
}

export default App;
