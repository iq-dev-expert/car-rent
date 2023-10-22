import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import * as actions from 'redux/reduxCarsList/operations/fetchCars';

export const useCars = () => {
  const dispatch = useDispatch();

  const fetchCars = useCallback(
    () => dispatch(actions.fetchCars()),
    [dispatch]
  );

  return { fetchCars };
};
