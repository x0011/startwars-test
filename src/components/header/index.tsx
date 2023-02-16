import React from 'react';
import { Container } from '../container';
import styles from './styles.module.scss';
import logotypeImg from './assets/img/logo.png';
import { HeaderNav } from '../HeaderNav';

export const Header = () => (
  <div className={styles.wrapper}>
    <Container injectStyles={styles.headerContainer}>
      <div className={styles.logo}>
        <img src={logotypeImg} alt="star wars" />
      </div>
      <div className={styles.nav}>
        <HeaderNav />
      </div>
    </Container>
  </div>
);
