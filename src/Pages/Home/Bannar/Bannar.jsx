
import { Swiper, SwiperSlide } from 'swiper/react';
import './bannar.css'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';

import img1 from '../../../assets/3867026.jpg'
import img2 from '../../../assets/front-view-shop-word-red-table.jpg';
import img3 from '../../../assets/top-view-shopping-bags-with-keyboard-tag-cyber-monday.jpg';
import {  FaGifts, FaHandsHelping, FaShippingFast,  FaWallet } from 'react-icons/fa';
import CatogoryItem from '../../../Component/CatogoryItem';




const Bannar = () => {

  


  return (
    <div className='container'>
      <div className='row '>
        <div className='col-12 col-md-3 d-none d-md-block'>
          <CatogoryItem />
        </div>
        <div className='col-12 col-md-9'>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img style={{ height: '70vh' }} className='w-100 rounded' src={img1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img style={{ height: '70vh' }} className='w-100 rounded' src={img2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img style={{ height: '70vh' }} className='w-100 rounded' src={img3} alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>



      <div className='row  my-5 gap-2'>
        <div className='d-flex gap-3 border-end col  animate-item rounded text-light' >
          <div className='fs-3 text-light'>
            <FaGifts />
          </div>
          <div className='fs-5 fw-semibold text-light p-2'>
            <h5 className=''>Special gift cards</h5>
            <h6>a perfect gift</h6>
          </div>
        </div>

        <div className='d-flex gap-3 border-end col  animate-item rounded' >
          <div className='fs-3 text-light'>
            <FaWallet />
          </div>
          <div className='fs-5 fw-semibold text-light'>
            <h5 className=''>Secure payment</h5>
            <h6>100% secure Payment</h6>
          </div>
        </div>

        <div className='d-flex gap-3 border-end col  animate-item rounded' >
          <div className='fs-3 text-light'>
            <FaHandsHelping />
          </div>
          <div className='fs-5 fw-semibold text-light'>
            <h5 className=''>24/7 support</h5>
            <h6>Online support 24/7</h6>
          </div>
        </div>

        <div className='d-flex gap-3 border-end col  animate-item rounded' >
          <div className='fs-3 text-light'>
            <FaShippingFast />
          </div>
          <div className='fs-5 fw-semibold text-light'>
            <h5 className=''>Free Shipping</h5>
            <h6>On Order Over $100</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bannar;
