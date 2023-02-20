import React from 'react';
import { useNavigate } from 'react-router';
import { Translator } from '../../../../components/translator';
import styles from './styles.module.scss';

export const Hero = () => {
  const nav = useNavigate();
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>
        <span className={styles.bold}><Translator text="Find" /></span>
        {' '}
        <Translator text="all your" />
        <Translator text="favorite" />
        {' '}
        <span className={styles.bold}>
          <Translator text="character" />
        </span>
      </h1>
      <p className={styles.descr}>
        <Translator text="You can find out all the information about your favorite characters" />
      </p>
      <button type="button" onClick={() => nav('/characters')} className={styles.btn}>
        <Translator text="See more..." />
      </button>
    </div>
  );
};
