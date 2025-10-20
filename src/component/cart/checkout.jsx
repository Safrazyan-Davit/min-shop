import React from 'react';

function Checkout(props) {
    return (

            <div className="cart">
                <div className="card">
                    <h2>🛒 Զամբյուղ</h2>
                    <div className="items">
                        <div className="item">
                            <img className="thumb"
                                 src="https://images.unsplash.com/photo-1544717305-996b815c338c?q=80&w=1200&auto=format&fit=crop"
                                 alt="JavaScript Գիրք"/>
                            <div>
                                <p className="title">JavaScript Գիրք</p>
                                <p className="meta">Կոդ — #BK-1024 • Մատչելի</p>
                                <span className="tag">Գիտելիք</span>
                            </div>
                            <div className="price-col">
                                <div className="qty" aria-label="Քանակ">
                                    <button className="btn" aria-hidden="true">−</button>
                                    <input type="number" min="1" value="1"/>
                                    <button className="btn" aria-hidden="true">+</button>
                                </div>
                                <div className="unit">Միավորի գին՝ 9 500 ֏</div>
                                <div className="total">Ընդամենը՝ 9 500 ֏</div>
                                <div style="margin-top:6px;"><a className="remove" href="#">Հեռացնել</a></div>
                            </div>
                        </div>

                        <div className="item">
                            <img className="thumb"
                                 src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop"
                                 alt="React Դասընթաց Տոմս"/>
                            <div>
                                <p className="title">React Դասընթաց Տոմս</p>
                                <p className="meta">Սկիզբ — 27 Հոկտ. • Եր. 19:30</p>
                                <span className="tag">Դասընթաց</span>
                            </div>
                            <div className="price-col">
                                <div className="qty" aria-label="Քանակ">
                                    <button className="btn" aria-hidden="true">−</button>
                                    <input type="number" min="1" value="1"/>
                                    <button className="btn" aria-hidden="true">+</button>
                                </div>
                                <div className="unit">Միավորի գին՝ 120 000 ֏</div>
                                <div className="total">Ընդամենը՝ 120 000 ֏</div>
                                <div style={{marginTop:"6px"}}><a className="remove" href="#">Հեռացնել</a></div>
                            </div>
                        </div>
                    </div>
                </div>

                <aside className="card">
                    <h2>Ամփոփում</h2>
                    <div className="summary">

                        <div className="row">
                            <div>Միջագումար</div>
                            <div className="value">129 500 ֏</div>
                        </div>

                        <div className="delivery">
                            <h3>Առաքում</h3>

                            <label className="del-opt">
                                <div>
                                    <input type="radio" name="delivery" checked/>
                                    <span className="del-name">Ստանդարտ (2–4 օր)</span>
                                    <div className="muted">Քաղաքի ներսում</div>
                                </div>
                                <div className="del-price">1 200 ֏</div>
                            </label>

                            <label className="del-opt">
                                <div>
                                    <input type="radio" name="delivery"/>
                                    <span className="del-name">Էքսպրես (24 ժամ)</span>
                                    <div className="muted">Արագ առաքում</div>
                                </div>
                                <div className="del-price">3 000 ֏</div>
                            </label>
                        </div>

                        <div className="totals-big">
                            <div className="label">Ընդհանուր</div>
                            <div className="amount">130 700 ֏</div>
                        </div>
                        <div className="muted">* Գները ներառում են ԱԱՀ (եթե կիրառելի է)</div>

                        <div className="checkout">
                            <button className="pay-btn">Ավարտել գնումը</button>
                            <div className="secure">
                                <span className="badge">🔒 Անվտանգ վճարում</span>
                                <span>Visa / MasterCard / Իդրամ</span>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>

    );
}

export default Checkout;