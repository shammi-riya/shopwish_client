import { useContext, useState } from 'react';
import { FaHeart, FaShoppingBag, FaTrash } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { SearchContext } from '../Provider/SearchProvider';
import UseAddTocart from '../Api/UseAddTocart';
import { Link } from 'react-router-dom';
import DeleteProducts from '../Reusable/DeleteProducts';



const Nevbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { searchQuiry, setSearchQuiry } = useContext(SearchContext);

  const [data, refetch] = UseAddTocart();

  

  if (!data) {

    return 
  }


  console.log(data?.length);
  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleSubmit = (e) => {
    e.preventDefault()


  }


  const handleDeleteProduct = (id) => {

   DeleteProducts(id,refetch)
    
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
                onChange={(e) => setSearchQuiry(e.target.value)}
              />
              <Button
                type='submit'
                className='text-light fw-semibold fs-5'
                style={{ background: '#fd7e14' }}
                variant="">Search</Button>

            
            </Form>

            <Nav className=" my-2 d-flex gap-2 fs-5 fw-semibold ">
              <Nav.Link className='active position-relative' href="#action1">
                <span  >
                  <FaHeart className='fs-4' /></span><span style={{ color: '#fd7e14' }} className='position-absolute top-0 fs-2 start-100 translate-middle '
                  >0</span>
              </Nav.Link>

              <Nav.Link className='position-relative' href="#action2">
                <span
                  className={`navbar-toggler  d-lg-block fs-lg-4 ${isSidebarOpen ? "active" : ""}`}

                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasNavbar"
                  aria-controls="offcanvasNavbar"
                  aria-label="Toggle navigation"
                  onClick={handleSidebarToggle}
                >
                  <span className=''><FaShoppingBag /></span><span style={{ color: '#fd7e14' }} className=' fs-3 position-absolute top-0 start-100 translate-middle '
                  >{data.length || 0}</span>
                </span>
              </Nav.Link>

            </Nav>


          </Navbar.Collapse>
        </Container>
      </Navbar>



      <div className={`offcanvas offcanvas-end ${isSidebarOpen ? 'show' : ''}`} tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasNavbarLabel">ShopWish</h5>
          <Button
            type="submit"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
            onClick={handleSidebarToggle}
          ></Button>
        </div>
        <div className="offcanvas-body">
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Product name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                data.map((singleProduct, i) => (
                  <tr key={singleProduct._id}>
                    <td>{i + 1}</td>
                    <td><img style={{ height: '60px', width: '60px' }} src={singleProduct.img} alt="" /></td>
                    <td>{singleProduct.name.slice(0, 12)}</td>
                    <td>${singleProduct.price}</td>
                    <td><span onClick={() => handleDeleteProduct(singleProduct._id)} className='btn btn-danger'><FaTrash></FaTrash></span></td>
                  </tr>
                ))
              }
            </tbody>
          </table>



          <span className='d-flex justify-content-center btn-close px-5 w-100'> 
             <Link to='/cart'><button type="submit"   onClick={handleSidebarToggle}   data-bs-dismiss="offcanvas"
            aria-label="Close" style={{background:'#fd7e14'}} className="py-2 px-3 fs-6 fw-semibold text-light ">View All cart</button></Link></span>


        </div>
      </div>

    </div>
  );
};

export default Nevbar;
