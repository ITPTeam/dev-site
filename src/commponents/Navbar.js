import React from 'react';
export default function Navbar() {
  return (
    <nav id="main-navbar" className="navbar navbar-default navbar-fixed-top" role="navigation">
        <div className="container">
        <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            </button>
            <a href='/' className="navbar-brand page-scroll">ITPT</a>
        </div>
        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
                <li><a className="page-scroll" href="/">Home</a></li>
                <li><a className="page-scroll" href="/about#about-section">About</a></li>
                <li><a className="page-scroll" href="/services#services-section">Services</a></li>
                <li><a className="page-scroll" href="/works#portfolio-section">Works</a></li>
                <li><a className="page-scroll" href="/team#team-section">Team</a></li>                            
                <li><a className="page-scroll" href="/prices#prices-section">Prices</a></li>
                <li><a className="page-scroll" href="/contact#contact-section">Contact</a></li>
            </ul>
        </div>
        </div>
        </nav>
  );
}

