import star from './assets/images/Star 2.png'
import arrowbox from './assets/images/arrowBox.png';
import arrow1 from './assets/images/Arrow 2.png';
import arrow2 from './assets/images/Arrow 1.png';
import AxiosFetch from './AxiosFetch';
const Product = () => {
    const {data,isPending,error} = AxiosFetch("https://fakestoreapi.com/products");
    
    
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
            <div className="product-shop" id='product-shop'>
                {error && <div>{error}</div>}
                {isPending && <div className="loading"></div>} 
                {data && data.map((item)=>(
                    <div className="item-container" key={item.id}>
                        <div className="item-image-container">
                            <img src={item.image} alt="" className='item-image'/>
                            <img src={arrowbox} alt="" className='arrow-box'/>
                        </div>
                        <h1 className='item-name'>{item.title}</h1>
                        <p>{item.description}</p>
                        <h3>{"$"+item.price}</h3>
                    </div>
                ))}
            </div>



           </div>

        </div>
     );
}
 
export default Product;