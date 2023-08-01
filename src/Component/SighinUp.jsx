import { FaUser } from "react-icons/fa";
import Sosallogin from "./Sosallogin";
import { Link, useNavigate } from "react-router-dom";
import { useContext} from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-hot-toast";
import { auth } from "../Api/auth";


const SighinUp = () => {
    const {  createUser } = useContext(AuthContext)
   
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const password = e.target.password.value;
        const email = e.target.email.value;


        createUser(email, password)
            .then(result => {
                const user = result.user;
              console.log(user,'sighinup');
                auth(user)
                toast("sighinup successfully!")
                navigate('/sighinin')



            }).catch(err => {
                toast.error(err.message)
            })



        console.log(name, password, email);

    }






    return (
        <div className=" w-50 mx-auto my-5">
            <div className="registration-form">
                <form onSubmit={handleSubmit}>
                    <div className="form-icon fs-1 fw-bold text-center my-2">
                        <span><FaUser></FaUser></span>
                    </div>
                    <div className="form-group ">
                        <input type="text"
                            className="form-control item py-2  fs-5 fw-semibold"
                            name="name"
                            id="name"
                            placeholder="Your Name"
                            required />
                    </div>

                    <div className="form-group">
                        <input
                            type="password"
                            className="form-control item py-2 fs-5 fw-semibold"
                            id="password"
                            name="password"
                             placeholder="Password"
                            required
                        />
                    </div>
                    <div className="form-group ">
                        <input type="email"
                            className="form-control item py-2 fs-5 fw-semibold"
                            id="email"
                            name="email"
                            placeholder="Email"
                            required />
                    </div>

                    {/* <div className="form-group">
                        <input type="text"
                            className="form-control item py-2 fs-5 fw-semibold"
                            id="email"
                            placeholder="Email" />
                    </div> */}


                    <div
                        className="form-group text-center ">
                        <button type="submit" className="fw-semibold btn-block create-account">
                            Sighin Up
                        </button>
                    </div>

                    <p className="fs-5 fw-semibold text-center">You Have Already An Account <Link to='/sighinin'><span style={{ color: '#fd7e14' }}>Sighin In</span></Link></p>
                    <span>
                        <Sosallogin></Sosallogin>
                    </span>
                   
                </form>

            </div>
        </div>


    );
};

export default SighinUp;