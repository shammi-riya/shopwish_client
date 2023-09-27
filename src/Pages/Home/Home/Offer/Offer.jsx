import img1 from '../../../../assets/4-min-1-300x300.png'
import { IoIosArrowDropright, IoIosArrowDropleft } from 'react-icons/io';

import './offer.css'
import { useEffect, useState } from 'react';


const Offer = () => {
    const [activeindex, setActiveIndex] = useState(0)
    const [offerProducts, setOfferProducts] = useState([])
    const [filterproducts, setfilterProducts] = useState([]);
    const [parcentPrice, setParcentPrice] = useState(0.3)

    const parcent = ["30% offer", "40% offer", "50% offer"]


    const handleParcentage = (i) => {
        setActiveIndex(i)
        const selectProduct = parcent[i].slice(0, 3);
        const filterd = offerProducts.filter(products => products.offerprice == selectProduct)
        setfilterProducts(filterd);

        setParcentPrice(parseInt(selectProduct) / 100)
    }


    
    // fatch offer products data

    useEffect(() => {
        fetch('https://shopwish-surver-shammi-riya.vercel.app/offer-products')
            .then(res => res.json())
            .then(data => {
                setOfferProducts(data)
                setfilterProducts(data.filter(product => product.offerprice == parcent[0].slice(0, 3)))
            })

    }, [])




    return (
        <div className='container my-5 py-5'>
            <div className='row '>
                <div className=' offer-left-side col-12 col-md-3  '>
                    <div>
                        <div className='w-100 offer-left-side_head d-flex justify-content-between py-3 align-items-center '>
                            <h4 className=''>Deals Of the weeek</h4>
                            <div className='d-flex gap-2 fs-3'>
                                <p><IoIosArrowDropright></IoIosArrowDropright></p>
                                <p><IoIosArrowDropleft></IoIosArrowDropleft></p>
                            </div>
                        </div>
                        <img src={img1} alt="" />
                        <div className='text-center border-b'>
                            <h4 >Kitch Techno 2.0</h4>
                            <h6> price:<span className='text-decoration-line-through'>$900</span> $800</h6>
                        </div>
                        <div className='my-3 d-flex justify-content-center align-items-center'>
                            <div>
                                <h5>Hurry Up! Offers End In:</h5>
                                <div className='d-flex gap-3 py-5 align-items-center  px-3'>
                                    <div className='text-center'>
                                        <span className='p-4  bg-light'>0</span>
                                        <p className='pt-2'>Days</p>

                                    </div>
                                    <div className='text-center'>
                                        <span className='p-4 bg-light'>0</span>
                                        <p className='pt-2'>Hours</p>

                                    </div>
                                    <div className='text-center'>
                                        <span className='p-4 bg-light'>0</span>
                                        <p className='pt-2'>Minits</p>

                                    </div>
                                    <div className='text-center'>
                                        <span className='p-4 bg-light'>0</span>
                                        <p className='pt-2'>Second</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='col-12 col-md-9'>
                    <div className=''>
                        <div className='price_section d-flex justify-content-between align-items-center'>
                            <h5>Deaily Deals get our best price</h5>
                            <div className='d-flex gap-3 fs-5 py-2'>
                                {
                                    parcent.map((parcentage, index) =>
                                        <button className={`py-2 px-4 border-0 rounded ${activeindex == index ? 'active2' : 'bg-light '}`}
                                            onClick={() => handleParcentage(index)}
                                            key={index}>
                                            {parcentage}
                                        </button>
                                    )
                                }

                            </div>
                        </div>
                    </div>
                    <div className='row row-cols-1  row-cols-sm-2 row-cols-md-3 '>
                        {
                            filterproducts.map(offer => <div className='col w-full   text-center' key={offer._id}>
                                <div >
                                    <img style={{ height: '300px', width: '100%' }} src={offer.img} alt="" />
                                    <h4>{offer.name}</h4>
                                    <h5>Price:<span className='text-decoration-line-through'>{offer?.price}</span><span className='text-danger px-3'>${(offer.price * parcentPrice).toFixed(2)} </span></h5>
                                </div>
                            </div>)
                        }

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Offer;