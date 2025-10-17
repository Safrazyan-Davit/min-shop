import React from 'react';
import {blogs} from "../base";

function Blog() {


    return (
        <div className="blog">
            <div className="blog-container has-scrollbar">

                {
                    blogs.map(res=> (

                        <div className="blog-card" key={res.id}>

                            <a href="#">
                                <img
                                    src={res.image}
                                    alt={res.alt} width="300"
                                    className="blog-banner"/>
                            </a>

                            <div className="blog-content">

                                <a href="#" className="blog-category">{res.category}</a>

                                <a href="#">
                                    <h3 className="blog-title">{res.title}</h3>
                                </a>

                                <p className="blog-meta">
                                    By <cite>{res.author}</cite> / <time dateTime="2022-04-06">{res.date}</time>
                                </p>

                            </div>

                        </div>

                    ))
                }


            </div>

        </div>
    );
}

export default Blog;