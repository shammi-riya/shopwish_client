
import { FiMenu } from 'react-icons/fi';
import { Link, useLocation } from 'react-router-dom';


const CatogoryNav = () => {
    const location = useLocation();





    return (
        <nav className="navbar navbar-expand-lg my-2">
            <div className="container">
                <a href="#" style={{ background: '#fd7e14', width: '300px' }} className="list-group-item rounded text-light list-group-item rounded-action py-2 ps-3 fs-5 fw-semibold active-nav" aria-current="true">
                    <FiMenu />
                    <span className='ps-2'>All Catogory</span>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="fs-5  fw-semibold">
                            <Link className={`navitem  ${location.pathname === '/' ? 'active-nav' : ''}`} to="/">
                                Home
                            </Link>
                        </li>

                        <li className="fs-5 fw-semibold">
                            <Link className={`navitem   ${location.pathname === '/shop' ? 'active-nav' : ''}`} to="/shop">
                                Shop
                            </Link>
                        </li>

                        <li className="fs-5 fw-semibold">
                            <Link className={`navitem   ${location.pathname === '/blog' ? 'active-nav' : ''}`} to="/blog">
                                Blog
                            </Link>
                        </li>

                        <li className="fs-5 px-2 fw-semibold">
                            <Link to='/about' className={`navitem   ${location.pathname === '/about' ? 'active-nav' : ''}`} href="#">
                                About
                            </Link>
                        </li>
                        <li className="fs-5 px-2 fw-semibold">
                            <Link to='/contuct' className={`navitem   ${location.pathname === '/contuct' ? 'active-nav' : ''}`} href="#">
                                Contuct
                            </Link>
                        </li>
                    </ul>
                    <span className="navbar-text"></span>
                </div>
            </div>
        </nav>
    );
};

export default CatogoryNav;
