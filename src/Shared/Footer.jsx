import { FaFacebook, FaGitAlt, FaGooglePay, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import Scrolltop from "../Component/Scrolltop";
import ProductPopup from "../Component/ProductPopup";

const Footer = () => {
    return (
       
            <div className="container-fluid ">
              <ProductPopup></ProductPopup>
              <footer className="text-center text-lg-start text-decoration-none text-dark p-2" style={{ backgroundColor: "#ECEFF1" }}>
                <section className="">
                  <div className="container text-center text-md-start mt-5">
                    <div className="row mt-3">
                      <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                        <h6 className="text-uppercase fw-bold">ShopWish</h6>
                        <hr
                          className="mb-4 mt-0 d-inline-block mx-auto"
                          style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }}
                        />
                        <p>
                          Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                          consectetur adipisicing elit.
                        </p>
                      </div>
                      <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                        <h6 className="text-uppercase fw-bold">Products</h6>
                        <hr
                          className="mb-4 mt-0 d-inline-block mx-auto"
                          style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }}
                        />
                        <p>
                          <a href="#!" className="text-decoration-none text-dark">
                            Earphone
                          </a>
                        </p>
                        <p>
                          <a href="#!" className="text-decoration-none text-dark">
                            Car
                          </a>
                        </p>
                        <p>
                          <a href="#!" className="text-decoration-none text-dark">
                            Cap
                          </a>
                        </p>
                        <p>
                          <a href="#!" className="text-decoration-none text-dark">
                            Laptop
                          </a>
                        </p>
                      </div>
                      <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                        <h6 className="text-uppercase mb-4 font-weight-bold">Follow us</h6>
                        <a className="btn border-0 btn-primary btn-floating m-1" style={{ backgroundColor: "#3b5998" }} href="#!" role="button">
                         <FaFacebook></FaFacebook>
                        </a>
                        <a className="btn border-0 btn-primary btn-floating m-1" style={{ backgroundColor: "#55acee" }} href="#!" role="button">
                         <FaTwitter></FaTwitter>
                        </a>
                        <a className="btn border-0 btn-primary btn-floating m-1" style={{ backgroundColor: "#dd4b39" }} href="#!" role="button">
                          <FaGooglePay></FaGooglePay>
                        </a>
                        <a className="btn border-0 border-0 btn-primary btn-floating m-1" style={{ backgroundColor: "#ac2bac" }} href="#!" role="button">
                         <FaInstagram></FaInstagram>
                        </a>
                        <a className="btn border-0 btn-primary btn-floating m-1" style={{ backgroundColor: "#0082ca" }} href="#!" role="button">
                          <FaLinkedin></FaLinkedin>
                        </a>
                        <a className="btn border-0 btn-primary btn-floating m-1" style={{ backgroundColor: "#333333" }} href="#!" role="button">
                        <FaGitAlt></FaGitAlt>
                        </a>
                      </div>
                      <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                        <h6 className="text-uppercase fw-bold">Contact</h6>
                        <hr
                          className="mb-4 mt-0 d-inline-block mx-auto"
                          style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }}
                        />
                        <p>
                          <i className="fas fa-home mr-3"></i> bangladesh, NY 10012, US
                        </p>
                        <p>
                          <i className="fas fa-envelope mr-3"></i> shopwish@example.com
                        </p>
                        <p>
                          <i className="fas fa-phone mr-3"></i> + 01 234 567 88
                        </p>
                        <p>
                          <i className="fas fa-print mr-3"></i> + 01 234 567 89
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
                <div className="text-center p-3 text-white" style={{ backgroundColor: "#fd7e14" }}>
                  © 2023 ShopWish. All
                  <Scrolltop></Scrolltop>
        
                <a className="text-white text-decoration-none text-dark" href="https://mdbootstrap.com/">
                    ShopWish 
                </a>
            </div>
        </footer>
      </div >
    );
  };

export default Footer;
