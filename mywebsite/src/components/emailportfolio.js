import React from 'react';
import '../assets/css/all.min.css';

import img1 from '../assets/images/html-email-arch.png';
import img2 from '../assets/images/html-email-beauty-beauty.png';
import img3 from '../assets/images/html-email-hazaeldevs.png';

const EmailPortfolio = () => {
  return (
    <div>
      <div className='portfolio'>
        <div className='container title'>
          <h4>HTML Email Portfolio</h4>
        </div>
        <br />
        <br />
        <div className='container d-flex justify-content-evenly'>
          <div className='row'>
            <div className='col animate__animated animate__fadeInUp animate__slow'>
              <div className='card' style={{ width: '18rem' }}>
                <img src={img1} className='img-fluid card-img-top' alt='HTML Email' />
                <div className='card-body'>
                  <h6 className='card-title'>HTML Email #1</h6>
                  <a href='Emails/mjml.html' rel='nofollow' style={{ textdecoration: 'none' }}>
                    View...
                  </a>
                </div>
              </div>
            </div>
            <div className='col animate__animated animate__fadeInUp animate__slower'>
              <div className='card' style={{ width: '18rem' }}>
                <img src={img2} className='img-fluid card-img-top' alt='HTML Email' />
                <div className='card-body'>
                  <h6 className='card-title'>HTML Email #2</h6>
                  <a href='Emails/mjml2.html' rel='nofollow' style={{ textdecoration: 'none' }}>
                    View...
                  </a>
                </div>
              </div>
            </div>
            <div className='col animate__animated animate__fadeInUp animate__slower'>
              <div className='card' style={{ width: '18rem' }}>
                <img src={img3} className='img-fluid card-img-top' alt='HTML Email' />
                <div className='card-body'>
                  <h6 className='card-title'>HTML Email #3</h6>
                  <a href='Emails/mjml3.html' rel='norefferer' style={{ textdecoration: 'none' }}>
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

export default EmailPortfolio;
