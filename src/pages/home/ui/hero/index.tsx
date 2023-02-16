import React from 'react';
import { useNavigate } from 'react-router';
import styles from './styles.module.scss';

export const Hero = () => {
  const nav = useNavigate();
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>
        <span className={styles.bold}>Find</span>
        {' '}
        all your
        favorite
        {' '}
        <span className={styles.bold}>character</span>
      </h1>
      <p className={styles.descr}>
        You can find out all the information about your favorite characters
      </p>
      <button type="button" onClick={() => nav('/characters')} className={styles.btn}>See more...</button>
    </div>
  );
};
