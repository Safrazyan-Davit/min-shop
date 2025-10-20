import React from 'react';
import cart from "../../assets/images/cart.png";
import favorite from "../../assets/images/favourite.png";

function Addproduct({id}) {
    return (
        <button className="icons-btn">
            <img src={cart} alt="cart" width="25"/>
            <img src={favorite} alt="favorite" width="25"/>
        </button>
    );
}

export default Addproduct;