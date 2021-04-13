import React from 'react';
import NavigationItem from "../navigation-item/navigation-item";
import { MENU_ITEMS } from "../../const";

const Navigation = () => {

  return (
    <nav className="header__navigation navigation">
      <ul className="navigation__list navigation__list--main">
        {MENU_ITEMS.map((item, i) => (
          <NavigationItem key={i + 1} title={item} />
        ))}
      </ul>
      <ul className="navigation__list navigation__list--user">
        <li className="navigation__item navigation__item--user">
          <a className="navigation__link navigation__link--user" href="/">
            Войти в Интернет-банк
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
