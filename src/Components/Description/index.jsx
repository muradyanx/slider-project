import './style.scss';

const Description = (props) => {
    
    return(
        <div className="description">
           <p className='description-title'> {props.title} </p>
           <p className='description-content'> {props.description} </p>
        </div>
    )
}
export default Description;