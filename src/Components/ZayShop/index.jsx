import './style.scss';
import product_single_10 from '../../assests/images/shop/product_single_10.jpg';
import { items } from './Items';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from 'react';
import { product } from './product';
import star from '../../assests/star.jpg';
import settingsFooter from './SettingsFooter'


const Zayshop = () => {

    const [number, setNumber] = useState(1)
    const [img, setImg] = useState(product_single_10)


    const settings = {
        // dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 4000,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 567,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      }




    return <div>
     <div className='active-wear-section'>
    
    
    <div className='G-container'>
    <div className='active-wear'>
        <div className='position'>



              <div style={{ backgroundImage: `url('${img}')`}} className='img'> </div>

              <div>
                <Slider {...settings}  className='product-slider'> 
                        {
                                product.map(el=> <div key={el.id}>
                                  <img src={el.img} alt="Unknown" className='product-frame' onClick={() => setImg(el.img)}/>
                                </div>)
                            }
                </Slider> 
              </div> 
              </div>

        <div className='wear-section'>
            <p className='title'>Active Wear</p>
            <p className='price'>$25.00</p>
            <p className='rating'>Rating 4.8 | 36 Comments</p>
            <p className='easy-wear'><span className='brand'>Brand:</span> Easy Wear</p>
            <p className='brand'>Description:</p>
            <p className='content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse. Donec condimentum elementum convallis. Nunc sed orci a diam ultrices aliquet interdum quis nulla.</p>
            <p className='easy-wear'><span className='brand'>Avaliable Color:</span> White / Black</p>



            <ul>
                <li className='brand'>Specification:</li>
                <li>Lorem ipsum dolor sit</li>
                <li>Amet, consectetur</li>
                <li>Adipiscing elit,set</li>
                <li>Duis aute irure</li>
                <li>Ut enim ad minim</li>
                <li>Dolore magna aliqua</li>
                <li>Excepteur sint</li>
            </ul>

            <div  className='btn-section'>
                Size:
                <div className='btn'>S</div>
                <div className='btn'>M</div>
                <div className='btn'>L</div>
                <div className='btn'>XL</div>
                <p className='quantity'>Quantity</p>
                <div className='btn' onClick={()=>{ if(number>1)setNumber(number-1)}}>-</div>
                <div className='btn-number'>{number}</div>
                <div className='btn' onClick={() => {setNumber(number + 1)}}>+</div>
            </div>

            <div className='btn-confirm-section'>
                <button className='btn-confirm'>Buy</button>
                <button className='btn-confirm'>Add To Cart</button>
            </div>              
        </div>
    </div>
    </div>
    </div>

        <div className='G-container'>
            <p className='name'>Related Products</p>

            <div className='item-space'>
            <Slider {...settingsFooter}>
              
                {
                    items.map((el, index) => {
                        return <div key={index} className='item-border'>
                                <div className='item-image' style={{backgroundImage: `url('${el.image}')`}}></div>
                                <p className='item-title'>{el.name}</p>
                                <p className='item-size'>{el.size}</p>
                                <div className='item-logo' style={{backgroundImage: `url('${star}')`}}></div>
                                <p className='item-price'>{el.price}</p>
                        </div>
                    })
                }
               
            </Slider>
        </div>
        </div>
    
    </div>
}


export default Zayshop;