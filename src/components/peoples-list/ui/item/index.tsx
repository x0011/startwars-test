import React from 'react';
import { IPerson } from '../../../../shared/store/slices/peoples';
import { Tag } from '../../../tag';
import { GenderTag } from '../../../tag/GenderTag';
import styles from './PeoplesListItem.module.scss';

interface IPeopleListItem {
  data: IPerson,
}

export const PeoplesListItem: React.FC<IPeopleListItem> = ({ data }) => {
  const {
    height, mass, gender, name, birth_year: birthday,
  } = data;
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>{name}</h3>
      <div className={styles.characteristic}>
        {(height && height !== 'unknown') && (
          <div className={styles.characteristicItem}>
            <div className={styles.characteristicValue}>{height}</div>
            height
          </div>
        )}
        {(mass && mass !== 'unknown') && (
          <div className={styles.characteristicItem}>
            <div className={styles.characteristicValue}>{mass}</div>
            mass
          </div>
        )}
      </div>
      <div className={styles.tags}>
        { (gender !== 'n/a') && <GenderTag gender={gender} /> }
        { (birthday && birthday !== 'unknown') && <Tag text={birthday} /> }
      </div>
    </div>
  );
};
