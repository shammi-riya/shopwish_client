import sponsor1 from '../../assets/sponsors_1.png'
import sponsor2 from '../../assets/sponsors_2.png'
import sponsor3 from '../../assets/sponsors_3.png'
import sponsor4 from '../../assets/sponsors_4.png'
import sponsor5 from '../../assets/sponsors_5.png'

const ProductsSponsor = () => {
    return (
        <div className='my-5 container '>
            <h2 className='text-center fs-2 fw-bold py-5 w-25 mx-auto '>Our Spoonser</h2>
        <div className='d-flex w-100 flex-wrap align-items-center justify-content-between '>
           
            <img src={sponsor1} alt="" />
            <img src={sponsor2} alt="" />
            <img src={sponsor3} alt="" />
            <img src={sponsor4} alt="" />
            <img src={sponsor5} alt="" />
            <img src={sponsor4} alt="" />
        </div>
        </div>
    );
};

export default ProductsSponsor;