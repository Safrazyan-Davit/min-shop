import React from 'react';
import cart from "../../assets/images/cart.png";

function Addproduct({id}) {
    return (
        <button className={'mt-2'} >
            <img src={cart} alt="" width={30}/>
        </button>
    );
}

export default Addproduct;