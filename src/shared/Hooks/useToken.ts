import { useAppSelector } from '../Store/Hook';

export const useExtracToken = () => {
  const { token } = useAppSelector(( state ) => state.authSlice );
  return token;
};

export const Avatar = ( name:string | undefined ) => `https://avatars.dicebear.com/api/bottts/${name}.svg`;
