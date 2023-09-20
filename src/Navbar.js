import Dropdown from './Dropdown';
import star from './assets/images/Star 1.png';
import { useState } from 'react';

const Navbar = () => {
    const [dropdown, setDropdown] = useState(false);


    const navbar = [
        { name: 'Home', id: 'home'},
        { name: 'About', id: 'about' },
        { name: 'Our Products', id: 'product', child: [
            { name: 'Product 1', id: 'p1'},
            { name: 'Product 2', id: 'p2' },
            { name: 'Product 3', id: 'p3'},
            { name: 'Product 4', id: 'p4' },
        ] },
        { name: 'Contact Us', id: 'contact'},
        ];
    
        console.log('nav:',navbar);
    const onMouseEnter = (name,nav) => {
        
        if(name==="Our Products"){
            console.log('name:',nav);
            setDropdown(true)
        }     
    }
    
    const onMouseLeave = (name) => {
        setDropdown(false)
        console.log('left:',name,dropdown);
    }
    return (
        <div>
            <div className="navbar-container">
                <nav className="navbar">
                <label className="logo">ShopKart</label>
                <div className="order-container">
                    <label> WHISHLIST(0)</label>
                    <label htmlFor="">BAG(0)</label>
                    </div>
                </nav> 
                <div className="star-line">
                    <img src={star} alt="" id='navbar-star'/>
                    <hr />
                </div>
                <div className="nav-links">
                    {navbar.map((nav)=>(
                        <a onMouseEnter={()=>onMouseEnter(nav.name,nav.child)} onMouseLeave={()=>onMouseLeave(nav.name)} key={nav.name}>
                            {nav.name.toUpperCase()} 
                            {dropdown && <div>
                                    <Dropdown List = {nav.child}/>
                                    {/* {nav.name.map(items)=>{}} */}
                                </div>}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}
 
export default Navbar;