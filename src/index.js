import React from 'react';
import ReactDOM from 'react-dom';
import {Helmet} from "react-helmet";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
ReactDOM.render(
  <React.StrictMode>
    <App />    
    <Helmet>
      <script src="inc/jquery/jquery-1.11.1.min.js"></script>
      <script src="inc/bootstrap/js/bootstrap.min.js"></script>
      <script src="inc/owl-carousel/js/owl.carousel.min.js"></script>
      <script src="inc/stellar/js/jquery.stellar.min.js"></script>
      <script src="inc/animations/js/wow.min.js"></script>
      <script src="inc/waypoints.min.js"></script>
      <script src="inc/isotope.pkgd.min.js"></script>
      <script src="inc/classie.js"></script>
      <script src="inc/jquery.easing.min.js"></script>
      <script src="inc/jquery.counterup.min.js"></script>
      <script src="inc/smoothscroll.js"></script>
      <script src="js/theme.js"></script>
    </Helmet>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
