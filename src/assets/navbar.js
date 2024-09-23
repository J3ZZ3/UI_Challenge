import React, { useState } from 'react';
import './navbar.css'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return React.createElement(
    'nav',
    { className: 'navbar' },
    React.createElement(
      'div',
      { className: 'navbar-left' },
      React.createElement('h1', null, 'Lyf-)'),
      React.createElement('p', null, '/ insurance@tiropay.au')
    ),
    React.createElement(
      'div',
      { className: 'navbar-hamburger-and-buttons' },
      React.createElement(
        'div',
        { className: 'navbar-right' },
        React.createElement('button', { className: 'navbar-btn' }, 'Log in'),
        React.createElement('button', { className: 'navbar-btn primary-btn' }, 'Get Started')
      ),
      React.createElement(
        'div',
        { className: 'hamburger', onClick: toggleMenu },
        React.createElement('span', { className: 'bar' }),
        React.createElement('span', { className: 'bar' }),
        React.createElement('span', { className: 'bar' })
      )
    )
  );
};

export default Navbar;

