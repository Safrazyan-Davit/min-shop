import React from 'react';

function DiscountPrice({price,old_price}) {



    return (
        <div className="price-box">
            <p className="price">${price}</p>
            <del>{old_price}</del>
        </div>
    );
}

export default DiscountPrice;