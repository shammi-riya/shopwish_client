import { FaUser } from "react-icons/fa";
import Sosallogin from "./Sosallogin";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { useContext, useRef } from "react";
import { toast } from "react-hot-toast";
import { auth } from "../Api/auth";


const SiginIn = () => {
   
    const {  sighinInUser, resetPassword } = useContext(AuthContext);
    const emailRef = useRef();
    const location = useLocation();
    const navigate = useNavigate()
    const from = location?.state?.from?.pathname || '/'



    const handleSubmit = (e) => {
        e.preventDefault();
        const password = e.target.password.value;
        const email = e.target.email.value;

        sighinInUser(password, email)
            .then(result => {
                const user = result.user;
                console.log(user,'sighinin');
                auth(user)
                navigate(from, { replace: true })
                toast('siginin successfully')
                
            }).catch(err => {
                toast.error(err.message)
            })

        console.log(password, email);

    }



    const handleResetPassword = () => {
        const email = emailRef.current.value;
        console.log(email, 'e');
        resetPassword(email)
            .then(() => {
                toast.success("chaeke your email")
            })
            .catch((err) => {
                toast.error(err.message)
            })

    }


    return (

        <div className="m-4 py-5">
            <div className="registration-form">
                <form onSubmit={handleSubmit}>
                    <div className="form-icon fs-1 fw-bold text-center my-2">
                        <span><FaUser></FaUser></span>
                    </div>

                    <div className="form-group">
                        <input type="password "
                            ref={emailRef}
                            className="form-control item py-2"
                            id="password"
                            name="password"
                            placeholder="Password" />
                    </div>

                    <div className="form-group my-3">
                        <input type="email"
                            className="form-control item py-2"
                            id="email"
                            name="email"
                            placeholder="Email" />
                    </div>



                    <p onClick={handleResetPassword} className="fs-5 fw-semibold">forget password?</p>
                    <div
                        className="form-group text-center fw-semibold text-white">
                        <button
                            type="submit"
                            className=" btn-block create-account mb-2">Sighin In</button>
                    </div>
                    <p className="fs-5  fw-semibold text-center my-3">You Are New To Website <Link to='/sighinup'><span style={{ color: '#fd7e14' }}>Sighin Up</span></Link></p>
                  
                    <span className="">


                        <Sosallogin></Sosallogin>


                    </span>
                </form>

            </div>
        </div>

    );
};

export default SiginIn;