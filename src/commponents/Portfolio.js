import React from 'react'

export default function Portfolio() {
  return (
    <section id="portfolio-section" class="page bg-style1">
            	<div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="portfolio">
                                <div class="page-header-wrapper">
                                    <div class="container">
                                        <div class="page-header text-center wow fadeInDown" data-wow-delay="0.4s">
                                            <h2>Our Works</h2>
                                            <div class="devider"></div>
                                            <p class="subtitle">What we are proud of</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="portfoloi_content_area" >
                                    <div class="portfolio_menu" id="filters">
                                        <ul>
                                            <li class="active_prot_menu"><a href="#porfolio_menu" data-filter="*">all</a></li>
                                            <li><a href="#porfolio_menu" data-filter=".websites">websites</a></li>
                                            <li><a href="#porfolio_menu" data-filter=".webDesign" >web design</a></li>
                                            <li><a href="#porfolio_menu" data-filter=".appsDevelopment">apps development</a></li>
                                            <li><a href="#porfolio_menu" data-filter=".GraphicDesign">graphic design</a></li>
                                            <li><a href="#porfolio_menu" data-filter=".responsive">responsive</a></li>
                                        </ul>
                                    </div>
                                    <div class="portfolio_content">
                                        <div class="row"  id="portfolio">
                                            <div class="col-xs-12 col-sm-4 appsDevelopment">
                                                <div class="portfolio_single_content">
                                                    <img src="img/portfolio/p1.jpg" alt="title"/>
                                                    <div>
                                                        <a href="#">Skull Awesome</a>
                                                        <span>Subtitle</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-xs-12 col-sm-4 GraphicDesign">
                                                <div class="portfolio_single_content">
                                                    <img src="img/portfolio/p2.jpg" alt="title"/>
                                                    <div>
                                                        <a href="#">Photo Frame</a>
                                                        <span>Subtitle</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-xs-12 col-sm-4 responsive">
                                                <div class="portfolio_single_content">
                                                    <img src="img/portfolio/p3.jpg" alt="title"/>
                                                    <div>
                                                        <a href="#">Hand Shots</a>
                                                        <span>Subtitle</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-xs-12 col-sm-4 webDesign websites">
                                                <div class="portfolio_single_content">
                                                    <img src="img/portfolio/p4.jpg" alt="title"/>
                                                    <div>
                                                        <a href="#">Night Abstract</a>
                                                        <span>Subtitle</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-xs-12 col-sm-4 appsDevelopment websites">
                                                <div class="portfolio_single_content">
                                                    <img src="img//portfolio/p5.jpg" alt="title"/>
                                                    <div>
                                                        <a href="#">Joy of Independence</a>
                                                        <span>Subtitle</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-xs-12 col-sm-4 GraphicDesign">
                                                <div class="portfolio_single_content">
                                                    <img src="img/portfolio/p6.jpg" alt="title"/>
                                                    <div>
                                                        <a href="#">Night Crawlers</a>
                                                        <span>Subtitle</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-xs-12 col-sm-4 responsive">
                                                <div class="portfolio_single_content">
                                                    <img src="img/portfolio/p7.jpg" alt="title"/>
                                                    <div>
                                                        <a href="#">Last Motel</a>
                                                        <span>Subtitle</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-xs-12 col-sm-4 GraphicDesign">
                                                <div class="portfolio_single_content">
                                                    <img src="img/portfolio/p8.jpg" alt="title"/>
                                                    <div>
                                                        <a href="#">Dirk Road</a>
                                                        <span>Subtitle</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-xs-12 col-sm-4 websites">
                                                <div class="portfolio_single_content">
                                                    <img src="img/portfolio/p9.jpg" alt="title"/>
                                                    <div>
                                                        <a href="#">Old is Gold</a>
                                                        <span>Subtitle</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            
                            </div>
                        </div>
                    </div>
                </div>
            </section>
  )
}
