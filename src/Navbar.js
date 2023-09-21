import Dropdown from './Dropdown';
import star from './assets/images/Star 1.png';
import { useState } from 'react';
import ham from './assets/images/hamburger menu.png';
import cross from './assets/images/cross.png';

const Navbar = () => {
    const [dropdown, setDropdown] = useState(false);
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
    
        console.log('nav:',navbar);

        const onMouseEnter = (name,nav) => {
        
        if(name==="Our Products"){
            console.log('name:',nav,navbar);
            setDropdown(true)
        }     
    }
    
    const onMouseLeave = (name) => {
        setDropdown(false)
        // console.log('left:',name,dropdown);
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
                        <a onMouseEnter={()=>onMouseEnter(nav.name,nav.child)} onMouseLeave={()=>onMouseLeave(nav.name)} key={nav.name}>
                            {nav.name.toUpperCase()} 
                            
                        </a>
        
                    ))}
                    <div className={dropdown?"dropdown-visible":"dropdown-hidden"} onMouseEnter={()=>dropdownMouseEnter} onMouseLeave={()=>dropdownMouseLeave}>
                        {/* <Dropdown list = {nav.child}/> */}
                        <a id='dropdown-product'>OUR PRODUCTS</a>
                        <hr />
                        <div className="dropdown-category">
                            {navbar[2].child.map((cat)=>(
                                <a>{cat.name.toUpperCase()}</a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Navbar;