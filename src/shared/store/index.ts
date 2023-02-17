import { configureStore, Middleware, MiddlewareArray } from '@reduxjs/toolkit';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import { FilterDataMiddleware } from './middlewares/filter';
import { PeoplesSlice } from './slices/peoples';

export const store = configureStore({
  reducer: {
    peoples: PeoplesSlice.reducer,
  },
  // middleware:
  //   (getDefaultMiddleware) => getDefaultMiddleware()
  //     .concat(FilterDataMiddleware),
});

// store.subscribe(() => console.log('Стейт обновился'));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useTypedDispatch: () => AppDispatch = useDispatch;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
