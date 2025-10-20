import React, { useState } from 'react';
import favorite from "../../assets/images/favourite.png";
import cart from "../../assets/images/cart.png";

function Favorite() {

    const [activePopup, setActivePopup] = useState(null);

    function handleClick(type) {
        setActivePopup(type)
    }

    function closePopup() {
        setActivePopup(null);
    }

    return (
        <div className="header-user-actions">

            <button className="action-btn" onClick={() => handleClick('favorite')}>
                <img src={favorite} alt="" width={30}/>
                <span className="count">0</span>
            </button>

            <button className="action-btn" onClick={() => handleClick('cart')}>
                <img src={cart} alt="" width={30}/>
                <span className="count">0</span>
            </button>

            {activePopup && (
                <div className="popup-overlay" onClick={closePopup}>
                    <div className="popup" onClick={(e) => e.stopPropagation()}>
                        <button className="close-x" onClick={closePopup}>×</button>

                        <h3>
                            {activePopup === "cart" ? "🛒 Your Cart" : "❤️ Favorites"}
                        </h3>
                        <p>The content will appear here.</p>
                    </div>
                </div>
            )}
        </div>
    );
}
export default Favorite;