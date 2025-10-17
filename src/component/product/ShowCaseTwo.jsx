import React, {useEffect, useState} from 'react';
import Catgoryname from "./catgoryname";
import DiscountPrice from "./discountPrice";
import {products} from "../../base";

function ShowCaseTwo() {

    const [state, setState] = useState([])
    useEffect(()=>{
        Promise.resolve(products).then(res=>{
            let arr=[]
            for (const arrElement of res) {
                if (arrElement.tags.includes("New Products")){
                    arr.push(arrElement)
                }
                if(arr.length===12){
                    break
                }
            }

            setState(arr)
        })

    },[])



    return (
        <div className="product-main">

            <h2 className="title">New Products</h2>

            <div className="product-grid">
                {
                    state.map(res=> (

                        <div className="showcase" key={res.id}>

                            <div className="showcase-banner">

                                <img src={res.image_url} alt="Mens Winter Leathers Jackets"
                                     width="300"
                                     className="product-img default"/>


                                <p className="showcase-badge">15%</p>

                                <div className="showcase-actions">

                                    <button className="btn-action">
                                        <ion-icon name="heart-outline"></ion-icon>
                                    </button>

                                    <button className="btn-action">
                                        <ion-icon name="eye-outline"></ion-icon>
                                    </button>

                                    <button className="btn-action">
                                        <ion-icon name="repeat-outline"></ion-icon>
                                    </button>

                                    <button className="btn-action">
                                        <ion-icon name="bag-add-outline"></ion-icon>
                                    </button>

                                </div>

                            </div>

                            <div className="showcase-content">

                              <Catgoryname id={res.category_id}/>

                                <a href="#">
                                    <h3 className="showcase-title">{res.name}</h3>
                                </a>

                                <div className="showcase-rating">

                                </div>

                                <DiscountPrice  price={res.price} old_price={res.old_price}/>

                            </div>

                        </div>

                    ))


                }


            </div>


        </div>

    );
}

export default ShowCaseTwo;