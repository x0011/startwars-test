import React, { useEffect } from 'react';
import { useTypedDispatch, useTypedSelector } from '../../shared/store';
import { fetchAllPeoples } from '../../shared/store/slices/peoples';
import { Container } from '../container';
import styles from './styles.module.scss';

const App = () => {
  const dispatch = useTypedDispatch();
  const {
    isLoading, isError, isSuccess, data,
  } = useTypedSelector((state) => state.peoples);
  useEffect(() => {
    dispatch(fetchAllPeoples());
  }, []);

  if (isError) return <h1>Error</h1>;
  if (isLoading) return <h1>Loading...</h1>;
  if (isSuccess) console.log(data);

  return (
    isSuccess ? (
      <Container />
    )
      : <h1>Error</h1>
  );
};

export default App;
