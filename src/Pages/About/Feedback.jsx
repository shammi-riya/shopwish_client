import { useEffect,  useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { HashNavigation, Pagination, Navigation } from 'swiper/modules';
import { FaStar } from "react-icons/fa";
const Feedback = () => {
const [feedback,setFeedback] = useState([])

    useEffect(() => {
        fetch("https://shopwish-surver-shammi-riya.vercel.app/feedback")
          .then((res) => res.json())
          .then((data) => {
            setFeedback(data);
          });
      }, []);
    

    
    return (
       <div className="container-fluid p-5 ">
        <h1 className="fs-2 fw-semibold text-center">What our <br/> valuable  Customaer are say</h1>
         <div  >
            
            <>
            <Swiper
           spaceBetween={30}
           hashNavigation={{
             watchState: true,
           }}
           pagination={{
             clickable: true,
           }}
           navigation={true}
           modules={[Pagination, Navigation, HashNavigation]}
           className="mySwiper"
   >
   {
       feedback.map(feed=><>
       <SwiperSlide>
              <div style={{height:'300px'}} className=" row d-flex justify-content-center p-5 ">
       <div className="col-md-10">
         <div className="card">
           <div className="card-body m-3">
             <div className="row">
               <div className="col-lg-4 d-flex justify-content-center align-items-center mb-4 mb-lg-0">
                 <img src={feed.img}
                   className="rounded-circle img-fluid shadow-1" alt="woman avatar" width="200" height="200" />
               </div>
               <div className="col-lg-8">
               <h1 className="fw-bold lead mb-2">{feed.feedbackTitle}</h1>
                 <p className="text-muted fw-light mb-4">
                  {feed.feedback}
                 </p>
                 <p className="fw-bold lead mb-2"><strong>{feed.name}</strong></p>
                  <div style={{color:'#fd7e14'}} className="d-flex gap-1 fs-4">
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                  </div>
               </div>
             </div>
           </div>
         </div>
       </div>
     </div>
   
              </SwiperSlide>
       </>)
   
   }
   
   
   
   
              
             
             
            </Swiper>
          </>
               
           </div>
       </div>
    );
};

export default Feedback;