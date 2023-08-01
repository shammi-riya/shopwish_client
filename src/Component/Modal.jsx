
import { Button, Modal as BootstrapModal } from "react-bootstrap";
import img1 from '../assets/fashionable-woman-pink-coat-black-hat-posing.jpg'

const CustomModal = ({ CloseModal }) => {

 const hadleSubmit = (e)=>{
    e.preventDefault()
 }



    return (
        <div className="d-flex justify-content-center align-items-center">
            {/* Modal */}
            <BootstrapModal
                className="modal-lg"
                show={true}
                onHide={CloseModal}
            >
                <BootstrapModal.Header closeButton>
                    <BootstrapModal.Title><p style={{ color: "#fd7e14" }} className="text-center ">Sign Up Newsletter</p></BootstrapModal.Title>
                </BootstrapModal.Header>
                <BootstrapModal.Body>
                    {/* Modal content goes here */}
                    <div className="row row-cols-2">
                        <img className="w-50 h-50" src={img1} alt="" />
                        <div className="mt-4">
                            <p className="fs-5 fw-semibold">Sign up our newsletter and save 25% off for the next purchase! Subscribe to our newsletters and don’t miss new arrivals, the latest fashion updates and our promotions.</p>
                            <form onSubmit={hadleSubmit}
                            className="">

                                <div className="form-group my-3">
                                    <input type="email"
                                        className="form-control item py-2"
                                        id="email"
                                        name="email"
                                        placeholder="Email" />
                                </div>




                                <div
                                    className="form-group text-center fw-semibold text-white">
                                    <button style={{ background: "#fd7e14" }}
                                        type="submit"
                                        className="w-100 py-2 fs-6  btn-block text-light create-account mb-2">SubScribe</button>
                                </div>

                           

                            </form>
                            <p className="fs-5 fw-semibold">Your Information will never be shared with any third party.</p>

                        </div>
                    </div>
                </BootstrapModal.Body>
                <BootstrapModal.Footer>
                    <Button style={{ background: "#fd7e14" }} variant="secondary" onClick={CloseModal}>
                        Close
                    </Button>
                </BootstrapModal.Footer>
            </BootstrapModal>
        </div>
    );
};

export default CustomModal;
