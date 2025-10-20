import React, {useContext, useEffect, useState} from 'react';
import productjson from '../../products_500.json'
import Catgoryname from "./catgoryname";
import DiscountPrice from "./discountPrice";
import Addproduct from "../details/addproduct";
import CartContext from "../../context/cartContext";
import cart from "../../assets/images/cart.png";
import favorite from "../../assets/images/favourite.png";
import {car} from "ionicons/icons";

function Showcase({tag}) {
    const [state,setState] = useState([])
    const {cartState,setCartState}=useContext(CartContext)
    useEffect(()=>{
      Promise.resolve(productjson).then(res=>{

         setState( res.filter(val=>val.tags.includes(tag)).slice(0,7))
      })

    },[])
    return (
        <div className="product-showcase">

            <h2 className="title">{tag}</h2>

            <div className="showcase-wrapper has-scrollbar">


                <div className="showcase-container">
                    {
                        state.map(res => (


                            <div className="showcase"  key={res.id}>

                                <a href="#" className="showcase-img-box">
                                    <img src={res.image_url}
                                         alt="relaxed short full sleeve t-shirt" width="70" className="showcase-img"/>
                                </a>

                                <div className="showcase-content">

                                    <a href="#">
                                        <h4 className="showcase-title">{res.name}</h4>
                                    </a>

                                    <Catgoryname id={res.category_id} />

                                  <DiscountPrice price={res.price} old_price={res.old_price}/>
                                    <div className={"d-flex"}>
                                        <img src={cart} alt="cart" width="25" onClick={()=>{
                                            setCartState({
                                                ...cartState,
                                                total:cartState.total+res.price,
                                                value:[
                                                    ...cartState.value,
                                                    {
                                                        id:Date.now(),
                                                        product_id:res.id,
                                                        name:res.name,
                                                        price:res.price,
                                                        image:res.image_url,
                                                        qty:1
                                                    }
                                                ]
                                            })
                                        }}/>
                                        <img src={favorite} alt="favorite" width="25"/>
                                    </div>
                                </div>

                            </div>


                        ))
                    }
                </div>

                </div>

            </div>
    );
            }

export default Showcase;