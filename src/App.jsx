import './assets/css/style-prefix.css';
import './App.css';
import Header from "./component/header";
import SlideBar from "./component/slideBar";
import ProductBox from "./component/productBox";
import ProductFeatured from "./component/productFeatured";
import ShowCaseTwo from "./component/product/ShowCaseTwo";
import Testimonials from "./component/testimonials";
import Blog from "./component/blog";
import Footer from "./component/footer";
import Scrollbar from "./component/menu/scrollbar";
import Categories from "./component/categories";
import CartContext from "./context/cartContext";
import {useState} from "react";


function App() {
    const [cartState, setCartState] = useState({
        value: [],
        total: 0
    });
    return (
        <div className="App">
            <CartContext.Provider value={{cartState, setCartState}}>
            <Header />

            <main>
                <SlideBar/>
                <div className="product-container">

                    <div className="container">
                        <Categories/>

                    </div>





                        <div className="container">
                            <Scrollbar/>
                            <ProductBox/>
                        </div>


                        <div className="container">
                            <ProductFeatured/>
                        </div>


                        <div className="container">
                            <ShowCaseTwo/>
                        </div>

                    <div className="container">
                        <Testimonials/>
                    </div>

                    <div className="container">
                        <Blog/>
                    </div>

                    <div>
                        <Footer/>
                    </div>


                </div>

            </main>

            </CartContext.Provider>
        </div>
    );
}

export default App;
