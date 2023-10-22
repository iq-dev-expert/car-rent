import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as actions from 'redux/reduxCarsList/operations';
import { selectCars } from 'redux/reduxCarsList/selectors';

export const useCars = () => {
  const dispatch = useDispatch();

  const cars = useSelector(selectCars);

  const fetchCars = useCallback(
    () => dispatch(actions.fetchCars()),
    [dispatch]
  );

  return { cars, fetchCars };
};
