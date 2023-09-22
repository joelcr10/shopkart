
import star from './assets/images/Star 1.png';
import { useState } from 'react';
import ham from './assets/images/hamburger menu.png';
import cross from './assets/images/cross.png';

const Navbar = () => {
    const [dropdown, setDropdown] = useState(false);  //state to toggle between drop down box when mouse hovers over "our products"
    const [isNavExpanded, setIsNavExpanded] = useState(false) //state to toggle between navbar in mobile version


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
    
    const onMouseEnter = (name) => {
        if(name==="Our Products"){
            setDropdown(true)
        }     
    }
    
    const onMouseLeave = (name) => {
        setDropdown(false)
    }

    const dropdownMouseEnter = () =>{
        setDropdown(true);
    }
    const dropdownMouseLeave = () =>{
        setDropdown(false);
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
                    <div className="hamburger-menu" onClick={()=> setIsNavExpanded(!isNavExpanded)}>
                        {isNavExpanded && <img src={cross} alt="" className='menu-icon' />}
                        {!isNavExpanded && <img src={ham} alt="" className='menu-icon' />}
                        
                    </div>
                </nav> 
                <div className="star-line">
                    <img src={star} alt="" id='navbar-star'/>
                    <hr />
                </div>
                <div className={isNavExpanded? "nav-links-expanded":"nav-links"}>
                    {navbar.map((nav)=>(
                        <a onMouseEnter={()=>onMouseEnter(nav.name,)} onMouseLeave={()=>onMouseLeave(nav.name)} key={nav.name}>
                            {nav.name.toUpperCase()} 
                            
                        </a>
                    ))}
                    {dropdown && <div className="dropdown-visible" onMouseEnter={()=>dropdownMouseEnter} onMouseLeave={()=>dropdownMouseLeave}>
                        <a id='dropdown-product'>OUR PRODUCTS</a>
                        <hr />
                        <div className="dropdown-category">
                            {navbar[2].child.map((cat)=>(
                                <a>{cat.name.toUpperCase()}</a>
                            ))}
                        </div>
                    </div>}
                    
                </div>
            </div>
        </div>
    );
}
 
export default Navbar;