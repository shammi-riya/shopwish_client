import img1 from '../../../assets/img1 (1).jpg'
import img2 from '../../../assets/img1 (2).jpg'
import img3 from '../../../assets/img1 (3).jpg'


const Blog = () => {
    return (
        <div className="container my-5 py-5">
            <div className="card-group">
                <div className="card">
                    <img  src={img1} className="card-img-top h-50" alt="..."/>
                        <div className="card-body">
                        <h5 className="card-title fw-bold">Eco-Warrior's Paradise: Discover the Best Sustainable Products of 2023</h5>
                            <p className="card-text">As we settle into 2023, it's time to revamp our living spaces and embrace the latest must-have products that can elevate our homes to the next level. From innovative tech gadgets to stylish home decor, we've curated a list of the top 10 </p>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">Date: July 31, 2023</small>
                        </div>
                </div>
                <div className="card">
                    <img src={img2} className="card-img-top h-50" alt="..."/>
                        <div className="card-body ">
                            <h5 className="card-title fw-bold">Eco-Warrior's Paradise: Discover the Best Sustainable Products of 2023</h5>
                            <p>As the fashion industry evolves, so do the trends that dominate the runways and our wardrobes. In this blog, we'll take a sneak peek into the fashion crystal ball to unveil the hottest style predictions for 2023.</p>
                           
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">Date: August 15, 2023</small>
                        </div>
                </div>
                <div className="card">
                    <img src={img3} className="card-img-top h-50" alt="..."/>
                        <div className="card-body ">
                            <h5 className="card-title fw-bold">Tech Marvels: Unveiling the Hottest Gadgets of 2023</h5>
                            <p className="card-text">The world of technology is ever-changing, and staying up-to-date with the latest gadgets can be thrilling and beneficial. In this blog, we'll delve into the world of tech marvels and explore the hottest gadgets of 2023.</p>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">Date: October 10, 2023

</small>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;