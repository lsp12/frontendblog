import { useAppSelector } from '../Store/Hook';

export const useExtracToken = () => {
  const { token } = useAppSelector(( state ) => state.authSlice );
  return token;
};
