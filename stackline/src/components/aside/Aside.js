import React from "react";
import { useSelector } from "react-redux";
import Tags from "../tags/Tags";
import '../aside/aside.css';

const Aside  = () => {
    const salesDetails = useSelector(data => data?.[0]);
    return(
        <aside>
            <div className="container product-details">
                <img src={salesDetails?.image} alt={`${salesDetails?.brand} ${salesDetails?.title}`} className="product-image" />
                <div className="product-info">
                    <h2 className="product-title">{salesDetails?.title}</h2>
                    <p className="product-subheading">{salesDetails?.subtitle}</p>
                </div>
            </div>
            <Tags />
        </aside>
    );
}

export default Aside;