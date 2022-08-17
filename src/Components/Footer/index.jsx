import './style.scss';


const Footer = () => {

    return <div className='footer-block'>
        <div className='G-container'>

        {/* <div className='footer-title'>
            <p className='title-item item-one'>Zay Shop</p>
            <p className='title-item item  border'>Products</p>
            <p className='title-item item border'>Further Info</p>
            
        </div>  */}

        
        <div className='footer-content'>
            <div  className='content-item'>
            <p className='title-item item-one'>Zay Shop</p>
                <div className='location'>
                    <div className="ic-location icon-location"></div>
                      <span className='item-first'>123 Consectetur at ligula 10660</span> 
              </div>
                <ul>
                    <div className='ic-position'>
                    <span className='icons icon-phone'></span>        
                    <li> 010-020-0340 </li>
                    </div>
                    <div className='ic-position'>
                    <span className='icons icon-envelope'></span>   
                    <li className='icon-space'>info@company.com</li>
                    </div>
                </ul>
            </div>
                <ul className='content-item'>
                <li className='title-item item  border'>Products</li>
                    <li>Luxury</li> 
                    <li> Sport Wear </li>
                    <li>Men's Shoes</li>
                    <li>Women's Shoes</li> 
                    <li>Popular Dress</li>
                    <li>Gym Accessories</li>
                    <li>Sport Shoes</li>
                </ul>

            <ul className='content-item'>
            <li className='title-item item border'>Further Info</li>
                <li>Home</li> 
                <li>About Us</li>
                <li>Shop Location</li>
                <li>FAQs</li>
                <li>Contact</li>
            </ul>
        </div>

        <div className='footer-input'>
            <div className='icon-position'>
                    <a href='https://facebook.com/' className='icon-size icon-facebook' target='_blank'></a>
                    <a href='https://instagram.com/' className='icon-size icon-instagram' target='_blank'></a>
                    <a href='https://twitter.com/' className='icon-size icon-twitter' target='_blank'></a>
                    <a href='https://linkedin.com/' className='icon-size icon-linkedin' target='_blank'></a>
            </div>
            <div>
            <input type='text' placeholder='Email address' className='input'/>
            <button className='button'>Subscribe</button>
            </div>
       </div>
        </div>        

       <div className='footer'>
        <div className='G-container'>
            Copyright © 2021 Company Name | Designed by <a href='#'>TemplateMo</a>
        </div>
       </div>

    </div>
}

export default Footer;