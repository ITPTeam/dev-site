import React from 'react'

export default function Prices() {
  return (
    <section id="prices-section" class="page">

                <div class="page-header-wrapper">
                    <div class="container">
                        <div class="page-header text-center wow fadeInDown" data-wow-delay="0.4s">
                            <h2>Prices</h2>
                            <div class="devider"></div>
                            <p class="subtitle">That how much</p>
                        </div>
                    </div>
                </div>
				<div class="extra-space-l"></div>
				<div class="prices">
					<div class="container">
						<div class="row">
							
							<div class="price-box col-sm-6 col-md-3 wow flipInY" data-wow-delay="0.3s">
								<div class="panel panel-default">
									<div class="panel-heading text-center">
										<i class="fa fa-plug fa-2x"></i>
										<h3>Basic</h3>
									</div>
									<div class="panel-body text-center">
										<p class="lead"><strong>$49</strong></p>
									</div>
									<ul class="list-group text-center">
										<li class="list-group-item">Personal Use</li>
										<li class="list-group-item">3 projects</li>
										<li class="list-group-item">1 GB Disk</li>
										<li class="list-group-item">Custom Domain</li>
										<li class="list-group-item">24/7 Support</li>
									</ul>
									<div class="panel-footer text-center">
										<a class="btn btn-default" href="#">Order Now!</a>
									</div>
								</div>										
							</div>

							<div class="price-box col-sm-6 col-md-3 wow flipInY" data-wow-delay="0.5s">
								<div class="panel panel-default">
									<div class="panel-heading text-center">
										<i class="fa fa-cog fa-2x"></i>
										<h3>Advanced</h3>
									</div>
									<div class="panel-body text-center">
										<p class="lead"><strong>$99</strong></p>
									</div>
									<ul class="list-group text-center">
										<li class="list-group-item">Personal Use</li>
										<li class="list-group-item">5 projects</li>
										<li class="list-group-item">5 GB Disk</li>
										<li class="list-group-item">Custom Domain</li>
										<li class="list-group-item">24/7 Support</li>
									</ul>
									<div class="panel-footer text-center">
										<a class="btn btn-default" href="#">Order Now!</a>
									</div>
								</div>										
							</div>
							
							<div class="price-box col-sm-6 price-box-featured col-md-3 wow flipInY" data-wow-delay="0.7s">
								<div class="panel panel-default">
									<div class="panel-heading text-center">
										<i class="fa fa-star fa-2x"></i>
										<h3>Professional</h3>
									</div>
									<div class="panel-body text-center">
										<p class="lead"><strong>$149</strong></p>
									</div>
									<ul class="list-group text-center">
										<li class="list-group-item">Personal Use</li>
										<li class="list-group-item">20 Projects</li>
										<li class="list-group-item">20 GB Disk</li>
										<li class="list-group-item">Custom Domain</li>
										<li class="list-group-item">24/7 Support</li>
									</ul>
									<div class="panel-footer text-center">
										<a class="btn btn-default" href="#">Order Now!</a>
									</div>
									<div class="price-box-ribbon"><strong>Popular</strong></div>
								</div>										
							</div>
							
							<div class="price-box col-sm-6 col-md-3 wow flipInY" data-wow-delay="0.9s">
								<div class="panel panel-default">
									<div class="panel-heading text-center">
										<i class="fa fa-plus fa-2x"></i>
										<h3>Ultimate</h3>
									</div>
									<div class="panel-body text-center">
										<p class="lead"><strong>$199</strong></p>
									</div>
									<ul class="list-group text-center">
										<li class="list-group-item">Multi Use</li>
										<li class="list-group-item">Unlimited Projects</li>
										<li class="list-group-item">99 GB Disk</li>
										<li class="list-group-item">Custom Domain</li>
										<li class="list-group-item">24/7 Support</li>
									</ul>
									<div class="panel-footer text-center">
										<a class="btn btn-default" href="#">Order Now!</a>
									</div>
								</div>										
							</div>
							
						</div>
					</div> 
				</div>
				<div class="extra-space-l"></div>
			</section>
  )
}
