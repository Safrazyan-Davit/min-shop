import React from 'react';
import Showcase from "./product/Showcase";


function ProductBox() {

    return (

        <div className="product-box">
            <div className="product-minimal">
                <Showcase tag={"New Arrivals"}/>
                <Showcase tag={"Best Sellers"}/>
                <Showcase tag={"Top Rated"}/>
            </div>
        </div>

    );
}

export default ProductBox;