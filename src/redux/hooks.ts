import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import { AppDispatch, RootState } from '../redux/store';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
// Avoids type errors in the future

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;