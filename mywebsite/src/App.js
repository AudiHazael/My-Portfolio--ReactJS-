import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/website-design-and-development-services';
import ContactPage from './pages/send-us-a-message-now';
import PortfolioOne from './pages/html-email-portfolio';
import PortfolioTwo from './pages/landing-page-website-portfolio';
import PrivacyPage from './pages/read-our-privacy-policy';
import TermsPage from './pages/read-our-terms-and-conditions';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route exact path='./pages/send-us-a-message-now.js' element={<ContactPage />} />
        <Route exact path='./pages/html-email-portfolio.js' element={<PortfolioOne />} />
        <Route exact path='./pages/landing-page-website-portfolio.js' element={<PortfolioTwo />} />
        <Route exact path='./pages/read-our-privacy-policy' element={<PrivacyPage />} />
        <Route exact path='./pages/read-out-terms-and-conditions' element={<TermsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
