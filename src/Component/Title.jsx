
import img from '../assets/breadcrumb-men-bg.webp';

const Title = ({ children }) => {
    return (
        <div className='title-container w-100 '>
            <img className='w-100' src={img} alt="" />
            <p className='centered-text'>{children}</p>
        </div>
    );
};

export default Title;
