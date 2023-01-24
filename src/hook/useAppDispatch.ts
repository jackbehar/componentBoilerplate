import {useDispatch} from 'react-redux';
import {AppDispatch} from '../store/config/store-config';

export function useAppDispatch() {
  return useDispatch<AppDispatch>();
}
