import { NavLink } from "react-router-dom";

function NavBar (){
    
    return (
        <nav className="link-style" >
            <br/>
            <NavLink className="link-style" to = '/'>Home</NavLink>
            <br/>
            <br/>
            <NavLink className="link-style" to = '/add_clothes'>Post Clothes Here</NavLink>
            <br/>
            <br/>
            <NavLink className="link-style" to = '/about'>About</NavLink>
            <br/>
            <br/>
        </nav>
    )
}

export default NavBar; 