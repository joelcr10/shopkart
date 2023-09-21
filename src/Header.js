import truck from './assets/images/truck.png';
import v1 from './assets/images/Vector-1.png';
import v2 from './assets/images/Vector-2.png';
import v3 from './assets/images/Vector-3.png';
import v4 from './assets/images/Vector.png';


const Header = () => {
    return ( 
        <div className='header'>
            <div className='header-left'>
                <div className='delivery-container'>
                    <img src={truck} alt="" />
                    <label>Free Delivery</label>
                </div>
                <label>Return Policy</label>
            </div>
            <div className="header-right">
                <div className='text-container'>
                    <label>Login</label>
                    <label id='follow'>Follow US</label>
                </div>
                <div className="social">
                    <img src={v4} alt="" />
                    <img src={v1} alt="" />
                    <img src={v2} alt="" />
                    <img src={v3} alt="" />
                    
                </div>

            </div>
        </div>
     );
}
 
export default Header;