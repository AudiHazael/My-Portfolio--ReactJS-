import React from 'react';
import '../assets/css/all.min.css';

import imgA from '../assets/images/website-template-startup.png';
import imgB from '../assets/images/website-marketing.jpeg';
import imgC from '../assets/images/website-masculine-fraternity.jpeg';
import imgD from '../assets/images/website-hazaeldevs.jpeg';

const WebsitePortfolio = () => {
  return (
    <div>
      <div class='portfolio'>
        <div class='container title'>
          <h4>Websites and Landing Pages Portfolio</h4>
        </div>
        <br />
        <br />
        <div class='container d-flex justify-content-evenly'>
          <div class='row'>
            <div class='col animate__animated animate__fadeInUp animate__slow'>
              <div class='card' style={{ width: '18rem' }}>
                <img class={imgA} src='Images/website-template-startup.png' alt='Website' />
                <div class='card-body'>
                  <h6 class='card-title'>Portfolio/Landing Page</h6>
                  <a href='https://master--joyful-smakager-03b4e5.netlify.app/index.html' rel='nofollow'>
                    View...
                  </a>
                </div>
              </div>
            </div>
            <div class='col animate__animated animate__fadeInUp animate__slower'>
              <div class='card' style={{ width: '18rem' }}>
                <img class='img-fluid card-img-top' src={imgB} alt='Website' />
                <div class='card-body'>
                  <h6 class='card-title'>Marketing Consultation</h6>
                  <a href='https://master--venerable-jalebi-210ec1.netlify.app/' rel='nofollow'>
                    View...
                  </a>
                </div>
              </div>
            </div>
            <div class='col animate__animated animate__fadeInUp animate__slow'>
              <div class='card' style={{ width: '18rem' }}>
                <img class='img-fluid card-img-top' src={imgC} alt='Website' />
                <div class='card-body'>
                  <h6 class='card-title'>Portfolio Website</h6>
                  <a href='https://master--dainty-dasik-ef65a8.netlify.app' rel='nofollow'>
                    View...
                  </a>
                </div>
              </div>
            </div>
            <div class='col animate__animated animate__fadeInUp animate__slower'>
              <div class='card' style={{ width: '18rem' }}>
                <img class='img-fluid card-img-top' src={imgD} alt='Website' />
                <div class='card-body'>
                  <h6 class='card-title'>Masculine Fraternity</h6>
                  <a href='https://master--dainty-dasik-ef65a8.netlify.app/' rel='nofollow'>
                    View...
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebsitePortfolio;
