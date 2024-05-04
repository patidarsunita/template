import React from 'react';

const HomePage = ({ product }) => {
    return (
        <div>
            {/* Welcome Area */}
            <section className="welcome_area bg-img background-overlay" style={{ backgroundImage: "url('../static/img/bg-img/bg-1.jpg')" }}>
                <div className="container h-100">
                    <div className="row h-100 align-items-center">
                        <div className="col-12">
                            <div className="hero-content">
                                <h6>asoss</h6>
                                <h2>New Collection</h2>
                                <a href="#" className="btn essence-btn">view collection</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Top Category Area */}
            <div className="top_catagory_area section-padding-80 clearfix">
                <div className="container">
                    <div className="row justify-content-center">
                        {/* Single Category */}
                        <div className="col-12 col-sm-6 col-md-4">
                            <div className="single_catagory_area d-flex align-items-center justify-content-center bg-img" style={{ backgroundImage: "url('../static/img/bg-img/bg-2.jpg')" }}>
                                <div className="catagory-content">
                                    <a href="#">Clothing</a>
                                </div>
                            </div>
                        </div>
                        {/* Single Category */}
                        <div className="col-12 col-sm-6 col-md-4">
                            <div className="single_catagory_area d-flex align-items-center justify-content-center bg-img" style={{ backgroundImage: "url('../static/img/bg-img/bg-3.jpg')" }}>
                                <div className="catagory-content">
                                    <a href="#">Shoes</a>
                                </div>
                            </div>
                        </div>
                        {/* Single Category */}
                        <div className="col-12 col-sm-6 col-md-4">
                            <div className="single_catagory_area d-flex align-items-center justify-content-center bg-img" style={{ backgroundImage: "url('../static/img/bg-img/bg-4.jpg')" }}>
                                <div className="catagory-content">
                                    <a href="#">Accessories</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Area */}
            <div className="cta-area">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="cta-content bg-img background-overlay" style={{ backgroundImage: "url('../static/img/bg-img/bg-5.jpg')" }}>
                                <div className="h-100 d-flex align-items-center justify-content-end">
                                    <div className="cta--text">
                                        <h6>-60%</h6>
                                        <h2>Global Sale</h2>
                                        <a href="#" className="btn essence-btn">Buy Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* New Arrivals Area */}
            {product.length >= 1 &&
                <section className="new_arrivals_area section-padding-80 clearfix">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="section-heading text-center">
                                    <h2>Popular Products</h2>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="popular-products-slides owl-carousel">
                                    {product.map((prod, index) => (
                                        <div className="single-product-wrapper" key={index}>
                                            {/* Product Image */}
                                            <div className="product-img">
                                                <img src={`/media/${prod.image}`} alt="" />
                                                <img className="hover-img" src={`/media/${prod.image}`} alt="" />
                                                {/* Product Badge */}
                                                {prod.discount && prod.new_or_not &&
                                                    <div className="product-badge new-badge">
                                                        <span>New</span>
                                                    </div>
                                                }
                                                {prod.discount &&
                                                    <div className="product-badge offer-badge">
                                                        <span>-{prod.discount_percentage}%</span>
                                                    </div>
                                                }
                                                {!prod.discount && prod.new_or_not &&
                                                    <div className="product-badge new-badge">
                                                        <span>New</span>
                                                    </div>
                                                }
                                                {/* Product Favourite */}
                                                <div className="product-favourite">
                                                    <a href="#" className="favme fa fa-heart"></a>
                                                </div>
                                            </div>
                                            {/* Product Description */}
                                            <div className="product-description">
                                                <span>{prod.brand}</span>
                                                <a href={`/product/${prod.id}`}>
                                                    <h6>{prod.name}</h6>
                                                </a>
                                                <p className="product-price">₹{prod.price}</p>
                                                {/* Hover Content */}
                                                <div className="hover-content">
                                                    {/* Add to Cart */}
                                                    <div className="add-to-cart-btn">
                                                        <a href={`/cart_add/${prod.id}`} className="btn essence-btn">Add to Cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            }

            {/* Brands Area */}
            <div className="brands-area d-flex align-items-center justify-content-between">
                {/* Brand Logo */}
                <div className="single-brands-logo">
                    <img src="../static/img/core-img/brand1.png" alt="" />
                </div>
                {/* Brand Logo */}
                <div className="single-brands-logo">
                    <img src="../static/img/core-img/brand2.png" alt="" />
                </div>
                {/* Brand Logo */}
                <div className="single-brands-logo">
                    <img src="../static/img/core-img/brand3.png" alt="" />
                </div>
                {/* Brand Logo */}
                <div className="single-brands-logo">
                    <img src="../static/img/core-img/brand4.png" alt="" />
                </div>
                {/* Brand Logo */}
                <div className="single-brands-logo">
                    <img src="../static/img/core-img/brand5.png" alt="" />
                </div>
                {/* Brand Logo */}
                <div className="single-brands-logo">
                    <img src="../static/img/core-img/brand6.png" alt="" />
                </div>
            </div>
        </div>
    );
}

export default HomePage;
