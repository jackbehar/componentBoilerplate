import {TypedUseSelectorHook, useSelector} from 'react-redux';
// TODO: Remove our store file after testing
// import {RootState} from '../full-climate/redux/store';
import type {RootState} from '../store/config/store-config';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
