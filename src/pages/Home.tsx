import React, { Component } from 'react';
import "./Home.css"
import styled from "styled-components";
const Button = styled.button`
    padding: 13px 22px;
    border-style: solid;
    border-width: 2px;
    border-color: #0c1537;
    border-radius: 22.5px;
    background-color: white;
    font-size: 14px;
    color : #111c3d;
    font-weight : 700;
    text-align : center;
    display : inline-block;
    `;


class Home extends Component {
    variant = { variant: "btn btn-success" }
    alignRight = { right: "right" }
    alignLeft = { left: "left" }

    render() {

        return (
            <div className="row ">
                <div className="medium-12 columns">



                    <header className="navbar-fixed-top">
                        <nav>
                            <ul>
                                <li><a href="#about">Overview</a></li>
                                <li><a href="#experience">Roadmap</a></li>
                                <li><a href="#projects">Specs</a></li>
                                <li><a href="#contact">Join Us</a></li>
                                <li><a href="#faq">FAQ</a></li>

                            </ul>

                            <ul className="nav navbar-nav navbar-right">

                                <p>
                                    <Button style={{ position: 'relative', left: '-50px', top: '-5px' }} {...this.variant} onClick={() => window.location.href = "/Minting"}>MINT RHINO</Button>
                                </p>
                            </ul>

                            <ul className="nav navbar-nav navbar-left">

                                <a href="/" style={{ position: 'relative', left: '50px', top: '0px' }}><img alt="" src="img/logo.png" height="45" width="80" /></a>
                            </ul>
                        </nav>
                    </header>

                    <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
                        <img src="img/logo.png" onClick={()=>window.location.href="/"} width="60" height="50" alt="" className="rhino-mobile" />
                        <button className="menu-btn" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                            <img src="img/menu.svg" width="40" height="30" alt="" className="mx-3" />
                        </button>

                        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                                <li className="nav-item active">
                                    <a className="nav-link" href="#about">Overview <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#experience">Roadmap</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#projects">Specs</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#contact">Join Us</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#faq">FAQ</a>
                                </li>
                            </ul>
                            <br />
                            <ul className="nav-item">
                                <p>
                                    <Button {...this.variant} onClick={() => window.location.href = "/Minting"}>MINT RHINO</Button>
                                </p>
                            </ul>

                        </div>
                    </nav>



                    <div className="section" id="home" data-stellar-background-ratio="0.5">
                        <div className="container">
                            <div className="disply-table">
                                <div className="table-cell" data-aos="fade-up" data-aos-delay="0">
                                    <h4>The Universum</h4>
                                    <h1>Project<br /> Rhino</h1> </div>
                            </div>
                        </div>
                    </div>



                    <div className="section" id="about">
                        <div className="container">
                            <div className="col-md-6" data-aos="fade-up">
                                <h4>01</h4>
                                <h1 className="size-50"> Overview</h1>
                                <div className="h-50"></div>
                                <p>Project Rhino is a collection of 10,000 unique abstract Rhino NFTs on the Solana Blockchain which gives back to charity and has a lottery for holders. The Rhinos are randomly generate from over () assets and comes with exciting utilities.</p>
                                <p>This the start of something big with plans of supporting causes, creating a magazine and a marketplace which focuses on photography and art in the topics of the natural world, culture, science and legends.</p>

                                <div className="h-50"></div>
                            </div>
                            <div className="col-md-6 about-img-div">

                                <img src="img/background collage.png" width="500" className="img-responsive" alt="" {...this.alignRight} data-aos="fade-right" data-aos-delay="0" />
                            </div>
                        </div>
                    </div>



                    <div className="section" id="experience">
                        <div className="container">
                            <div className="col-md-12">
                                <h4>02</h4>
                                <h1 className="size-50">Roadmap <br /> 1.0</h1>
                                <div className="h-50"></div>
                            </div>
                            <div className="col-md-12">
                                <ul className="timeline">
                                    <li className="timeline-event" data-aos="fade-up">
                                        <label className="timeline-event-icon"></label>
                                        <div className="timeline-event-copy">
                                            <p className="timeline-event-thumbnail">1</p>
                                            <h3>Project Shark NFT Sale</h3>

                                            <p><strong>Pre-Sale</strong>
                                                <br />Pre-Sale of 500 NFTs for early community members and social media competition winners.</p>
                                            <p><strong>Public Sale</strong>
                                                <br />Launch of the rest of the rhinos to the amazing community.</p>
                                        </div>
                                    </li>
                                    <li className="timeline-event" data-aos="fade-up" data-aos-delay=".2">
                                        <label className="timeline-event-icon"></label>
                                        <div className="timeline-event-copy">
                                            <p className="timeline-event-thumbnail">2</p>
                                            <h3>Charity</h3>
                                            <p>Proactively supporting and protecting the rhinos is important to us at Project Rhino. Therefore, one of our first actions will be to donate to a rhino chairty which will be decided on by the community.</p>
                                        </div>
                                    </li>
                                    <li className="timeline-event" data-aos="fade-up" data-aos-delay=".4">
                                        <label className="timeline-event-icon"></label>
                                        <div className="timeline-event-copy">
                                            <p className="timeline-event-thumbnail">3</p>
                                            <h3>Lottery</h3>
                                            <p>Project Rhino holders will be automatically included in a lottery following our launch, with a total of $15000 up for grabs and rare rhinos.</p>

                                        </div>
                                    </li>
                                    <li className="timeline-event" data-aos="fade-up" data-aos-delay=".2">
                                        <label className="timeline-event-icon"></label>
                                        <div className="timeline-event-copy">
                                            <p className="timeline-event-thumbnail">4</p>
                                            <h3>Gallery</h3>
                                            <p>In our gallery, you will be able to see every rhino, also will rank in order of rarity.</p>
                                        </div>
                                    </li>
                                    <li className="timeline-event" data-aos="fade-up" data-aos-delay=".2">
                                        <label className="timeline-event-icon"></label>
                                        <div className="timeline-event-copy">
                                            <p className="timeline-event-thumbnail">5</p>
                                            <h3>Roadmap 2.0</h3>
                                            <p><strong>Marketplace</strong>
                                                <br />With help from our community we will create a marketplace which will be the home to the most exciting and upcoming photographers and artists. What makes this marketplace unique will be that it will focus on the natural world, culture, science and legends. As well as this, we will actively search for the brightest talents.</p>
                                            <p><strong>Magazine</strong>
                                                <br />We will create a monthly magazine with focus on the topics of natural world, culture, science and legends. What makes this magazine special is that the images will be photographs and art from our marketplace, which will bring the talent into the limelight. The rhino holders will vote on the images and stories that will be included in each magazine.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>



                    <div className="section" id="projects">
                        <div className="container">
                            <div className="col-md-12">
                                <h4>03</h4>
                                <h1 className="size-50"> Specs</h1>
                            </div>

                            <div className="main-container portfolio-inner clearfix">

                                <div className="portfolio-div">
                                    <div className="portfolio">

                                        <div className="categories-grid wow fadeInLeft">
                                            <nav className="categories">
                                                <ul className="portfolio_filter">


                                                    <li><a href="/" className="active" data-filter=".logo">Body</a></li>
                                                    <li><a href="/" data-filter=".photography">Background</a></li>
                                                    <li><a href="/" data-filter=".graphics">First Horn</a></li>
                                                    <li><a href="/" data-filter=".ads">Second Horn</a></li>
                                                    <li><a href="/" data-filter=".fashion">Head Accessory</a></li>
                                                    <li><a href="/" data-filter=".wing">Wings</a></li>
                                                    <li><a href="/" data-filter=".birds">Birds</a></li>
                                                </ul>
                                            </nav>
                                        </div>



                                        <div className="no-padding portfolio_container clearfix" data-aos="fade-up">

                                            <div className="col-md-4 col-sm-6  logo">
                                                <a id="demo01" href="/#animatedModal" className="portfolio_item"> <img src="img/portfolio/Diamond.png" alt="" className="img-responsive" />
                                                    <div className="portfolio_item_hover">
                                                        <div className="portfolio-border clearfix">
                                                            <div className="item_info"> <span>Diamond</span> <em>2%</em> </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>


                                            <div className="col-md-4 col-sm-6  logo">
                                                <a id="demo01" href="/#animatedModal" className="portfolio_item"> <img src="img/portfolio/African Art.png" alt="" className="img-responsive" />
                                                    <div className="portfolio_item_hover">
                                                        <div className="portfolio-border clearfix">
                                                            <div className="item_info"> <span>African Art</span> <em>2%</em> </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>

                                            <div className="col-md-4 col-sm-6  logo">
                                                <a id="demo01" href="/#animatedModal" className="portfolio_item"> <img src="img/portfolio/Black.png" alt="" className="img-responsive" />
                                                    <div className="portfolio_item_hover">
                                                        <div className="portfolio-border clearfix">
                                                            <div className="item_info"> <span>Black</span> <em>2%</em> </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>

                                            <div className="col-md-4 col-sm-6  logo">
                                                <a id="demo01" href="/#animatedModal" className="portfolio_item"> <img src="img/portfolio/Camouflage.png" alt="" className="img-responsive" />
                                                    <div className="portfolio_item_hover">
                                                        <div className="portfolio-border clearfix">
                                                            <div className="item_info"> <span>Camo</span> <em>2%</em> </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>

                                            <div className="col-md-4 col-sm-6  logo">
                                                <a id="demo01" href="/#animatedModal" className="portfolio_item"> <img src="img/portfolio/Fire.png" alt="" className="img-responsive" />
                                                    <div className="portfolio_item_hover">
                                                        <div className="portfolio-border clearfix">
                                                            <div className="item_info"> <span>Fire</span> <em>2%</em> </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>

                                            <div className="col-md-4 col-sm-6  logo">
                                                <a id="demo01" href="/#animatedModal" className="portfolio_item"> <img src="img/portfolio/Gold.png" alt="" className="img-responsive" />
                                                    <div className="portfolio_item_hover">
                                                        <div className="portfolio-border clearfix">
                                                            <div className="item_info"> <span>Gold</span> <em>2%</em> </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>

                                            <div className="col-md-4 col-sm-6  logo">
                                                <a id="demo01" href="/#animatedModal" className="portfolio_item"> <img src="img/portfolio/Green.png" alt="" className="img-responsive" />
                                                    <div className="portfolio_item_hover">
                                                        <div className="portfolio-border clearfix">
                                                            <div className="item_info"> <span>Green</span> <em>2%</em> </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>

                                            <div className="col-md-4 col-sm-6  logo">
                                                <a id="demo01" href="/#animatedModal" className="portfolio_item"> <img src="img/portfolio/Multicoloured.png" alt="" className="img-responsive" />
                                                    <div className="portfolio_item_hover">
                                                        <div className="portfolio-border clearfix">
                                                            <div className="item_info"> <span>Multicoloured</span> <em>2%</em> </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>

                                            <div className="col-md-4 col-sm-6  logo">
                                                <a id="demo01" href="/#animatedModal" className="portfolio_item"> <img src="img/portfolio/Normal.png" alt="" className="img-responsive" />
                                                    <div className="portfolio_item_hover">
                                                        <div className="portfolio-border clearfix">
                                                            <div className="item_info"> <span>Normal</span> <em>2%</em> </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>

                                            <div className="col-md-4 col-sm-6  logo">
                                                <a id="demo01" href="/#animatedModal" className="portfolio_item"> <img src="img/portfolio/Purple.png" alt="" className="img-responsive" />
                                                    <div className="portfolio_item_hover">
                                                        <div className="portfolio-border clearfix">
                                                            <div className="item_info"> <span>Purple</span> <em>2%</em> </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>

                                            <div className="col-md-4 col-sm-6  logo">
                                                <a id="demo01" href="/#animatedModal" className="portfolio_item"> <img src="img/portfolio/Red.png" alt="" className="img-responsive" />
                                                    <div className="portfolio_item_hover">
                                                        <div className="portfolio-border clearfix">
                                                            <div className="item_info"> <span>Red</span> <em>2%</em> </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>

                                            <div className="col-md-4 col-sm-6  logo">
                                                <a id="demo01" href="/#animatedModal" className="portfolio_item"> <img src="img/portfolio/Silver.png" alt="" className="img-responsive" />
                                                    <div className="portfolio_item_hover">
                                                        <div className="portfolio-border clearfix">
                                                            <div className="item_info"> <span>Silver</span> <em>2%</em> </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>

                                            <div className="col-md-4 col-sm-6  logo">
                                                <a id="demo01" href="/#animatedModal" className="portfolio_item"> <img src="img/portfolio/Solana.png" alt="" className="img-responsive" />
                                                    <div className="portfolio_item_hover">
                                                        <div className="portfolio-border clearfix">
                                                            <div className="item_info"> <span>Solana</span> <em>2%</em> </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>

                                            <div className="col-md-4 col-sm-6  logo">
                                                <a id="demo01" href="/#animatedModal" className="portfolio_item"> <img src="img/portfolio/Yellow.png" alt="" className="img-responsive" />
                                                    <div className="portfolio_item_hover">
                                                        <div className="portfolio-border clearfix">
                                                            <div className="item_info"> <span>Yellow</span> <em>2%</em> </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>





                                            <div className="col-md-4 col-sm-6 photography">
                                                <a id="demo03" href="#animatedModal" className="portfolio_item"> <img src="img/portfolio/Background/Blue.png" alt="" className="img-responsive" />
                                                    <div className="portfolio_item_hover">
                                                        <div className="portfolio-border clearfix">
                                                            <div className="item_info"> <span>Blue</span> <em>10%</em> </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>

                                            <div className="col-md-4 col-sm-6 photography">
                                                <a id="demo06" href="#animatedModal" className="portfolio_item"> <img src="img/portfolio/Background/Black.png" alt="" className="img-responsive" />
                                                    <div className="portfolio_item_hover">
                                                        <div className="portfolio-border clearfix">
                                                            <div className="item_info"> <span>Black</span> <em>15%</em> </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>

                                            <div className="col-md-4 col-sm-6 photography">
                                                <a id="demo06" href="#animatedModal" className="portfolio_item"> <img src="img/portfolio/Background/Brick.png" alt="" className="img-responsive" />
                                                    <div className="portfolio_item_hover">
                                                        <div className="portfolio-border clearfix">
                                                            <div className="item_info"> <span>Brick</span> <em>15%</em> </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>

                                            <div className="col-md-4 col-sm-6 photography">
                                                <a id="demo06" href="#animatedModal" className="portfolio_item"> <img src="img/portfolio/Background/Clouds.png" alt="" className="img-responsive" />
                                                    <div className="portfolio_item_hover">
                                                        <div className="portfolio-border clearfix">
                                                            <div className="item_info"> <span>Clouds</span> <em>15%</em> </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>

                                            <div className="col-md-4 col-sm-6 photography">
                                                <a id="demo06" href="#animatedModal" className="portfolio_item"> <img src="img/portfolio/Background/DryLand.png" alt="" className="img-responsive" />
                                                    <div className="portfolio_item_hover">
                                                        <div className="portfolio-border clearfix">
                                                            <div className="item_info"> <span>Dry Land</span> <em>15%</em> </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>

                                            <div className="col-md-4 col-sm-6 photography">
                                                <a id="demo06" href="#animatedModal" className="portfolio_item"> <img src="img/portfolio/Background/Green.png" alt="" className="img-responsive" />
                                                    <div className="portfolio_item_hover">
                                                        <div className="portfolio-border clearfix">
                                                            <div className="item_info"> <span>Green</span> <em>15%</em> </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>

                                            <div className="col-md-4 col-sm-6 photography">
                                                <a id="demo06" href="#animatedModal" className="portfolio_item"> <img src="img/portfolio/Background/Rainbow.png" alt="" className="img-responsive" />
                                                    <div className="portfolio_item_hover">
                                                        <div className="portfolio-border clearfix">
                                                            <div className="item_info"> <span>Rainbow</span> <em>15%</em> </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>

                                            <div className="col-md-4 col-sm-6 photography">
                                                <a id="demo06" href="#animatedModal" className="portfolio_item"> <img src="img/portfolio/Background/Red.png" alt="" className="img-responsive" />
                                                    <div className="portfolio_item_hover">
                                                        <div className="portfolio-border clearfix">
                                                            <div className="item_info"> <span>Red</span> <em>15%</em> </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>

                                            <div className="col-md-4 col-sm-6 photography">
                                                <a id="demo06" href="#animatedModal" className="portfolio_item"> <img src="img/portfolio/Background/Solana.png" alt="" className="img-responsive" />
                                                    <div className="portfolio_item_hover">
                                                        <div className="portfolio-border clearfix">
                                                            <div className="item_info"> <span>Solana</span> <em>15%</em> </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>

                                            <div className="col-md-4 col-sm-6 photography">
                                                <a id="demo06" href="#animatedModal" className="portfolio_item"> <img src="img/portfolio/Background/Space.png" alt="" className="img-responsive" />
                                                    <div className="portfolio_item_hover">
                                                        <div className="portfolio-border clearfix">
                                                            <div className="item_info"> <span>Space</span> <em>15%</em> </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>

                                            <div className="col-md-4 col-sm-6 photography">
                                                <a id="demo06" href="#animatedModal" className="portfolio_item"> <img src="img/portfolio/Background/Sunset.png" alt="" className="img-responsive" />
                                                    <div className="portfolio_item_hover">
                                                        <div className="portfolio-border clearfix">
                                                            <div className="item_info"> <span>Sunset</span> <em>15%</em> </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>

                                            <div className="col-md-4 col-sm-6 photography">
                                                <a id="demo06" href="#animatedModal" className="portfolio_item"> <img src="img/portfolio/Background/Waterhole.png" alt="" className="img-responsive" />
                                                    <div className="portfolio_item_hover">
                                                        <div className="portfolio-border clearfix">
                                                            <div className="item_info"> <span>Waterhole</span> <em>15%</em> </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>

                                            <div className="col-md-4 col-sm-6 photography">
                                                <a id="demo06" href="#animatedModal" className="portfolio_item"> <img src="img/portfolio/Background/White.png" alt="" className="img-responsive" />
                                                    <div className="portfolio_item_hover">
                                                        <div className="portfolio-border clearfix">
                                                            <div className="item_info"> <span>White</span> <em>15%</em> </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>

                                            <div className="col-md-4 col-sm-6 photography">
                                                <a id="demo06" href="#animatedModal" className="portfolio_item"> <img src="img/portfolio/Background/Yellow.png" alt="" className="img-responsive" />
                                                    <div className="portfolio_item_hover">
                                                        <div className="portfolio-border clearfix">
                                                            <div className="item_info"> <span>Yellow</span> <em>15%</em> </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>






                                            <div className="col-md-4 col-sm-6 graphics">
                                                <a id="demo02" href="#animatedModal" className="portfolio_item"> <img src="img/portfolio/First Horn/Ivory.png" alt="" className="img-responsive" />
                                                    <div className="portfolio_item_hover">
                                                        <div className="portfolio-border clearfix">
                                                            <div className="item_info"> <span>Ivory</span> <em>Ads / Graphics</em> </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>

                                            <div className="col-md-4 col-sm-6 graphics">
                                                <a id="demo02" href="#animatedModal" className="portfolio_item"> <img src="img/portfolio/First Horn/Copper.png" alt="" className="img-responsive" />
                                                    <div className="portfolio_item_hover">
                                                        <div className="portfolio-border clearfix">
                                                            <div className="item_info"> <span>Copper</span> <em>Ads / Graphics</em> </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>

                                            <div className="col-md-4 col-sm-6 graphics">
                                                <a id="demo02" href="#animatedModal" className="portfolio_item"> <img src="img/portfolio/First Horn/Ammolite.png" alt="" className="img-responsive" />
                                                    <div className="portfolio_item_hover">
                                                        <div className="portfolio-border clearfix">
                                                            <div className="item_info"> <span>Ammolite</span> <em>Ads / Graphics</em> </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>

                                            <div className="col-md-4 col-sm-6 graphics">
                                                <a id="demo02" href="#animatedModal" className="portfolio_item"> <img src="img/portfolio/First Horn/Crystal.png" alt="" className="img-responsive" />
                                                    <div className="portfolio_item_hover">
                                                        <div className="portfolio-border clearfix">
                                                            <div className="item_info"> <span>Crystal</span> <em>Ads / Graphics</em> </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>

                                            <div className="col-md-4 col-sm-6 graphics">
                                                <a id="demo02" href="#animatedModal" className="portfolio_item"> <img src="img/portfolio/First Horn/Diamond.png" alt="" className="img-responsive" />
                                                    <div className="portfolio_item_hover">
                                                        <div className="portfolio-border clearfix">
                                                            <div className="item_info"> <span>Diamond</span> <em>Ads / Graphics</em> </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>

                                            <div className="col-md-4 col-sm-6 graphics">
                                                <a id="demo02" href="#animatedModal" className="portfolio_item"> <img src="img/portfolio/First Horn/Emerald.png" alt="" className="img-responsive" />
                                                    <div className="portfolio_item_hover">
                                                        <div className="portfolio-border clearfix">
                                                            <div className="item_info"> <span>Emerald</span> <em>Ads / Graphics</em> </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>

                                            <div className="col-md-4 col-sm-6 graphics">
                                                <a id="demo02" href="#animatedModal" className="portfolio_item"> <img src="img/portfolio/First Horn/Gold.png" alt="" className="img-responsive" />
                                                    <div className="portfolio_item_hover">
                                                        <div className="portfolio-border clearfix">
                                                            <div className="item_info"> <span>Gold</span> <em>Ads / Graphics</em> </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>

                                            <div className="col-md-4 col-sm-6 graphics">
                                                <a id="demo02" href="#animatedModal" className="portfolio_item"> <img src="img/portfolio/First Horn/Pink Diamond.png" alt="" className="img-responsive" />
                                                    <div className="portfolio_item_hover">
                                                        <div className="portfolio-border clearfix">
                                                            <div className="item_info"> <span>Pink Diamond</span> <em>Ads / Graphics</em> </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>

                                            <div className="col-md-4 col-sm-6 graphics">
                                                <a id="demo02" href="#animatedModal" className="portfolio_item"> <img src="img/portfolio/First Horn/Ruby.png" alt="" className="img-responsive" />
                                                    <div className="portfolio_item_hover">
                                                        <div className="portfolio-border clearfix">
                                                            <div className="item_info"> <span>Ruby</span> <em>Ads / Graphics</em> </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>

                                            <div className="col-md-4 col-sm-6 graphics">
                                                <a id="demo02" href="#animatedModal" className="portfolio_item"> <img src="img/portfolio/First Horn/Sapphire.png" alt="" className="img-responsive" />
                                                    <div className="portfolio_item_hover">
                                                        <div className="portfolio-border clearfix">
                                                            <div className="item_info"> <span>Sapphire</span> <em>Ads / Graphics</em> </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>

                                            <div className="col-md-4 col-sm-6 graphics">
                                                <a id="demo02" href="#animatedModal" className="portfolio_item"> <img src="img/portfolio/First Horn/Silver.png" alt="" className="img-responsive" />
                                                    <div className="portfolio_item_hover">
                                                        <div className="portfolio-border clearfix">
                                                            <div className="item_info"> <span>Silver</span> <em>Ads / Graphics</em> </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>

                                            <div className="col-md-4 col-sm-6 graphics">
                                                <a id="demo02" href="#animatedModal" className="portfolio_item"> <img src="img/portfolio/First Horn/Solana.png" alt="" className="img-responsive" />
                                                    <div className="portfolio_item_hover">
                                                        <div className="portfolio-border clearfix">
                                                            <div className="item_info"> <span>Solana</span> <em>Ads / Graphics</em> </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>







                                            <div className="col-md-4 col-sm-6 ads">
                                                <a id="demo04" href="#animatedModal" className="portfolio_item"> <img src="img/portfolio/Second Horn/Ammolite.png" alt="" className="img-responsive" />
                                                    <div className="portfolio_item_hover">
                                                        <div className="portfolio-border clearfix">
                                                            <div className="item_info"> <span>Ammolite</span> <em>Fashion / Ads</em> </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>

                                            <div className="col-md-4 col-sm-6 ads">
                                                <a id="demo04" href="#animatedModal" className="portfolio_item"> <img src="img/portfolio/Second Horn/Copper.png" alt="" className="img-responsive" />
                                                    <div className="portfolio_item_hover">
                                                        <div className="portfolio-border clearfix">
                                                            <div className="item_info"> <span>Copper</span> <em>Fashion / Ads</em> </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>

                                            <div className="col-md-4 col-sm-6 ads">
                                                <a id="demo04" href="#animatedModal" className="portfolio_item"> <img src="img/portfolio/Second Horn/Crystal.png" alt="" className="img-responsive" />
                                                    <div className="portfolio_item_hover">
                                                        <div className="portfolio-border clearfix">
                                                            <div className="item_info"> <span>Crystal</span> <em>Fashion / Ads</em> </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>

                                            <div className="col-md-4 col-sm-6 ads">
                                                <a id="demo04" href="#animatedModal" className="portfolio_item"> <img src="img/portfolio/Second Horn/Diamond.png" alt="" className="img-responsive" />
                                                    <div className="portfolio_item_hover">
                                                        <div className="portfolio-border clearfix">
                                                            <div className="item_info"> <span>Diamond</span> <em>Fashion / Ads</em> </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>

                                            <div className="col-md-4 col-sm-6 ads">
                                                <a id="demo04" href="#animatedModal" className="portfolio_item"> <img src="img/portfolio/Second Horn/Emerald.png" alt="" className="img-responsive" />
                                                    <div className="portfolio_item_hover">
                                                        <div className="portfolio-border clearfix">
                                                            <div className="item_info"> <span>Emerald</span> <em>Fashion / Ads</em> </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>

                                            <div className="col-md-4 col-sm-6 ads">
                                                <a id="demo04" href="#animatedModal" className="portfolio_item"> <img src="img/portfolio/Second Horn/Gold.png" alt="" className="img-responsive" />
                                                    <div className="portfolio_item_hover">
                                                        <div className="portfolio-border clearfix">
                                                            <div className="item_info"> <span>Gold</span> <em>Fashion / Ads</em> </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>

                                            <div className="col-md-4 col-sm-6 ads">
                                                <a id="demo04" href="#animatedModal" className="portfolio_item"> <img src="img/portfolio/Second Horn/Ivory.png" alt="" className="img-responsive" />
                                                    <div className="portfolio_item_hover">
                                                        <div className="portfolio-border clearfix">
                                                            <div className="item_info"> <span>Ivory</span> <em>Fashion / Ads</em> </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>

                                            <div className="col-md-4 col-sm-6 ads">
                                                <a id="demo04" href="#animatedModal" className="portfolio_item"> <img src="img/portfolio/Second Horn/Pink Diamond.png" alt="" className="img-responsive" />
                                                    <div className="portfolio_item_hover">
                                                        <div className="portfolio-border clearfix">
                                                            <div className="item_info"> <span>Pink Diamond</span> <em>Fashion / Ads</em> </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>

                                            <div className="col-md-4 col-sm-6 ads">
                                                <a id="demo04" href="#animatedModal" className="portfolio_item"> <img src="img/portfolio/Second Horn/Ruby.png" alt="" className="img-responsive" />
                                                    <div className="portfolio_item_hover">
                                                        <div className="portfolio-border clearfix">
                                                            <div className="item_info"> <span>Ruby</span> <em>Fashion / Ads</em> </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>

                                            <div className="col-md-4 col-sm-6 ads">
                                                <a id="demo04" href="#animatedModal" className="portfolio_item"> <img src="img/portfolio/Second Horn/Sapphire.png" alt="" className="img-responsive" />
                                                    <div className="portfolio_item_hover">
                                                        <div className="portfolio-border clearfix">
                                                            <div className="item_info"> <span>Sapphire</span> <em>Fashion / Ads</em> </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>

                                            <div className="col-md-4 col-sm-6 ads">
                                                <a id="demo04" href="#animatedModal" className="portfolio_item"> <img src="img/portfolio/Second Horn/Silver.png" alt="" className="img-responsive" />
                                                    <div className="portfolio_item_hover">
                                                        <div className="portfolio-border clearfix">
                                                            <div className="item_info"> <span>Silver</span> <em>Fashion / Ads</em> </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>

                                            <div className="col-md-4 col-sm-6 ads">
                                                <a id="demo04" href="#animatedModal" className="portfolio_item"> <img src="img/portfolio/Second Horn/Solana.png" alt="" className="img-responsive" />
                                                    <div className="portfolio_item_hover">
                                                        <div className="portfolio-border clearfix">
                                                            <div className="item_info"> <span>Solana</span> <em>Fashion / Ads</em> </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>



                                            <div className="col-md-4 col-sm-6  fashion">
                                                <a id="demo01" href="/#animatedModal" className="portfolio_item"> <img src="img/portfolio/Head Accessory/Gold Crown.png" alt="" className="img-responsive" />
                                                    <div className="portfolio_item_hover">
                                                        <div className="portfolio-border clearfix">
                                                            <div className="item_info"> <span>Gold Crown</span> <em>2%</em> </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>

                                            <div className="col-md-4 col-sm-6  fashion">
                                                <a id="demo01" href="/#animatedModal" className="portfolio_item"> <img src="img/portfolio/Head Accessory/Gold Halo.png" alt="" className="img-responsive" />
                                                    <div className="portfolio_item_hover">
                                                        <div className="portfolio-border clearfix">
                                                            <div className="item_info"> <span>Gold Halo</span> <em>2%</em> </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>

                                            <div className="col-md-4 col-sm-6  fashion">
                                                <a id="demo01" href="/#animatedModal" className="portfolio_item"> <img src="img/portfolio/Head Accessory/Rose Gold Crown.png" alt="" className="img-responsive" />
                                                    <div className="portfolio_item_hover">
                                                        <div className="portfolio-border clearfix">
                                                            <div className="item_info"> <span>Rose Gold Crown</span> <em>2%</em> </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>

                                            <div className="col-md-4 col-sm-6  fashion">
                                                <a id="demo01" href="/#animatedModal" className="portfolio_item"> <img src="img/portfolio/Head Accessory/Rose Gold Halo.png" alt="" className="img-responsive" />
                                                    <div className="portfolio_item_hover">
                                                        <div className="portfolio-border clearfix">
                                                            <div className="item_info"> <span>Rose Gold Halo</span> <em>2%</em> </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>

                                            <div className="col-md-4 col-sm-6  fashion">
                                                <a id="demo01" href="/#animatedModal" className="portfolio_item"> <img src="img/portfolio/Head Accessory/Silver Crown.png" alt="" className="img-responsive" />
                                                    <div className="portfolio_item_hover">
                                                        <div className="portfolio-border clearfix">
                                                            <div className="item_info"> <span>Silver Crown</span> <em>2%</em> </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>

                                            <div className="col-md-4 col-sm-6  fashion">
                                                <a id="demo01" href="/#animatedModal" className="portfolio_item"> <img src="img/portfolio/Head Accessory/Silver Halo.png" alt="" className="img-responsive" />
                                                    <div className="portfolio_item_hover">
                                                        <div className="portfolio-border clearfix">
                                                            <div className="item_info"> <span>Silver Halo</span> <em>2%</em> </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>

                                            <div className="col-md-4 col-sm-6  fashion">
                                                <a id="demo01" href="/#animatedModal" className="portfolio_item"> <img src="img/portfolio/Head Accessory/Solana Crown.png" alt="" className="img-responsive" />
                                                    <div className="portfolio_item_hover">
                                                        <div className="portfolio-border clearfix">
                                                            <div className="item_info"> <span>Solana Crown</span> <em>2%</em> </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>

                                            <div className="col-md-4 col-sm-6  fashion">
                                                <a id="demo01" href="/#animatedModal" className="portfolio_item"> <img src="img/portfolio/Head Accessory/Solana Halo.png" alt="" className="img-responsive" />
                                                    <div className="portfolio_item_hover">
                                                        <div className="portfolio-border clearfix">
                                                            <div className="item_info"> <span>Solana Halo</span> <em>2%</em> </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>

                                            <div className="col-md-4 col-sm-6  wing">
                                                <a id="demo01" href="/#animatedModal" className="portfolio_item"> <img src="img/portfolio/Wing/Black Wing.png" alt="" className="img-responsive" />
                                                    <div className="portfolio_item_hover">
                                                        <div className="portfolio-border clearfix">
                                                            <div className="item_info"> <span>Black Wing</span> <em>2%</em> </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>

                                            <div className="col-md-4 col-sm-6  wing">
                                                <a id="demo01" href="/#animatedModal" className="portfolio_item"> <img src="img/portfolio/Wing/Gold Wing.png" alt="" className="img-responsive" />
                                                    <div className="portfolio_item_hover">
                                                        <div className="portfolio-border clearfix">
                                                            <div className="item_info"> <span>Gold Wing</span> <em>2%</em> </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>

                                            <div className="col-md-4 col-sm-6  wing">
                                                <a id="demo01" href="/#animatedModal" className="portfolio_item"> <img src="img/portfolio/Wing/Solana Wing.png" alt="" className="img-responsive" />
                                                    <div className="portfolio_item_hover">
                                                        <div className="portfolio-border clearfix">
                                                            <div className="item_info"> <span>Solana Wing</span> <em>2%</em> </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>

                                            <div className="col-md-4 col-sm-6  wing">
                                                <a id="demo01" href="/#animatedModal" className="portfolio_item"> <img src="img/portfolio/Wing/White Wing.png" alt="" className="img-responsive" />
                                                    <div className="portfolio_item_hover">
                                                        <div className="portfolio-border clearfix">
                                                            <div className="item_info"> <span>White Wing</span> <em>2%</em> </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>


                                            <div className="col-md-4 col-sm-6  birds">
                                                <a id="demo01" href="/#animatedModal" className="portfolio_item"> <img src="img/portfolio/Birds/Oxpecker.png" alt="" className="img-responsive" />
                                                    <div className="portfolio_item_hover">
                                                        <div className="portfolio-border clearfix">
                                                            <div className="item_info"> <span>Oxpecker</span> <em>2%</em> </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>

                                            <div className="col-md-4 col-sm-6  birds">
                                                <a id="demo01" href="/#animatedModal" className="portfolio_item"> <img src="img/portfolio/Birds/Blue Kingfisher.png" alt="" className="img-responsive" />
                                                    <div className="portfolio_item_hover">
                                                        <div className="portfolio-border clearfix">
                                                            <div className="item_info"> <span>Blue Kingfisher</span> <em>2%</em> </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>

                                            <div className="col-md-4 col-sm-6  birds">
                                                <a id="demo01" href="/#animatedModal" className="portfolio_item"> <img src="img/portfolio/Birds/Cape Parrot.png" alt="" className="img-responsive" />
                                                    <div className="portfolio_item_hover">
                                                        <div className="portfolio-border clearfix">
                                                            <div className="item_info"> <span>Cape Parrot</span> <em>2%</em> </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>

                                            <div className="col-md-4 col-sm-6  birds">
                                                <a id="demo01" href="/#animatedModal" className="portfolio_item"> <img src="img/portfolio/Birds/Dove.png" alt="" className="img-responsive" />
                                                    <div className="portfolio_item_hover">
                                                        <div className="portfolio-border clearfix">
                                                            <div className="item_info"> <span>Dove</span> <em>2%</em> </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>

                                            <div className="col-md-4 col-sm-6  birds">
                                                <a id="demo01" href="/#animatedModal" className="portfolio_item"> <img src="img/portfolio/Birds/Flamingo.png" alt="" className="img-responsive" />
                                                    <div className="portfolio_item_hover">
                                                        <div className="portfolio-border clearfix">
                                                            <div className="item_info"> <span>Flamingo</span> <em>2%</em> </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>

                                            <div className="col-md-4 col-sm-6  birds">
                                                <a id="demo01" href="/#animatedModal" className="portfolio_item"> <img src="img/portfolio/Birds/Hoopoes.png" alt="" className="img-responsive" />
                                                    <div className="portfolio_item_hover">
                                                        <div className="portfolio-border clearfix">
                                                            <div className="item_info"> <span>Hoopoes</span> <em>2%</em> </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>

                                            <div className="col-md-4 col-sm-6  birds">
                                                <a id="demo01" href="/#animatedModal" className="portfolio_item"> <img src="img/portfolio/Birds/Lilac-Breasted-Roller.png" alt="" className="img-responsive" />
                                                    <div className="portfolio_item_hover">
                                                        <div className="portfolio-border clearfix">
                                                            <div className="item_info"> <span>Lilac-Breasted-Roller</span> <em>2%</em> </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>

                                            <div className="col-md-4 col-sm-6  birds">
                                                <a id="demo01" href="/#animatedModal" className="portfolio_item"> <img src="img/portfolio/Birds/Ostrich.png" alt="" className="img-responsive" />
                                                    <div className="portfolio_item_hover">
                                                        <div className="portfolio-border clearfix">
                                                            <div className="item_info"> <span>Ostrich</span> <em>2%</em> </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>

                                            <div className="col-md-4 col-sm-6  birds">
                                                <a id="demo01" href="/#animatedModal" className="portfolio_item"> <img src="img/portfolio/Birds/African Fish Eagle.png" alt="" className="img-responsive" />
                                                    <div className="portfolio_item_hover">
                                                        <div className="portfolio-border clearfix">
                                                            <div className="item_info"> <span>African Fish Eagle</span> <em>2%</em> </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>












                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>
                    </div>




                    <div className="section" id="contact">
                        <div className="container">
                            <div className="col-md-6" data-aos="fade-up">
                                <h4>04</h4>
                                <h1 className="size-50"> Join Us</h1>
                                <div className="h-50"></div>
                                <h3 >Social Network</h3>
                                <ul className="social" >
                                    <li><a href="/#"><i className="ion-social-twitter"></i></a></li>
                                    <li><a href="/#"><i className="ion-social-instagram"></i></a></li>
                                    <li><a href="/#"><i className="fab fa-discord"></i></a></li>
                                </ul>


                                <div className="h-50"></div>
                            </div>
                            <div className="col-md-6 joinus-img-div">

                                <img src="img/Joinus.png" width="1500" className="img-responsive" alt="" {...this.alignLeft} data-aos="fade-right" data-aos-delay="0" />
                            </div>
                        </div>
                    </div>














                    <div id="faq" className="section">

                        <div id="btn-close-modal" className="close-animatedModal close-popup-modal"> <i className="ion-close-round"></i> </div>
                        <div className="clearfix"></div>
                        <div className="modal-content">
                            <div className="container">
                                <div className="portfolio-padding">
                                    <div className="col-md-12">
                                        <h2 >FAQ</h2>
                                        <div className="h-50"></div>
                                        <h3>What is the total supply of Project Rhino?</h3>
                                        <p>There will be 10,000 Rhinos</p>


                                        <h3>How can I mint a Rhino?</h3>
                                        <p>Phantom</p>


                                        <h3>When will the launch be?</h3>
                                        <p>TBD</p>


                                        <h3>What will the mint price be?</h3>
                                        <p>0.5 Sol for pre-sale and 1 Sol for public sale</p>


                                        <h3>Why on the Solana Blockchain?</h3>
                                        <p>The Solana Blockchain provides cheap gas fees, instant transactions and the most exciting ecosystem.</p>


                                        <h3>What are the benefits of owning a Rhino?</h3>
                                        <p>Not only will you have the chance of winning the lottery and supporting a charity, the Rhino owners will have special benefits when it comes to the future marketplace and magazine</p>


                                        <h3>What will the marketplace and  magazine be called?</h3>
                                        <p>The Universum</p>
                                        <br /> </div>
                                </div>
                            </div>
                        </div>
                    </div>





                </div>
            </div>
        );
    }
}
export default Home;