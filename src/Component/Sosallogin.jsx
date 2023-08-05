import { useContext } from "react";
import {  FaGoogle } from "react-icons/fa";

import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-hot-toast";
import { auth } from "../Api/auth";



const Sosallogin = () => {

    const {  createGogoolUser} = useContext(AuthContext);
    const navigate = useNavigate();
    const from = location?.state?.from?.pathname || '/'

    const handleGogoolSighin = () => {
        createGogoolUser()
            .then(result => {
                auth(result.user)
                console.log(result.user);
                navigate(from, { replace: true })
            })
            .catch(err => {
                toast.error(err.message)
            });
    };




    return (
        <div>
            <div className="social-media my-3">
                <h5 className="fs-5 fw-bold text-center my-3">Or</h5>
                <div className="social-icons d-flex gap-2 justify-content-center d-flex align-items-center">
                    <a style={{ background: '#fd7e14' }} onClick={handleGogoolSighin}
                        className="py-2 px-3 fs-2 text-white" href="#"><FaGoogle></FaGoogle></a>
                    {/* <a style={{ background: '#fd7e14' }} className="py-2 px-3 fs-2 text-white" href="#"><FaGithub></FaGithub></a> */}

                </div>
            </div>
        </div>
    );
};

export default Sosallogin;