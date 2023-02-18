import React from 'react';
import styles from './translateBtn.module.scss';
import TranslateBtnImage from './assets/img/translate.png';

export const TranslateBtn = () => (
  <div className={styles.wrapper}>
    <img src={TranslateBtnImage} alt="translate" />
  </div>
);
