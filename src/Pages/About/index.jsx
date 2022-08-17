import './style.scss';
import abouthero from '../../assests/images/abouthero.svg'
import Description from '../../Components/Description';
import { divItems } from './DivItems';
import BrandSlider from '../../Components/BrandSlider';


const About = () => {



    return <div>
    <div className='about-block'>
        <div className='G-container'>
            <div className='about-items'>
                    <div className='about-content'>
               
                        <Description  title='About Us '
                            description='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                        />
                    </div>
                    <div className='about-image' style={{backgroundImage: `url('${abouthero}')`}}></div>
            </div>
        </div> 
        </div>


        <div className='servises-block'>
            <div className='servises-description'>
                <Description title='Our Services'
                            description='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod Lorem ipsum dolor sit amet.'
                />
           </div> 

      <div className='G-container'>
        <div className='items'>
            
            {
                divItems.map((el, index) => {
                    return <div key={index} className='divSection'>   
                    <div className='div-logo'>                    
                           <div className={el.logo}></div>
                    </div> 
                         <p>{el.content}</p>
                    </div>
                })
            }

        </div>
      </div>

           <div>
            <BrandSlider />
           </div>


        </div>
       </div>
}

export default About;