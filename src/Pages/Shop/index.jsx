import './style.scss';
import Brands from '../../Components/Brands';
import { Link } from 'react-router-dom';
import { products } from './Products';
import { useEffect, useState } from 'react';
import Display from '../../Components/Display';
import heart from '../../assests/images/heart.svg';
import { useDispatch } from 'react-redux/es/exports';
import BrandSlider from '../../Components/BrandSlider';

const Shop = () => {

    const [gender, setGender] = useState(true);
    const [sale, setSale] = useState(true);
    const [product, setProduct] = useState(true);
    const [color, setColor] = useState('One');
    const [list, setList] = useState(JSON.parse(localStorage.getItem('list')) || []);
    const [text, setText] = useState('Fatured');
    const [show, setShow] = useState()

    const dispatch = useDispatch();


    const likedItems = () => {
        setList([...list, 1]);
        localStorage.setItem('list', JSON.stringify(list))
        dispatch({ type: 'add_a_product', payload: JSON.parse(localStorage.getItem('list')).length + 1 });
    }



    return <div>
        <div className='shadow'></div>
        <div className='G-container'>


        <div className='products-iamges-section'>

            <div className='products-info-section'>
                    <div>
                        <p className='category'>Categories</p>
                    </div>
                    <p className='category-item' onClick={() => setGender(!gender)}>Gender  <span className='circle-size icon-circle'></span></p>
                    <div className={`${gender ? 'display-on' : 'display-off'}`}>
                        <Display lineOne='Man' lineTwo='Women' />
                    </div>

                    <p className='category-item' onClick={() => setSale(!sale)}>Sale  <span className='circle-size icon-circle'></span></p>
                    <div className={`${sale ? 'display-on' : 'display-off'}`}>
                        <Display lineOne='Sport' lineTwo='Luxury' />
                    </div>

                    <p className='category-item' onClick={() => setProduct(!product)}>Product  <span className='circle-size icon-circle'></span></p>
                    <div className={`${product ? 'display-on' : 'display-off'}`}>
                        <Display lineOne='Bag' lineTwo='Sweather' lineThree='Sunglass' />
                    </div>

            </div>



       
             
            
                <div className='product-iamges'>
       
            <div className='product-title-section'>
                    <div className='products'>
                        <p className='product-for'>All</p>
                        <p className='product-for'>Man's</p>
                        <p className='product-for'>Women's</p>
                    </div>
                    <div>
                        <div className='product-search' onClick={() => setShow(!show)}><span>{text}</span></div>
                            <div className='product-search' style={{display: `${show? 'block': 'none'}`}}
                                     onClick={() => { setText('Fatured')
                                     setShow(!show)}}><span>Fatured</span></div>
                            <div className='product-search' style={{display: `${show? 'block': 'none'}`}}
                                        onClick={() => {setText('A to Z')
                                        setShow(!show)}}><span>A to Z </span></div>
                            <div className='product-search' style={{display: `${show? 'block': 'none'}`}}
                                            onClick={() => {setText('Item')
                                            setShow(!show)}}><span>Item</span></div>
                            
                    </div>
                </div>

                    {
                        products.map((el, index) => {
                            return <div key={index} className='product-item'>
                                <div className='image' style={{ backgroundImage: `url('${el.image}')` }}>
                                    <div className='img-hover'>
                                        <span
                                            className="icon-liked icon-heart"
                                            onClick={likedItems}
                                        ></span>
                                        <span className="icon-eye icon-eye-solid"
                                            ></span>
                                        <span
                                            className="icon-magazine icon-cart"
                                       
                                        ></span>
                                    </div>
                                    <div>
                                        <div className='icon-heart1'></div>
                                        <div className='icon icon-heart1'></div> 
                                    </div>
                                </div>
                                <Link to='/zay-shop'>  <p className='title'>{el.title}</p> </Link>
                                <p className='size'>{el.size}</p>

                                <div className='logo-style' style={{backgroundImage: `url('${el.logo}')`}}></div>

                                <p className='price'>{el.price}</p>
                            </div>
                        })
                    }
                </div>
            </div>

            <div className='div-section'>
                <div className={`div ${color === 'Three' ? 'div-green' : ''}`} onClick={() => setColor('Three')}>3</div>
                <div className={`div ${color === 'Two' ? 'div-green' : ''}`} onClick={() => setColor('Two')}>2</div>
                <div className={`div ${color === 'One' ? 'div-green' : ''}`} onClick={() => setColor('One')}>1</div>
            </div>

          

        </div>
        <BrandSlider />
    </div>
}


export default Shop; 