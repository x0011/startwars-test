import React, { useEffect } from 'react';
import { useTypedDispatch, useTypedSelector } from '../../shared/store';
import { fetchAllPeoples } from '../../shared/store/slices/peoples';
import { PeoplesList } from '../peoples-list';

const App = () => {
  const dispatch = useTypedDispatch();
  const {
    isLoading, isError, isSuccess, data,
  } = useTypedSelector((state) => state.peoples);
  useEffect(() => {
    if (!data.length) {
      dispatch(fetchAllPeoples());
    }
  }, [data]);

  if (isError) return <h1>Error</h1>;
  if (isLoading) return <h1>Loading...</h1>;
  // if (isSuccess) console.log(data);

  return (
    isSuccess
      ? <PeoplesList data={data} />
      : <h1>Error</h1>
  );
};

export default App;
