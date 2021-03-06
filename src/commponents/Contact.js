import React from 'react'

export default function Contact() {
  return (
    <section id="contact-section" class="page text-white parallax" data-stellar-background-ratio="0.5" style={{backgroundImage: 'url("img/map-bg.jpg")'}}>
            <div class="cover"></div>
            
                <div class="page-header-wrapper">
                    <div class="container">
                        <div class="page-header text-center wow fadeInDown" data-wow-delay="0.4s">
                            <h2>Contacts</h2>
                            <div class="devider"></div>
                            <p class="subtitle">All to contact us</p>
                        </div>
                    </div>
                </div>
                
                <div class="contact wow bounceInRight" data-wow-delay="0.4s">
                    <div class="container">
                    	<div class="row">
                        
                            <div class="col-sm-6">
                                <div class="contact-info">
                                    <h4>Our Address</h4>
                                    <ul class="contact-address">
			                            <li><i class="fa fa-map-marker fa-lg"></i> 100 Limpbiscayne Blvd.</li>
			                            <li><i class="fa fa-phone"></i> 1 -234 -456 -7890</li>
			                            <li><i class="fa fa-print"></i> 1 -234 -456 -7890</li>
			                            <li><i class="fa fa-envelope"></i> info@yourdomain.com</li>
			                            <li><i class="fa fa-skype"></i> Unika-Design</li>
			                        </ul>
                                </div>
                            </div>
                        
                        	<div class="col-sm-6">
                                <div class="contact-form">
                                	<h4>Write to us</h4>
                                    <form role="form">
                                        <div class="form-group">
                                            <input type="text" class="form-control input-lg" placeholder="Your Name" required/>
                                        </div>
                                        <div class="form-group">
                                            <input type="email" class="form-control input-lg" placeholder="E-mail" required/>
                                        </div>
                                        <div class="form-group">
                                            <input type="text" class="form-control input-lg" placeholder="Subject" required/>
                                        </div>
                                        <div class="form-group">
                                            <textarea class="form-control input-lg" rows="5" placeholder="Message" required></textarea>
                                        </div>
                                        <button type="submit" class="btn wow bounceInRight" data-wow-delay="0.8s">Send</button>
                                    </form>
                                </div>	
                            </div>
                                                                                
                        </div> 
                    </div> 
                </div>
            </section>
  )
}
