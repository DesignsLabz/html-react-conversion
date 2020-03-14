import React, { Component } from 'react';

class PortfolioComponent extends React.Component {
    render() {
        return (
            <div id="portfolio" className="section md-padding bg-grey">
                <div className="container">
                    <div className="row">
                        <div className="section-header text-center">
                            <h2 className="title">Featured Works</h2>
                        </div>
                        <div className="col-md-4 col-xs-6 work">
                            <img className="img-responsive" src="./img/work1.jpg" alt="" />
                            <div className="overlay"></div>
                            <div className="work-content">
                                <span>Category</span>
                                <h3>Lorem ipsum dolor</h3>
                                <div className="work-link">
                                    <a href="#"><i className="fa fa-external-link"></i></a>
                                    <a className="lightbox" href="./img/work1.jpg"><i className="fa fa-search"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-xs-6 work">
                            <img className="img-responsive" src="./img/work2.jpg" alt="" />
                            <div className="overlay"></div>
                            <div className="work-content">
                                <span>Category</span>
                                <h3>Lorem ipsum dolor</h3>
                                <div className="work-link">
                                    <a href="#"><i className="fa fa-external-link"></i></a>
                                    <a className="lightbox" href="./img/work2.jpg"><i className="fa fa-search"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-xs-6 work">
                            <img className="img-responsive" src="./img/work3.jpg" alt="" />
                            <div className="overlay"></div>
                            <div className="work-content">
                                <span>Category</span>
                                <h3>Lorem ipsum dolor</h3>
                                <div className="work-link">
                                    <a href="#"><i className="fa fa-external-link"></i></a>
                                    <a className="lightbox" href="./img/work3.jpg"><i className="fa fa-search"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-xs-6 work">
                            <img className="img-responsive" src="./img/work4.jpg" alt="" />
                            <div className="overlay"></div>
                            <div className="work-content">
                                <span>Category</span>
                                <h3>Lorem ipsum dolor</h3>
                                <div className="work-link">
                                    <a href="#"><i className="fa fa-external-link"></i></a>
                                    <a className="lightbox" href="./img/work4.jpg"><i className="fa fa-search"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-xs-6 work">
                            <img className="img-responsive" src="./img/work5.jpg" alt="" />
                            <div className="overlay"></div>
                            <div className="work-content">
                                <span>Category</span>
                                <h3>Lorem ipsum dolor</h3>
                                <div className="work-link">
                                    <a href="#"><i className="fa fa-external-link"></i></a>
                                    <a className="lightbox" href="./img/work5.jpg"><i className="fa fa-search"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-xs-6 work">
                            <img className="img-responsive" src="./img/work6.jpg" alt="" />
                            <div className="overlay"></div>
                            <div className="work-content">
                                <span>Category</span>
                                <h3>Lorem ipsum dolor</h3>
                                <div className="work-link">
                                    <a href="#"><i className="fa fa-external-link"></i></a>
                                    <a className="lightbox" href="./img/work6.jpg"><i className="fa fa-search"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PortfolioComponent;