import { useContext,  useState } from 'react';
import { FaHeart, FaShoppingBag, FaSearch } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { SearchContext } from '../Provider/SearchProvider';
import UseAddTocart from '../Api/UseAddTocart';



const Nevbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
   const { searchQuiry, setSearchQuiry } = useContext(SearchContext);
  
   const [ data, refetch ] = UseAddTocart();

  

  if (!data) {
   
    return <div>Loading...</div>;
  }


  console.log(data?.length);
  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleSubmit = (e)=>{
    e.preventDefault()
     
  
  }
  return (
    <div>
      <Navbar expand="lg" className="bg-light py-3">
        <Container>
          <Navbar.Brand href="#"><span className='fs-2 fw-bold'>ShopWish</span></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">

            <Form onSubmit={handleSubmit}
            style={{ width: '70%' }} className="d-flex mx-auto ">
              <Form.Control
                type="search"
                placeholder="Search"
                className="mx-3 "
                value={searchQuiry}
                aria-label="Search"
                onChange={(e)=>setSearchQuiry(e.target.value)}
              />
              <Button 
              type='submit'
              className='text-light fw-semibold fs-5' 
              style={{ background: '#fd7e14' }} 
              variant="">Search</Button>
            </Form>

            <Nav className=" my-2 d-flex fs-5 fw-semibold ">
              <Nav.Link href="#action1">
                <span  className='active position-relative'>
                  <FaShoppingBag /><span style={{color:'#fd7e14'}} className='position-absolute top-0 start-100 translate-middle fs-3 '
                  >{data.length|| 0}</span></span>
                </Nav.Link>
              <Nav.Link href="#action2"><span className='active'><FaSearch></FaSearch></span></Nav.Link>
              <Nav.Link href="#action2">
                <Button
                  className={`navbar-toggler  d-lg-block fs-lg-4 ${isSidebarOpen ? "active" : ""}`}
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasNavbar"
                  aria-controls="offcanvasNavbar"
                  aria-label="Toggle navigation"
                  onClick={handleSidebarToggle}
                >
                  <FaHeart />
                </Button>
              </Nav.Link>

            </Nav>


          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className={`offcanvas offcanvas-end ${isSidebarOpen ? 'block' : ''}`} tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
          <Button
            type="submit"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
            onClick={handleSidebarToggle}
          ></Button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
          </ul>
          <form className="d-flex mt-3" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Nevbar;
