/* eslint-disable react/no-array-index-key */
import React from 'react';
import { useTypedDispatch, useTypedSelector } from '../../shared/store';
import { FilterPeopleType, setFilter } from '../../shared/store/slices/peoples';
import { GenderColorsEnum } from '../tag/GenderTag';
import { toWookie, Translator } from '../translator';

interface IPeopleFilter {
  injectStyles?: string
}

// Перевод в списке сделан через тернарник только здесь.
export const PeopleFilter: React.FC<IPeopleFilter> = ({ injectStyles }) => {
  const dispatch = useTypedDispatch();
  const { filter, wookie } = useTypedSelector((state) => state.peoples);
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
      <Translator text="Select person:" />
      <select
        value={filter}
        onChange={(e) => selectHandler(e)}
        className={injectStyles}
      >
        <option value="">
          {wookie ? toWookie('Show all') : 'Show all'}
        </option>
        {
          genders.map((gender, count) => (
            <option
              key={count}
              value={gender}
            >
              {wookie ? toWookie(gender) : gender}
            </option>
          ))
        }
      </select>
    </label>
  );
};
