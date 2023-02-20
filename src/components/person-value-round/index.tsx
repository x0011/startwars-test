import React from 'react';
import { Translator } from '../translator';
import styles from './PersonValueRound.module.scss';

interface IPersonalRound {
  value: string | 'unknown',
  name: string,
  injectStyles?: string
}

export const PersonValueRound: React.FC<IPersonalRound> = ({ value, name, injectStyles }) => (
  value !== 'unknown' ? (
    <div className={[styles.characteristicItem, injectStyles].join(' ')}>
      <div className={styles.characteristicValue}>{value}</div>
      <Translator text={name} />
    </div>
  )
    : null
);
