import React from 'react';
import { useTypedDispatch, useTypedSelector } from '../../shared/store';
import {
  fetchNextPage, FilterPeopleType, IPerson, setCurrentPerson,
} from '../../shared/store/slices/peoples';
import { Modal } from '../modal';
import { NextPageBtn } from '../next-page-btn';
import { PersonCard } from '../person-card';
import styles from './styles.module.scss';
import { PeoplesListItem } from './ui/item';

interface IPeopleList {
  data: IPerson[],
  filter?: FilterPeopleType,
}

export const PeoplesList: React.FC<IPeopleList> = ({ data, filter }) => {
  const dispatch = useTypedDispatch();
  const { nextPage } = useTypedSelector((state) => state.peoples);
  // console.log(filter);

  if (filter) {
    console.log(filter);
    data = data.filter((item) => item.gender === filter);
  }

  const clickListItemHandler = (person: IPerson) => {
    dispatch(setCurrentPerson(person));
  };

  return (
    <div className={styles.wrapper}>
      {data && data.length
        ? data.map((item, count) => (
          // Понимаю, что плохо, но id в Api нет. По-сути id в SWAPI - индекс массива
          // Поэтому совмещаю id + год рождения
          // eslint-disable-next-line react/no-array-index-key
          <PeoplesListItem
            onClick={() => clickListItemHandler(item)}
            key={item.name}
            data={item}
          />
        ))
        : <span>Элементы отсутствуют.</span>}
      <NextPageBtn />
      <PersonCard />
    </div>
  );
};
