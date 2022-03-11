import React from 'react'

export default function Footer() {
  return (
    <footer class="text-off-white">
            
                <div class="footer-top">
                	<div class="container">
                    	<div class="row wow bounceInLeft" data-wow-delay="0.4s">

                            <div class="col-sm-6 col-md-4">
                            	<h4>Useful Links</h4>
                                <ul class="imp-links">
                                	<li><a href="/about">About</a></li>
                                	<li><a href="/services">Services</a></li>
                                
                                </ul>
                            </div>
                        
                        	<div class="col-sm-6 col-md-4">
                                <h4>Subscribe</h4>
                            	<div id="footer_signup">
                                    <div id="email">
                                        <form id="subscribe" method="POST">
                                            <input type="text" placeholder="Enter email address" name="email" id="address" data-validate="validate(required, email)"/>
                                            <button type="submit">Submit</button>
                                            <span id="result" class="section-description"></span>
                                        </form> 
                                    </div>
                                </div> 
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> 
                            </div>

                            <div class="col-sm-12 col-md-4">
                                <h4>Recent Tweets</h4>
                                <div class="single-tweet">
                                    <div class="tweet-content"><span>@Unika</span> Excepteur sint occaecat cupidatat non proident</div>
                                    <div class="tweet-date">1 Hour ago</div>
                                </div>
                                <div class="single-tweet">
                                    <div class="tweet-content"><span>@Unika</span> Excepteur sint occaecat cupidatat non proident uku shumaru</div>
                                    <div class="tweet-date">1 Hour ago</div>
                                </div>
                            </div>
                            
                        </div>
                    </div> 
                </div>
                
                <div class="footer">
                    <div class="container text-center wow fadeIn" data-wow-delay="0.4s">
                        <p class="copyright">Copyright &copy; 2022 - Designed By <a href="https://github.com/bzquatre" class="theme-author">Bouzegzeg Zakaria</a> &amp; Developed by <a href="https://github.com/bzquatre" class="theme-author">Bouzegzeg Zakaria</a></p>
                    </div>
                </div>

            </footer>
  )
}
