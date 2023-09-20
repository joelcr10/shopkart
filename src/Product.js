import star from './assets/images/Star 2.png'
import jacket1 from './assets/images/jacket1.png';
import jacket2 from './assets/images/jacket2.png';
import jacket3 from './assets/images/jacket3.png';
import jacket4 from './assets/images/jacket4.png';
import arrowbox from './assets/images/arrowBox.png';
import arrow1 from './assets/images/Arrow 2.png';
import arrow2 from './assets/images/Arrow 1.png';
const Product = () => {
    return ( 
        <div className="product">
            <div className="title-container">
                <h1 className="title">New products</h1>
                <img src={star} alt="" className='star'/>
                <img src={arrow1} alt="" className='left-arrow'/>
                <img src={arrow2} alt="" className='right-arrow'/>

            </div>
           <div className="product-container">
            <div className="side-menu">
                    <p>Apparel</p>
                    <p id='accessories'>Accessories</p>
                    <p>Best Sellers</p>
                    <p>50% off</p>
            </div>
            <div className="product-shop">
               
                <div className="item-container">
                    <div className="item-image-container">
                        <img src={jacket1} alt="" className='item-image'/>
                        <img src={arrowbox} alt="" className='arrow-box'/>
                    </div>
                    <h1 className='item-name'>FLORIDA JACKET</h1>
                    <p>Suffered alteration in some form ybsuffalteration in some forms, byinjected humor, or randomized</p>
                    <h3>$100</h3>
                </div>

                <div className="item-container">
                    <div className="item-image-container">
                        <img src={jacket2} alt="" className='item-image'/>
                        <img src={arrowbox} alt="" className='arrow-box'/>
                    </div>
                    <h1 className='item-name'>FLORIDA JACKET</h1>
                    <p>Suffered alteration in some form ybsuffalteration in some forms, byinjected humor, or randomized</p>
                    <h3>$100</h3>
                </div>

                <div className="item-container">
                    <div className="item-image-container">
                        <img src={jacket3} alt="" className='item-image'/>
                        <img src={arrowbox} alt="" className='arrow-box'/>
                    </div>
                    <h1 className='item-name'>FLORIDA JACKET</h1>
                    <p>Suffered alteration in some form ybsuffalteration in some forms, byinjected humor, or randomized</p>
                    <h3>$100</h3>
                </div>

                <div className="item-container">
                    <div className="item-image-container">
                        <img src={jacket4} alt="" className='item-image'/>
                        <img src={arrowbox} alt="" className='arrow-box'/>
                    </div>
                    <h1 className='item-name'>FLORIDA JACKET</h1>
                    <p>Suffered alteration in some form ybsuffalteration in some forms, byinjected humor, or randomized</p>
                    <h3>$100</h3>
                </div>
            </div>
           </div>

        </div>
     );
}
 
export default Product;