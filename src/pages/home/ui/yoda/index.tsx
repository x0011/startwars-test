import React from 'react';
import styles from './styles.module.scss';
import yodaImg from './assets/yoda.png';
import { ReactComponent as CloudImg } from './assets/cloud.svg';
import { ReactComponent as ShadowImg } from './assets/shadow.svg';

export const Yoda = () => (
  <div className={styles.wrapper}>
    <CloudImg className={styles.firstCloud} />
    <CloudImg className={styles.secondCloud} />
    <ShadowImg className={styles.shadow} />
    <img src={yodaImg} className={styles.yoda} alt="Yoda" />
  </div>
);
