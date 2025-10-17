import React from 'react';
import {showcases} from "../base";

function ProductFeatured() {
    return (
        <div className="product-featured">
            <h2 className="title">Deal of the day</h2>

            <div className="showcase-wrapper has-scrollbar">
                {
                    showcases.map(res=> (

                        <div className="showcase-container" key={res.id}>
                            <div className="showcase">

                                <div className="showcase-banner">
                                    <img
                                        src={res.image}
                                        alt={res.alt}
                                        className="showcase-img"
                                    />
                                </div>

                                <div className="showcase-content">
                                    <div className="showcase-rating">
                                        <ion-icon name="star"></ion-icon>
                                        <ion-icon name="star"></ion-icon>
                                        <ion-icon name="star"></ion-icon>
                                        <ion-icon name="star-outline"></ion-icon>
                                        <ion-icon name="star-outline"></ion-icon>
                                    </div>

                                    <a href="#">
                                        <h3 className="showcase-title">
                                            {res.title}
                                        </h3>
                                    </a>

                                    <p className="showcase-desc">
                                        {res.desc}
                                    </p>

                                    <div className="price-box">
                                        <p className="price">${res.price}</p>
                                        <del>${res.oldPrice}</del>
                                    </div>

                                    <button className="add-cart-btn">add to cart</button>

                                    <div className="showcase-status">
                                        <div className="wrapper">
                                            <p>already sold: <b>{res.sold}</b></p>
                                            <p>available: <b>{res.available}</b></p>
                                        </div>
                                        <div className="showcase-status-bar"></div>
                                    </div>

                                    <div className="countdown-box">
                                        <p className="countdown-desc">Hurry Up! Offer ends in:</p>

                                        <div className="countdown">
                                            <div className="countdown-content">
                                                <p className="display-number">{res.countdown.days}</p>
                                                <p className="display-text">Days</p>
                                            </div>
                                            <div className="countdown-content">
                                                <p className="display-number">{res.countdown.hours}</p>
                                                <p className="display-text">Hours</p>
                                            </div>
                                            <div className="countdown-content">
                                                <p className="display-number">{res.countdown.minutes}</p>
                                                <p className="display-text">Min</p>
                                            </div>
                                            <div className="countdown-content">
                                                <p className="display-number">{res.countdown.seconds}</p>
                                                <p className="display-text">Sec</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))
                }


            </div>
        </div>
    );
}

export default ProductFeatured;