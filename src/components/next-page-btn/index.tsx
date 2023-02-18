import React from 'react';
import { useTypedDispatch, useTypedSelector } from '../../shared/store';
import { fetchNextPage } from '../../shared/store/slices/peoples';
import styles from './nextPageBtn.module.scss';

export const NextPageBtn = () => {
  const { amount, nextPage } = useTypedSelector((state) => state.peoples);
  const maxPage = Math.ceil(amount / 10);
  const dispatch = useTypedDispatch();

  return (
    nextPage !== maxPage
      ? (
        <button className={styles.nextBtn} type="button" onClick={() => dispatch(fetchNextPage(nextPage))}>
          +
        </button>
      )
      : null
  );
};
