import React from 'react';
import logo from './logo.svg';
import HeaderComponent from './header-component/header-component';
import AboutComponent from './about-component/about-component';
import PortfolioComponent from './portfolio-component/portfolio-component';
import ServiceComponent from './service-component/service-component';
import FeaturesComponent from './features-component/features-component';
import NumbersComponent from './numbers-component/numbers-component';
import FooterComponent from './footer-component/footer-component';
import './App.css';

//function App() {
class App extends React.Component {
  constructor(props) {
    super(props)
    
  }
  render() {
    return (
      <div className="App">
        <HeaderComponent></HeaderComponent>
        <AboutComponent></AboutComponent>
        <PortfolioComponent></PortfolioComponent>
        <ServiceComponent></ServiceComponent>
        <FeaturesComponent></FeaturesComponent>
        <NumbersComponent></NumbersComponent>

    <div> Hello {this.props.name}</div>
    

        <div id="pricing" className="section md-padding">
          <div className="container">
            <div className="row">
              <div className="section-header text-center">
                <h2 className="title">Pricing Table</h2>
              </div>
              <div className="col-sm-4">
                <div className="pricing">
                  <div className="price-head">
                    <span className="price-title">Basic plan</span>
                    <div className="price">
                      <h3>$9<span className="duration">/ month</span></h3>
                    </div>
                  </div>
                  <ul className="price-content">
                    <li>
                      <p>1GB Disk Space</p>
                    </li>
                    <li>
                      <p>100 Email Account</p>
                    </li>
                    <li>
                      <p>24/24 Support</p>
                    </li>
                  </ul>
                  <div className="price-btn">
                    <button className="outline-btn">Purchase now</button>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="pricing">
                  <div className="price-head">
                    <span className="price-title">Silver plan</span>
                    <div className="price">
                      <h3>$19<span className="duration">/ month</span></h3>
                    </div>
                  </div>
                  <ul className="price-content">
                    <li>
                      <p>1GB Disk Space</p>
                    </li>
                    <li>
                      <p>100 Email Account</p>
                    </li>
                    <li>
                      <p>24/24 Support</p>
                    </li>
                  </ul>
                  <div className="price-btn">
                    <button className="outline-btn">Purchase now</button>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="pricing">
                  <div className="price-head">
                    <span className="price-title">Gold plan</span>
                    <div className="price">
                      <h3>$39<span className="duration">/ month</span></h3>
                    </div>
                  </div>
                  <ul className="price-content">
                    <li>
                      <p>1GB Disk Space</p>
                    </li>
                    <li>
                      <p>100 Email Account</p>
                    </li>
                    <li>
                      <p>24/24 Support</p>
                    </li>
                  </ul>
                  <div className="price-btn">
                    <button className="outline-btn">Purchase now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="testimonial" className="section md-padding">
          <div className="bg-img" style={{ backgroundImage: "url('./img/background3.jpg')" }}>
            <div className="overlay"></div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-10 col-md-offset-1">
                <div id="testimonial-slider" className="owl-carousel owl-theme">
                  <div className="testimonial">
                    <div className="testimonial-meta">
                      <img src="./img/perso1.jpg" alt="" />
                      <h3 className="white-text">John Doe</h3>
                      <span>Web Designer</span>
                    </div>
                    <p className="white-text">Molestie at elementum eu facilisis sed odio. Scelerisque in dictum non consectetur a erat. Aliquam id diam maecenas ultricies mi eget mauris.</p>
                  </div>
                  <div className="testimonial">
                    <div className="testimonial-meta">
                      <img src="./img/perso2.jpg" alt="" />
                      <h3 className="white-text">John Doe</h3>
                      <span>Web Designer</span>
                    </div>
                    <p className="white-text">Molestie at elementum eu facilisis sed odio. Scelerisque in dictum non consectetur a erat. Aliquam id diam maecenas ultricies mi eget mauris.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="team" className="section md-padding">
          <div className="container">
            <div className="row">
              <div className="section-header text-center">
                <h2 className="title">Our Team</h2>
              </div>
              <div className="col-sm-4">
                <div className="team">
                  <div className="team-img">
                    <img className="img-responsive" src="./img/team1.jpg" alt="" />
                    <div className="overlay">
                      <div className="team-social">
                        <a href="#"><i className="fa fa-facebook"></i></a>
                        <a href="#"><i className="fa fa-google-plus"></i></a>
                        <a href="#"><i className="fa fa-twitter"></i></a>
                      </div>
                    </div>
                  </div>
                  <div className="team-content">
                    <h3>John Doe</h3>
                    <span>Web Designer</span>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="team">
                  <div className="team-img">
                    <img className="img-responsive" src="./img/team2.jpg" alt="" />
                    <div className="overlay">
                      <div className="team-social">
                        <a href="#"><i className="fa fa-facebook"></i></a>
                        <a href="#"><i className="fa fa-google-plus"></i></a>
                        <a href="#"><i className="fa fa-twitter"></i></a>
                      </div>
                    </div>
                  </div>
                  <div className="team-content">
                    <h3>John Doe</h3>
                    <span>Web Designer</span>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="team">
                  <div className="team-img">
                    <img className="img-responsive" src="./img/team3.jpg" alt="" />
                    <div className="overlay">
                      <div className="team-social">
                        <a href="#"><i className="fa fa-facebook"></i></a>
                        <a href="#"><i className="fa fa-google-plus"></i></a>
                        <a href="#"><i className="fa fa-twitter"></i></a>
                      </div>
                    </div>
                  </div>
                  <div className="team-content">
                    <h3>John Doe</h3>
                    <span>Web Designer</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="blog" className="section md-padding bg-grey">
          <div className="container">
            <div className="row">
              <div className="section-header text-center">
                <h2 className="title">Recents news</h2>
              </div>
              <div className="col-md-4">
                <div className="blog">
                  <div className="blog-img">
                    <img className="img-responsive" src="./img/blog1.jpg" alt="" />
                  </div>
                  <div className="blog-content">
                    <ul className="blog-meta">
                      <li><i className="fa fa-user"></i>John doe</li>
                      <li><i className="fa fa-clock-o"></i>18 Oct</li>
                      <li><i className="fa fa-comments"></i>57</li>
                    </ul>
                    <h3>Molestie at elementum eu facilisis sed odio</h3>
                    <p>Nec feugiat nisl pretium fusce id velit ut tortor pretium. Nisl purus in mollis nunc sed. Nunc non blandit massa enim nec.</p>
                    <a href="blog-single.html">Read more</a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="blog">
                  <div className="blog-img">
                    <img className="img-responsive" src="./img/blog2.jpg" alt="" />
                  </div>
                  <div className="blog-content">
                    <ul className="blog-meta">
                      <li><i className="fa fa-user"></i>John doe</li>
                      <li><i className="fa fa-clock-o"></i>18 Oct</li>
                      <li><i className="fa fa-comments"></i>57</li>
                    </ul>
                    <h3>Molestie at elementum eu facilisis sed odio</h3>
                    <p>Nec feugiat nisl pretium fusce id velit ut tortor pretium. Nisl purus in mollis nunc sed. Nunc non blandit massa enim nec.</p>
                    <a href="blog-single.html">Read more</a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="blog">
                  <div className="blog-img">
                    <img className="img-responsive" src="./img/blog3.jpg" alt="" />
                  </div>
                  <div className="blog-content">
                    <ul className="blog-meta">
                      <li><i className="fa fa-user"></i>John doe</li>
                      <li><i className="fa fa-clock-o"></i>18 Oct</li>
                      <li><i className="fa fa-comments"></i>57</li>
                    </ul>
                    <h3>Molestie at elementum eu facilisis sed odio</h3>
                    <p>Nec feugiat nisl pretium fusce id velit ut tortor pretium. Nisl purus in mollis nunc sed. Nunc non blandit massa enim nec.</p>
                    <a href="blog-single.html">Read more</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="contact" className="section md-padding">
          <div className="container">
            <div className="row">
              <div className="section-header text-center">
                <h2 className="title">Get in touch</h2>
              </div>
              <div className="col-sm-4">
                <div className="contact">
                  <i className="fa fa-phone"></i>
                  <h3>Phone</h3>
                  <p>512-421-3940</p>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="contact">
                  <i className="fa fa-envelope"></i>
                  <h3>Email</h3>
                  <p><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="6b0e060a02072b181e1b1b04191f45080406">[email&#160;protected]</a></p>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="contact">
                  <i className="fa fa-map-marker"></i>
                  <h3>Address</h3>
                  <p>1739 Bubby Drive</p>
                </div>
              </div>
              <div className="col-md-8 col-md-offset-2">
                <form className="contact-form">
                  <input type="text" className="input" placeholder="Name" />
                  <input type="email" className="input" placeholder="Email" />
                  <input type="text" className="input" placeholder="Subject" />
                  <textarea className="input" placeholder="Message"></textarea>
                  <button className="main-btn">Send message</button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <FooterComponent></FooterComponent>
      </div>
    );
  }
}

export default App;
