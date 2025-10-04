import React from 'react';
import {categoriesList} from "../../base";
import SubMenubar from "./subMenubar";
import List from "./list";

function Scrollbar() {



    return (

            <div className="sidebar  has-scrollbar" data-mobile-menu>

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

                            <div className="showcase">

                                <a href="#" className="showcase-img-box">
                                    <img src="./assets/images/products/1.jpg" alt="baby fabric shoes" width="75"
                                         height="75"
                                         className="showcase-img"/>
                                </a>

                                <div className="showcase-content">

                                    <a href="#">
                                        <h4 className="showcase-title">baby fabric shoes</h4>
                                    </a>

                                    <div className="showcase-rating">
                                        <ion-icon name="star"></ion-icon>
                                        <ion-icon name="star"></ion-icon>
                                        <ion-icon name="star"></ion-icon>
                                        <ion-icon name="star"></ion-icon>
                                        <ion-icon name="star"></ion-icon>
                                    </div>

                                    <div className="price-box">
                                        <del>$5.00</del>
                                        <p className="price">$4.00</p>
                                    </div>

                                </div>

                            </div>

                            <div className="showcase">

                                <a href="#" className="showcase-img-box">
                                    <img src="./assets/images/products/2.jpg" alt="men's hoodies t-shirt"
                                         className="showcase-img"
                                         width="75" height="75"/>
                                </a>

                                <div className="showcase-content">

                                    <a href="#">
                                        <h4 className="showcase-title">men's hoodies t-shirt</h4>
                                    </a>
                                    <div className="showcase-rating">
                                        <ion-icon name="star"></ion-icon>
                                        <ion-icon name="star"></ion-icon>
                                        <ion-icon name="star"></ion-icon>
                                        <ion-icon name="star"></ion-icon>
                                        <ion-icon name="star-half-outline"></ion-icon>
                                    </div>

                                    <div className="price-box">
                                        <del>$17.00</del>
                                        <p className="price">$7.00</p>
                                    </div>

                                </div>

                            </div>

                            <div className="showcase">

                                <a href="#" className="showcase-img-box">
                                    <img src="./assets/images/products/3.jpg" alt="girls t-shirt"
                                         className="showcase-img" width="75"
                                         height="75"/>
                                </a>

                                <div className="showcase-content">

                                    <a href="#">
                                        <h4 className="showcase-title">girls t-shirt</h4>
                                    </a>
                                    <div className="showcase-rating">
                                        <ion-icon name="star"></ion-icon>
                                        <ion-icon name="star"></ion-icon>
                                        <ion-icon name="star"></ion-icon>
                                        <ion-icon name="star"></ion-icon>
                                        <ion-icon name="star-half-outline"></ion-icon>
                                    </div>

                                    <div className="price-box">
                                        <del>$5.00</del>
                                        <p className="price">$3.00</p>
                                    </div>

                                </div>

                            </div>

                            <div className="showcase">

                                <a href="#" className="showcase-img-box">
                                    <img src="./assets/images/products/4.jpg" alt="woolen hat for men"
                                         className="showcase-img" width="75"
                                         height="75"/>
                                </a>

                                <div className="showcase-content">

                                    <a href="#">
                                        <h4 className="showcase-title">woolen hat for men</h4>
                                    </a>
                                    <div className="showcase-rating">
                                        <ion-icon name="star"></ion-icon>
                                        <ion-icon name="star"></ion-icon>
                                        <ion-icon name="star"></ion-icon>
                                        <ion-icon name="star"></ion-icon>
                                        <ion-icon name="star"></ion-icon>
                                    </div>

                                    <div className="price-box">
                                        <del>$15.00</del>
                                        <p className="price">$12.00</p>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>



    );
}

export default Scrollbar;