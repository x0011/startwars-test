/* eslint-disable react/no-array-index-key */
import React from 'react';
import { useTypedDispatch, useTypedSelector } from '../../shared/store';
import { FilterPeopleType, setFilter } from '../../shared/store/slices/peoples';
import { GenderColorsEnum } from '../tag/GenderTag';
import styles from './peoplesFilter.module.scss';

interface IPeopleFilter {
  injectStyles?: string
}

export const PeopleFilter: React.FC<IPeopleFilter> = ({ injectStyles }) => {
  const dispatch = useTypedDispatch();
  const { filter } = useTypedSelector((state) => state.peoples);
  const genders = (Object.keys(GenderColorsEnum) as (keyof typeof GenderColorsEnum)[]);

  const selectHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    if (value === '') {
      dispatch(setFilter(undefined));
    } else {
      dispatch(setFilter(value as FilterPeopleType));
    }
  };

  return (
    <label>
      Filter results by gender:
      <select
        value={filter}
        onChange={(e) => selectHandler(e)}
        className={injectStyles}
      >
        <option value="">Показать все</option>
        {genders.map((gender, count) => <option key={count} value={gender}>{gender}</option>)}
      </select>
    </label>
  );
};
