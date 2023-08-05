import { FiMenu } from 'react-icons/fi';
import { Link } from 'react-router-dom';
const CatogoryNav = () => {



    
    return (
        <nav className="navbar navbar-expand-lg  my-2 ">
            <div className="container">
                <a href="#" style={{ background: '#fd7e14', width: '300px' }} className="list-group-item rounded text-light list-group-item rounded-action py-2 ps-3   fs-5 fw-semibold active" aria-current="true"><FiMenu></FiMenu>
                    <span className='ps-2'>All Catogory</span>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="fs-5 fw-semibold">
                            <Link className="nav-link" to="/">
                                Home
                            </Link>
                        </li>
                      
                        <li className="fs-5 fw-semibold">
                            <Link className="nav-link" to="/shop">
                               shop
                            </Link>
                        </li>
                      
                       
                        <li className="fs-5 px-2 fw-semibold">
                            <Link to='/about' className="nav-link" href="#">
                                About
                            </Link>
                        </li>
                        <li className="fs-5 px-2 fw-semibold">
                            <Link to='/contuct'
                            className="nav-link" href="#">
                                Contuct
                            </Link>
                        </li>
                    </ul>
                    <span className="navbar-text">
                        
                    </span>
                </div>
            </div>
        </nav>
    );
};

export default CatogoryNav;