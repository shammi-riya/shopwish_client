import { useState } from 'react';
import { FaHeart, FaShoppingBag, FaTrash } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import UseAddTocart from '../Api/UseAddTocart';
import { Link } from 'react-router-dom';
import DeleteProducts from '../Reusable/DeleteProducts';
import UseGetWishlist from '../Api/UseGetWishlist';
import DeleteWishlistProducts from '../Reusable/DeleteWishlistProducts';
import { NavLink } from 'react-bootstrap';



const Nevbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [iswishlistSidebarOpen, setiswishlistSidebarOpen] = useState(false);


  const [wishlistdata, ref] = UseGetWishlist()


  const [data, refetch] = UseAddTocart();



  const handleWishListSidebarToggle = () => {
    setiswishlistSidebarOpen(!iswishlistSidebarOpen)
  }



  const handlecartSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };


  const handleDeleteProduct = (id) => {

    DeleteProducts(id, refetch)

  }





  const handleWishDelete = (id) => {
    DeleteWishlistProducts(id, ref)
  }




  return (
    <div>
      <Navbar expand="lg" className="align-items-center bg-light py-2 d-flex justify-content-between">
        <Container>
          <Navbar.Brand href="#"><Link style={{
            textDecoration: "none",
            listStyle: " none", color: '#fd7e14',
          }} to='/'><span className='fs-2 fw-bold '>ShopWish</span></Link></Navbar.Brand>


          <div className="d-sm-none d-xs-none d-none d-lg-block d-md-lg w-100">
          <Form
            style={{ width: '70%' }} className="d-flex mx-auto ">
            <Form.Control
              type="search"
              placeholder="Search"
              className="mx-3 "

              aria-label="Search"

            />
            <Button
              type='submit'
              className='text-light fw-semibold fs-5'
              style={{ background: '#fd7e14' }}
              variant="">Search</Button>


          </Form>
          </div>

          <nav className="d-flex gap-3 my-4">
                    <NavLink>
                        <span
                            className={`navbar-toggler d-lg-block fs-lg-4 ${iswishlistSidebarOpen ? "active" : ""
                                }`}
                            data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvasNavbar2"
                            aria-controls="offcanvasNavbar2"
                            aria-label="Toggle navigation"
                            onClick={handleWishListSidebarToggle}
                        >
                           <span className="position-relative fs-4">
                            <p><FaHeart></FaHeart></p>
                            <span className="position-absolute top-0 end-0">{wishlistdata.length || "0"}</span>
                            </span>
                        </span>
                    </NavLink>
                    <NavLink>
                        <span
                            className={`navbar-toggler d-lg-block fs-lg-4 ${iswishlistSidebarOpen ? "active" : ""
                                }`}
                            data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvasNavbar2"
                            aria-controls="offcanvasNavbar2"
                            aria-label="Toggle navigation"
                            onClick={handlecartSidebarToggle}
                        >
                             <span className="position-relative fs-4">
                            <p><FaShoppingBag></FaShoppingBag></p>
                            <span className="position-absolute top-0 end-0">{data.length||"0"}</span>
                        </span>
                        </span>


                    </NavLink>
                   
                </nav>






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
            onClick={handlecartSidebarToggle}
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
                  <tr key={singleProduct?._id}>
                    <td>{i + 1}</td>
                    <td><img style={{ height: '60px', width: '60px' }} src={singleProduct.img} alt="" /></td>
                    <td>{singleProduct?.name.slice(0, 12)}</td>
                    <td>${singleProduct?.price}</td>
                    <td><span onClick={() => handleDeleteProduct(singleProduct._id)} className='btn btn-danger'><FaTrash></FaTrash></span></td>
                  </tr>
                ))
              }
            </tbody>
          </table>



          <span className='d-flex justify-content-center btn-close px-5 w-100'>
            <Link to='/cart'><button type="submit" onClick={handlecartSidebarToggle} data-bs-dismiss="offcanvas"
              aria-label="Close" style={{ background: '#fd7e14' }} className="py-2 px-3 fs-6 fw-semibold text-light ">View All cart</button></Link></span>


        </div>
      </div>



      {/* sidebar from ishlist */}
      {
        <div className={`offcanvas offcanvas-end ${iswishlistSidebarOpen ? 'show' : ''}`} tabIndex="-1" id="offcanvasNavbar2" aria-labelledby="offcanvasNavbarLabel2">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">ShopWish</h5>
            <Button
              type="submit"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
              onClick={handleWishListSidebarToggle}
            ></Button>
          </div>
          <div className="offcanvas-body">
            <table className="table">
              <thead>
                <tr>

                  <th>Image</th>
                  <th>Name</th>
                  <th>Action</th>

                </tr>
              </thead>
              <tbody>
                {
                  wishlistdata?.map((wishData) => <tr key={wishData._id}>


                    <td><img style={{ height: '70px' }} src={wishData.img} alt="" /></td>
                    <td>{wishData.name.slice(0, 10)}</td>

                    <td><span onClick={() => handleWishDelete(wishData._id)} className='bg-danger text-light p-2'><FaTrash></FaTrash></span></td>

                  </tr>)
                }




              </tbody>
            </table>



            <span className='d-flex justify-content-center btn-close px-5 w-100'>
              <Link to='/wishcart'><button type="submit" onClick={handleWishListSidebarToggle} data-bs-dismiss="offcanvas"
                aria-label="Close" style={{ background: '#fd7e14' }} className="py-2 px-3 fs-6 fw-semibold text-light ">View All WishList</button></Link></span>


          </div>
        </div>
      }

    </div>
  );
};

export default Nevbar;
