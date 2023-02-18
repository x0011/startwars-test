import React from 'react';
import { useNavigate } from 'react-router';
import styles from './errorPage.module.scss';
import DeathStarImage from './assets/img/death-star.png';

export const ErrorPage = () => {
  const nav = useNavigate();
  return (
    <div className={styles.wrapper}>
      <div className={styles.error404}>
        4
        {' '}
        <img className={styles.deathStar} src={DeathStarImage} alt="Death Star" />
        {' '}
        4
      </div>
      <button type="button" onClick={() => nav('/')} className={styles.returnBtn}>Return</button>
    </div>
  );
};
