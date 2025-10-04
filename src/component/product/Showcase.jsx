import React, {useEffect, useState} from 'react';
import productjson from '../../products_500.json'

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
                                        <h4 className="showcase-title">{res.title}</h4>
                                    </a>

                                    <a href="#" className="showcase-category">Clothes</a>

                                    <div className="price-box">
                                        <p className="price">$45.00</p>
                                        <del>$12.00</del>
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