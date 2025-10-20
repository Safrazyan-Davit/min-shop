import React, {useContext} from 'react';
import CartContext from "../../context/cartContext";

function Cart(props) {
    const {cartState,setCartState}=useContext(CartContext)

    return (
        <div className="cart">
            <div className="card">
                <h2>🛒 Զամբյուղ</h2>
                <div className="items">
                    {
                        cartState.value.map((product)=> (
                            <div className="item" key={product.id}>
                                <img className="thumb"
                                     src="https://images.unsplash.com/photo-1544717305-996b815c338c?q=80&w=1200&auto=format&fit=crop"
                                     alt="JavaScript Գիրք"/>
                                <div>
                                    <p className="title">{product.name}</p>
                                    <p className="meta">Կոդ — #BK-{product.id} • Մատչելի</p>
                                    <span className="tag">Գիտելիք</span>
                                </div>
                                <div className="price-col">
                                    <div className="qty" aria-label="Քանակ">
                                        <button className="btn" aria-hidden="true">−</button>
                                        <span>{product.qty}</span>
                                        <button className="btn" aria-hidden="true">+</button>
                                    </div>
                                    <div className="unit">Միավորի գին՝{product.price} ֏</div>
                                    <div className="total">Ընդամենը՝ 9 500 ֏</div>
                                    <div style={{marginTop: '6px'}}><a className="remove" href="#">Հեռացնել</a></div>
                                </div>
                            </div>
                        ))
                    }


                </div>

                <h2>Ամփոփում</h2>
                <div className="summary">



                    <div className="totals-big">
                        <div className="label">Ընդհանուր</div>
                        <div className="amount">{cartState.total} ֏</div>
                    </div>
                    <div className="checkout">
                        <button className="pay-btn">Ավարտել գնումը</button>
                        <div className="secure">
                            <span className="badge">🔒 Անվտանգ վճարում</span>
                            <span>Visa / MasterCard / Իդրամ</span>
                        </div>
                    </div>
                </div>
            </div>
            </div>

            );
            }

            export default Cart;