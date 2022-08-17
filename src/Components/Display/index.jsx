import './style.scss';

const Display = (props) => {
    return <div>
        <p className='line'>{props.lineOne}</p>
        <p className='line'>{props.lineTwo}</p>
        <p className='line'>{props.lineThree}</p>
    </div>
}

export default Display;