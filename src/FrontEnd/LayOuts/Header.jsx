import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <header className="main-header header-style-1 font-heading">
                <div className="header-top">
                    <div className="container">
                        <div className="row pt-20 pb-20">
                            <div className="col-md-3 col-xs-6">
                                <a href="index.html"><img className="logo" src="/assets/imgs/theme/logo.png" alt="" /></a>
                            </div>
                            <div className="col-md-9 col-xs-6 text-end header-top-right ">
                                <ul className="list-inline nav-topbar d-none d-md-inline">
                                    <li className="list-inline-item menu-item-has-children"><a href="#">Layouts</a>
                                        <ul className="sub-menu font-small">
                                            <li className="menu-item-has-children"><a href="#">Pages</a>
                                                <ul className="sub-menu font-small">
                                                    <li><a href="html/stories/demo/page-about.html">About</a></li>
                                                    <li><a href="html/stories/demo/page-contact.html">Contact</a></li>
                                                    <li><a href="html/stories/demo/page-typography.html">Typography</a></li>
                                                    <li><a href="html/stories/demo/page-register.html">Register</a></li>
                                                    <li><a href="html/stories/demo/page-login.html">Login</a></li>
                                                    <li><a href="html/stories/demo/page-search.html">Search</a></li>
                                                    <li><a href="html/stories/demo/page-author.html">Author</a></li>
                                                    <li><a href="html/stories/demo/page-404.html">404 page</a></li>
                                                </ul>
                                            </li>
                                            <li className="menu-item-has-children"><a href="#">Category</a>
                                                <ul className="sub-menu font-small">
                                                    <li><a href="html/stories/demo/category-list.html">List layout</a></li>
                                                    <li><a href="html/stories/demo/category-grid.html">Grid layout</a></li>
                                                    <li><a href="html/stories/demo/category-masonry.html">Masonry layout</a></li>
                                                    <li><a href="html/stories/demo/category-big.html">Big layout</a></li>
                                                </ul>
                                            </li>
                                            <li className="menu-item-has-children"><a href="#">Single post</a>
                                                <ul className="sub-menu font-small">
                                                    <li><a href="html/stories/demo/single.html">Default</a></li>
                                                    <li><a href="html/stories/demo/single-2.html">Big image</a></li>
                                                    <li><a href="html/stories/demo/single-3.html">Left image</a></li>
                                                    <li><a href="html/stories/demo/single-4.html">With sidebar</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="list-inline-item"><a href="html/stories/docs.html"><i className="elegant-icon icon_document_alt mr-5"></i>Document</a></li>
                                </ul>
                                <span className="vertical-divider mr-20 ml-20 d-none d-md-inline"></span>
                                <button className="search-icon d-none d-md-inline"><span className="mr-15 text-muted font-small"><i className="elegant-icon icon_search mr-5"></i>Search</span></button>
                                <div className="dark-light-mode-cover">
                                    <a className="dark-light-mode" href="#"></a>
                                </div>
                                <a className="btn btn-radius bg-primary text-white ml-15 font-small box-shadow" href="https://themeforest.net/item/stories-personal-blog-html-template/28453702" target="_blank">Buy Now</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-sticky">
                    <div className="container align-self-center position-relative">
                        <div className="mobile_menu d-lg-none d-block"></div>
                        <div className="main-nav d-none d-lg-block float-start">
                            <nav>
                                {/* <!--Desktop menu--> */}
                                <ul className="main-menu d-none d-lg-inline font-small">
                                    <li className="menu-item-has-children">
                                        <a href="index.html"> <i className="elegant-icon icon_house_alt mr-5"></i> Home</a>
                                        <ul className="sub-menu text-muted font-small">
                                            <li><a href="index.html">Home default</a></li>
                                            <li><a href="html/stories/demo/home-2.html">Homepage 2</a></li>
                                            <li><a href="html/stories/demo/home-3.html">Homepage 3</a></li>
                                        </ul>
                                    </li>
                                    <li> <a href="html/stories/demo/category-list.html">Travel</a> </li>
                                    <li className="current-item has-mega-menu">
                                        <a href="html/stories/demo/category-list.html">Mega Menu</a>
                                        <ul className="mega-menu">
                                            <li className="sub-mega-menu sub-mega-menu-width-22">
                                                <a className="menu-title" href="#">Travel Blog</a>
                                                <ul>
                                                    <li><a href="html/stories/demo/category-list.html">Destinations</a></li>
                                                    <li><a href="html/stories/demo/category-list.html">Tour Guides</a></li>
                                                    <li><a href="html/stories/demo/category-list.html">Travel Food</a></li>
                                                    <li><a href="html/stories/demo/category-list.html">Hotels Booking</a></li>
                                                    <li><a href="html/stories/demo/category-list.html">Transport Review</a></li>
                                                    <li><a href="html/stories/demo/category-list.html">Travel Healthy</a></li>
                                                </ul>
                                            </li>
                                            <li className="sub-mega-menu sub-mega-menu-width-22">
                                                <a className="menu-title" href="#">Fruit & Vegetables</a>
                                                <ul>
                                                    <li><a href="html/stories/demo/category-list.html">Meat & Poultry</a></li>
                                                    <li><a href="html/stories/demo/category-list.html">Fresh Vegetables</a></li>
                                                    <li><a href="html/stories/demo/category-list.html">Herbs & Seasonings</a></li>
                                                    <li><a href="html/stories/demo/category-list.html">Cuts & Sprouts</a></li>
                                                    <li><a href="html/stories/demo/category-list.html">Exotic Fruits & Veggies</a></li>
                                                    <li><a href="html/stories/demo/category-list.html">Packaged Produce</a></li>
                                                </ul>
                                            </li>
                                            <li className="sub-mega-menu sub-mega-menu-width-22">
                                                <a className="menu-title" href="#">Breakfast & Dairy</a>
                                                <ul>
                                                    <li><a href="html/stories/demo/category-list.html">Milk & Flavoured Milk</a></li>
                                                    <li><a href="html/stories/demo/category-list.html">Butter and Margarine</a></li>
                                                    <li><a href="html/stories/demo/category-list.html">Eggs Substitutes</a></li>
                                                    <li><a href="html/stories/demo/category-list.html">Marmalades</a></li>
                                                    <li><a href="html/stories/demo/category-list.html">Sour Cream</a></li>
                                                    <li><a href="html/stories/demo/category-list.html">Cheese</a></li>
                                                </ul>
                                            </li>
                                            <li className="sub-mega-menu sub-mega-menu-width-22">
                                                <a className="menu-title" href="#">Meat & Seafood</a>
                                                <ul>
                                                    <li><a href="html/stories/demo/category-list.html">Breakfast Sausage</a></li>
                                                    <li><a href="html/stories/demo/category-list.html">Dinner Sausage</a></li>
                                                    <li><a href="html/stories/demo/category-list.html">Chicken</a></li>
                                                    <li><a href="html/stories/demo/category-list.html">Sliced Deli Meat</a></li>
                                                    <li><a href="html/stories/demo/category-list.html">Wild Caught Fillets</a></li>
                                                    <li><a href="html/stories/demo/category-list.html">Crab and Shellfish</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li> <a href="html/stories/demo/category-grid.html">Guides</a> </li>
                                    <li> <a href="html/stories/demo/category-masonry.html">Food</a> </li>
                                    <li> <a href="html/stories/demo/category-big.html">Hotels</a> </li>
                                    <li> <a href="html/stories/demo/category.html">Review</a> </li>
                                    <li> <a href="html/stories/demo/category.html">Healthy </a> </li>
                                    <li> <a href="html/stories/demo/category.html">Lifestyle</a> </li>
                                    {/* <li> <a href="html/stories/demo/category.html">Blog</a> </li> */}
                                    <li> <Link><a href="html/stories/demo/category.html">DashBoard</a></Link> </li>
                                </ul>
                                {/* <!--Mobile menu--> */}
                                <ul id="mobile-menu" className="d-block d-lg-none text-muted">
                                    <li className="menu-item-has-children">
                                        <a href="index.html">Home</a>
                                        <ul className="sub-menu text-muted font-small">
                                            <li><a href="index.html">Home default</a></li>
                                            <li><a href="html/stories/demo/home-2.html">Homepage 2</a></li>
                                            <li><a href="html/stories/demo/home-3.html">Homepage 3</a></li>
                                        </ul>
                                    </li>
                                    <li className="menu-item-has-children"><a href="#">Pages</a>
                                        <ul className="sub-menu font-small">
                                            <li><a href="html/stories/demo/page-about.html">About</a></li>
                                            <li><a href="html/stories/demo/page-contact.html">Contact</a></li>
                                            <li><a href="html/stories/demo/page-typography.html">Typography</a></li>
                                            <li><a href="html/stories/demo/page-register.html">Register</a></li>
                                            <li><a href="html/stories/demo/page-login.html">Login</a></li>
                                            <li><a href="html/stories/demo/page-search.html">Search</a></li>
                                            <li><a href="html/stories/demo/page-author.html">Author</a></li>
                                            <li><a href="html/stories/demo/page-404.html">404 page</a></li>
                                        </ul>
                                    </li>
                                    <li className="menu-item-has-children"><a href="#">Category</a>
                                        <ul className="sub-menu font-small">
                                            <li><a href="html/stories/demo/category-list.html">List layout</a></li>
                                            <li><a href="html/stories/demo/category-grid.html">Grid layout</a></li>
                                            <li><a href="html/stories/demo/category-masonry.html">Masonry layout</a></li>
                                            <li><a href="html/stories/demo/category-big.html">Big layout</a></li>
                                        </ul>
                                    </li>
                                    <li className="menu-item-has-children"><a href="#">Single post</a>
                                        <ul className="sub-menu font-small">
                                            <li><a href="html/stories/demo/single.html">Default</a></li>
                                            <li><a href="html/stories/demo/single-2.html">Big image</a></li>
                                            <li><a href="html/stories/demo/single-3.html">Left image</a></li>
                                            <li><a href="html/stories/demo/single-4.html">With sidebar</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="float-end header-tools text-muted font-small">
                            <ul className="header-social-network d-inline-block list-inline mr-15">
                                <li className="list-inline-item"><a className="social-icon fb text-xs-center" target="_blank" href="#"><i className="elegant-icon social_facebook"></i></a></li>
                                <li className="list-inline-item"><a className="social-icon tw text-xs-center" target="_blank" href="#"><i className="elegant-icon social_twitter "></i></a></li>
                                <li className="list-inline-item"><a className="social-icon pt text-xs-center" target="_blank" href="#"><i className="elegant-icon social_pinterest "></i></a></li>
                            </ul>
                            <div className="off-canvas-toggle-cover d-inline-block">
                                <div className="off-canvas-toggle hidden d-inline-block" id="off-canvas-toggle">
                                    <span></span>
                                </div>
                            </div>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                </div>
            </header>

        </div>
    );
};

export default Header;