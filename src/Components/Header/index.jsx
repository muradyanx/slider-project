import './style.scss';
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { useState } from 'react';


const Nav = () => {

    const number = useSelector(state => state.number);
    const [block, setBlock] = useState(true)

    return(
        <header className="G-container">

                <nav className={`${block? 'nav-block G-global': 'nov-block-none' }`}>
                <Link to='/'> <p className='nav-log'>Zay</p></Link>
                   
                    <div className="nav-content">
                        <Link to='/'>Home</Link>
                        <Link to='/about'>About</Link>
                        <Link to='/shop'>Shop</Link>
                        <Link to='/contact'>Contact</Link>

                    </div>  
                    <div className="nav-logos">  
                    <div className='media icon-manu' onClick={() => setBlock(!block)}></div>
                    <input type='text' placeholder='Search...' className='search' />
                     
                        <div className='media-logo ic-size icon-search search-logo'></div>
                        <div className='media-logo ic-size icon-cart cart-logo'></div>
                        <div className='media-logo ic-size icon-heart heart-logo'></div>
                    
                        <div className='number-style'>
                            {number}
                        </div>
                    </div>    
                </nav>
        </header>
    )
}

export default Nav;