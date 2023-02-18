import React from 'react';
import { PersonValueRound } from '../../../person-value-round';
import styles from './characteristicsItem.module.scss';

interface ICharacteristicsItem {
  value: string,
  name: string,
}

export const CharacteristicsItem: React.FC<ICharacteristicsItem> = ({ value, name }) => (
  value !== 'unknown' ? (
    <div className={styles.characteristicsItem}>
      <PersonValueRound name={name} value={value} />
    </div>
  )
    : null
);
