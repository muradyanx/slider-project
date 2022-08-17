import Description from '../../Components/Description';
import './style.scss';


const Contact = () => {

    return <div>    
        <div className='contact-section'>
            <div className='contact-description'>
                    <Description title='Contact Us' 
                                    description='Proident, sunt in culpa qui officia deserunt 
                                                mollit anim id est laborum. Lorem ipsum dolor sit amet.' />
            </div>     

           <div className='map'>
             <iframe width="100%" height="300" id="gmap_canvas" src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
           </div>

            </div>

            <div className='input-section'>
                <div  className='input-position'>
                    <div className='new-div'>
                        <label htmlFor="name"> Name  </label> <br />
                            <input type="text" id='name' placeholder='Name'  className='input'/>
                    </div>

                    <div className='new-div'>
                        <label htmlFor="email"> Email </label> <br />
                            <input type="email" id='email' placeholder='Email' className='input'/>
                    </div>  
                </div>


                <label htmlFor="subject"> Subject  
                    <input type="text" id='subject'  placeholder='Subject' className='subject'/>
                </label>

                <label for="message">Messaage</label>

                <textarea id="message" placeholder='Messaage' className='message'>
                 
                </textarea>

                <div className='btn-position'>
                    <button className='button'> Let's Talk</button>
                </div>

            </div>                       
        
    </div>
}

export default Contact;