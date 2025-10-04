import React from 'react';
import {slider} from "../base";

function SlideBar() {




    return (

            <div className="banner">

                <div className="container">

                    <div className="slider-container has-scrollbar">
                        {

                            slider.map(res=> (
                                <div className="slider-item" key={res.id}>

                                    <img src={res.image} alt="women's latest fashion sale"
                                         className="banner-img"/>

                                    <div className="banner-content">

                                        <p className="banner-subtitle">{res.title}</p>

                                        <h2 className="banner-title">{res.description}</h2>

                                        <p className="banner-text">
                                            starting at &dollar; <b>{res.price}</b>
                                        </p>

                                        <a href="#" className="banner-btn">Shop now</a>

                                    </div>

                                </div>
                            ))
                        }


                    </div>

                </div>

            </div>

    );
}

export default SlideBar;