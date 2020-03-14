import React, { Component } from 'react';

class NumbersComponent extends React.Component {
    render() {
        return (
            <div id="numbers" className="section sm-padding">
                <div className="bg-img" style={{ backgroundImage: "url('./img/background2.jpg')" }}>
                    <div className="overlay"></div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-3 col-xs-6">
                            <div className="number">
                                <i className="fa fa-users"></i>
                                <h3 className="white-text"><span className="counter">451</span></h3>
                                <span className="white-text">Happy clients</span>
                            </div>
                        </div>
                        <div className="col-sm-3 col-xs-6">
                            <div className="number">
                                <i className="fa fa-trophy"></i>
                                <h3 className="white-text"><span className="counter">12</span></h3>
                                <span className="white-text">Awards won</span>
                            </div>
                        </div>
                        <div className="col-sm-3 col-xs-6">
                            <div className="number">
                                <i className="fa fa-coffee"></i>
                                <h3 className="white-text"><span className="counter">154</span>K</h3>
                                <span className="white-text">Cups of Coffee</span>
                            </div>
                        </div>
                        <div className="col-sm-3 col-xs-6">
                            <div className="number">
                                <i className="fa fa-file"></i>
                                <h3 className="white-text"><span className="counter">45</span></h3>
                                <span className="white-text">Projects completed</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default NumbersComponent;