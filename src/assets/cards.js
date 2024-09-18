import React, { useState } from 'react';
import './cards.css';

const Cards = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => setShowMore(!showMore);

  const cards = [
    { title: 'STRATEGY', description: 'Money Momentum', long_description: 'Tract Premium helps you start saver investments insights covering', years: '7.20%', percent: '3 yrs CAGR', bgClass: 'card-bg-1' },
    { title: 'PLANS', description: 'Long-Term', long_description: 'Tract Premium helps you start saver investments insights covering', years: '7.20%', percent: '3 yrs CAGR', bgClass: 'card-bg-2' },
    { title: 'STRATEGY', description: 'Focussed', long_description: 'Tract Premium helps you start saver investments insights covering', years: '7.20%', percent: '3 yrs CAGR', bgClass: 'card-bg-3' },
    { title: 'PLANS', description: 'Fixed Income', long_description: 'Tract Premium helps you start saver investments insights covering', years: '7.20%', percent: '3 yrs CAGR', bgClass: 'card-bg-4' },
    { title: 'STRATEGY', description: 'Plan E description', long_description: 'Tract Premium helps you start saver investments insights covering', years: '7.20%', percent: '3 yrs CAGR', bgClass: 'card-bg-5' },
    { title: 'PLANS', description: 'Plan F description', long_description: 'Tract Premium helps you start saver investments insights covering', years: '7.20%', percent: '3 yrs CAGR', bgClass: 'card-bg-6' },
    { title: 'STRATEGY', description: 'Plan G description', long_description: 'Tract Premium helps you start saver investments insights covering', years: '7.20%', percent: '3 yrs CAGR', bgClass: 'card-bg-7' },
    { title: 'PLANS', description: 'Plan H description', long_description: 'Tract Premium helps you start saver investments insights covering', years: '7.20%', percent: '3 yrs CAGR', bgClass: 'card-bg-8' }
  ];

  const renderCard = (card, index) => (
    React.createElement(
      'div',
      { key: index, className: `card ${card.bgClass}` },
      React.createElement('p', null, card.title),
      React.createElement('h3', null, card.description),
      React.createElement('p', { style: { textAlign: 'start' } }, card.long_description),
      React.createElement('hr', null),
      React.createElement(
        'div',
        { className: 'twoColumn' },
        React.createElement('div', null,
          React.createElement('p', null, card.percent),
          React.createElement('h3', null, card.years)
        ),
        React.createElement('div', null,
          React.createElement(
            'button',
            { className: 'icon-button' },
            React.createElement('svg', { width: '16', height: '16', fill: 'currentColor', className: 'bi bi-arrow-right', viewBox: '0 0 16 16' },
              React.createElement('path', {
                d: 'M0 8a.5.5 0 0 1 .5-.5h12.707L10.854 5.646a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.207 8.5H.5A.5.5 0 0 1 0 8z'
              })
            )
          )
        )
      )
    )
  );

  return React.createElement(
    'div',
    { className: 'second-component' },
    React.createElement(
      'div',
      { className: 'container' },
      React.createElement(
        'div',
        { className: 'second-component-header' },
        React.createElement('h2', { className: 'left-title' }, 'Featured Plans'),
        React.createElement(
          'button',
          { className: 'explore-btn', onClick: toggleShowMore },
          showMore ? 'Show Less' : 'Explore All'
        )
      ),
      React.createElement(
        'div',
        { className: 'card-container' },
        cards.slice(0, 4).map(renderCard),
        showMore && cards.slice(4).map(renderCard)
      )
    )
  );
};

export default Cards;
