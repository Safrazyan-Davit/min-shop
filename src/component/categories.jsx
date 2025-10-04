import React from 'react';
import {categoriesList} from "../base";

function Categories() {



    return (

            <div className="category">

                <div className="container">

                    <div className="category-item-container has-scrollbar">

                        {categoriesList.filter(res=>res.status!=='menu').map(res=> (


                            <div className="category-item" key={res.id}>

                                <div className="category-img-box">
                                    <img src={res.thumbImage} alt="dress & frock" width="30"/>
                                </div>

                                <div className="category-content-box">

                                    <div className="category-content-flex">
                                        <h3 className="category-item-title">{res.title}</h3>

                                        <p className="category-item-amount">({res.count})</p>
                                    </div>

                                    <a href="#" className="category-btn">Show all</a>

                                </div>

                            </div>

                        ))}


                    </div>

                </div>

            </div>


    );
}

export default Categories;