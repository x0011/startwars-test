import React from 'react';
import { useTypedDispatch } from '../../shared/store';
import {
  FilterPeopleType,
  IPerson,
  setCurrentPerson,
} from '../../shared/store/slices/peoples';
import { NextPageBtn } from '../next-page-btn';
import { PersonCard } from '../person-card';
import { Translator } from '../translator';
import styles from './styles.module.scss';
import { PeoplesListItem } from './ui/item';

interface IPeopleList {
  data: IPerson[],
  filter?: FilterPeopleType,
}

export const PeoplesList: React.FC<IPeopleList> = ({ data, filter }) => {
  const dispatch = useTypedDispatch();
  if (filter) {
    data = data.filter((item) => item.gender === filter);
  }
  const clickListItemHandler = (person: IPerson) => {
    dispatch(setCurrentPerson(person));
  };

  return (
    <div className={styles.wrapper}>
      {data && data.length
        ? data.map((item) => (
          <PeoplesListItem
            onClick={() => clickListItemHandler(item)}
            key={item.name}
            data={item}
          />
        ))
        : <span><Translator text="Elements not found" /></span>}
      <NextPageBtn />
      <PersonCard />
    </div>
  );
};
