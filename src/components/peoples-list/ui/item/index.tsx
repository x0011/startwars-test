/* eslint-disable jsx-a11y/interactive-supports-focus */
import React from 'react';
import { IPerson } from '../../../../shared/store/slices/peoples';
import { PersonValueRound } from '../../../person-value-round';
import { Tag } from '../../../tag';
import { GenderTag } from '../../../tag/GenderTag';
import { Translator } from '../../../translator';
import styles from './PeoplesListItem.module.scss';

interface IPeopleListItem {
  data: IPerson,
  onClick?: React.MouseEventHandler<HTMLDivElement>,
}

export const PeoplesListItem: React.FC<IPeopleListItem> = ({ data, onClick }) => {
  const {
    height, mass, gender, name, birth_year: birthday,
  } = data;
  return (
    <div onClick={onClick} className={styles.wrapper}>
      <h3 className={styles.title}><Translator text={name} /></h3>
      <div className={styles.characteristic}>
        <PersonValueRound injectStyles={styles.characteristicItem} name="height" value={height} />
        <PersonValueRound name="mass" value={mass} />
      </div>
      <div className={styles.tags}>
        { (gender !== 'n/a') && <GenderTag gender={gender} /> }
        <Tag text={birthday} translate={false} />
      </div>
    </div>
  );
};
