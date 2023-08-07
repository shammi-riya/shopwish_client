
import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext } from 'react';
import { BiUser } from 'react-icons/bi';



import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';



const Header = () => {
    const { user, logOut } = useContext(AuthContext)

    

    const handleLogout = () => {
        logOut()
            .then({})
            .catch(err => console.log(err))
    }

    return (
        <div>
            <nav style={{ background: '#fd7e14' }} className=" border-bottom p-0">
                <div className="container d-flex justify-content-between align-items-center">
                    <p className='fs-5 fw-semibold text-light'>
                        Welcome to shopwish
                    </p>

                    {
                        user ? <button onClick={handleLogout}>logout</button> : <Link className='text-white fs-6 fw-semibold text-decoration-none' to='/sighinin'> <p ><BiUser /> Regester Or Sighin In</p></Link>
                    }


                </div>
            </nav>


        </div>
    );
};

export default Header;
