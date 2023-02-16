import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './styles.module.scss';

// Ссылки в таком виде, потому что не вижу смысла декомпозировать их на объект так как всего 2 штуки

export const HeaderNav: React.FC = () => (
  <ul className={styles.list}>
    <li className={styles.item}>
      <NavLink
        className={({ isActive }) => (isActive ? styles.item_active : undefined)}
        to="/"
      >
        Home
      </NavLink>
    </li>
    <li className={styles.item}>
      <NavLink
        className={({ isActive }) => (isActive ? styles.item_active : undefined)}
        to="/characters"
      >
        Characters
      </NavLink>
    </li>
  </ul>
);
