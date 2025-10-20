import React from 'react';
import Favorite from "./favorite";
import Cart from "./cart";

function PopUp({ activePopup, setActivePopup }) {
    function closePopup() {
        setActivePopup(null);
    }

    return (
        activePopup && (
            <div className="popup-overlay" onClick={closePopup}>
                <div className="popup" onClick={(e) => e.stopPropagation()}>
                    <button className="close-x" onClick={closePopup}>×</button>
                    <div className="modal-body">
                        {activePopup === 'cart' ? <Cart /> : <Favorite />}
                    </div>
                </div>
            </div>
        )
    );
}

export default PopUp;
