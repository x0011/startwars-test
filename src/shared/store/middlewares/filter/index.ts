import { Middleware } from 'redux';

export const FilterDataMiddleware: Middleware = (store) => (next) => (action) => {
  switch (action.type) {
    case 'fetchNextPage/fulfilled':
      // eslint-disable-next-line no-case-declarations
      const { filter } = (store.getState()).peoples;
      console.log();
      break;
    default: console.log('default case');
  }
  next(action);
};
