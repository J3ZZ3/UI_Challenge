import React from 'react';
import './footer.css'; // Assuming the CSS file is in the same folder

const Footer = () => {
  return React.createElement(
    'footer',
    { className: 'footer' },
    React.createElement(
      'div',
      { className: 'footer-left' },
      React.createElement('a', { href: '#terms', className: 'footer-link' }, 'TermsPolicy'),
      React.createElement('a', null, '•'),
      React.createElement('a', { href: '#customer-story', className: 'footer-link' }, 'Customer Story')
    ),
    React.createElement(
      'div',
      { className: 'footer-right' },
      React.createElement(
        'div',
        { className: 'arrow-container' },
        React.createElement('span', { className: 'arrow' }, '→')
      )
    )
  );
};

export default Footer;
