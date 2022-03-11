import React from 'react';
function Home() {
    return (
        <section id="text-carousel-intro-section" class="parallax" data-stellar-background-ratio="0.5" style={{backgroundImage: 'url("img/slider-bg.jpg")'}}>
				
        <div class="container">
            <div class="caption text-center text-white" data-stellar-ratio="0.7">

                <div id="owl-intro-text" class="owl-carousel">
                    <div class="item">
                        <h1>We have Awesome things</h1>
                        <p>Let's make the web beautiful together</p>
                        <div class="extra-space-l"></div>
                        <a class="btn btn-blank" href="https://cnad.tk" target="_blank" role="button">View More!</a>
                    </div>
                    <div class="item">
                        <h1>I.T.P.T</h1>
                        <p>welcom to IT Professional Team</p>
                        <div class="extra-space-l"></div>
                        <a class="btn btn-blank" href="/about#about-section" target="_blank" role="button">View More!</a>
                    </div>
                </div>

            </div>
        </div> 

    </section>
    );
  }
  
  export default Home;
  
  