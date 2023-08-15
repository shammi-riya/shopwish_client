
import Title from '../../Component/Title';
// import Feedback from './Feedback';
import aboutbannar from '../../assets/about-banner.webp'

const About = () => {
    return (
        <div className='bg-light container-fluid w-full'>
            <Title><span className='border-style'>Abo</span>ut</Title>


            <div style={{ background: '#f5f5f5' }} className='py-5'>
                <div className='container '>
                    <div className='row  '>

                        <div className='col-lg-6 col-12 col-md-6 col-sm-12   justify-content-center align-items-center'>
                            <div>
                                <p>Our Mission</p>
                                <h3 className='fs-2 fw-bold'><span className='border-style'>Stor</span>y About Us </h3>
                                <h6>

                                    We have crafted thousands of manufacturing processes, strategy that allows us to understand our customers like never before. We are present up to this point due to the trust and appreciation of our customers.

                                   
                                </h6>
                                <span className='pt-5'> To help stem the flow of plastic into the ocean, we have committed to eliminating single-use plastic from th product range and food outlets by 2023.</span>
                            </div>
                        </div>
                        <div className='col-lg-6 col-12 col-md-6 col-sm-12'>
                            <img className='w-100' src={aboutbannar} alt="" />
                        </div>


                    </div>
                </div>
            </div>


        </div>
    );
};

export default About;