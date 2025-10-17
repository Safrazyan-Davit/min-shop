import React, {useEffect, useState} from 'react';
import productjson from '../../products_500.json'
import Catgoryname from "./catgoryname";
import DiscountPrice from "./discountPrice";
import Addproduct from "../details/addproduct";

function Showcase({tag}) {
    const [state,setState] = useState([])
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
                                  <Addproduct id={res.id}/>
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