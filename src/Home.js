import star from './assets/images/Star 3.png';
import model from './assets/images/jessica-radanavong-IchPBHFD0pw-unsplash.png';
import star2 from './assets/images/Star 4.png';
const Home = () => {
    return ( 
        <div className="home">
            <div className="home-text">
                <h1 className='fresh'>Fresh</h1>
                <h1 className='year'>2022</h1>
                <h1 className='look'>Look</h1>
            </div>
            <img className='star-image' src={star} alt="" />
            <img src={model} className='model' alt="" />
            <div className='orange-rectangle'></div>
            <div className="jacket-container">
                <label>OREGON JACKET</label><br />
                <label>$124</label>
            </div>
            <hr className='home-line'/>
            <img src={star2} alt="" className='home-line-star' />
            
        </div>
     );
}
 
export default Home;