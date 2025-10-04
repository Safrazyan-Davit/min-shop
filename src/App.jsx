
import './assets/css/style-prefix.css';
import './App.css';
import Header from "./component/header";
import SlideBar from "./component/slideBar";
import ProductBox from "./component/productBox";
import ProductFeatured from "./component/productFeatured";
import ProductMain from "./component/productMain";
import Testimonials from "./component/testimonials";
import Blog from "./component/blog";
import Footer from "./component/footer";
import Scrollbar from "./component/menu/scrollbar";
import Categories from "./component/categories";


function App() {
  return (
      <div className="App">
          <Header/>

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
                      <ProductMain/>
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


      </div>
  );
}

export default App;
