import React from 'react';
import { useTypedSelector } from '../../shared/store';
import { Translator } from '../translator';
import styles from './currentLang.module.scss';

export const CurrentLang = () => {
  const { wookie } = useTypedSelector((state) => state.peoples);
  return (
    <div className={styles.wrapper}>
      <Translator text="Language" />
      :
      {wookie
        ? <Translator text="wookie" />
        : 'En'}
    </div>
  );
};
