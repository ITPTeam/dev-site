import React from 'react'

export default function About() {
  return (
    <section id="about-section" class="page bg-style1">
        <div class="page-header-wrapper">
            <div class="container">
                <div class="page-header text-center wow fadeInUp" data-wow-delay="0.3s">
                    <h2>About</h2>
                    <div class="devider"></div>
                    <p class="subtitle">little information</p>
                </div>
            </div>
        </div>
        <div class="rotate-box-1-wrapper">
            <div class="container">
                <div class="row">
                    <div class="col-md-3 col-sm-6">
                        <a href="#" class="rotate-box-1 square-icon wow zoomIn" data-wow-delay="0">
                            <span class="rotate-box-icon"><i class="fa fa-users"></i></span>
                            <div class="rotate-box-info">
                                <h4>Who We Are?</h4>
                                <p>the bast team mysla7ch sa7 fl akhla9 wlad familia.</p>
                            </div>
                        </a>
                    </div>

                    <div class="col-md-3 col-sm-6">
                        <a href="#" class="rotate-box-1 square-icon wow zoomIn" data-wow-delay="0.2s">
                            <span class="rotate-box-icon"><i class="fa fa-diamond"></i></span>
                            <div class="rotate-box-info">
                                <h4>What We Do?</h4>
                                <p>sur kach 7aja mis la plupar de temps batalin.</p>
                            </div>
                        </a>
                    </div>

                    <div class="col-md-3 col-sm-6">
                        <a href="#" class="rotate-box-1 square-icon wow zoomIn" data-wow-delay="0.4s">
                            <span class="rotate-box-icon"><i class="fa fa-heart"></i></span>
                            <div class="rotate-box-info">
                                <h4>Why We Do It?</h4>
                                <p>plizir bark rani ngser bayna la mony la mony.</p>
                            </div>
                        </a>
                    </div>
                    
                    <div class="col-md-3 col-sm-6">
                        <a href="#" class="rotate-box-1 square-icon wow zoomIn" data-wow-delay="0.6s">
                            <span class="rotate-box-icon"><i class="fa fa-clock-o"></i></span>
                            <div class="rotate-box-info">
                                <h4>Since When?</h4>
                                <p>mn bkri awah hna9dem 7na malin sen3a chbik hada</p>
                            </div>
                        </a>
                    </div>
                    
                </div> 
            </div> 
        </div>
        
        <div class="extra-space-l"></div>
        
        <div class="page-header-wrapper">
            <div class="container">
                <div class="page-header text-center wow fadeInUp" data-wow-delay="0.3s">
                    <h4>Our Skills</h4>
                </div>
            </div>
        </div>
        <div class="our-skills">
            <div class="container">
                <div class="row">
                
                    <div class="col-sm-6">
                        <div class="skill-bar wow slideInLeft" data-wow-delay="0.2s">
                            <div class="progress-lebel">
                                <h6>Figma Adobe xd</h6>
                            </div>
                            <div class="progress">
                            <div class="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{width: "75%"}}>
                            </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-sm-6">
                        <div class="skill-bar wow slideInRight" data-wow-delay="0.2s">
                            <div class="progress-lebel">
                                <h6>Python</h6>
                            </div>
                            <div class="progress">
                            <div class="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style={{width: "85%"}}>
                            </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-sm-6">
                        <div class="skill-bar wow slideInLeft" data-wow-delay="0.4s">
                            <div class="progress-lebel">
                                <h6>Html  Css</h6>
                            </div>
                            <div class="progress">
                            <div class="progress-bar" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100" style={{width: "95%"}}>
                            </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-sm-6">
                        <div class="skill-bar wow slideInRight" data-wow-delay="0.4s">
                            <div class="progress-lebel">
                                <h6>Javascript</h6>
                            </div>
                            <div class="progress">
                            <div class="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{width: "70%"}}>
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
