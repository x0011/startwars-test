import React, { useEffect } from 'react';
import { useTypedDispatch, useTypedSelector } from '../../shared/store';
import { fetchAllPeoples, IPerson } from '../../shared/store/slices/peoples';
import { PeopleFilter } from '../peoples-filter';
import { PeoplesList } from '../peoples-list';
import { Preloader } from '../preloader';
import { Title } from '../title';
import styles from './app.module.scss';

const App = () => {
  const dispatch = useTypedDispatch();
  const {
    isLoading, isError, isSuccess, data, filter, amount,
  } = useTypedSelector((state) => state.peoples);

  useEffect(() => {
    if (!data.length) {
      dispatch(fetchAllPeoples());
    }
  }, [data]);

  if (isError) return <h1>Error</h1>;
  if (isLoading) return <Preloader />;
  if (isSuccess) {
    // console.log(data);
  }

  return (
    isSuccess
      ? (
        <>
          <Title injectStyles={styles.title}>
            {' '}
            {amount}
            {' '}
            <span className={styles.titleBold}>Peoples</span>
            {' '}
            for you to choose your favorite
          </Title>
          <PeopleFilter injectStyles={styles.filter} />
          <PeoplesList data={data} filter={filter} />
        </>
      )
      : <h1>Error</h1>
  );
};

export default App;
