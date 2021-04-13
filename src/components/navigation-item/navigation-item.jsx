import React from 'react';

const NavigationItem = (props) => {
  const { title } = props;

  return (
    <li className='navigation__item'>
      <a className='navigation__link' href="/">{title}</a>
    </li>
  )
};

export default NavigationItem;
