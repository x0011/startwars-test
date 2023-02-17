import React from 'react';
import { useTypedDispatch, useTypedSelector } from '../../shared/store';
import { fetchNextPage, FilterPeopleType, IPerson } from '../../shared/store/slices/peoples';
import styles from './styles.module.scss';
import { PeoplesListItem } from './ui/item';

interface IPeopleList {
  data: IPerson[],
  filter?: FilterPeopleType,
}

export const PeoplesList: React.FC<IPeopleList> = ({ data, filter }) => {
  const dispatch = useTypedDispatch();
  const { nextPage } = useTypedSelector((state) => state.peoples);
  console.log(filter);
  if (filter) {
    console.log(filter);
    data = data.filter((item) => item.gender === filter);
  }

  return (
    <div className={styles.wrapper}>
      {data && data.length
        ? data.map((item, count) => (
          // Понимаю, что плохо, но id в Api нет. По-сути id в SWAPI - индекс массива
          // Поэтому совмещаю id + год рождения
          // eslint-disable-next-line react/no-array-index-key
          <PeoplesListItem key={item.name} data={item} />
        ))
        : <span>Элементы отсутствуют.</span>}
      <button className={styles.nextBtn} type="button" onClick={() => dispatch(fetchNextPage(nextPage))}>
        +
      </button>
    </div>
  );
};
