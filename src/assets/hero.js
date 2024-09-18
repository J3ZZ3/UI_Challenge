import React from 'react';
import './hero.css';

const Hero = () => {
  return React.createElement(
    'div',
    { className: 'first-component' },
    React.createElement('h1', { className: 'title' }, 'Life Planning, Making Easy to Turn Dreams a Reality'),
    React.createElement('p', { className: 'description' }, 'Get Exclusive offers on purchase of any plans.'),
    React.createElement(
      'div',
      { className: 'input-group' },
      React.createElement('input', { type: 'email', placeholder: 'Your email', className: 'email-input' }),
      React.createElement('button', { className: 'signup-btn' }, 'Sign Up')
    )
  );
};

export default Hero;
