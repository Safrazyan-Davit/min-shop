import React, {useEffect, useState} from 'react';
import {categoriesList, products} from "../../base";
import List from "./list";
import DiscountPrice from "../product/discountPrice";

function Scrollbar() {
const [state, setState] = useState([]);
useEffect(()=>{
    Promise.resolve(products).then(res=>{
        console.log(res)
        let arr=[]
        for (const re of res) {
            if(re.tags.includes("Best Sellers")){
                arr.push(re);
            }

            if(arr.length===4){
                break
            }
        }
        setState(arr)

    })

},[])

    return (

            <div className="sidebar  has-scrollbar">

                <div className="sidebar-category">

                    <div className="sidebar-top">
                        <h2 className="sidebar-title">Category</h2>

                        <button className="sidebar-close-btn" data-mobile-menu-close-btn>
                            <ion-icon name="close-outline"></ion-icon>
                        </button>
                    </div>

                    <ul className="sidebar-menu-category-list">
                        {categoriesList.filter(res=>res.status!=='slide').map(res=> (
                            <List  key={res.id} res={res}/>

                            ))}

                    </ul>

                </div>

                <div className="product-showcase">

                    <h3 className="showcase-heading">best sellers</h3>

                    <div className="showcase-wrapper">

                        <div className="showcase-container">
                            {
                                state.map(res=> (

                                    <div className="showcase"  key={res.id}>

                                        <a href="#" className="showcase-img-box">
                                            <img src={res.image_url} alt="baby fabric shoes" width="75"
                                                 height="75"
                                                 className="showcase-img"/>
                                        </a>

                                        <div className="showcase-content">

                                            <a href="#">
                                                <h4 className="showcase-title">{res.name}</h4>
                                            </a>


                                        <DiscountPrice price={res.price} old_price={res.old_price}/>

                                        </div>

                                    </div>


                                ))


                            }


                        </div>

                    </div>

                </div>

            </div>


    );
}

export default Scrollbar;