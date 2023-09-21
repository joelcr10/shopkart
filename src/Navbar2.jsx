import { useRef } from "react";
import {FaBars, FaTimes} from 'react-icons/fa';
const Navbar2 = () => {

    const navRef = useRef();
    const showNavbar = () =>{
        navRef.current.classList.toggle("Responsive_nav");
    }
    return ( 
        <nav class="nav">
            <input type="checkbox" id="nav-check"/>
            <div class="nav-header">
                <div class="nav-title">
                Logo
                </div>
            </div>
            <div class="nav-btn">
                <label for="nav-check">
                <span></span>
                <span></span>
                <span></span>
                </label>
            </div>
            
            <ul class="nav-list">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
     );
}
 
export default Navbar2;