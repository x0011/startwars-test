import React from 'react';
import { useTypedDispatch, useTypedSelector } from '../../shared/store';
import { fetchNextPage, IPerson } from '../../shared/store/slices/peoples';
import styles from './styles.module.scss';
import { PeoplesListItem } from './ui/item';

interface IPeopleList {
  data: IPerson[],
}

export const PeoplesList: React.FC<IPeopleList> = ({ data }) => {
  const dispatch = useTypedDispatch();
  const { nextPage } = useTypedSelector((state) => state.peoples);

  return (
    <div className={styles.wrapper}>
      {data
        ? data.map((item, count) => (
          // Понимаю, что плохо, но id в Api нет. По сути id в SWAPI - индекс массива
          // Поэтому совмещаю id + дата рождения
          // eslint-disable-next-line react/no-array-index-key
          <PeoplesListItem key={item.birth_year + count} data={item} />
        ))
        : <span>Элементы отсутствуют.</span>}
      <button type="button" onClick={() => dispatch(fetchNextPage(nextPage))}>Получить следующую страницу</button>
    </div>
  );
};
