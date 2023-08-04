import  { useEffect, useState } from "react";
import { useDataApi } from "../Api/useDataApi";

const ProductPopup = () => {
    const [productPopUp, setProductPopUp] = useState(false);
    const [currentProductIndex, setCurrentProductIndex] = useState(0);
    const [data] = useDataApi();

    useEffect(() => {
        const timer = setTimeout(() => {
            setProductPopUp(true);
        }, 4000);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (productPopUp) {
            const interval = setInterval(() => {
                if (currentProductIndex === data.length - 1) {
                    setProductPopUp(false);
                } else {
                    setCurrentProductIndex((prevIndex) => prevIndex + 1);
                }
            }, 4000);

            return () => clearInterval(interval);
        }
    }, [productPopUp, currentProductIndex, data]);


    if (!productPopUp || data.length === 0) {
        return null;
    }

    const product = data[currentProductIndex];

    const handleClosePopup = () => {
        setProductPopUp(false);
    };

    return (
        <div style={{ height: "200px", width: "200px" }}>
            <div className="card d-flex">
                <button
                    style={{
                        position: "absolute",
                        top: "5px",
                        right: "5px",
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        fontSize: "20px",
                    }}
                    onClick={handleClosePopup}
                >
                    &times;
                </button>
                <img style={{ height: "100px" }} src={product?.img} alt={product.img} />
                <div style={{ color: "#fd7e14" }} className="card-body">
                    <h5 className="card-title">{product?.name}</h5>
                    <p className="card-text">${product?.price}</p>
                </div>
            </div>
        </div>
    );
};

export default ProductPopup;
