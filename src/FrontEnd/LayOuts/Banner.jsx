import React from 'react';

const Banner = () => {
    return (
        <div className="featured-1">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 align-self-center">
                        <p className="text-muted"><span className="typewrite d-inline" data-period="2000" data-type='[ " Travel Blogger. ", "Content Writter. ", "Food Guides " ]'></span></p>
                        <h2>Hello, <span>Peoples</span></h2>
                        <h3 className="mb-20"> Welcome to stories blog</h3>
                        <h5 className="text-muted">Don't miss out on the latest news about Travel tips, Hotels review, Food guide...</h5>
                        <form className="input-group form-subcriber mt-30 d-flex">
                            <input type="email" className="form-control bg-white font-small" placeholder="Enter your email" />
                            <button className="btn bg-primary text-white" type="submit">Subscribe</button>
                        </form>
                    </div>
                    <div className="col-lg-6 text-end d-none d-lg-block">
                        {/* <img src="html/stories/demo/assets/imgs/authors/featured.png" alt="" /> */}
                        <img src="/assets/imgs/authors/featured.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;